---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.inspect_bookshelf
description: "A reference document detailing the 'behavior.inspect_bookshelf' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.inspect_bookshelf

`minecraft:behavior.inspect_bookshelf` compels an entity to look at and inspect a bookshelf.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_count| 10| Integer| The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |
|search_height| 1| Integer|  The height that the mob will search for bookshelves. |
| search_range| 0| Integer| Distance in blocks the mob will look for books to inspect. |
|speed_multiplier| 1.0| Decimal|  Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.inspect_bookshelf":{
    "priority": 4,
    "speed_multiplier": 1.10,
    "search_range": 10,
    "search_height": 1,
    "search_count" : 10,
    "goal_radius" : 16.0
}
```

## Vanilla entities examples

### villager_v2 librarian

```json
"minecraft:behavior.inspect_bookshelf": {
          "priority": 8,
          "speed_multiplier": 0.6,
          "search_range": 4,
          "search_height": 3,
          "goal_radius": 0.8,
          "search_count": 0
        }
```

## Vanilla entities using `minecraft:behavior.inspect_bookshelf`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
