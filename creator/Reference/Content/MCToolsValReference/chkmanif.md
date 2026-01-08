---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:chkmanif"
description: "Describes the minecraft:chkmanif mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:chkmanif

Comprehensive validation of pack manifest.json files. Validates format version, UUIDs, header properties, modules, dependencies, subpacks, capabilities, and settings. Ensures manifests comply with Minecraft Bedrock Edition requirements.


## Manifest Validation Validation Rules


### CHKMANIF101: Invalid Format

**Rule ID:** `CHKMANIF101`

**Severity:** Info

**What it checks:** The manifest format_version is not a recognized value. Valid format versions are 1, 2, or 3. Use format_version 2 for most modern packs.

**How to fix:** Change format_version to 2 in your manifest.json. This is the recommended version for modern packs: "format_version": 2.

**Technical details:** Data contains the invalid format_version value.


### CHKMANIF102: Schema Error

**Rule ID:** `CHKMANIF102`

**Severity:** Info

**What it checks:** The manifest.json file does not conform to the expected JSON schema. Check for missing required properties, incorrect property types, or structural errors.

**How to fix:** Review your manifest.json structure against the documentation at docs.microsoft.com. Common issues include missing commas, incorrect property names, or wrong value types.

**Technical details:** Data contains details about the schema violation.


### CHKMANIF103: Manifest Count

**Rule ID:** `CHKMANIF103`

**Severity:** Info

**What it checks:** Each pack must have exactly one manifest.json file at its root. Multiple manifests or missing manifests indicate a pack structure problem.

**How to fix:** Ensure your pack has exactly one manifest.json file at its root directory. Remove duplicate manifests or add one if missing.

**Technical details:** Data contains the number of manifests found.


### CHKMANIF104: Missing Property

**Rule ID:** `CHKMANIF104`

**Severity:** Info

**What it checks:** A required property is missing from the manifest header section. Common required properties include name, description, uuid, and version.

**How to fix:** Add the missing required property to your manifest header. Required properties include: name, description, uuid, and version.

**Technical details:** Data contains the name of the missing property.


### CHKMANIF105: Required Property

**Rule ID:** `CHKMANIF105`

**Severity:** Info

**What it checks:** A header property that is optional in format_version 1 is required in format_version 2 and above. Update your manifest to include all required header properties.

**How to fix:** Add the now-required property to your manifest header. If using format_version 2+, more properties are required than in version 1.

**Technical details:** Data contains the property name now required.


### CHKMANIF106: Version Mismatch

**Rule ID:** `CHKMANIF106`

**Severity:** Info

**What it checks:** The min_engine_version specified requires format_version 2. Either lower the min_engine_version or upgrade to format_version 2.

**How to fix:** Either upgrade format_version to 2, or lower the min_engine_version. Format version 2 is required for higher engine versions.

**Technical details:** Data contains the conflicting version values.


### CHKMANIF107: Invalid Scope

**Rule ID:** `CHKMANIF107`

**Severity:** Info

**What it checks:** The pack_scope property must be one of: 'global', 'world', or 'any'. Other values are not recognized.

**How to fix:** Set pack_scope to one of: 'global', 'world', or 'any'. Remove or correct any other value.

**Technical details:** Data contains the invalid pack_scope value.


### CHKMANIF108: Multiple Templates

**Rule ID:** `CHKMANIF108`

**Severity:** Info

**What it checks:** The manifest modules array can contain at most one world_template module. Remove extra world_template entries.

**How to fix:** Remove extra world_template entries from the modules array. Only one world_template module is allowed per manifest.

**Technical details:** Data contains the count of world_template modules.


### CHKMANIF109: Invalid Module

**Rule ID:** `CHKMANIF109`

**Severity:** Info

**What it checks:** A module has an unrecognized type. Valid module types include: persona_piece, world_template, skin_pack, data, script, and resources.

