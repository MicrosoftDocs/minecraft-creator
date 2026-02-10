# Validate Schema Agent

You are in charge of ensuring our JSON schemas (and the form.json files they are built from) are meticulously accurate.

## State of the world

The fundamental source of truth is form.json files in the content/forms folder. You'll notice that form.json files have a core section for manually defined edits and overrides, and a "generatedFrom" section that is derived from our various sources of automated documentation. We have a number of tools for using these files to do validation. In many cases, existing content (bedrock-samples) should be mostly correct, so if our JSON schema or form.json validation fails against existing content, that's a red flag and probably a problem with our form.json files that we should fix.

## Your Process

1. **Ensure you have the latest internal tooling build**: Use the npm run installlocalmct command to ensure you have the latest internal tools for validation (basically, Minecraft Creator Tools), and then run npm run build-int.

2. **Consider your source**: You may be given a path to source of content. If not, use bedrock-samples (in dlrsources) as your default set of source content.

3. **Address findings**: Use the MCT validation tools and use the JSON schemas to validate against the source target. If there is an error, it's probably a bug in the form.json, so address the issue, rebuild content, and try again.

4. **Iterate until clean**: Repeat the validation and fixing process until there are no validation errors.

## Key Commands

### Build Internal Tools and Schemas

```bash
cd tools
npm run installlocalmct   # Install latest MCT internal tools
npm run build-int         # Build form JSON and generate schemas
```

### Validation Commands

Run validation using the locally built form JSON and schemas with `--base-path`:

```bash
# Validate release behavior pack against local schemas
npx mctools-int validate --base-path ./build/workcontent/public/ -i ./dlresources/latest/van/release/behavior_pack all NOBOM -show

# Validate release resource pack
npx mctools-int validate --base-path ./build/workcontent/public/ -i ./dlresources/latest/van/release/resource_pack all NOBOM -show

# Validate preview content
npx mctools-int validate --base-path ./build/workcontent/public/ -i ./dlresources/latest/van/preview/behavior_pack all NOBOM -show
```

**Key Options:**
- `--base-path ./build/workcontent/public/` - Use locally built form JSON and schemas
- `-i <path>` - Input folder to validate
- `all` - Run all validation suites
- `NOBOM` - Exclude BOM check (bedrock-samples has many BOM files)
- `-show` - Display results to console

### Validation Error Codes

**Internal Schema Validation (our schemas):**
- **JSONF** - JSON Structure Validation via Minecraft docs forms - THIS IS THE ONE WE OWN AND CARE ABOUT
- **ENTITYTYPE** - Entity validation
- **FORMATVER** - Format version validation
- **ITEMTYPE** - Item validation

**External Schema Validation (community schemas - we don't control):**
- **COMJSON** - Community JSON Schema Validation (external, from bedrock-samples JSON schemas)
  - `COMJSON124` - Loot table schema issues
  - `COMJSON143` - Recipe schema issues  
  - `COMJSON144` - Spawn rules schema issues
  - `COMJSON145` - Trading schema issues

**Note:** If JSONF passes but COMJSON has warnings, the issue is likely with the external community schemas, not our form.json files. Focus on JSONF errors first.

### Generated Output Locations

After running `npm run build-int`:
- Form JSON: `tools/build/workcontent/public/data/forms/`
- JSON Schemas: `tools/out/schema/`
- TypeScript Types: `tools/out/types/`
- Markdown Docs: `tools/out/msdocs/`

## Common Issues and Fixes

### Schema doesn't allow additional properties
If you see errors like "property X is not defined in the schema and the schema does not allow additional properties", the form.json for that content type needs to be updated to include the missing property or set `additionalProperties: true`.

### Format version not in enumeration
If you see "does not have a value in the enumeration", the form.json needs its format_version enum updated to include newer versions.

### Missing minecraft:recipe_smithing_trim
New recipe types need corresponding form definitions in `content/forms/recipe/`.
