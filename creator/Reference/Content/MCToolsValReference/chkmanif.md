---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Manifest Validation"
description: "Documentation for Manifest Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Manifest Validation Validation Rules
Comprehensive validation of pack manifest.json files. Validates format version, UUIDs, header properties, modules, dependencies, subpacks, capabilities, and settings. Ensures manifests comply with Minecraft Bedrock Edition requirements.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CHKMANIF101](#chkmanif101) | Invalid Format | 🔴 Error |  |
| [CHKMANIF102](#chkmanif102) | Schema Error | 🔴 Error |  |
| [CHKMANIF103](#chkmanif103) | Manifest Count | 🔴 Error |  |
| [CHKMANIF104](#chkmanif104) | Missing Property | 🔴 Error |  |
| [CHKMANIF105](#chkmanif105) | Required Property | 🔴 Error |  |
| [CHKMANIF106](#chkmanif106) | Version Mismatch | 🔴 Error |  |
| [CHKMANIF107](#chkmanif107) | Invalid Scope | 🔴 Error |  |
| [CHKMANIF108](#chkmanif108) | Multiple Templates | 🔴 Error |  |
| [CHKMANIF109](#chkmanif109) | Invalid Module | 🔴 Error |  |
| [CHKMANIF110](#chkmanif110) | Duplicate UUID | 🔴 Error |  |
| [CHKMANIF111](#chkmanif111) | Invalid UUID | 🔴 Error |  |
| [CHKMANIF112](#chkmanif112) | Missing Dep ID | 🔴 Error |  |
| [CHKMANIF113](#chkmanif113) | Duplicate Dep ID | 🔴 Error |  |
| [CHKMANIF114](#chkmanif114) | Invalid Module Name | 🔴 Error |  |
| [CHKMANIF115](#chkmanif115) | Version Parse Error | 🔴 Error |  |
| [CHKMANIF116](#chkmanif116) | Version Too Low | 🔴 Error |  |
| [CHKMANIF117](#chkmanif117) | Invalid Capability | 🔴 Error |  |
| [CHKMANIF118](#chkmanif118) | Duplicate Folder | 🔴 Error |  |
| [CHKMANIF119](#chkmanif119) | Duplicate Subpack | 🔴 Error |  |
| [CHKMANIF120](#chkmanif120) | Invalid Subpack | 🔴 Error |  |
| [CHKMANIF121](#chkmanif121) | Invalid Tier | 🔴 Error |  |
| [CHKMANIF122](#chkmanif122) | Settings Missing | 🔴 Error |  |
| [CHKMANIF123](#chkmanif123) | Invalid Setting | 🔴 Error |  |
| [CHKMANIF124](#chkmanif124) | Invalid Min/Max | 🔴 Error |  |
| [CHKMANIF125](#chkmanif125) | Slider Default | 🔴 Error |  |
| [CHKMANIF126](#chkmanif126) | Dropdown Default | 🔴 Error |  |
| [CHKMANIF127](#chkmanif127) | Invalid Step | 🔴 Error |  |
| [CHKMANIF128](#chkmanif128) | Duplicate Setting | 🔴 Error |  |
| [CHKMANIF129](#chkmanif129) | Missing Namespace | 🔴 Error |  |
| [CHKMANIF130](#chkmanif130) | Few Options | 🔴 Error |  |
| [CHKMANIF131](#chkmanif131) | Duplicate Option | 🔴 Error |  |
| [CHKMANIF132](#chkmanif132) | Base Version Error | 🔴 Error |  |
| [CHKMANIF133](#chkmanif133) | Wildcard Version | 🟡 Warning |  |
| [CHKMANIF134](#chkmanif134) | PBR Engine Version | 🔴 Error |  |
| [CHKMANIF135](#chkmanif135) | Missing PBR Cap | 🟡 Warning |  |

---
## Rule Details

### CHKMANIF101
**🔴 Invalid Format**  
**Severity**: Error

#### What This Checks
The manifest format_version is not a recognized value. Valid format versions are 1, 2, or 3. Use format_version 2 for most modern packs.

#### How to Fix
Change format_version to 2 in your manifest.json. This is the recommended version for modern packs: "format_version": 2.

#### Technical Details
Data contains the invalid format_version value.

### CHKMANIF102
**🔴 Schema Error**  
**Severity**: Error

#### What This Checks
The manifest.json file does not conform to the expected JSON schema. Check for missing required properties, incorrect property types, or structural errors.

#### How to Fix
Review your manifest.json structure against the documentation at docs.microsoft.com. Common issues include missing commas, incorrect property names, or wrong value types.

#### Technical Details
Data contains details about the schema violation.

### CHKMANIF103
**🔴 Manifest Count**  
**Severity**: Error

#### What This Checks
Each pack must have exactly one manifest.json file at its root. Multiple manifests or missing manifests indicate a pack structure problem.

#### How to Fix
Ensure your pack has exactly one manifest.json file at its root directory. Remove duplicate manifests or add one if missing.

#### Technical Details
Data contains the number of manifests found.

### CHKMANIF104
**🔴 Missing Property**  
**Severity**: Error

#### What This Checks
A required property is missing from the manifest header section. Common required properties include name, description, uuid, and version.

#### How to Fix
Add the missing required property to your manifest header. Required properties include: name, description, uuid, and version.

#### Technical Details
Data contains the name of the missing property.

### CHKMANIF105
**🔴 Required Property**  
**Severity**: Error

#### What This Checks
A header property that is optional in format_version 1 is required in format_version 2 and above. Update your manifest to include all required header properties.

#### How to Fix
Add the now-required property to your manifest header. If using format_version 2+, more properties are required than in version 1.

#### Technical Details
Data contains the property name now required.

### CHKMANIF106
**🔴 Version Mismatch**  
**Severity**: Error

#### What This Checks
The min_engine_version specified requires format_version 2. Either lower the min_engine_version or upgrade to format_version 2.

#### How to Fix
Either upgrade format_version to 2, or lower the min_engine_version. Format version 2 is required for higher engine versions.

#### Technical Details
Data contains the conflicting version values.

### CHKMANIF107
**🔴 Invalid Scope**  
**Severity**: Error

#### What This Checks
The pack_scope property must be one of: 'global', 'world', or 'any'. Other values are not recognized.

#### How to Fix
Set pack_scope to one of: 'global', 'world', or 'any'. Remove or correct any other value.

#### Technical Details
Data contains the invalid pack_scope value.

### CHKMANIF108
**🔴 Multiple Templates**  
**Severity**: Error

#### What This Checks
The manifest modules array can contain at most one world_template module. Remove extra world_template entries.

#### How to Fix
Remove extra world_template entries from the modules array. Only one world_template module is allowed per manifest.

#### Technical Details
Data contains the count of world_template modules.

### CHKMANIF109
**🔴 Invalid Module**  
**Severity**: Error

#### What This Checks
A module has an unrecognized type. Valid module types include: persona_piece, world_template, skin_pack, data, script, and resources.

#### How to Fix
Change the module type to a valid value: data, resources, script, skin_pack, world_template, or persona_piece.

#### Technical Details
Data contains the invalid module type.

### CHKMANIF110
**🔴 Duplicate UUID**  
**Severity**: Error

#### What This Checks
A UUID is used more than once in the manifest. All UUIDs must be unique across header, modules, and dependencies. Generate new unique UUIDs for duplicates.

#### How to Fix
Generate a new unique UUID for each duplicate. Use an online UUID generator or your IDE's UUID generation feature.

#### Technical Details
Data contains the duplicate UUID.

### CHKMANIF111
**🔴 Invalid UUID**  
**Severity**: Error

#### What This Checks
A UUID does not conform to the standard UUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). Generate a valid UUID using a UUID generator tool.

#### How to Fix
Replace the invalid UUID with a properly formatted one: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. Use an online UUID generator.

#### Technical Details
Data contains the invalid UUID value.

### CHKMANIF112
**🔴 Missing Dep ID**  
**Severity**: Error

#### What This Checks
A dependency entry is missing both 'module_name' and 'uuid'. Each dependency must have at least one identifier to specify which module it depends on.

#### How to Fix
Add either a 'uuid' or 'module_name' property to the dependency entry to identify which module it depends on.

#### Technical Details
Data contains the dependency index missing an ID.

### CHKMANIF113
**🔴 Duplicate Dep ID**  
**Severity**: Error

#### What This Checks
A dependency has both 'module_name' and 'uuid' specified. Use only one identifier per dependency - either module_name (for script modules) or uuid (for packs).

#### Technical Details
Data contains the dependency with duplicate IDs.

### CHKMANIF114
**🔴 Invalid Module Name**  
**Severity**: Error

#### What This Checks
The specified module_name is not in the list of allowed script modules. Valid module names include @minecraft/server, @minecraft/server-ui, etc.

#### Technical Details
Data contains the invalid module_name.

### CHKMANIF115
**🔴 Version Parse Error**  
**Severity**: Error

#### What This Checks
A version number could not be parsed. Versions should be arrays of 3 numbers [major, minor, patch] or semantic version strings.

#### Technical Details
Data contains the unparseable version.

### CHKMANIF116
**🔴 Version Too Low**  
**Severity**: Error

#### What This Checks
The specified version is lower than the minimum required version for this module or dependency. Update to a supported version.

#### Technical Details
Data contains the version and minimum required.

### CHKMANIF117
**🔴 Invalid Capability**  
**Severity**: Error

#### What This Checks
An unrecognized capability is listed. Currently, 'pbr' is the only allowed capability for declaring Vibrant Visuals support.

#### Technical Details
Data contains the invalid capability name.

### CHKMANIF118
**🔴 Duplicate Folder**  
**Severity**: Error

#### What This Checks
The same folder name is used by multiple subpacks. Each subpack must reference a unique folder path.

#### Technical Details
Data contains the duplicate folder name.

### CHKMANIF119
**🔴 Duplicate Subpack**  
**Severity**: Error

#### What This Checks
The same name is used by multiple subpacks. Each subpack must have a unique identifier name.

#### Technical Details
Data contains the duplicate subpack name.

### CHKMANIF120
**🔴 Invalid Subpack**  
**Severity**: Error

#### What This Checks
A subpack name is invalid or empty. Provide a valid name for each subpack entry.

#### Technical Details
Data contains the invalid subpack name.

### CHKMANIF121
**🔴 Invalid Tier**  
**Severity**: Error

#### What This Checks
A subpack memory_tier value is below the minimum allowed. Memory tiers must meet or exceed the baseline requirement.

#### Technical Details
Data contains the invalid memory_tier value.

### CHKMANIF122
**🔴 Settings Missing**  
**Severity**: Error

#### What This Checks
A settings entry is missing a required property. Settings require name, type, and other properties depending on the setting type.

#### Technical Details
Data contains the missing settings property name.

### CHKMANIF123
**🔴 Invalid Setting**  
**Severity**: Error

#### What This Checks
A settings entry has an unrecognized type. Valid types include 'slider' and 'dropdown'.

#### Technical Details
Data contains the invalid setting type.

### CHKMANIF124
**🔴 Invalid Min/Max**  
**Severity**: Error

#### What This Checks
For slider settings, the 'min' value must be less than the 'max' value.

#### Technical Details
Data contains the invalid min/max values.

### CHKMANIF125
**🔴 Slider Default**  
**Severity**: Error

#### What This Checks
For slider settings, the default value must be a number between min and max (inclusive).

#### Technical Details
Data contains the invalid default value.

### CHKMANIF126
**🔴 Dropdown Default**  
**Severity**: Error

#### What This Checks
For dropdown settings, the default value must be one of the values in the options list.

#### Technical Details
Data contains the invalid dropdown default.

### CHKMANIF127
**🔴 Invalid Step**  
**Severity**: Error

#### What This Checks
For slider settings, the step value must be greater than 0 and less than (max - min).

#### Technical Details
Data contains the invalid step value.

### CHKMANIF128
**🔴 Duplicate Setting**  
**Severity**: Error

#### What This Checks
Multiple settings share the same name. Each setting must have a unique name identifier.

#### Technical Details
Data contains the duplicate setting name.

### CHKMANIF129
**🔴 Missing Namespace**  
**Severity**: Error

#### What This Checks
Settings names must be namespaced using the format 'namespace:setting_name'. Add a namespace prefix with a colon separator.

#### Technical Details
Data contains the setting name missing namespace.

### CHKMANIF130
**🔴 Few Options**  
**Severity**: Error

#### What This Checks
Dropdown settings must have at least 2 options to choose from.

#### Technical Details
Data contains the number of options found.

### CHKMANIF131
**🔴 Duplicate Option**  
**Severity**: Error

#### What This Checks
A dropdown setting has duplicate values in its options list. Each option must be unique.

#### Technical Details
Data contains the duplicate option value.

### CHKMANIF132
**🔴 Base Version Error**  
**Severity**: Error

#### What This Checks
The base_game_version property requires format_version 2 or higher. Either remove base_game_version or upgrade to format_version 2.

#### Technical Details
Data contains the conflicting version info.

### CHKMANIF133
**🟡 Wildcard Version**  
**Severity**: Warning

#### What This Checks
Using wildcards (like [1, 21, *]) in base_game_version is not recommended. Specify an exact version for more predictable behavior.

#### Technical Details
Data contains the version with wildcard.

### CHKMANIF134
**🔴 PBR Engine Version**  
**Severity**: Error

#### What This Checks
Packs declaring the 'pbr' capability for Vibrant Visuals must have min_engine_version of at least 1.21.120.

#### Technical Details
Data contains the current min_engine_version.

### CHKMANIF135
**🟡 Missing PBR Cap**  
**Severity**: Warning

#### What This Checks
The pack contains PBR-related files (like .texture_set.json or *_mer.png) but does not declare the 'pbr' capability in the manifest. Add 'capabilities': ['pbr'] to your manifest.

#### Technical Details
Data contains the PBR file path found.
