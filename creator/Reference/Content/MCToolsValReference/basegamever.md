---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:basegamever"
description: "Describes the minecraft:basegamever mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:basegamever

Validates base_game_version in world template manifests and checks that it matches the current Minecraft version. Can suggest updates to bring base_game_version in line with the latest version.


## Base Game Version Validation Rules


### BASEGAMEVER100: Base Version Undefined

**Rule ID:** `BASEGAMEVER100`

**Severity:** Error

**What it checks:** Checks that the world template manifest has a header/base_game_version field defined. This field is required for world templates.

**How to fix:** Add base_game_version to your world template manifest header. Example: "base_game_version": [1, 21, 0]. Use the Minecraft version your world was created with.


### BASEGAMEVER110: Major Version Low

**Rule ID:** `BASEGAMEVER110`

**Severity:** Recommendation

**What it checks:** The base_game_version major version number is lower than the current Minecraft version. This may cause compatibility issues.

**How to fix:** Update base_game_version to the current Minecraft version using the 'Fix' button, or manually edit the manifest header to use the latest version array.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BASEGAMEVER111: Major Version High

**Rule ID:** `BASEGAMEVER111`

**Severity:** Error

**What it checks:** The base_game_version major version number is higher than the current Minecraft version. This indicates an invalid future version.

**How to fix:** Lower the base_game_version to match the current Minecraft release. Future versions are not valid.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BASEGAMEVER120: Minor Version Low

**Rule ID:** `BASEGAMEVER120`

**Severity:** Recommendation

**What it checks:** The base_game_version minor version number is lower than the current or previous minor version. Consider updating to ensure compatibility.

**How to fix:** Update the base_game_version minor version to current using the 'Fix' button for automatic update.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BASEGAMEVER121: Minor Version High

**Rule ID:** `BASEGAMEVER121`

**Severity:** Error

**What it checks:** The base_game_version minor version number is higher than the current Minecraft version. This indicates an invalid future version.

**How to fix:** The minor version is ahead of the current release. Update to a valid current version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BASEGAMEVER130: Patch Version Low

**Rule ID:** `BASEGAMEVER130`

**Severity:** Recommendation

**What it checks:** The base_game_version patch version number is lower than the current Minecraft version. Consider updating for the latest fixes.

**How to fix:** Update the patch version to current using the 'Fix' button, or manually update in the manifest.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BASEGAMEVER131: Patch Version High

**Rule ID:** `BASEGAMEVER131`

**Severity:** Error

**What it checks:** The base_game_version patch version number is higher than the current Minecraft version. This indicates an invalid future version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BASEGAMEVER500: Version Retrieval Failed

**Rule ID:** `BASEGAMEVER500`

**Severity:** Error

**What it checks:** Internal error: Could not retrieve the latest Minecraft version from the database.


### BASEGAMEVER501: Version Parse Failed

**Rule ID:** `BASEGAMEVER501`

**Severity:** Error

**What it checks:** Internal error: Could not parse the latest Minecraft version string into version components.

**Technical details:** Data field contains the version string that failed to parse.
