---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_outdoors
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_outdoors

`minecraft:behavior.move_outdoors` allows an entity to move outdoors.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| goal_radius| 0.500000| Decimal| The radius away from the target block to count as reaching the goal. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_count| 0.000000| Integer| The amount of times to try finding a random outdoors position before failing. |
| search_height| 0.000000| Integer| The y range to search for an outdoors position for. |
| search_range| 0.000000| Integer| The x and z range to search for an outdoors position for. |
| speed_multiplier| 0.500000| Decimal| The movement speed modifier to apply to the entity while it is moving outdoors. |
| timeout_cooldown| 8.000000| Decimal| The cooldown time in seconds before the goal can be reused after pathfinding fails. |

## Example

```json
"minecraft:behavior.move_outdoors": {
    "goal_radius": 0.5,
    "search_count": 8.0,
    "search_height": 0.5,
    "search_range": 8.0,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

## Vanilla mob examples

### villager_v2

```json
"minecraft:behavior.move_outdoors": {
    "priority": 2,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

### Vanilla mobs using `move_outdoors`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [villager_v2](../../../../source/vanillabehaviorpack_snippets/entities/villager_v2.md)
