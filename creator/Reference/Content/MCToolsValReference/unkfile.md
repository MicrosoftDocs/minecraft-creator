---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Unknown Files"
description: "Documentation for Unknown Files validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Unknown Files Validation Rules
Identifies files with unrecognized extensions that are not standard Minecraft content types. Unknown files may indicate misplaced assets or incompatible content.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [UNKFILE102](#unkfile102) | Unknown File Type | 🔴 Error |  |

---
## Rule Details

### UNKFILE102
**🔴 Unknown File Type**  
**Severity**: Error

#### What This Checks
Error when a file with an unrecognized extension is found in the pack. Minecraft only supports specific file types (JSON, PNG, TGA, OGG, FSB, etc.). Remove or relocate unknown files.

#### Technical Details
Data contains the file extension or path of the unknown file.
