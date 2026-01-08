---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:damage"
description: "Describes the minecraft:damage item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:damage

The damage component determines how much extra damage the item does on attack.

## Alternate Simple Representations

This item can also be represented as a `Integer number`.


## Damage Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Integer number | The amount of extra damage this item deals when attacking. This value is added to the base attack damage. Must be a positive integer. |  | 

## Samples


```json
"minecraft:damage": {
  "minecraft:damage": 2
}
```
