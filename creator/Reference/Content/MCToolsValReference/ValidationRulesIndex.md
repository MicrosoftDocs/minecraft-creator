---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Reference"
description: "Complete reference for all validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# MCTools Validation Rules Reference
This reference documents all validation rules used by Minecraft Creator Tools to check your add-on content.
Each rule helps identify potential issues in your Minecraft content before deployment.
## Validation Categories
| Category | Description | Rules |
|:---------|:------------|:------|
| [Base Game Version](basegamever.md) | Validates base_game_version in world template manifests and checks that it... | 9 |
| [Blocks Catalog](blockscat.md) | Validates blocks.json catalog files in resource packs. Checks for unused block... | 4 |
| [Coop Item Naming](caddonireq.md) | Validates individual content items against Cooperative Add-On naming... | 17 |
| [Coop Add-On Requirements](caddonreq.md) | A set of requirements for cooperative Add-On projects. See... | 17 |
| [Beta Features](cbfg.md) | Validates that add-on content does not use beta features flags. The... | 3 |
| [Deprecated Features](checkfeaturedeprecation.md) | Checks for deprecated features, blocks, and textures that may be removed in... | 4 |
| [Manifest Validation](chkmanif.md) | Comprehensive validation of pack manifest.json files. Validates format version,... | 35 |
| [Community JSON Schema Validation](comjson.md) | Validates JSON files against their corresponding schemas based on item type.... | 1 |
| [Pack Icon](cpackicon.md) | Validates behavior and resource pack icons (pack_icon.png) for correct format,... | 4 |
| [Particle Identifiers](cparti.md) | Validates particle effect identifiers for proper namespace formatting. Particle... | 3 |
| [Skin Pack](cspj.md) | Validates skin pack content including skins.json structure, skin textures,... | 18 |
| [World Icon](cwi.md) | Validates world template icons (world_icon.jpeg) for correct format, size, and... | 4 |
| [Entity Type](entitytype.md) | Validates entity type definitions in behavior packs. Checks format_version... | 12 |
| [Experimental Flags](expflag.md) | Validates experimental flags in world templates. Experiments that were enabled... | 3 |
| [Forbidden Files](forbfile.md) | Validates that packs only contain files with allowed extensions and do not... | 4 |
| [Format Version](formatver.md) | Validates format_version fields across various Minecraft JSON definition files... | 45 |
| [Geometry Format](geofmt.md) | Validates model geometry files for format compatibility and restricted... | 2 |
| [Model Geometry](geometry.md) | Validates and analyzes model geometry files (.geo.json) for blocks, entities,... | 4 |
| [Content Counts](items.md) | Provides counts of various content types found in the project including packs,... | 2 |
| [Item Types](itemtype.md) | Validates behavior pack item type definitions including format versions,... | 12 |
| [JSON Schema Validation](json.md) | Validates JSON files against official JSON schemas located at public/schemas.... | 1 |
| [JSON Form Structure Validation](jsonf.md) | Validates JSON files against Minecraft documentation-derived form schemas.... | 17 |
| [Content Tags](jsontags.md) | Tracks content types and component usage across JSON files in the project. Used... | 8 |
| [Language Files](langfiles.md) | Validates that localization files (.lang) and the languages.json catalog are... | 5 |
| [File Size/Lines](linesize.md) | Aggregates file size and line count statistics for all project items, broken... | 0 |
| [MC Functions](mcfunction.md) | Validates .mcfunction files for correct command syntax and formatting.... | 2 |
| [Min Engine Version](minenginever.md) | Validates and updates the min_engine_version field in pack manifests. This... | 18 |
| [BOM Validation](nobom.md) | Validates that JSON files do not contain byte order marks (BOM). BOMs can cause... | 1 |
| [Pack Manifest Info](pack.md) | Extracts and validates information from behavior pack and resource pack... | 18 |
| [Pack Metadata Info](packmetadata.md) | Extracts and validates a project summary. | 23 |
| [Pack Size](packsize.md) | Analyzes pack file sizes and counts to ensure content fits within platform... | 9 |
| [Path Length](pathlength.md) | Validates file paths for length and format compatibility across platforms. Long... | 3 |
| [Project Integrity](prjint.md) | Validates the structural integrity of the project, checking for orphaned files... | 2 |
| [Animation Analysis](resourceanimation.md) | Analyzes resource pack animation files to count animations and bone references.... | 2 |
| [Resource Pack Deps](rpdepends.md) | Validates that resource pack dependencies declared in behavior pack manifests... | 3 |
| [Script Analysis](script.md) | Analyzes JavaScript/TypeScript script files to identify Minecraft Script API... | 1 |
| [Script Modules](scriptmodule.md) | Validates script module dependencies in behavior pack manifests and... | 6 |
| [Sharing Validation](sharing.md) | Validates content for sharing and marketplace requirements. Identifies custom... | 2 |
| [Sounds Definition](sndsdef.md) | Validates sound_definitions.json files that define custom sounds for the... | 4 |
| [Platform Validation](strict.md) | Validates content against strict platform requirements. Identifies cases where... | 3 |
| [Project Summary](summary.md) | Provides high-level summary information about the project's manifests and pack... | 2 |
| [Texture Validation](texture.md) | Validates texture references across entities, blocks, items, particles, and UI... | 2 |
| [Texture Images](textureimage.md) | Analyzes texture image files (PNG, JPG, TGA) for dimensions, memory usage, and... | 20 |
| [Texture References](textureref.md) | Collects and aggregates all texture references from across the project... | 1 |
| [Content Types](types.md) | Aggregates information about all content types defined in the project including... | 1 |
| [Unknown Files](unkfile.md) | Identifies files with unrecognized extensions that are not standard Minecraft... | 1 |
| [Unknown JSON](unkjson.md) | Identifies JSON files that don't match any known Minecraft content schema.... | 1 |
| [Unlinked Items](unlink.md) | Identifies content items that are defined but not referenced anywhere in the... | 2 |
| [File Validation](valfile.md) | Validates that content files are properly formatted and parseable. Catches JSON... | 3 |
| [Vanilla Duplicates](vandupes.md) | Detects content that duplicates vanilla Minecraft files. Unnecessary copies... | 2 |
| [VS Code Files](vscodefile.md) | Validates VS Code configuration files (tasks.json, launch.json) in projects.... | 2 |
| [World Validation](world.md) | Validates world-level settings including experiments, version requirements, and... | 6 |
| [World Data](worlddata.md) | Analyzes world data including LevelDB chunks, command blocks, level.dat... | 18 |
| [World Pack Refs](wpackrefs.md) | Validates pack references in world templates. Ensures that behavior_packs.json... | 7 |

## Understanding Severity Levels
Validation rules have different severity levels:
- 🔴 **Error**: Must be fixed. These issues will cause problems in Minecraft.
- 🟡 **Warning**: Should be reviewed. These may cause issues or indicate problems.
- 🔵 **Recommendation**: Consider addressing. These are best practices.
- ℹ️ **Info**: Informational. Aggregated data or neutral status.
