---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_indoors
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_indoors

`minecraft:behavior.move_indoors` allows an entity to move indoors.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 0.800000| Decimal| The movement speed modifier to apply to the entity while it is moving indoors. |
| timeout_cooldown| 8.000000| Decimal| The cooldown time in seconds before the goal can be reused after pathfinding fails. |

## Example

```json
"minecraft:behavior.move_indoors": {
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

## Vanilla mob examples

### villager_v2

```json
"minecraft:behavior.move_indoors": {
    "priority": 6,
    "speed_multiplier": 0.8,
    "timeout_cooldown": 8.0
}
```

### Vanilla mobs using `move_indoors`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [villager_v2](../../../../source/vanillabehaviorpack_snippets/entities/villager_v2.md)
