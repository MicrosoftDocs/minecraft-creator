---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.melee_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.melee_attack

`minecraft:behavior.melee_attack` allows entities to make close combat melee attacks.

> [!IMPORTANT]
> In order for the entity to be able to attack its target, the entity will also need another component that sets its target, such as:
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

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
| on_attack| N/A| Trigger| Defines the event to trigger when this entity successfully attacks. |
| on_kill| N/A| Trigger| Defines the event to trigger when this entity successfully kills. |
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
| target_dist| N/a| Decimal| Unused. No effect on "minecraft:behavior.melee_attack". |
| track_target| false| Boolean| Allows the entity to track the attack target, even if the entity has no sensing. |
| x_max_rotation| 30| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_head_rotation| 30| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |

## Example

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "melee_fov": 90,
    "speed_multiplier": 1,
    "track_target":false,
    "attack_types": "minecraft:sheep",
    "reach_multiplier": 2,
    "attack_once": false
}
```

## Vanilla mob examples

### Zombie

```json
"minecraft:behavior.melee_attack": {
    "priority": 3
}
```

### Cave Spider

```json
"minecraft:behavior.melee_attack": {
    "priority": 3,
    "track_target": true,
    "random_stop_interval": 100,
    "reach_multiplier": 0.8
}
```

### Vanilla mobs using `melee_attack`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../source/vanillabehaviorpack_snippets/entities/bee.md)
- [blaze](../../../../source/vanillabehaviorpack_snippets/entities/blaze.md)
- [cave spider](../../../../source/vanillabehaviorpack_snippets/entities/cave_spider.md)
- [creeper](../../../../source/vanillabehaviorpack_snippets/entities/creeper.md)
- [dolphin](../../../../source/vanillabehaviorpack_snippets/entities/dolphin.md)
- [drowned](../../../../source/vanillabehaviorpack_snippets/entities/drowned.md)
- [enderman](../../../../source/vanillabehaviorpack_snippets/entities/enderman.md)
- [endermite](../../../../source/vanillabehaviorpack_snippets/entities/endermite.md)
- [fox](../../../../source/vanillabehaviorpack_snippets/entities/fox.md)
- [hoglin](../../../../source/vanillabehaviorpack_snippets/entities/hoglin.md)
- [husk](../../../../source/vanillabehaviorpack_snippets/entities/husk.md)
- [iron_golem](../../../../source/vanillabehaviorpack_snippets/entities/iron_golem.md)
- [panda](../../../../source/vanillabehaviorpack_snippets/entities/panda.md)
- [piglin_brute](../../../../source/vanillabehaviorpack_snippets/entities/piglin_brute.md)
- [piglin](../../../../source/vanillabehaviorpack_snippets/entities/piglin.md)
- [pillager](../../../../source/vanillabehaviorpack_snippets/entities/pillager.md)
- [silverfish](../../../../source/vanillabehaviorpack_snippets/entities/silverfish.md)
- [skeleton](../../../../source/vanillabehaviorpack_snippets/entities/skeleton.md)
- [spider](../../../../source/vanillabehaviorpack_snippets/entities/spider.md)
- [stray](../../../../source/vanillabehaviorpack_snippets/entities/stray.md)
- [vindicator](../../../../source/vanillabehaviorpack_snippets/entities/vindicator.md)
- [wither skeleton](../../../../source/vanillabehaviorpack_snippets/entities/wither_skeleton.md)
- [wolf](../../../../source/vanillabehaviorpack_snippets/entities/wolf.md)
- [zoglin](../../../../source/vanillabehaviorpack_snippets/entities/zoglin.md)
- [zombie pigman](../../../../source/vanillabehaviorpack_snippets/entities/zombie_pigman.md)
- [zombie_villager](../../../../source/vanillabehaviorpack_snippets/entities/zombie_villager.md)
- [zombie](../../../../source/vanillabehaviorpack_snippets/entities/zombie.md)
