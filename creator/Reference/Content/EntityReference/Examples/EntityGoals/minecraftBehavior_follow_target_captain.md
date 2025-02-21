---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_target_captain"
description: "Describes the minecraft:behavior.follow_target_captain ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_target_captain

Allows mob to move towards its current target captain.

> [!Note]
> Requires a entity to be labeled as a captain in a group. An example of this is the `minecraft:is_illager_captain` component used in the `pillager.json` entity definition.


## Follow Target Captain Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| follow_distance | 0 | Decimal number | Defines the distance in blocks the mob will stay from its target while following. | Pillager: `5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Pillager: `5` | 
| speed_multiplier | *not set* | Decimal number |  | Pillager: `0.8` | 
| within_radius | 0 | Decimal number | Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it. | Pillager: `64` | 

## Samples

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)


```json
"minecraft:behavior.follow_target_captain": {
  "priority": 5,
  "speed_multiplier": 0.8,
  "within_radius": 64,
  "follow_distance": 5
}
```
