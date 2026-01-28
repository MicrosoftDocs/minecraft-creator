---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Pack Size"
description: "Documentation for Pack Size validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Pack Size Validation Rules
Analyzes pack file sizes and counts to ensure content fits within platform limits. Large packs can cause download issues and slow loading times on mobile devices.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [PACKSIZE101](#packsize101) | Total Size | ℹ️ Info |  |
| [PACKSIZE102](#packsize102) | File Count | ℹ️ Info |  |
| [PACKSIZE103](#packsize103) | Folder Count | ℹ️ Info |  |
| [PACKSIZE104](#packsize104) | Content Size | ℹ️ Info |  |
| [PACKSIZE105](#packsize105) | Content Files | ℹ️ Info |  |
| [PACKSIZE106](#packsize106) | Content Folders | ℹ️ Info |  |
| [PACKSIZE401](#packsize401) | Addon Size Warning | 🟡 Warning |  |
| [PACKSIZE402](#packsize402) | Package Size Warning | 🟡 Warning |  |
| [PACKSIZE410](#packsize410) | Zip Processing Error | 🔴 Error |  |

---
## Rule Details

### PACKSIZE101
**ℹ️ Total Size**  
**Severity**: Info

#### What This Checks
Total size in bytes of all files in the pack, including non-content files.

#### Technical Details
Data contains the size in bytes as a number.

### PACKSIZE102
**ℹ️ File Count**  
**Severity**: Info

#### What This Checks
Total number of files in the pack.

#### Technical Details
Data contains the file count as a number.

### PACKSIZE103
**ℹ️ Folder Count**  
**Severity**: Info

#### What This Checks
Total number of folders in the pack.

#### Technical Details
Data contains the folder count as a number.

### PACKSIZE104
**ℹ️ Content Size**  
**Severity**: Info

#### What This Checks
Total size in bytes of content files only (JSON, images, sounds, etc.), excluding system files.

#### Technical Details
Data contains the content size in bytes as a number.

### PACKSIZE105
**ℹ️ Content Files**  
**Severity**: Info

#### What This Checks
Number of content files in the pack.

#### Technical Details
Data contains the content file count as a number.

### PACKSIZE106
**ℹ️ Content Folders**  
**Severity**: Info

#### What This Checks
Number of content folders in the pack.

#### Technical Details
Data contains the content folder count as a number.

### PACKSIZE401
**🟡 Addon Size Warning**  
**Severity**: Warning

#### What This Checks
Warning when the add-on exceeds recommended size limits. Large add-ons may have issues on mobile platforms or with Realms uploads.

#### How to Fix
Reduce pack size by compressing textures, removing unused assets, or splitting into multiple packs. Target under 100MB for best mobile compatibility.

#### Technical Details
Data contains the size that exceeds the limit.

### PACKSIZE402
**🟡 Package Size Warning**  
**Severity**: Warning

#### What This Checks
Warning when the packaged content (.mcaddon/.mcpack) exceeds recommended size limits for distribution.

#### How to Fix
Compress textures to reduce file size, use lower resolution for mobile targets, and remove any development/debug files before packaging.

#### Technical Details
Data contains the package size that exceeds the limit.

### PACKSIZE410
**🔴 Zip Processing Error**  
**Severity**: Error

#### What This Checks
Error when a zip file within the pack could not be read or processed. May indicate corruption or unsupported compression.

#### How to Fix
The zip file may be corrupted. Try re-downloading or re-creating the zip. Ensure you're using standard ZIP compression without advanced features.

#### Technical Details
Data contains the path to the problematic zip file.
