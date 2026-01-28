---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Base Game Version"
description: "Documentation for Base Game Version validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Base Game Version Validation Rules
Validates base_game_version in world template manifests and checks that it matches the current Minecraft version. Can suggest updates to bring base_game_version in line with the latest version.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [BASEGAMEVER100](#basegamever100) | Base Version Undefined | 🔴 Error |  |
| [BASEGAMEVER110](#basegamever110) | Major Version Low | 🔵 Recommendation | ✅ |
| [BASEGAMEVER111](#basegamever111) | Major Version High | 🔴 Error | ✅ |
| [BASEGAMEVER120](#basegamever120) | Minor Version Low | 🔵 Recommendation | ✅ |
| [BASEGAMEVER121](#basegamever121) | Minor Version High | 🔴 Error | ✅ |
| [BASEGAMEVER130](#basegamever130) | Patch Version Low | 🔵 Recommendation | ✅ |
| [BASEGAMEVER131](#basegamever131) | Patch Version High | 🔴 Error | ✅ |
| [BASEGAMEVER500](#basegamever500) | Version Retrieval Failed | 🔴 Error |  |
| [BASEGAMEVER501](#basegamever501) | Version Parse Failed | 🔴 Error |  |

---
## Rule Details

### BASEGAMEVER100
**🔴 Base Version Undefined**  
**Severity**: Error

#### What This Checks
Checks that the world template manifest has a header/base_game_version field defined. This field is required for world templates.

#### How to Fix
Add base_game_version to your world template manifest header. Example: "base_game_version": [1, 21, 0]. Use the Minecraft version your world was created with.

### BASEGAMEVER110
**🔵 Major Version Low**  
**Severity**: Recommendation

#### What This Checks
The base_game_version major version number is lower than the current Minecraft version. This may cause compatibility issues.

#### How to Fix
Update base_game_version to the current Minecraft version using the 'Fix' button, or manually edit the manifest header to use the latest version array.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set base_game_version to latest version.

### BASEGAMEVER111
**🔴 Major Version High**  
**Severity**: Error

#### What This Checks
The base_game_version major version number is higher than the current Minecraft version. This indicates an invalid future version.

#### How to Fix
Lower the base_game_version to match the current Minecraft release. Future versions are not valid.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set base_game_version to latest version.

### BASEGAMEVER120
**🔵 Minor Version Low**  
**Severity**: Recommendation

#### What This Checks
The base_game_version minor version number is lower than the current or previous minor version. Consider updating to ensure compatibility.

#### How to Fix
Update the base_game_version minor version to current using the 'Fix' button for automatic update.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set base_game_version to latest version.

### BASEGAMEVER121
**🔴 Minor Version High**  
**Severity**: Error

#### What This Checks
The base_game_version minor version number is higher than the current Minecraft version. This indicates an invalid future version.

#### How to Fix
The minor version is ahead of the current release. Update to a valid current version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set base_game_version to latest version.

### BASEGAMEVER130
**🔵 Patch Version Low**  
**Severity**: Recommendation

#### What This Checks
The base_game_version patch version number is lower than the current Minecraft version. Consider updating for the latest fixes.

#### How to Fix
Update the patch version to current using the 'Fix' button, or manually update in the manifest.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set base_game_version to latest version.

### BASEGAMEVER131
**🔴 Patch Version High**  
**Severity**: Error

#### What This Checks
The base_game_version patch version number is higher than the current Minecraft version. This indicates an invalid future version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set base_game_version to latest version.

### BASEGAMEVER500
**🔴 Version Retrieval Failed**  
**Severity**: Error

#### What This Checks
Internal error: Could not retrieve the latest Minecraft version from the database.

### BASEGAMEVER501
**🔴 Version Parse Failed**  
**Severity**: Error

#### What This Checks
Internal error: Could not parse the latest Minecraft version string into version components.

#### Technical Details
Data field contains the version string that failed to parse.
