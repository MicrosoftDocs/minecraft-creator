---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:digger"
description: "Describes the minecraft:digger item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:digger

Allows a creator to determine how quickly an item can dig specific blocks.


## Digger Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| destroy_speeds | *not set* | Array of objects | A list of blocks to dig with correlating speeds of digging. |  | 
| use_efficiency | *not set* | Boolean true/false | Determines whether this item should be impacted if the efficiency enchantment is applied to it. |  | 

## Samples


```json
"minecraft:digger": {
  "minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
      {
        "speed": 6,
        "block": {
          "tags": "query.any_tag( 'wood' )"
        }
      },
      {
        "block": "minecraft:coal_ore",
        "speed": 2
      }
    ]
  }
}
```
