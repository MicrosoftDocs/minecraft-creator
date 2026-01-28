---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Unlinked Items"
description: "Documentation for Unlinked Items validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Unlinked Items Validation Rules
Identifies content items that are defined but not referenced anywhere in the project. Also detects dependencies on vanilla Minecraft content that may change.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [UNLINK191](#unlink191) | Unused Item | 🟡 Warning |  |
| [UNLINK205](#unlink205) | Vanilla Reference | 🔵 Recommendation |  |

---
## Rule Details

### UNLINK191
**🟡 Unused Item**  
**Severity**: Warning

#### What This Checks
Warning when a defined resource (entity, block, item, etc.) is not referenced by any other content. The item may be unused or the reference may be missing.

#### Technical Details
Data contains the identifier of the unused item.

### UNLINK205
**🔵 Vanilla Reference**  
**Severity**: Recommendation

#### What This Checks
Recommendation to avoid direct references to vanilla Minecraft items. Vanilla content may change between game versions, potentially breaking your add-on.

#### Technical Details
Data contains the vanilla item identifier being referenced.
