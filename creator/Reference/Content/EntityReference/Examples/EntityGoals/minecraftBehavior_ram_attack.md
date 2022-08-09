---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.ram_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.ram_attack

`minecraft:behavior.ram_attack` allows the mob to search for a random target and, if a direct path exists between the mob and the target, it will perform a charge. If the attack hits, the target will be knocked back based on the mob's speed.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| baby_knockback_modifier| 0.333333| Decimal| The modifier to knockback that babies have. |
| cooldown_range| [10, 20]| Range [a, b]| Minimum and maximum cooldown time-range (positive, in seconds) between each attempted ram attack. |
| knockback_force| 5.000000| Decimal| The force of the knockback of the ram attack. |
| knockback_height| 0.100000| Decimal| The height of the knockback of the ram attack. |
| min_ram_distance| 0.000000| Decimal| The minimum distance at which the mob can start a ram attack. |
| on_start| | Trigger| The event to trigger when attacking |
| pre_ram_sound| | String| The sound to play when an entity is about to perform a ram attack. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| ram_distance| 0.000000| Decimal| The distance at which the mob start to run with ram speed. |
| ram_impact_sound| | String| The sound to play when an entity is impacting on a ram attack. |
| ram_speed| 2.000000| Decimal| Sets the entity's speed when charging toward the target. |
| run_speed| 1.000000| Decimal| Sets the entity's speed when running toward the target. |

## Example

```json
"minecraft:behavior.ram_attack":{
    "ram_distance": 5,
    "min_ram_distance": 2.0,
    "knockback_force": 10.0,
    "baby_knockback_modifier": 4,
    "knockback_height": 0.1,
    "run_speed": 1.0,
    "ram_speed": 2.0 ,
    "pre_ram_sound": "pre_ram",
    "ram_impact_sound": "ram_impact" ,
    "cooldown_range": [10.0, 20.0]
}
```

## Vanilla Mob examples

### goat

```json
"minecraft:behavior.ram_attack": {
    "priority": 5,
    "run_speed": 0.7,
    "ram_speed": 1.8,
    "min_ram_distance": 4,
    "ram_distance": 7,
    "knockback_force": 2.5,
    "knockback_height": 0.04,
    "pre_ram_sound": "pre_ram",
    "ram_impact_sound": "ram_impact",
    "cooldown_range": [
        30,
        300
    ],
    "on_start": [
        {
            "event": "start_event",
            "target": "self"
        }
    ]
}
```

## Vanilla Mobs using `minecraft:behavior.ram_attack`

- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