**How to fix:** Change the module type to a valid value: data, resources, script, skin_pack, world_template, or persona_piece.

**Technical details:** Data contains the invalid module type.


### CHKMANIF110: Duplicate UUID

**Rule ID:** `CHKMANIF110`

**Severity:** Info

**What it checks:** A UUID is used more than once in the manifest. All UUIDs must be unique across header, modules, and dependencies. Generate new unique UUIDs for duplicates.

**How to fix:** Generate a new unique UUID for each duplicate. Use an online UUID generator or your IDE's UUID generation feature.

**Technical details:** Data contains the duplicate UUID.


### CHKMANIF111: Invalid UUID

**Rule ID:** `CHKMANIF111`

**Severity:** Info

**What it checks:** A UUID does not conform to the standard UUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). Generate a valid UUID using a UUID generator tool.

**How to fix:** Replace the invalid UUID with a properly formatted one: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. Use an online UUID generator.

**Technical details:** Data contains the invalid UUID value.


### CHKMANIF112: Missing Dep ID

**Rule ID:** `CHKMANIF112`

**Severity:** Info

**What it checks:** A dependency entry is missing both 'module_name' and 'uuid'. Each dependency must have at least one identifier to specify which module it depends on.

**How to fix:** Add either a 'uuid' or 'module_name' property to the dependency entry to identify which module it depends on.

**Technical details:** Data contains the dependency index missing an ID.


### CHKMANIF113: Duplicate Dep ID

**Rule ID:** `CHKMANIF113`

**Severity:** Info

**What it checks:** A dependency has both 'module_name' and 'uuid' specified. Use only one identifier per dependency - either module_name (for script modules) or uuid (for packs).

**Technical details:** Data contains the dependency with duplicate IDs.


### CHKMANIF114: Invalid Module Name

**Rule ID:** `CHKMANIF114`

**Severity:** Info

**What it checks:** The specified module_name is not in the list of allowed script modules. Valid module names include @minecraft/server, @minecraft/server-ui, etc.

**Technical details:** Data contains the invalid module_name.


### CHKMANIF115: Version Parse Error

**Rule ID:** `CHKMANIF115`

**Severity:** Info

**What it checks:** A version number could not be parsed. Versions should be arrays of 3 numbers [major, minor, patch] or semantic version strings.

**Technical details:** Data contains the unparseable version.


### CHKMANIF116: Version Too Low

**Rule ID:** `CHKMANIF116`

**Severity:** Info

**What it checks:** The specified version is lower than the minimum required version for this module or dependency. Update to a supported version.

**Technical details:** Data contains the version and minimum required.


### CHKMANIF117: Invalid Capability

**Rule ID:** `CHKMANIF117`

**Severity:** Info

**What it checks:** An unrecognized capability is listed. Currently, 'pbr' is the only allowed capability for declaring Vibrant Visuals support.

**Technical details:** Data contains the invalid capability name.


### CHKMANIF118: Duplicate Folder

**Rule ID:** `CHKMANIF118`

**Severity:** Info

**What it checks:** The same folder name is used by multiple subpacks. Each subpack must reference a unique folder path.

**Technical details:** Data contains the duplicate folder name.


### CHKMANIF119: Duplicate Subpack

**Rule ID:** `CHKMANIF119`

**Severity:** Info

**What it checks:** The same name is used by multiple subpacks. Each subpack must have a unique identifier name.

**Technical details:** Data contains the duplicate subpack name.


### CHKMANIF120: Invalid Subpack

**Rule ID:** `CHKMANIF120`

**Severity:** Info

**What it checks:** A subpack name is invalid or empty. Provide a valid name for each subpack entry.

**Technical details:** Data contains the invalid subpack name.


### CHKMANIF121: Invalid Tier

**Rule ID:** `CHKMANIF121`

**Severity:** Info

**What it checks:** A subpack memory_tier value is below the minimum allowed. Memory tiers must meet or exceed the baseline requirement.

