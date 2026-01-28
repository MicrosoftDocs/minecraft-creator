---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Item Types"
description: "Documentation for Item Types validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Item Types Validation Rules
Validates behavior pack item type definitions including format versions, identifiers, and metadata. Can automatically update format versions to the latest.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [ITEMTYPE53](#itemtype53) | Identifier | ℹ️ Info |  |
| [ITEMTYPE54](#itemtype54) | Metadata | ℹ️ Info |  |
| [ITEMTYPE55](#itemtype55) | Category | ℹ️ Info |  |
| [ITEMTYPE100](#itemtype100) | Version Defined | ℹ️ Info |  |
| [ITEMTYPE110](#itemtype110) | Major Version Low | 🟡 Warning | ✅ |
| [ITEMTYPE111](#itemtype111) | Major Version High | 🔴 Error | ✅ |
| [ITEMTYPE120](#itemtype120) | Minor Version Low | 🟡 Warning | ✅ |
| [ITEMTYPE121](#itemtype121) | Minor Version High | 🔴 Error | ✅ |
| [ITEMTYPE130](#itemtype130) | Patch Version Low | ℹ️ Info | ✅ |
| [ITEMTYPE131](#itemtype131) | Patch Version High | 🟡 Warning | ✅ |
| [ITEMTYPE500](#itemtype500) | Version Fetch Error | 🔴 Error |  |
| [ITEMTYPE501](#itemtype501) | Version Parse Error | 🔴 Error |  |

---
## Rule Details

### ITEMTYPE53
**ℹ️ Identifier**  
**Severity**: Info

#### What This Checks
The identifier of the item type (e.g., mypack:custom_sword). Should follow namespace:name format.

#### Technical Details
Data contains the item type identifier.

### ITEMTYPE54
**ℹ️ Metadata**  
**Severity**: Info

#### What This Checks
Additional metadata associated with the item type definition.

#### Technical Details
Data contains the metadata value.

### ITEMTYPE55
**ℹ️ Category**  
**Severity**: Info

#### What This Checks
The category of the item type (equipment, items, nature, etc.) for creative inventory placement.

#### Technical Details
Data contains the category name.

### ITEMTYPE100
**ℹ️ Version Defined**  
**Severity**: Info

#### What This Checks
Confirms that a format_version field is defined in the item type JSON. Required for proper parsing.

#### Technical Details
Data contains the format_version value.

### ITEMTYPE110
**🟡 Major Version Low**  
**Severity**: Warning

#### What This Checks
Warning when the item's format_version major number is below the current version. Consider updating to access new features.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack item type format version to latest version.

#### Technical Details
Data contains the current format_version.

### ITEMTYPE111
**🔴 Major Version High**  
**Severity**: Error

#### What This Checks
Error when the item's format_version major number is above the current version. The item may not load correctly.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack item type format version to latest version.

#### Technical Details
Data contains the format_version exceeding current.

### ITEMTYPE120
**🟡 Minor Version Low**  
**Severity**: Warning

#### What This Checks
Warning when the item's format_version minor number is below the current version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack item type format version to latest version.

#### Technical Details
Data contains the current format_version.

### ITEMTYPE121
**🔴 Minor Version High**  
**Severity**: Error

#### What This Checks
Error when the item's format_version minor number is above the current version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack item type format version to latest version.

#### Technical Details
Data contains the format_version exceeding current.

### ITEMTYPE130
**ℹ️ Patch Version Low**  
**Severity**: Info

#### What This Checks
Information when the item's format_version patch number is below the current version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack item type format version to latest version.

#### Technical Details
Data contains the current format_version.

### ITEMTYPE131
**🟡 Patch Version High**  
**Severity**: Warning

#### What This Checks
Warning when the item's format_version patch number is above the current version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack item type format version to latest version.

#### Technical Details
Data contains the format_version exceeding current.

### ITEMTYPE500
**🔴 Version Fetch Error**  
**Severity**: Error

#### What This Checks
Error when the current Minecraft version could not be determined for comparison.

#### Technical Details
Data contains the error message.

### ITEMTYPE501
**🔴 Version Parse Error**  
**Severity**: Error

#### What This Checks
Error when the Minecraft version string could not be parsed into version numbers.

#### Technical Details
Data contains the unparseable version string.
