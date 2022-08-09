---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.go_home
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.go_home

`minecraft:behavior.go_home` allows an entity to travel back to where it was spawned at and trigger events upon arrival.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| calculate_new_path_radius| 2.00| Decimal| Distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home. |
| goal_radius| 0.50| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
| interval| 120| Integer| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal. |
| on_failed| | Trigger| Event(s) to run when this goal fails. |
| on_home| | Trigger| Event(s) to run when this mob gets home. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.go_home":{
    "priority": 7,
    "goal_radius": 0.5,
    "interval": 60,
    "speed_multiplier": 1.0,
    "on_home": {
        "event": "minecraft:sleep",
        "target": "self"
    }
}
```

## Vanilla entities examples

### turtle

```json
"minecraft:behavior.go_home": {
    "priority": 1,
    "speed_multiplier": 1.0,
    "interval": 700,
    "goal_radius": 4.0,
    "on_home": {
        "event": "minecraft:go_lay_egg",
        "target": "self"
    }
}
```

## Vanilla entities using `minecraft:behavior.go_home`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
