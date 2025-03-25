---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:stacked_by_data"
description: "Describes the minecraft:stacked_by_data item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:stacked_by_data

The stacked_by_data component determines whether the same items with different aux values can stack. Also defines whether the item entities can merge while floating in the world.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Stacked By Data Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Boolean true/false | Determines whether the same item with different aux values can stack. Also defines whether the item entities can merge while floating in the world. |  | 

## Samples

#### [AppleEnchanted](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/appleEnchanted.json)


```json
"minecraft:stacked_by_data": true
```
