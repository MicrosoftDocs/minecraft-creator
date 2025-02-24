---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:bribeable"
description: "Describes the minecraft:bribeable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:bribeable

Defines the way an entity can get into the 'bribed' state.


## Bribeable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bribe_cooldown | 2 | Decimal number | Time in seconds before the Entity can be bribed again. |  | 
| bribe_items | *not set* | Array of strings | The list of items that can be used to bribe the entity. | Dolphin: `["fish","salmon"]` | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:bribeable": {
  "bribe_items": [
    "fish",
    "salmon"
  ]
}
```
