---
author: mammerla
ms.author: mikeam
title: "Validation Rules - World Icon"
description: "Documentation for World Icon validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# World Icon Validation Rules
Validates world template icons (world_icon.jpeg) for correct format, size, and placement. The icon is shown in the world selection screen.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CWI101](#cwi101) | Missing Icon | 🟡 Warning |  |
| [CWI102](#cwi102) | Multiple Icons | 🟡 Warning |  |
| [CWI103](#cwi103) | Invalid Format | 🔴 Error |  |
| [CWI104](#cwi104) | Invalid Size | 🟡 Warning |  |

---
## Rule Details

### CWI101
**🟡 Missing Icon**  
**Severity**: Warning

#### What This Checks
Warning when no world_icon.jpeg file is found in the world template. A world icon helps players identify the world in their list.

#### Technical Details
Data contains the world folder path missing the icon.

### CWI102
**🟡 Multiple Icons**  
**Severity**: Warning

#### What This Checks
Warning when multiple world icon files are found. Only one world_icon.jpeg should exist in the root of the world folder.

#### Technical Details
Data contains the paths to multiple icon files.

### CWI103
**🔴 Invalid Format**  
**Severity**: Error

#### What This Checks
Error when the world icon file is not a valid image. The file must be a properly formatted JPEG image.

#### Technical Details
Data contains the path to the invalid icon file.

### CWI104
**🟡 Invalid Size**  
**Severity**: Warning

#### What This Checks
Warning when the world icon is not the expected dimensions. World icons should be square (typically 256x256 or 128x128 pixels).

#### Technical Details
Data contains the actual dimensions found.
