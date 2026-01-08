---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:entitytype"
description: "Describes the minecraft:entitytype mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:entitytype

Validates entity type definitions in behavior packs. Checks format_version against the current Minecraft version and can update format versions to the latest.


## Entity Type Validation Rules


### ENTITYTYPE100: Format Version Undefined

**Rule ID:** `ENTITYTYPE100`

**Severity:** Error

**What it checks:** Checks that the entity type definition has a format_version field defined.

**How to fix:** Add a format_version field to the root of your entity JSON file. Example: "format_version": "1.21.0". Use the latest Minecraft version number.


### ENTITYTYPE110: Major Version Low

**Rule ID:** `ENTITYTYPE110`

**Severity:** Recommendation

**What it checks:** The entity type format_version major version is lower than the current Minecraft version. Consider updating to access new features.

**How to fix:** Update the format_version to use the latest Minecraft version. You can use the 'Fix' button to automatically update this, or manually change it in the JSON file.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ENTITYTYPE111: Major Version High

**Rule ID:** `ENTITYTYPE111`

**Severity:** Error

**What it checks:** The entity type format_version major version is higher than the current Minecraft version. This indicates an invalid future version.

**How to fix:** Lower the format_version to match the current Minecraft version. Future versions are not supported. Check docs.microsoft.com for the latest valid version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ENTITYTYPE120: Minor Version Low

**Rule ID:** `ENTITYTYPE120`

**Severity:** Recommendation

**What it checks:** The entity type format_version minor version is lower than the current Minecraft version. Consider updating for compatibility.

**How to fix:** Update the format_version minor version to the current Minecraft version. Use the 'Fix' button for automatic update.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ENTITYTYPE121: Minor Version High

**Rule ID:** `ENTITYTYPE121`

**Severity:** Error

**What it checks:** The entity type format_version minor version is higher than the current Minecraft version. This indicates an invalid future version.

**How to fix:** The minor version is ahead of the current Minecraft release. Update to a valid current version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ENTITYTYPE130: Patch Version Low

**Rule ID:** `ENTITYTYPE130`

**Severity:** Recommendation

**What it checks:** The entity type format_version patch version is lower than the current Minecraft version. Consider updating for the latest fixes.

**How to fix:** Update the format_version patch number to the current version. This ensures you have the latest bug fixes and features.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ENTITYTYPE131: Patch Version High

**Rule ID:** `ENTITYTYPE131`

**Severity:** Error

**What it checks:** The entity type format_version patch version is higher than the current Minecraft version. This indicates an invalid future version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ENTITYTYPE500: Version Retrieval Failed

**Rule ID:** `ENTITYTYPE500`

**Severity:** Error

**What it checks:** Internal error: Could not retrieve the latest Minecraft version from the database.


### ENTITYTYPE501: Version Parse Failed

**Rule ID:** `ENTITYTYPE501`

**Severity:** Error

**What it checks:** Internal error: Could not parse the latest Minecraft version string into version components.

**Technical details:** Data field contains the version string that failed to parse.


### ENTITYTYPE52: Runtime Identifier

**Rule ID:** `ENTITYTYPE52`

**Severity:** Info

**What it checks:** Aggregates runtime_identifier values from entity type definitions. Runtime identifiers inherit behavior from vanilla entities.

**Technical details:** Data field contains the runtime_identifier string.


### ENTITYTYPE53: Entity Identifier

**Rule ID:** `ENTITYTYPE53`

**Severity:** Info

**What it checks:** Aggregates identifier values from entity type definitions. Shows which vanilla entity identifiers are being overridden.

**Technical details:** Data field contains the entity identifier string.


### ENTITYTYPE54: Entity Metadata

**Rule ID:** `ENTITYTYPE54`

**Severity:** Info

**What it checks:** Aggregates metadata about entity types including aliases and properties defined in entity descriptions.
