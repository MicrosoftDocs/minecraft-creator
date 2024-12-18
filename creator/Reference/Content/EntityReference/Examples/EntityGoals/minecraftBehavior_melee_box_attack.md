---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.melee_box_attack
description: "A reference document detailing the 'behavior.melee_box_attack' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.melee_box_attack

`minecraft:behavior.melee_box_attack` permits an entity to deal damage through a melee attack with reach calculations based on bounding boxes.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack_once| false| Boolean| Allows the entity to use this attack behavior, only once EVER. |
| attack_types|*not set*| String| Defines the entity types this entity will attack. |
| can_spread_on_fire| false| Boolean| If the entity is on fire, this allows the entity's target to catch on fire after being hit. |
| cooldown_time| 1| Decimal| Cooldown time (in seconds) between attacks. |
| horizontal_reach| 0.8| Decimal| The attack reach of the entity will be a box with the size of the entity's bounds increased by this value in all horizontal directions. |
| inner_boundary_time_increase| 0.25| Decimal| Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary". |
| max_dist|*not set*| Decimal| Unused. No effect on "minecraft:behavior.melee_box_attack". |
| max_path_time| 0.55| Decimal| Maximum base time (in seconds) to recalculate new attack path to target (before increases applied). |
| melee_fov| 90| Decimal| Field of view (in degrees) when using the sensing component to detect an attack target. |
| min_path_time| 0.2| Decimal| Minimum base time (in seconds) to recalculate new attack path to target (before increases applied). |
| on_attack|*not set*| Trigger| Defines the event to trigger when this entity successfully attacks. |
| outer_boundary_time_increase| 0.5| Decimal| Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary". |
| path_fail_time_increase| 0.75| Decimal| Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path. |
| path_inner_boundary| 16| Decimal| Distance at which to increase attack path recalculation by "inner_boundary_tick_increase". |
| path_outer_boundary| 32| Decimal| Distance at which to increase attack path recalculation by "outer_boundary_tick_increase". |
| random_stop_interval| 0| Integer| This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval". |
| reach_multiplier| 2| Decimal| Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. |
| require_complete_path| false| Boolean| Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior. |
| set_persistent| false| Boolean| Allows the entity to be set to persist upon targeting a player |
| speed_multiplier| 1| Decimal| This multiplier modifies the attacking entity's speed when moving toward the target. |
| target_dist|*not set*| Decimal| Unused. No effect on "minecraft:behavior.melee_attack". |
| track_target| false| Boolean| Allows the entity to track the attack target, even if the entity has no sensing. |
| x_max_rotation| 30| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_head_rotation| 30| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |
