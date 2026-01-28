---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Project Integrity"
description: "Documentation for Project Integrity validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Project Integrity Validation Rules
Validates the structural integrity of the project, checking for orphaned files that don't belong to any pack and detecting nested manifest structures that indicate improperly organized packs.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [PRJINT101](#prjint101) | Extraneous Content | 🟡 Warning |  |
| [PRJINT102](#prjint102) | Nested Pack Structure | 🔴 Error |  |

---
## Rule Details

### PRJINT101
**🟡 Extraneous Content**  
**Severity**: Warning

#### What This Checks
The project contains files or folders that are not part of any recognized pack structure. These orphaned files may have been accidentally included or placed in the wrong location. Review and either move them to the correct location or remove them.

#### Technical Details
Data contains the relative path to the extraneous file or folder.

### PRJINT102
**🔴 Nested Pack Structure**  
**Severity**: Error

#### What This Checks
A pack contains multiple manifest.json files, indicating a nested pack structure. Each pack should have exactly one manifest.json at its root. Nested packs are not allowed - extract any nested packs to their own directories.

#### Technical Details
Data contains the path to the nested manifest.json file.
