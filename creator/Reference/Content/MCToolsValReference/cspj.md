---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Skin Pack"
description: "Documentation for Skin Pack validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Skin Pack Validation Rules
Validates skin pack content including skins.json structure, skin textures, capes, localization keys, and model configurations.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CSPJ101](#cspj101) | Missing skins.json | 🔴 Error |  |
| [CSPJ102](#cspj102) | Invalid JSON | 🔴 Error |  |
| [CSPJ103](#cspj103) | Name Mismatch | 🔴 Error |  |
| [CSPJ105](#cspj105) | Duplicate Texture | 🟡 Warning |  |
| [CSPJ106](#cspj106) | Cape Size Error | 🔴 Error |  |
| [CSPJ107](#cspj107) | Texture Size Error | 🔴 Error |  |
| [CSPJ108](#cspj108) | Creator Only | 🔴 Error |  |
| [CSPJ109](#cspj109) | Read Failed | 🔴 Error |  |
| [CSPJ110](#cspj110) | Orphan Texture | 🟡 Warning |  |
| [CSPJ111](#cspj111) | Missing Loc Key | 🔴 Error |  |
| [CSPJ112](#cspj112) | Unused Loc Key | 🟡 Warning |  |
| [CSPJ113](#cspj113) | Key Whitespace | 🔴 Error |  |
| [CSPJ115](#cspj115) | Invalid Model | 🔴 Error |  |
| [CSPJ116](#cspj116) | Too Many Skins | 🔴 Error |  |
| [CSPJ117](#cspj117) | Blank Outer | 🟡 Warning |  |
| [CSPJ118](#cspj118) | Invisible Angles | 🟡 Warning |  |
| [CSPJ119](#cspj119) | Partial Invisible | 🟡 Warning |  |
| [CSPJ120](#cspj120) | Pack Not Found | 🔴 Error |  |

---
## Rule Details

### CSPJ101
**🔴 Missing skins.json**  
**Severity**: Error

#### What This Checks
The skin pack is missing a skins.json file. This file is required and must define all skins in the pack including their textures, names, and properties.

#### Technical Details
Data contains the expected skins.json path.

### CSPJ102
**🔴 Invalid JSON**  
**Severity**: Error

#### What This Checks
The skins.json file contains invalid JSON or does not match the expected schema. Verify JSON syntax and ensure all required properties are present.

#### Technical Details
Data contains the JSON parse error or schema violation.

### CSPJ103
**🔴 Name Mismatch**  
**Severity**: Error

#### What This Checks
The localization_name and serialize_name properties in skins.json must have the same value. These are used for identifying the skin pack and must match.

#### Technical Details
Data contains the mismatched name values.

### CSPJ105
**🟡 Duplicate Texture**  
**Severity**: Warning

#### What This Checks
Multiple skins reference the same texture file. Each skin should use a unique texture to avoid confusion and ensure proper display.

#### Technical Details
Data contains the duplicate texture path.

### CSPJ106
**🔴 Cape Size Error**  
**Severity**: Error

#### What This Checks
Cape textures have size restrictions. Ensure cape textures meet the required dimensions (typically 64x32 pixels).

#### Technical Details
Data contains the cape texture path with invalid size.

### CSPJ107
**🔴 Texture Size Error**  
**Severity**: Error

#### What This Checks
A skin or cape texture has invalid dimensions. Skin textures must be 64x64 or 128x128 pixels. Verify your texture dimensions.

#### Technical Details
Data contains the texture path and actual dimensions.

### CSPJ108
**🔴 Creator Only**  
**Severity**: Error

#### What This Checks
A property that is only allowed for Minecraft Creator accounts was found. Non-creator accounts cannot use certain advanced skin features.

#### Technical Details
Data contains the property name not allowed.

### CSPJ109
**🔴 Read Failed**  
**Severity**: Error

#### What This Checks
A texture file could not be read. Verify the file exists, is not corrupted, and uses a supported image format (PNG).

#### Technical Details
Data contains the path to the unreadable texture.

### CSPJ110
**🟡 Orphan Texture**  
**Severity**: Warning

#### What This Checks
A texture file exists in the pack but is not referenced by any skin in skins.json. Either add the skin to skins.json or remove the orphaned texture.

#### Technical Details
Data contains the orphaned texture path.

### CSPJ111
**🔴 Missing Loc Key**  
**Severity**: Error

#### What This Checks
A localization key used in skins.json does not have a corresponding entry in the language files. Add the missing translation to your .lang files.

#### Technical Details
Data contains the missing localization key.

### CSPJ112
**🟡 Unused Loc Key**  
**Severity**: Warning

#### What This Checks
A localization entry exists in the lang file but references a key not used in skins.json. Remove unused localization entries or update skins.json.

#### Technical Details
Data contains the unused localization key.

### CSPJ113
**🔴 Key Whitespace**  
**Severity**: Error

#### What This Checks
Localization keys must not have spaces at the beginning or end. Trim any whitespace from your localization key names.

#### Technical Details
Data contains the key with whitespace.

### CSPJ115
**🔴 Invalid Model**  
**Severity**: Error

#### What This Checks
The skin's model target (geometry) is not recognized. Ensure the model target matches a valid player model type (slim/wide arms).

#### Technical Details
Data contains the invalid model target.

### CSPJ116
**🔴 Too Many Skins**  
**Severity**: Error

#### What This Checks
The skin pack exceeds the maximum of 80 skins. Reduce the number of skins or split into multiple skin packs.

#### Technical Details
Data contains the skin count.

### CSPJ117
**🟡 Blank Outer**  
**Severity**: Warning

#### What This Checks
The skin texture has blank outer areas that should contain visible content. For slim arm models, ensure the outer layer has proper pixel coverage.

#### Technical Details
Data contains the texture path with blank areas.

### CSPJ118
**🟡 Invisible Angles**  
**Severity**: Warning

#### What This Checks
The skin model geometry causes parts of the skin to be invisible from certain viewing angles. Review the model and texture alignment.

#### Technical Details
Data contains the skin name with visibility issues.

### CSPJ119
**🟡 Partial Invisible**  
**Severity**: Warning

#### What This Checks
Some parts of the skin model may not render correctly. This is a warning - review the skin appearance in-game.

#### Technical Details
Data contains the skin name with rendering issues.

### CSPJ120
**🔴 Pack Not Found**  
**Severity**: Error

#### What This Checks
The skin pack manifest could not be associated with a valid pack structure. Verify the pack folder structure and manifest location.

#### Technical Details
Data contains the expected pack path.
