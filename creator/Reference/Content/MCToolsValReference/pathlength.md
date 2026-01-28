---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Path Length"
description: "Documentation for Path Length validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Path Length Validation Rules
Validates file paths for length and format compatibility across platforms. Long paths can cause issues on some operating systems and storage systems.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [PATHLENGTH102](#pathlength102) | Deep Nesting | 🟡 Warning |  |
| [PATHLENGTH103](#pathlength103) | Path Too Long | 🔴 Error |  |
| [PATHLENGTH104](#pathlength104) | Mixed Case Path | 🔵 Recommendation |  |

---
## Rule Details

### PATHLENGTH102
**🟡 Deep Nesting**  
**Severity**: Warning

#### What This Checks
Warning when a file path has more than 8 nested folder levels. Very deep folder structures can cause compatibility issues on some systems.

#### How to Fix
Flatten your folder structure by removing unnecessary subfolders. Move files closer to the pack root while keeping logical organization.

#### Technical Details
Data contains the depth count (number of directory segments).

### PATHLENGTH103
**🔴 Path Too Long**  
**Severity**: Error

#### What This Checks
Error when a file's full path exceeds platform limits (typically 255 characters). Shorten folder and file names to ensure compatibility.

#### How to Fix
Shorten folder and file names to keep the total path under 255 characters. Use abbreviations where possible and avoid deeply nested structures.

#### Technical Details
Data contains the path length in characters.

### PATHLENGTH104
**🔵 Mixed Case Path**  
**Severity**: Recommendation

#### What This Checks
Recommendation to use only lowercase letters in file and folder names. Mixed case can cause issues on case-sensitive file systems.

#### How to Fix
Rename files and folders to use only lowercase letters. This prevents issues on case-sensitive systems like Linux. Example: 'MyTexture.png' → 'mytexture.png'.

#### Technical Details
Data contains the path with mixed case characters.
