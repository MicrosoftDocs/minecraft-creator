---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:home"
description: "Describes the minecraft:home entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:home

Saves a home position for when the entity is spawned. This component allows entities like bees to remember and return to a specific location such as a hive or nest.


## Home Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| home_block_list | *not set* | Array of strings | Optional list of blocks that can be considered a valid home. If no such block longer exists at that position,<br>											the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1. |  | 
| restriction_radius | 0 | Integer number | Optional radius that the entity will be restricted to in relation to its home. |  | 
| restriction_type | none | String | Defines how the entity will be restricted to its home position. Valid values are: 'none' (no restriction), 'random_movement' (restricts random wandering to be near home), and 'all_movement' (restricts all movement to be near home, though entities can always move closer to home if they are too far away). This item requires a format version of at least undefined. |  | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/blob/preview/behavior_pack/entities/bee.json)


```json
"minecraft:home": {
  "restriction_type": "random_movement",
  "restriction_radius": 22,
  "home_block_list": [
    "minecraft:bee_nest",
    "minecraft:beehive"
  ]
},
```
