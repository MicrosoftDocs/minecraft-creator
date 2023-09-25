---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.play
description: "A reference document detailing the 'behavior.play' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.play

`minecraft:behavior.play` compels the mob to play with other mobs by chasing each other and moving around randomly.

> [!NOTE]
> This behavior can only be used by the `villager` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| chance_to_start| 0.00| Decimal| Percent chance that the mob will start this goal, from 0 to 1. |
| follow_distance| 2| Integer| The distance (in blocks) that the mob tries to be in range of the friend it's following. |
| friend_search_area| [6, 3, 6]| Vector [a, b, c] |The dimensions of the AABB used to search for a potential friend to play with. |
| friend_types|*not set*| Array| The entity type(s) to consider when searching for a potential friend to play with. |
| max_play_duration_seconds| 50.00| Decimal| The max amount of seconds that the mob will play for before exiting the Goal. |
| random_pos_search_height| 3| Integer| The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1. |
| random_pos_search_range| 16| Integer| The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1. |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.play":{
    "priority": 2,
    "speed_multiplier": 1.0
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.play": {
          "priority": 8,
          "speed_multiplier": 0.32
        }
```

## Vanilla entities using `minecraft:behavior.play`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
