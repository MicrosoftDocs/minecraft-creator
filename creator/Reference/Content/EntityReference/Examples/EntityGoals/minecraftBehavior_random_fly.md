---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_fly"
description: "Describes the minecraft:behavior.random_fly ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_fly

Allows a mob to randomly fly around.


## Random Fly Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_damage_blocks | *not set* | String |  | Parrot: `true` | 
| can_land_on_trees | true | Boolean true/false | If true, the mob can stop flying and land on a tree instead of the ground | Parrot: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Parrot: `3` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Parrot: `1` | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 | Parrot: `15` | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 | Parrot: `1` | 
| y_offset | *not set* | Decimal number |  |  | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.random_fly": {
  "priority": 3,
  "xz_dist": 15,
  "y_dist": 1,
  "y_offset": 0,
  "speed_multiplier": 1,
  "can_land_on_trees": true,
  "avoid_damage_blocks": true
}
```
