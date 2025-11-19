---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:home"
description: "Describes the minecraft:home entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:home

Saves a home position for when the the entity is spawned.


## Home Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| home_block_list | *not set* | Array of strings | Optional list of blocks that can be considered a valid home. If no such block longer exists at that position,<br>											the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1. |  | 
| restriction_radius | 0 | Integer number | Optional radius that the entity will be restricted to in relation to its home. |  | 
| restriction_type | none | String | Defines how the the entity will be restricted to its home position. The possible values are:<br>												<br>- "none", which poses no restriction.<br>												<br>- "random_movement", which restricts randomized movement to be around the home position.<br>												<br>- "all_movement", which restricts any kind of movement to be around the home position.<br>													However, entities that somehow got too far away from their home will always be able to move closer to it, if prompted to do so. This item requires a format version of at least undefined. |  | 

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
