---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:dyeable"
description: "Describes the minecraft:dyeable item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:dyeable

Enables players to dye this item using dyes in a crafting grid, like leather armor. Configure the default color when undyed. The item stores its color in NBT data and renders with the player-chosen tint, enabling customizable cosmetic appearances for armor and equipment.

> [!Note]
> This item requires a format version of at least 1.21.30.


## Item Dyeable Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| default_color | [255, 255, 255] | String |  | 
| default_color (as Array of numbers) | *not set* | Array of numbers |  | 

## Samples


```json
"minecraft:dyeable": {
  "default_color": "#175882"
}
```
