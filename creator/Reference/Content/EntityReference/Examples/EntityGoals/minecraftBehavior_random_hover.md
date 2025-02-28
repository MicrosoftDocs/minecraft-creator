---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_hover"
description: "Describes the minecraft:behavior.random_hover ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_hover

Allows the mob to hover around randomly, close to the surface.


## Random Hover Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| hover_height | *not set* | Range of integers | The height above the surface which the mob will try to maintain | Allay: `[1,4]` | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal | Allay: `1` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `9`, Bee: `12` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 | Allay: `8` | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 | Allay: `8` | 
| y_offset | 0 | Decimal number | Height in blocks to add to the selected target position | Allay: `-1` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.random_hover": {
  "priority": 9,
  "xz_dist": 8,
  "y_dist": 8,
  "y_offset": -1,
  "interval": 1,
  "hover_height": [
    1,
    4
  ]
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.random_hover": {
  "priority": 12,
  "xz_dist": 8,
  "y_dist": 8,
  "y_offset": -1,
  "interval": 1,
  "hover_height": [
    1,
    4
  ]
}
```
