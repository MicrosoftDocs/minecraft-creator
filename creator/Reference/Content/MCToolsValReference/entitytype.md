---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Entity Type"
description: "Documentation for Entity Type validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Entity Type Validation Rules
Validates entity type definitions in behavior packs. Checks format_version against the current Minecraft version and can update format versions to the latest.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [ENTITYTYPE52](#entitytype52) | Runtime Identifier | ℹ️ Info |  |
| [ENTITYTYPE53](#entitytype53) | Entity Identifier | ℹ️ Info |  |
| [ENTITYTYPE54](#entitytype54) | Entity Metadata | ℹ️ Info |  |
| [ENTITYTYPE100](#entitytype100) | Format Version Undefined | 🔴 Error |  |
| [ENTITYTYPE110](#entitytype110) | Major Version Low | 🔵 Recommendation | ✅ |
| [ENTITYTYPE111](#entitytype111) | Major Version High | 🔴 Error | ✅ |
| [ENTITYTYPE120](#entitytype120) | Minor Version Low | 🔵 Recommendation | ✅ |
| [ENTITYTYPE121](#entitytype121) | Minor Version High | 🔴 Error | ✅ |
| [ENTITYTYPE130](#entitytype130) | Patch Version Low | 🔵 Recommendation | ✅ |
| [ENTITYTYPE131](#entitytype131) | Patch Version High | 🔴 Error | ✅ |
| [ENTITYTYPE500](#entitytype500) | Version Retrieval Failed | 🔴 Error |  |
| [ENTITYTYPE501](#entitytype501) | Version Parse Failed | 🔴 Error |  |

---
## Rule Details

### ENTITYTYPE52
**ℹ️ Runtime Identifier**  
**Severity**: Info

#### What This Checks
Aggregates runtime_identifier values from entity type definitions. Runtime identifiers inherit behavior from vanilla entities.

#### Technical Details
Data field contains the runtime_identifier string.

### ENTITYTYPE53
**ℹ️ Entity Identifier**  
**Severity**: Info

#### What This Checks
Aggregates identifier values from entity type definitions. Shows which vanilla entity identifiers are being overridden.

#### Technical Details
Data field contains the entity identifier string.

### ENTITYTYPE54
**ℹ️ Entity Metadata**  
**Severity**: Info

#### What This Checks
Aggregates metadata about entity types including aliases and properties defined in entity descriptions.

### ENTITYTYPE100
**🔴 Format Version Undefined**  
**Severity**: Error

#### What This Checks
Checks that the entity type definition has a format_version field defined.

#### How to Fix
Add a format_version field to the root of your entity JSON file. Example: "format_version": "1.21.0". Use the latest Minecraft version number.

### ENTITYTYPE110
**🔵 Major Version Low**  
**Severity**: Recommendation

#### What This Checks
The entity type format_version major version is lower than the current Minecraft version. Consider updating to access new features.

#### How to Fix
Update the format_version to use the latest Minecraft version. You can use the 'Fix' button to automatically update this, or manually change it in the JSON file.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack entity type format to latest version.

### ENTITYTYPE111
**🔴 Major Version High**  
**Severity**: Error

#### What This Checks
The entity type format_version major version is higher than the current Minecraft version. This indicates an invalid future version.

#### How to Fix
Lower the format_version to match the current Minecraft version. Future versions are not supported. Check docs.microsoft.com for the latest valid version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack entity type format to latest version.

### ENTITYTYPE120
**🔵 Minor Version Low**  
**Severity**: Recommendation

#### What This Checks
The entity type format_version minor version is lower than the current Minecraft version. Consider updating for compatibility.

#### How to Fix
Update the format_version minor version to the current Minecraft version. Use the 'Fix' button for automatic update.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack entity type format to latest version.

### ENTITYTYPE121
**🔴 Minor Version High**  
**Severity**: Error

#### What This Checks
The entity type format_version minor version is higher than the current Minecraft version. This indicates an invalid future version.

#### How to Fix
The minor version is ahead of the current Minecraft release. Update to a valid current version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack entity type format to latest version.

### ENTITYTYPE130
**🔵 Patch Version Low**  
**Severity**: Recommendation

#### What This Checks
The entity type format_version patch version is lower than the current Minecraft version. Consider updating for the latest fixes.

#### How to Fix
Update the format_version patch number to the current version. This ensures you have the latest bug fixes and features.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack entity type format to latest version.

### ENTITYTYPE131
**🔴 Patch Version High**  
**Severity**: Error

#### What This Checks
The entity type format_version patch version is higher than the current Minecraft version. This indicates an invalid future version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set behavior pack entity type format to latest version.

### ENTITYTYPE500
**🔴 Version Retrieval Failed**  
**Severity**: Error

#### What This Checks
Internal error: Could not retrieve the latest Minecraft version from the database.

### ENTITYTYPE501
**🔴 Version Parse Failed**  
**Severity**: Error

#### What This Checks
Internal error: Could not parse the latest Minecraft version string into version components.

#### Technical Details
Data field contains the version string that failed to parse.
