---
author: docsbryce
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.stomp_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.stomp_attack

`minecraft:behavior.stomp_attack` allows an entity to attack using stomp AoE damage behavior.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack_once| false| Boolean| Allows the entity to use this attack behavior, only once EVER. |
| attack_types| N/A| String| Defines the entity types this entity will attack. |
| cooldown_time| 1| Decimal| Cooldown time (in seconds) between attacks. |
| inner_boundary_time_increase| 0.25| Decimal| Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary". |
| max_dist| N/A| Decimal| Unused. No effect on "minecraft:behavior.melee_attack". |
| max_path_time| 0.55| Decimal| Maximum base time (in seconds) to recalculate new attack path to target (before increases applied). |
| melee_fov| 90| Decimal| Field of view (in degrees) when using the sensing component to detect an attack target. |
| min_path_time| 0.2| Decimal| Minimum base time (in seconds) to recalculate new attack path to target (before increases applied). |
| no_damage_range_multiplier| 2| Decimal| Multiplied with the final AoE damage range to determine a no damage range. The stomp attack will go on cooldown if target is in this no damage range. |
| on_attack| N/A| Trigger| Defines the event to trigger when this entity successfully attacks. |
| outer_boundary_time_increase| 0.5| Decimal| Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary". |
| path_fail_time_increase| 0.75| Decimal| Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path. |
| path_inner_boundary| 16| Decimal| Distance at which to increase attack path recalculation by "inner_boundary_tick_increase". |
| path_outer_boundary| 32| Decimal| Distance at which to increase attack path recalculation by "outer_boundary_tick_increase". |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| random_stop_interval| 0| Integer| This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval". |
| reach_multiplier| 2| Decimal| Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. |
| require_complete_path| false| Boolean| Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior. |
| set_persistent| false| Boolean| Allows the actor to be set to persist upon targeting a player |
| speed_multiplier| 1| Decimal| This multiplier modifies the attacking entity's speed when moving toward the target. |
| stomp_range_multiplier| 2| Decimal| Multiplied with the base size of the entity to determine stomp AoE damage range. |
| target_dist| N/a| Decimal| Unused. No effect on "minecraft:behavior.melee_attack". |
| track_target| false| Boolean| Allows the entity to track the attack target, even if the entity has no sensing. |
| x_max_rotation| 30| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_head_rotation| 30| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |

## Example

```json
"minecraft:behavior.stomp_attack": {
    "priority": 1,
    "attack_once": 0.55,
    "attack_types": "melee",
    "cooldown_time": 1,
    "inner_boundary_time_increase": 0.25,
    "max_dist": 0.9,
    "max_path_time": 0.55,
    "melee_fov": 90,
    "min_path_time": 0.2,
    "no_damage_range_multiplier": 2.0,
    "set_persistent": false,
    "speed_multiplier": 1,
    "outer_boundary_time_increase": 0.5,
    "path_fail_time_increase": 0.75,
    "path_inner_boundary": 16,
    "path_outer_boundary": 32,
    "random_stop_interval": 0,
    "require_complete_path": false,
    "no_damage_range_multiplier": 2.0,
    "set_persistent": false,
    "speed_multiplier": 1,
    "stomp_range_multiplier": 2,
    "target_dist": 16.0,
    "track_target": false,
    "x_max_head_rotation": 30,
    "y_max_head_rotation": 30
}
```

## Vanilla entities examples

### polar_bear

```json
"minecraft:behavior.stomp_attack": {
    "priority": 1,
    "track_target": true,
    "require_complete_path": true,
    "stomp_range_multiplier": 2.0,
    "no_damage_range_multiplier": 2.0
}
```

## Vanilla entities using `minecraft:behavior.stomp_attack`

- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
