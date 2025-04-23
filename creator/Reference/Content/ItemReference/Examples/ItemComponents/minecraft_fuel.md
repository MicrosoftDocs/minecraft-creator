---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:fuel"
description: "Describes the minecraft:fuel item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:fuel

Allows this item to be used as fuel in a furnace to 'cook' other items.

## Alternate Simple Representations

This item can also be represented as a `Decimal number`.


## Fuel Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| duration | *not set* | Decimal number | How long in seconds will this fuel cook items for. Value must be >= 0.05. | My Sword Chuck: `3` | 

## Samples

#### [My Sword Chuck](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_chuck.json)


```json
"minecraft:fuel": {
  "duration": 3
}
```
