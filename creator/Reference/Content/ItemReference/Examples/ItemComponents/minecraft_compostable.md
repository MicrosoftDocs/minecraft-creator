---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:compostable"
description: "Describes the minecraft:compostable item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:compostable

Specifies that an item is compostable and provides the chance of creating a composting layer in the composter.

> [!Note]
> This item requires a format version of at least 1.21.60.


## Item Compostable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| composting_chance | *not set* | Integer number | The chance of this item to create a layer upon composting with the composter. Valid value range is 1 - 100 inclusive Value must be >= 1. Value must be <= 100. | Red Shrub: `30`, Shelf Mushroom: `65` | 

## Samples

#### [Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/red_shrub.json)


```json
"minecraft:compostable": {
  "composting_chance": 30
}
```

#### [Shelf Mushroom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/shelf_mushroom.json)


```json
"minecraft:compostable": {
  "composting_chance": 65
}
```
