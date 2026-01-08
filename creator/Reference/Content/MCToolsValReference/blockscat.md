---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:blockscat"
description: "Describes the minecraft:blockscat mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:blockscat

Validates blocks.json catalog files in resource packs. Checks for unused block resource identifiers and vanilla overrides. Can remove unused block resource identifiers.


## Blocks Catalog Validation Rules


### BLOCKSCAT100: Unused Block Resource

**Rule ID:** `BLOCKSCAT100`

**Severity:** Recommendation

**What it checks:** A block resource identifier is defined in blocks.json but not referenced by any block in the project. Consider removing it to reduce file size.

**Technical details:** Data field contains the unused block identifier string.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### BLOCKSCAT101: Block Catalog Found

**Rule ID:** `BLOCKSCAT101`

**Severity:** Info

**What it checks:** A blocks catalog resource file (blocks.json) was found in the resource pack.


### BLOCKSCAT102: Vanilla Override Block

**Rule ID:** `BLOCKSCAT102`

**Severity:** Recommendation

**What it checks:** A block resource identifier overrides a vanilla Minecraft block, which is not recommended as it may cause unexpected behavior.

**Technical details:** Data field contains the block identifier that overrides a vanilla block.


### BLOCKSCAT53: Block Resource Identifier

**Rule ID:** `BLOCKSCAT53`

**Severity:** Info

**What it checks:** Aggregates information about block resource identifiers defined in the blocks catalog.

**Technical details:** Data field contains the block identifier string.
