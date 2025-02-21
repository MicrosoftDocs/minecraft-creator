---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.float_wander"
description: "Describes the minecraft:behavior.float_wander ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.float_wander

Allows the mob to float around like the Ghast.


## Float Wander Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| float_duration | *not set* | Range of integers | Range of time in seconds the mob will float around before landing and choosing to do something else | Bat: `[0.1,0.35]` | 
| float_wander_has_move_control | true | Boolean true/false | If true, the MoveControl flag will be added to the behavior which means that it can no longer be active at the same time as other behaviors with MoveControl. |  | 
| must_reach | false | Boolean true/false | If true, the point has to be reachable to be a valid target | Ghast: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ghast: `2` | 
| random_reselect | false | Boolean true/false | If true, the mob will randomly pick a new point while moving to the previously selected one | Bat: `true` | 
| use_home_position_restriction | true | Boolean true/false | If true, the mob will respect home position restrictions when choosing new target positions. If false, it will choose target position without considering home restrictions |  | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 | Bat: `10` | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 | Bat: `7` | 
| y_offset | 0 | Decimal number | Height in blocks to add to the selected target position | Bat: `-2` | 

## Samples

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:behavior.float_wander": {
  "xz_dist": 10,
  "y_dist": 7,
  "y_offset": -2,
  "random_reselect": true,
  "float_duration": [
    0.1,
    0.35
  ]
}
```

#### [Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ghast.json)


```json
"minecraft:behavior.float_wander": {
  "priority": 2,
  "must_reach": true
}
```
