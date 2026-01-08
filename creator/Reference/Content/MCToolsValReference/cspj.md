---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:cspj"
description: "Describes the minecraft:cspj mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:cspj

Validates skin pack content including skins.json structure, skin textures, capes, localization keys, and model configurations. 


## Skin Pack Validation Rules


### CSPJ101: Missing skins.json

**Rule ID:** `CSPJ101`

**Severity:** Info

**What it checks:** The skin pack is missing a skins.json file. This file is required and must define all skins in the pack including their textures, names, and properties.

**Technical details:** Data contains the expected skins.json path.


### CSPJ102: Invalid JSON

**Rule ID:** `CSPJ102`

**Severity:** Info

**What it checks:** The skins.json file contains invalid JSON or does not match the expected schema. Verify JSON syntax and ensure all required properties are present.

**Technical details:** Data contains the JSON parse error or schema violation.


### CSPJ103: Name Mismatch

**Rule ID:** `CSPJ103`

**Severity:** Info

**What it checks:** The localization_name and serialize_name properties in skins.json must have the same value. These are used for identifying the skin pack and must match.

**Technical details:** Data contains the mismatched name values.


### CSPJ105: Duplicate Texture

**Rule ID:** `CSPJ105`

**Severity:** Info

**What it checks:** Multiple skins reference the same texture file. Each skin should use a unique texture to avoid confusion and ensure proper display.

**Technical details:** Data contains the duplicate texture path.


### CSPJ106: Cape Size Error

**Rule ID:** `CSPJ106`

**Severity:** Info

**What it checks:** Cape textures have size restrictions. Ensure cape textures meet the required dimensions (typically 64x32 pixels).

**Technical details:** Data contains the cape texture path with invalid size.


### CSPJ107: Texture Size Error

**Rule ID:** `CSPJ107`

**Severity:** Info

**What it checks:** A skin or cape texture has invalid dimensions. Skin textures must be 64x64 or 128x128 pixels. Verify your texture dimensions.

**Technical details:** Data contains the texture path and actual dimensions.


### CSPJ108: Creator Only

**Rule ID:** `CSPJ108`

**Severity:** Info

**What it checks:** A property that is only allowed for Minecraft Creator accounts was found. Non-creator accounts cannot use certain advanced skin features.

**Technical details:** Data contains the property name not allowed.


### CSPJ109: Read Failed

**Rule ID:** `CSPJ109`

**Severity:** Info

**What it checks:** A texture file could not be read. Verify the file exists, is not corrupted, and uses a supported image format (PNG).

**Technical details:** Data contains the path to the unreadable texture.


### CSPJ110: Orphan Texture

**Rule ID:** `CSPJ110`

**Severity:** Info

**What it checks:** A texture file exists in the pack but is not referenced by any skin in skins.json. Either add the skin to skins.json or remove the orphaned texture.

**Technical details:** Data contains the orphaned texture path.


### CSPJ111: Missing Loc Key

**Rule ID:** `CSPJ111`

**Severity:** Info

**What it checks:** A localization key used in skins.json does not have a corresponding entry in the language files. Add the missing translation to your .lang files.

**Technical details:** Data contains the missing localization key.


### CSPJ112: Unused Loc Key

**Rule ID:** `CSPJ112`

**Severity:** Info

**What it checks:** A localization entry exists in the lang file but references a key not used in skins.json. Remove unused localization entries or update skins.json.

**Technical details:** Data contains the unused localization key.


### CSPJ113: Key Whitespace

**Rule ID:** `CSPJ113`

**Severity:** Info

**What it checks:** Localization keys must not have spaces at the beginning or end. Trim any whitespace from your localization key names.

**Technical details:** Data contains the key with whitespace.


### CSPJ115: Invalid Model

**Rule ID:** `CSPJ115`

**Severity:** Info

**What it checks:** The skin's model target (geometry) is not recognized. Ensure the model target matches a valid player model type (slim/wide arms).

**Technical details:** Data contains the invalid model target.


### CSPJ116: Too Many Skins

**Rule ID:** `CSPJ116`

**Severity:** Info

**What it checks:** The skin pack exceeds the maximum of 80 skins. Reduce the number of skins or split into multiple skin packs.

**Technical details:** Data contains the skin count.


### CSPJ117: Blank Outer

**Rule ID:** `CSPJ117`

**Severity:** Info

**What it checks:** The skin texture has blank outer areas that should contain visible content. For slim arm models, ensure the outer layer has proper pixel coverage.

**Technical details:** Data contains the texture path with blank areas.


### CSPJ118: Invisible Angles

**Rule ID:** `CSPJ118`

**Severity:** Info

**What it checks:** The skin model geometry causes parts of the skin to be invisible from certain viewing angles. Review the model and texture alignment.

**Technical details:** Data contains the skin name with visibility issues.


### CSPJ119: Partial Invisible

**Rule ID:** `CSPJ119`

**Severity:** Info

**What it checks:** Some parts of the skin model may not render correctly. This is a warning - review the skin appearance in-game.

**Technical details:** Data contains the skin name with rendering issues.


### CSPJ120: Pack Not Found

**Rule ID:** `CSPJ120`

**Severity:** Info

**What it checks:** The skin pack manifest could not be associated with a valid pack structure. Verify the pack folder structure and manifest location.

**Technical details:** Data contains the expected pack path.
