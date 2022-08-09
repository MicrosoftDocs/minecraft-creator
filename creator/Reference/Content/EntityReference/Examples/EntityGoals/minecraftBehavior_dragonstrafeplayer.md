---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.dragonstrafeplayer
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.dragonstrafeplayer

`minecraft:behavior.dragonstrafeplayer` allows this entity to fly around looking for a player to shoot fireballs at. Can only be used by the Ender Dragon.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| active_speed| 1| Decimal| The speed this entity moves when this behavior has started or while it's active. |
| fireball_range| 64| Decimal| Maximum distance of this entity's fireball attack while strafing. |
| flight_speed| 0.6| Decimal| The speed this entity moves while this behavior is not active. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| switch_direction_probability| 0.125| Decimal| Percent chance to to switch this entity's strafe direction between clockwise and counterclockwise. Switch direction chance occurs each time a new target is chosen (1.0 = 100%). |
| target_in_range_and_in_view_time| 0.25| Decimal| Time (in seconds) the target must be in fireball range, and in view [ie, no solid terrain in-between the target and this entity], before a fireball can be shot. |
| target_zone| [10, 150]| Range [a, b]| Minimum and maximum distance, from the target, this entity can use this behavior. |
| turn_speed| 0.7| Decimal| The speed at which this entity turns while using this behavior. |
| view_angle| 10| Decimal| The target must be within "view_angle" degrees of the dragon's current rotation before a fireball can be shot. |

## Example

```json
"minecraft:behavior.dragonstrafeplayer": {
    "active_speed": 11,
    "fireball_range": 64,
    "flight_speed": 0.6,
    "switch_direction_probability": 0.125,
    "target_in_range_and_in_view_time": 0.25,
    "target_zone": [10, 150],
    "turn_speed": 0.7,
    "view_angle": 10
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:behavior.dragonstrafeplayer": {
    "priority": 2
}
```

## Vanilla entities using `dragonstrafeplayer`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
