#!/usr/bin/env node
/*
 * tools/lint-forms.js
 *
 * Lints `*.form.json` files under `content/forms/` for problems that
 * standard JSON parsing silently masks. Currently checks:
 *
 *   - invalid-json     File fails JSON.parse.
 *   - duplicate-key    Object literal contains the same property name more
 *                      than once. JSON.parse keeps only the last occurrence,
 *                      so duplicates silently discard content.
 *
 * Usage:
 *
 *   node tools/lint-forms.js                       # lint content/forms
 *   node tools/lint-forms.js path1 path2 ...        # lint specific files/dirs
 *   node tools/lint-forms.js --json                 # JSON output for tooling
 *
 * Exits non-zero if any issues are found.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DEFAULT_TARGET = path.join(REPO_ROOT, 'content', 'forms');

// --------------------------------------------------------------------------
// CLI
// --------------------------------------------------------------------------

const args = process.argv.slice(2);
let jsonOutput = false;
const targets = [];
for (const arg of args) {
  if (arg === '--json') {
    jsonOutput = true;
  } else if (arg === '-h' || arg === '--help') {
    printUsage();
    process.exit(0);
  } else if (arg.startsWith('--')) {
    console.error(`Unknown flag: ${arg}`);
    printUsage();
    process.exit(2);
  } else {
    targets.push(path.resolve(arg));
  }
}
if (targets.length === 0) targets.push(DEFAULT_TARGET);

function printUsage() {
  console.log('Usage: node tools/lint-forms.js [--json] [path ...]');
  console.log('  Lints *.form.json files for duplicate keys and JSON errors.');
}

// --------------------------------------------------------------------------
// File discovery
// --------------------------------------------------------------------------

function collectFormFiles(target) {
  let stat;
  try {
    stat = fs.statSync(target);
  } catch (e) {
    console.error(`Cannot access ${target}: ${e.message}`);
    return [];
  }
  if (stat.isFile()) {
    return target.endsWith('.form.json') ? [target] : [];
  }
  const out = [];
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    const full = path.join(target, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectFormFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.form.json')) {
      out.push(full);
    }
  }
  return out;
}

// --------------------------------------------------------------------------
// Tokenizer (just enough JSON to walk object/array structure and find keys)
// --------------------------------------------------------------------------

const STRUCT_CHARS = new Set(['{', '}', '[', ']', ':', ',']);

function tokenize(src) {
  const tokens = [];
  let i = 0;
  let line = 1;
  let col = 1;
  const len = src.length;

  // Skip BOM
  if (src.charCodeAt(0) === 0xfeff) {
    i++;
  }

  while (i < len) {
    const ch = src[i];
    if (ch === ' ' || ch === '\t' || ch === '\r') {
      i++;
      col++;
      continue;
    }
    if (ch === '\n') {
      i++;
      line++;
      col = 1;
      continue;
    }
    if (STRUCT_CHARS.has(ch)) {
      tokens.push({ type: ch, line, col });
      i++;
      col++;
      continue;
    }
    if (ch === '"') {
      const startLine = line;
      const startCol = col;
      const startI = i;
      i++;
      col++;
      while (i < len && src[i] !== '"') {
        if (src[i] === '\\') {
          i++;
          col++;
          if (i < len) {
            if (src[i] === '\n') {
              line++;
              col = 1;
            } else {
              col++;
            }
            i++;
          }
        } else if (src[i] === '\n') {
          // Literal newline inside a string is invalid JSON, but be tolerant
          // so we can still report the duplicate-key issue.
          i++;
          line++;
          col = 1;
        } else {
          i++;
          col++;
        }
      }
      if (i < len) {
        i++; // closing quote
        col++;
      }
      const raw = src.slice(startI, i);
      let value;
      try {
        value = JSON.parse(raw);
      } catch {
        value = raw.length >= 2 ? raw.slice(1, -1) : raw;
      }
      tokens.push({ type: 'string', value, raw, line: startLine, col: startCol });
      continue;
    }
    // Numeric / true / false / null / anything else: scan until structural or whitespace.
    const startLine = line;
    const startCol = col;
    const startI = i;
    while (
      i < len &&
      !STRUCT_CHARS.has(src[i]) &&
      src[i] !== ' ' &&
      src[i] !== '\t' &&
      src[i] !== '\r' &&
      src[i] !== '\n' &&
      src[i] !== '"'
    ) {
      i++;
      col++;
    }
    const raw = src.slice(startI, i);
    tokens.push({ type: 'literal', value: raw, line: startLine, col: startCol });
  }
  return tokens;
}

// --------------------------------------------------------------------------
// Rule: duplicate-key
// --------------------------------------------------------------------------

function findDuplicateKeys(tokens) {
  const issues = [];
  const stack = []; // entries: { kind: 'object', keys: Map } | { kind: 'array' }
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === '{') {
      stack.push({ kind: 'object', keys: new Map() });
    } else if (t.type === '[') {
      stack.push({ kind: 'array' });
    } else if (t.type === '}' || t.type === ']') {
      stack.pop();
    } else if (t.type === 'string') {
      const top = stack[stack.length - 1];
      const next = tokens[i + 1];
      if (top && top.kind === 'object' && next && next.type === ':') {
        const key = t.value;
        const prev = top.keys.get(key);
        if (prev) {
          issues.push({
            severity: 'error',
            code: 'duplicate-key',
            key,
            line: t.line,
            col: t.col,
            prevLine: prev.line,
            prevCol: prev.col,
            message: `Duplicate key "${key}" (also defined at line ${prev.line}). JSON.parse keeps only the last occurrence.`,
          });
        } else {
          top.keys.set(key, { line: t.line, col: t.col });
        }
      }
    }
  }
  return issues;
}

// --------------------------------------------------------------------------
// File linter
// --------------------------------------------------------------------------

function lintFile(filePath) {
  const issues = [];
  let src;
  try {
    src = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    issues.push({
      severity: 'error',
      code: 'read-error',
      line: 0,
      col: 0,
      message: e.message,
    });
    return issues;
  }

  try {
    JSON.parse(src);
  } catch (e) {
    issues.push({
      severity: 'error',
      code: 'invalid-json',
      line: 0,
      col: 0,
      message: e.message,
    });
    return issues;
  }

  const tokens = tokenize(src);
  issues.push(...findDuplicateKeys(tokens));
  return issues;
}

// --------------------------------------------------------------------------
// Main
// --------------------------------------------------------------------------

const files = targets.flatMap(collectFormFiles);
const report = [];
let totalIssues = 0;

for (const file of files) {
  const issues = lintFile(file);
  if (issues.length === 0) continue;
  totalIssues += issues.length;
  report.push({ file, issues });
}

if (jsonOutput) {
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
} else {
  for (const entry of report) {
    const rel = path.relative(REPO_ROOT, entry.file).replace(/\\/g, '/');
    console.log('');
    console.log(rel);
    for (const issue of entry.issues) {
      const where = issue.line ? `${issue.line}:${issue.col}` : '-';
      console.log(`  ${where}  ${issue.severity}  ${issue.code}  ${issue.message}`);
    }
  }
  console.log('');
  console.log(
    `Scanned ${files.length} file(s). ${totalIssues} issue(s) in ${report.length} file(s).`
  );
}

process.exit(totalIssues > 0 ? 1 : 0);
