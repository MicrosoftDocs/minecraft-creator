---
author: v-kimjeff
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.fire_at_target
description: "A reference document detailing the 'behavior.behavior.fire_at_target' entity goal"
ms.service: minecraft-bedrock-edition
---


# Entity Documentation - minecraft:behavior.fire_at_target

`minecraft:behavior.fire_at_target` compels an entity to attack by firing a shot with a delay. Anchor and offset parameters of this component overrides the anchor and offset from projectile component.

## Parameters

|Name |Default Value |Type |Description |
|:----------|:----------|:----------|:----------|
| attack_cooldown|0.500000 |Decimal| The cooldown time in seconds before this goal can be used again.|
| attack_range|[2.000000, 16.000000] | Range [a, b]| Target needs to be within this range for the attack to happen.|
| filters| *not set*| Minecraft Filter| Conditions that need to be met for the behavior to start.|
| max_head_rotation_x| 30.000000| Decimal| Maximum head rotation (in degrees), on the X-axis, that this entity can apply while trying to look at the target.|
| max_head_rotation_y| 30.000000| Decimal| Maximum head rotation (in degrees), on the Y-axis, that this entity can apply while trying to look at the target.|
| owner_anchor| 2| Integer| Entity anchor for the projectile spawn location.|
| owner_offset| [0.000, 0.000, 0.000]| Vector [a, b, c]| Offset vector from the owner_anchor.|
| post_shoot_delay| 0.200000| Decimal| Time in seconds between firing the projectile and ending the goal.|
| pre_shoot_delay| 0.750000| Decimal| Time in seconds before firing the projectile.|
| projectile_def| *not set*| String| Actor definition to use as projectile for the ranged attack. The actor must be a projectile.|
| ranged_fov| 90.000000| Decimal| Field of view (in degrees) when using sensing to detect a target for attack.|
| target_anchor| 2| Integer| Entity anchor for projectile target.|
| target_offset| [0.000, 0.000, 0.000]| Vector [a, b, c]| Offset vector from the target_anchor.|
