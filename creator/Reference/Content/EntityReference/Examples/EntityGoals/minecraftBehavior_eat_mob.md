---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.eat_mob
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.eat_mob

`minecraft:behavior.eat_mob` [EXPERIMENTAL BEHAVIOR] allows the entity to eat a specified mob.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| eat_animation_time| 1.000000| Decimal| Sets the time in seconds the eat animation should play for. |
| eat_mob_sound| | String| Sets the sound that should play when eating a mob. |
| loot_table| | String| The loot table for loot to be dropped when eating a mob. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| pull_in_force| 1.000000| Decimal| Sets the force which the mob-to-be-eaten is pulled towards the eating mob. |
| reach_mob_distance| 1.000000| Decimal| Sets the desired distance to be reached before eating the mob. |
| run_speed| 1.000000| Decimal| Sets the entity's speed when running toward the target. |

## Vanilla entities examples

### frog

```json
"minecraft:behavior.eat_mob": {
    "priority": 7,
    "run_speed": 2.0,
    "eat_animation_time": 0.30,
    "pull_in_force": 0.75,
    "reach_mob_distance": 1.75,
    "eat_mob_sound": "tongue",
    "loot_table": "loot_tables/entities/frog.json"
},
```

## Vanilla entities using `eat_mob`

- [frog](../../../../Source/VanillaBehaviorPack_Snippets/entities/frog.md)
