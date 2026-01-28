---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Forbidden Files"
description: "Documentation for Forbidden Files validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Forbidden Files Validation Rules
Validates that packs only contain files with allowed extensions and do not include blocked file names or invalid characters. Different pack types (behavior pack, resource pack, world template) have different allowed file type lists.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [FORBFILE101](#forbfile101) | File Read Error | 🔴 Error |  |
| [FORBFILE102](#forbfile102) | Invalid Extension | 🔴 Error |  |
| [FORBFILE103](#forbfile103) | Blocked Filename | 🔴 Error |  |
| [FORBFILE104](#forbfile104) | Invalid Character | 🔴 Error |  |

---
## Rule Details

### FORBFILE101
**🔴 File Read Error**  
**Severity**: Error

#### What This Checks
The validator was unable to read the file. This may indicate file corruption or access issues.

#### How to Fix
Check if the file is locked by another program or if you have read permissions. Try closing other applications that might be using the file, or check the file isn't corrupted.

#### Technical Details
Data contains the path to the unreadable file.

### FORBFILE102
**🔴 Invalid Extension**  
**Severity**: Error

#### What This Checks
The file has an extension that is not in the allowed list for this pack type. Remove the file or convert it to an allowed format. Behavior packs, resource packs, and world templates each have specific lists of allowed file extensions.

#### How to Fix
Either remove the file from your pack, or convert it to an allowed format. For behavior packs: .json, .js, .ts are allowed. For resource packs: .json, .png, .tga, .fsb, .ogg, etc. Check documentation for the complete list.

#### Technical Details
Data contains the file extension that is not allowed.

### FORBFILE103
**🔴 Blocked Filename**  
**Severity**: Error

#### What This Checks
The file name is on the blocked list and cannot be included in the pack. Certain file names are reserved or prohibited for security or compatibility reasons. Rename or remove the file.

#### How to Fix
Rename the file to avoid using reserved or prohibited names. Common blocked names include system files like Thumbs.db, .DS_Store, and desktop.ini.

#### Technical Details
Data contains the blocked file name.

### FORBFILE104
**🔴 Invalid Character**  
**Severity**: Error

#### What This Checks
The file path contains a '$' character which is not allowed in pack file paths. Rename the file or folder to remove the invalid character.

#### How to Fix
Rename the file or folder to remove the '$' character. Use only alphanumeric characters, underscores, and hyphens in file and folder names.

#### Technical Details
Data contains the file path with the invalid character.
