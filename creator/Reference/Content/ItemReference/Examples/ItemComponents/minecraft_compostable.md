---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:compostable"
description: "Describes the minecraft:compostable item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:compostable

Specifies that an item is compostable and provides the chance of creating a composting layer in the composter.

> [!Note]
> This item requires a format version of at least 1.21.60.


## Compostable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| composting_chance | *not set* | Integer number | The chance of this item to create a layer upon composting with the composter. Valid value range is 1 - 100 inclusive Value must be >= 1. Value must be <= 100. |  | 

## Samples

#### [Bag O Leaves](https://github.com/microsoft/minecraft-samples/tree/main/creator_camp/behavior_packs/creator_camp/items/bag_o_leaves.json)


```json
"minecraft:compostable": {
  "composting_chance": 100
}
```
