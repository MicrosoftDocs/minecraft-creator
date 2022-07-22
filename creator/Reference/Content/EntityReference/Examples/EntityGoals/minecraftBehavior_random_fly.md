---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.random_fly
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.random_fly

`minecraft:behavior.random_fly` allows an entity to fly to a random spot.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| can_land_on_trees| true|Boolean|  If true, the mob can stop flying and land on a tree instead of the ground. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|xz_dist| 10| Integer| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1. |
| y_dist| 7| Integer| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1. |

## Example

```json
"minecraft:behavior.random_fly":{
    "priority": 2,
    "can_land_on_tree":true,
    "speed_multiplier": 1.2,
    "avoid_damage_blocks": false,
    "xy_dist": 3,
    "y_dist": 10,
    "y_offset": 0
}
```

## Vanilla entities examples

### parrot

```json
"minecraft:behavior.random_fly": {
          "priority": 2,
          "xz_dist": 15,
          "y_dist": 1,
          "y_offset": 0,
          "speed_multiplier": 1.0,
          "can_land_on_trees": true,
          "avoid_damage_blocks": true
        },

``````

## Vanilla entities using `minecraft:behavior.random_fly`

- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