**Technical details:** Data contains the invalid memory_tier value.


### CHKMANIF122: Settings Missing

**Rule ID:** `CHKMANIF122`

**Severity:** Info

**What it checks:** A settings entry is missing a required property. Settings require name, type, and other properties depending on the setting type.

**Technical details:** Data contains the missing settings property name.


### CHKMANIF123: Invalid Setting

**Rule ID:** `CHKMANIF123`

**Severity:** Info

**What it checks:** A settings entry has an unrecognized type. Valid types include 'slider' and 'dropdown'.

**Technical details:** Data contains the invalid setting type.


### CHKMANIF124: Invalid Min/Max

**Rule ID:** `CHKMANIF124`

**Severity:** Info

**What it checks:** For slider settings, the 'min' value must be less than the 'max' value.

**Technical details:** Data contains the invalid min/max values.


### CHKMANIF125: Slider Default

**Rule ID:** `CHKMANIF125`

**Severity:** Info

**What it checks:** For slider settings, the default value must be a number between min and max (inclusive).

**Technical details:** Data contains the invalid default value.


### CHKMANIF126: Dropdown Default

**Rule ID:** `CHKMANIF126`

**Severity:** Info

**What it checks:** For dropdown settings, the default value must be one of the values in the options list.

**Technical details:** Data contains the invalid dropdown default.


### CHKMANIF127: Invalid Step

**Rule ID:** `CHKMANIF127`

**Severity:** Info

**What it checks:** For slider settings, the step value must be greater than 0 and less than (max - min).

**Technical details:** Data contains the invalid step value.


### CHKMANIF128: Duplicate Setting

**Rule ID:** `CHKMANIF128`

**Severity:** Info

**What it checks:** Multiple settings share the same name. Each setting must have a unique name identifier.

**Technical details:** Data contains the duplicate setting name.


### CHKMANIF129: Missing Namespace

**Rule ID:** `CHKMANIF129`

**Severity:** Info

**What it checks:** Settings names must be namespaced using the format 'namespace:setting_name'. Add a namespace prefix with a colon separator.

**Technical details:** Data contains the setting name missing namespace.


### CHKMANIF130: Few Options

**Rule ID:** `CHKMANIF130`

**Severity:** Info

**What it checks:** Dropdown settings must have at least 2 options to choose from.

**Technical details:** Data contains the number of options found.


### CHKMANIF131: Duplicate Option

**Rule ID:** `CHKMANIF131`

**Severity:** Info

**What it checks:** A dropdown setting has duplicate values in its options list. Each option must be unique.

**Technical details:** Data contains the duplicate option value.


### CHKMANIF132: Base Version Error

**Rule ID:** `CHKMANIF132`

**Severity:** Info

**What it checks:** The base_game_version property requires format_version 2 or higher. Either remove base_game_version or upgrade to format_version 2.

**Technical details:** Data contains the conflicting version info.


### CHKMANIF133: Wildcard Version

**Rule ID:** `CHKMANIF133`

**Severity:** Info

**What it checks:** Using wildcards (like [1, 21, *]) in base_game_version is not recommended. Specify an exact version for more predictable behavior.

**Technical details:** Data contains the version with wildcard.


### CHKMANIF134: PBR Engine Version

**Rule ID:** `CHKMANIF134`

**Severity:** Info

**What it checks:** Packs declaring the 'pbr' capability for Vibrant Visuals must have min_engine_version of at least 1.21.120.

**Technical details:** Data contains the current min_engine_version.


### CHKMANIF135: Missing PBR Cap

**Rule ID:** `CHKMANIF135`

**Severity:** Info

**What it checks:** The pack contains PBR-related files (like .texture_set.json or *_mer.png) but does not declare the 'pbr' capability in the manifest. Add 'capabilities': ['pbr'] to your manifest.

**Technical details:** Data contains the PBR file path found.
