---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Pack Icon"
description: "Documentation for Pack Icon validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Pack Icon Validation Rules
Validates behavior and resource pack icons (pack_icon.png) for correct format, size, and placement. The icon is shown in the pack selection screens.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CPACKICON101](#cpackicon101) | Missing Icon | 🟡 Warning |  |
| [CPACKICON102](#cpackicon102) | Multiple Icons | 🟡 Warning |  |
| [CPACKICON103](#cpackicon103) | Invalid Format | 🔴 Error |  |
| [CPACKICON104](#cpackicon104) | Invalid Size | 🟡 Warning |  |

---
## Rule Details

### CPACKICON101
**🟡 Missing Icon**  
**Severity**: Warning

#### What This Checks
Warning when no pack_icon.png file is found in the pack root. A pack icon helps players identify your content.

#### Technical Details
Data contains the pack path missing the icon.

### CPACKICON102
**🟡 Multiple Icons**  
**Severity**: Warning

#### What This Checks
Warning when multiple pack icon files are found. Only one pack_icon.png should exist in each pack root.

#### Technical Details
Data contains the paths to the multiple icon files.

### CPACKICON103
**🔴 Invalid Format**  
**Severity**: Error

#### What This Checks
Error when the pack icon file is not a valid PNG image. Ensure the file is properly formatted.

#### Technical Details
Data contains the path to the invalid icon file.

### CPACKICON104
**🟡 Invalid Size**  
**Severity**: Warning

#### What This Checks
Warning when the pack icon is not the expected dimensions. Pack icons should be square (typically 256x256 pixels for best display).

#### Technical Details
Data contains the actual dimensions found.
