---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.play"
description: "Describes the minecraft:behavior.play ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.play

Allows the mob to play with other mobs by chasing each other and moving around randomly.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Play Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance_to_start | 0 | Decimal number | Percent chance that the mob will start this goal, from 0 to 1. |  | 
| follow_distance | 2 | Integer number | The distance (in blocks) that the mob tries to be in range of the friend it's following. |  | 
| friend_search_area | [6, 3, 6] | x, y, z coordinate array | The dimensions of the AABB used to search for a potential friend to play with. |  | 
| friend_types | *not set* | Minecraft filter | The entity type(s) to consider when searching for a potential friend to play with. | Villager V2: `[{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"villager"},{"test":"is_baby","subject":"other","operator":"==","value":true}]}}]` | 
| max_play_duration_seconds | 50 | Decimal number | The max amount of seconds that the mob will play for before exiting the Goal. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `8` | 
| random_pos_search_height | 3 | Integer number | The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1. |  | 
| random_pos_search_range | 16 | Integer number | The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. | Villager V2: `0.6`, Villager: `0.32` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.play": {
  "priority": 8,
  "speed_multiplier": 0.6,
  "friend_types": [
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "villager"
          },
          {
            "test": "is_baby",
            "subject": "other",
            "operator": "==",
            "value": true
          }
        ]
      }
    }
  ]
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.play": {
  "priority": 8,
  "speed_multiplier": 0.32
}
```
