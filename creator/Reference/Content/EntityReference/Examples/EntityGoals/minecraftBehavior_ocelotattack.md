---
author: docsbryce
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.ocelotattack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.ocelotattack

`minecraft:behavior.ocelotattack` allows an entity to attack by sneaking and pouncing.

## Parameter

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_time| 1| Decimal| Time (in seconds) between attacks. |
| max_distance| 15| Decimal| Max distance from the target, this entity will use this attack behavior. |
| max_sneak_range| 15| Decimal| Max distance from the target, this entity starts sneaking. |
| max_sprint_range| 4| Decimal| Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking). |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| reach_multiplier| 2| Decimal| Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. |
| sneak_speed_multiplier| 0.6| Decimal| Modifies the attacking entity's movement speed while sneaking. |
| sprint_speed_multiplier| 1.33| Decimal| Modifies the attacking entity's movement speed while sprinting. |
| walk_speed_multiplier| 0.8| Decimal| Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range. |
| x_max_rotation| 30| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_head_rotation| 30| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |

## Example

```json
"minecraft:behavior.ocelotattack": {
    "priority": 4,
    "cooldown_time": 1,
    "x_max_rotation": 15,
    "y_max_head_rotation": 30,
    "max_distance": 15,
    "max_sneak_range": 15,
    "max_sprint_range": 4,
    "reach_multiplier": 2,
    "sneak_speed_multiplier": 0.6,
    "sprint_speed_multiplier": 1.33,
    "walk_speed_multiplier": 0.8
}
```

## Vanilla mob examples

### ocelot

```json
"minecraft:behavior.ocelotattack": {
    "priority": 4,
    "cooldown_time": 1.0,
    "x_max_rotation": 30.0,
    "y_max_head_rotation": 30.0,
    "max_distance": 15.0,
    "max_sneak_range": 15.0,
    "max_sprint_range": 4.0,
    "reach_multiplier": 2.0,
    "sneak_speed_multiplier": 0.6,
    "sprint_speed_multiplier": 1.33,
    "walk_speed_multiplier": 0.8
}
```

### Vanilla mobs using `ocelotattack`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
