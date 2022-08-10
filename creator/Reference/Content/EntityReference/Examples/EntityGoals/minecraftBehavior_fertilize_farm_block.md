---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.fertilize_farm_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.fertilize_farm_block

`minecraft:behavior.fertilize_farm_block` allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| goal_radius| 1.50| Decimal| Distance in blocks within the mob considers it has reached it's target position.  |
| max_fertilizer_usage| 1| Integer| The maximum number of times the mob will use fertilzer on the target block. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_cooldown_max_seconds| 8.0| Decimal| The maximum amount of time in seconds that the goal can take before searching again. The time is chosen between 0 and this number. |
| search_count| 9| Integer| The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |
| search_height| 1| Integer| The Height in blocks the mob will search within to find a valid target position. |
| search_range| 1| Integer| The distance in blocks the mob will search within to find a valid target position. |
| speed_multiplier| 0.50| Decimal| Movement speed multiplier of the mob when using this Goal. |

## Example

```json
"minecraft:behavior.fertilize_farm_block": {
    "goal_radius": 1.50,
    "max_fertilizer_usage": 1,
    "time_until_eat": 3,
    "search_cooldown_max_seconds": 8.0,
    "search_count": 9,
    "search_height": 1,
    "search_range": 1,
    "speed_multiplier": 0.50
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.fertilize_farm_block": {
    "priority": 8
}
```

## Vanilla entities using `fertilize_farm_block`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
