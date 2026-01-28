---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Blocks Catalog"
description: "Documentation for Blocks Catalog validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Blocks Catalog Validation Rules
Validates blocks.json catalog files in resource packs. Checks for unused block resource identifiers and vanilla overrides. Can remove unused block resource identifiers.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [BLOCKSCAT53](#blockscat53) | Block Resource Identifier | ℹ️ Info |  |
| [BLOCKSCAT100](#blockscat100) | Unused Block Resource | 🔵 Recommendation | ✅ |
| [BLOCKSCAT101](#blockscat101) | Block Catalog Found | ℹ️ Info |  |
| [BLOCKSCAT102](#blockscat102) | Vanilla Override Block | 🔵 Recommendation |  |

---
## Rule Details

### BLOCKSCAT53
**ℹ️ Block Resource Identifier**  
**Severity**: Info

#### What This Checks
Aggregates information about block resource identifiers defined in the blocks catalog.

#### Technical Details
Data field contains the block identifier string.

### BLOCKSCAT100
**🔵 Unused Block Resource**  
**Severity**: Recommendation

#### What This Checks
A block resource identifier is defined in blocks.json but not referenced by any block in the project. Consider removing it to reduce file size.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Remove unused block resource identifiers.

#### Technical Details
Data field contains the unused block identifier string.

### BLOCKSCAT101
**ℹ️ Block Catalog Found**  
**Severity**: Info

#### What This Checks
A blocks catalog resource file (blocks.json) was found in the resource pack.

### BLOCKSCAT102
**🔵 Vanilla Override Block**  
**Severity**: Recommendation

#### What This Checks
A block resource identifier overrides a vanilla Minecraft block, which is not recommended as it may cause unexpected behavior.

#### Technical Details
Data field contains the block identifier that overrides a vanilla block.
