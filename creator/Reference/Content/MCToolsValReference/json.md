---
author: mammerla
ms.author: mikeam
title: "Validation Rules - JSON Schema Validation"
description: "Documentation for JSON Schema Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# JSON Schema Validation Validation Rules
Validates JSON files against official JSON schemas located at public/schemas. Reports schema validation errors and warns when files are not at a current format version. Topic IDs 100+ are computed as JsonSchemaErrorBase (100) + ProjectItemType. Topic IDs 1100+ are computed as NotCurrentFormatVersionBase (1100) + ProjectItemType.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [JSON1](#json1) | JSON Parse Error | 🔴 Error |  |

---
## Rule Details

### JSON1
**🔴 JSON Parse Error**  
**Severity**: Error

#### What This Checks
The file could not be parsed as valid JSON. Check for syntax errors like missing commas, brackets, or quotes.

#### How to Fix
Use a JSON validator or your editor's JSON mode to find syntax errors. Common issues include: missing or extra commas, unclosed brackets or braces, unquoted property names, and trailing commas before closing brackets.
