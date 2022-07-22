---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.ranged_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.ranged_attack

`minecraft:behavior.ranged_attack` allows an entity to attack by using ranged shots. `charge_shoot_trigger` must be greater than 0 to enable charged up burst-shot attacks.

## Parameter

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack_interval| 0| Decimal| Alternative to "attack_interval_min" & "attack_interval_max". Consistent reload-time (in seconds), when not using a charged shot. Does not scale with target-distance. |
| attack_interval_max| 0| Decimal| Maximum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance. |
| attack_interval_min| 0| Decimal| Minimum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance. |
| attack_radius| 0| Decimal| Minimum distance to target before this entity will attempt to shoot. |
| attack_radius_min| 0| Decimal| Minimum distance the target can be for this mob to fire. If the target is closer, this mob will move first before firing |
| burst_interval| 0| Decimal| Time (in seconds) between each individual shot when firing a burst of shots from a charged up attack. |
| burst_shots| 1| Integer| Number of shots fired every time the attacking entity uses a charged up attack. |
| charge_charged_trigger| 0| Decimal| Time (in seconds, then add "charge_shoot_trigger"), before a charged up attack is done charging. Charge-time decays while target is not in sight. |
| charge_shoot_trigger| 0| Decimal| Amount of time (in seconds, then doubled) a charged shot must be charging before reloading burst shots. Charge-time decays while target is not in sight. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| ranged_fov| 90| Decimal| Field of view (in degrees) when using sensing to detect a target for attack. |
| set_persistent| false| Boolean| Allows the actor to be set to persist upon targeting a player |
| speed_multiplier| 1| Decimal| During attack behavior, this multiplier modifies the entity's speed when moving toward the target. |
| swing| false| Boolean| If a swing animation (using variable.attack_time) exists, this causes the actor to swing their arm(s) upon firing the ranged attack. |
| target_in_sight_time| 1| Decimal| Minimum amount of time (in seconds) the attacking entity needs to see the target before moving toward it. |
| x_max_rotation| 30| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_head_rotation| 30| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |

## Example

```json
"minecraft:behavior.ranged_attack": {
    "priority": 8,
    "attack_interval_min": 1,
    "attack_interval_max": 1,
    "attack_radius": 8,
    "attack_radius_min": 4,
    "speed_multiplier": 1.0,
    "target_in_sight_time": 0.1
}
```

## Vanilla mob examples

### blaze

```json
"minecraft:behavior.ranged_attack": {
    "priority": 3,
    "burst_shots": 3,
    "burst_interval": 0.3,
    "charge_charged_trigger": 0.0,
    "charge_shoot_trigger": 4.0,
    "attack_interval_min": 3.0,
    "attack_interval_max": 5.0,
    "attack_radius": 16.0
}
```

### Vanilla mobs using `ranged_attack`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [ghast](../../../../source/vanillabehaviorpack_snippets/entities/ghast.md)
- [llama](../../../../source/vanillabehaviorpack_snippets/entities/llama.md)
- [piglin](../../../../source/vanillabehaviorpack_snippets/entities/piglin.md)
- [pillager](../../../../source/vanillabehaviorpack_snippets/entities/pillager.md)
- [shulker](../../../../source/vanillabehaviorpack_snippets/entities/shulker.md)
- [skeleton](../../../../source/vanillabehaviorpack_snippets/entities/skeleton.md)
- [snow_golem](../../../../source/vanillabehaviorpack_snippets/entities/snow_golem.md)
- [stray](../../../../source/vanillabehaviorpack_snippets/entities/stray.md)
- [witch](../../../../source/vanillabehaviorpack_snippets/entities/witch.md)
