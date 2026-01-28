---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Format Version"
description: "Documentation for Format Version validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Format Version Validation Rules
Validates format_version fields across various Minecraft JSON definition files including block types, item types, recipes, animations, and animation controllers. Compares versions against the current Minecraft version and can update them to the latest.
> [!TIP]
> **Technical Details**: Topic IDs follow a pattern where each file type has a base offset. Within each offset: +0 = undefined, +2 = major low, +4 = major high, +6 = minor low, +8 = minor high, +10 = patch low, +12 = patch high. Topic IDs 600+ report format version info (info type) as 600 + ProjectItemType.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [FORMATVER100](#formatver100) | Format Undefined | 🔴 Error |  |
| [FORMATVER110](#formatver110) | Block Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER112](#formatver112) | Block Major High | 🔴 Error | ✅ |
| [FORMATVER114](#formatver114) | Block Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER116](#formatver116) | Block Minor High | 🔴 Error | ✅ |
| [FORMATVER118](#formatver118) | Block Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER120](#formatver120) | Block Patch High | 🔴 Error | ✅ |
| [FORMATVER130](#formatver130) | Item Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER132](#formatver132) | Item Major High | 🔴 Error | ✅ |
| [FORMATVER134](#formatver134) | Item Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER136](#formatver136) | Item Minor High | 🔴 Error | ✅ |
| [FORMATVER138](#formatver138) | Item Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER140](#formatver140) | Item Patch High | 🔴 Error | ✅ |
| [FORMATVER150](#formatver150) | Recipe Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER152](#formatver152) | Recipe Major High | 🔴 Error | ✅ |
| [FORMATVER154](#formatver154) | Recipe Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER156](#formatver156) | Recipe Minor High | 🔴 Error | ✅ |
| [FORMATVER158](#formatver158) | Recipe Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER160](#formatver160) | Recipe Patch High | 🔴 Error | ✅ |
| [FORMATVER170](#formatver170) | BP Anim Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER172](#formatver172) | BP Anim Major High | 🔴 Error | ✅ |
| [FORMATVER174](#formatver174) | BP Anim Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER176](#formatver176) | BP Anim Minor High | 🔴 Error | ✅ |
| [FORMATVER178](#formatver178) | BP Anim Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER180](#formatver180) | BP Anim Patch High | 🔴 Error | ✅ |
| [FORMATVER190](#formatver190) | BP AnimCtrl Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER192](#formatver192) | BP AnimCtrl Major High | 🔴 Error | ✅ |
| [FORMATVER194](#formatver194) | BP AnimCtrl Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER196](#formatver196) | BP AnimCtrl Minor High | 🔴 Error | ✅ |
| [FORMATVER198](#formatver198) | BP AnimCtrl Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER200](#formatver200) | BP AnimCtrl Patch High | 🔴 Error | ✅ |
| [FORMATVER210](#formatver210) | RP Anim Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER212](#formatver212) | RP Anim Major High | 🔴 Error | ✅ |
| [FORMATVER214](#formatver214) | RP Anim Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER216](#formatver216) | RP Anim Minor High | 🔴 Error | ✅ |
| [FORMATVER218](#formatver218) | RP Anim Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER220](#formatver220) | RP Anim Patch High | 🔴 Error | ✅ |
| [FORMATVER230](#formatver230) | RP AnimCtrl Major Low | 🔵 Recommendation | ✅ |
| [FORMATVER232](#formatver232) | RP AnimCtrl Major High | 🔴 Error | ✅ |
| [FORMATVER234](#formatver234) | RP AnimCtrl Minor Low | 🔵 Recommendation | ✅ |
| [FORMATVER236](#formatver236) | RP AnimCtrl Minor High | 🔴 Error | ✅ |
| [FORMATVER238](#formatver238) | RP AnimCtrl Patch Low | 🔵 Recommendation | ✅ |
| [FORMATVER240](#formatver240) | RP AnimCtrl Patch High | 🔴 Error | ✅ |
| [FORMATVER500](#formatver500) | Version Retrieval Failed | 🔴 Error |  |
| [FORMATVER501](#formatver501) | Version Parse Failed | 🔴 Error |  |

---
## Rule Details

### FORMATVER100
**🔴 Format Undefined**  
**Severity**: Error

#### What This Checks
Checks that a format_version field is defined in the JSON definition file.

### FORMATVER110
**🔵 Block Major Low**  
**Severity**: Recommendation

#### What This Checks
The block type format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER112
**🔴 Block Major High**  
**Severity**: Error

#### What This Checks
The block type format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER114
**🔵 Block Minor Low**  
**Severity**: Recommendation

#### What This Checks
The block type format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER116
**🔴 Block Minor High**  
**Severity**: Error

#### What This Checks
The block type format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER118
**🔵 Block Patch Low**  
**Severity**: Recommendation

#### What This Checks
The block type format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER120
**🔴 Block Patch High**  
**Severity**: Error

#### What This Checks
The block type format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER130
**🔵 Item Major Low**  
**Severity**: Recommendation

#### What This Checks
The item type format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER132
**🔴 Item Major High**  
**Severity**: Error

#### What This Checks
The item type format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER134
**🔵 Item Minor Low**  
**Severity**: Recommendation

#### What This Checks
The item type format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER136
**🔴 Item Minor High**  
**Severity**: Error

#### What This Checks
The item type format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER138
**🔵 Item Patch Low**  
**Severity**: Recommendation

#### What This Checks
The item type format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER140
**🔴 Item Patch High**  
**Severity**: Error

#### What This Checks
The item type format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER150
**🔵 Recipe Major Low**  
**Severity**: Recommendation

#### What This Checks
The recipe format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER152
**🔴 Recipe Major High**  
**Severity**: Error

#### What This Checks
The recipe format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER154
**🔵 Recipe Minor Low**  
**Severity**: Recommendation

#### What This Checks
The recipe format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER156
**🔴 Recipe Minor High**  
**Severity**: Error

#### What This Checks
The recipe format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER158
**🔵 Recipe Patch Low**  
**Severity**: Recommendation

#### What This Checks
The recipe format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER160
**🔴 Recipe Patch High**  
**Severity**: Error

#### What This Checks
The recipe format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER170
**🔵 BP Anim Major Low**  
**Severity**: Recommendation

#### What This Checks
The behavior pack animation format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER172
**🔴 BP Anim Major High**  
**Severity**: Error

#### What This Checks
The behavior pack animation format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER174
**🔵 BP Anim Minor Low**  
**Severity**: Recommendation

#### What This Checks
The behavior pack animation format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER176
**🔴 BP Anim Minor High**  
**Severity**: Error

#### What This Checks
The behavior pack animation format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER178
**🔵 BP Anim Patch Low**  
**Severity**: Recommendation

#### What This Checks
The behavior pack animation format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER180
**🔴 BP Anim Patch High**  
**Severity**: Error

#### What This Checks
The behavior pack animation format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER190
**🔵 BP AnimCtrl Major Low**  
**Severity**: Recommendation

#### What This Checks
The behavior pack animation controller format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER192
**🔴 BP AnimCtrl Major High**  
**Severity**: Error

#### What This Checks
The behavior pack animation controller format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER194
**🔵 BP AnimCtrl Minor Low**  
**Severity**: Recommendation

#### What This Checks
The behavior pack animation controller format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER196
**🔴 BP AnimCtrl Minor High**  
**Severity**: Error

#### What This Checks
The behavior pack animation controller format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER198
**🔵 BP AnimCtrl Patch Low**  
**Severity**: Recommendation

#### What This Checks
The behavior pack animation controller format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER200
**🔴 BP AnimCtrl Patch High**  
**Severity**: Error

#### What This Checks
The behavior pack animation controller format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER210
**🔵 RP Anim Major Low**  
**Severity**: Recommendation

#### What This Checks
The resource pack animation format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER212
**🔴 RP Anim Major High**  
**Severity**: Error

#### What This Checks
The resource pack animation format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER214
**🔵 RP Anim Minor Low**  
**Severity**: Recommendation

#### What This Checks
The resource pack animation format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER216
**🔴 RP Anim Minor High**  
**Severity**: Error

#### What This Checks
The resource pack animation format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER218
**🔵 RP Anim Patch Low**  
**Severity**: Recommendation

#### What This Checks
The resource pack animation format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER220
**🔴 RP Anim Patch High**  
**Severity**: Error

#### What This Checks
The resource pack animation format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER230
**🔵 RP AnimCtrl Major Low**  
**Severity**: Recommendation

#### What This Checks
The resource pack animation controller format_version major version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER232
**🔴 RP AnimCtrl Major High**  
**Severity**: Error

#### What This Checks
The resource pack animation controller format_version major version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER234
**🔵 RP AnimCtrl Minor Low**  
**Severity**: Recommendation

#### What This Checks
The resource pack animation controller format_version minor version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER236
**🔴 RP AnimCtrl Minor High**  
**Severity**: Error

#### What This Checks
The resource pack animation controller format_version minor version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER238
**🔵 RP AnimCtrl Patch Low**  
**Severity**: Recommendation

#### What This Checks
The resource pack animation controller format_version patch version is lower than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER240
**🔴 RP AnimCtrl Patch High**  
**Severity**: Error

#### What This Checks
The resource pack animation controller format_version patch version is higher than the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set format_versions to latest version.

### FORMATVER500
**🔴 Version Retrieval Failed**  
**Severity**: Error

#### What This Checks
Internal error: Could not retrieve the latest Minecraft version from the database.

### FORMATVER501
**🔴 Version Parse Failed**  
**Severity**: Error

#### What This Checks
Internal error: Could not parse a version string into version components.

#### Technical Details
Data field contains the version string that failed to parse.
