---
author: v-kimjeff
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.jump_around_target
description: "A reference document detailing the 'behavior.jump_around_target' entity goal"
ms.service: minecraft-bedrock-edition
---


# Entity Documentation - minecraft:behavior.jump_around_target

`minecraft:behavior.jump_around_target` compels an entity to jump around a target.

## Parameters

|Name |Default Value |Type |Description |
|:----------|:----------|:----------|:----------|
| check_collision| false| Boolean| Enables collision checks when calculating the jump. Setting check_collision to true may affect performance and should be used with care.|
| entity_bounding_box_scale| 0.700000| Decimal| Scaling temporarily applied to the entity's AABB bounds when jumping. A smaller bounding box reduces the risk of collisions during the jump. When check_collision is true it also increases the chance of being able to jump when close to obstacles.|
| filters| *not set*| Minecraft Filter| Conditions that need to be met for the behavior to start.|
| jump_angles| [ 40.0, 55.0, 60.0, 75.0, 80.0 ]| Array| The jump angles in float degrees that are allowed when performing the jump. The order in which the angles are chosen is randomized.|
| jump_cooldown_duration| 0.500000| Decimal| The time in seconds to spend in cooldown before this goal can be used again.|
| jump_cooldown_when_hurt_duration| 0.100000| Decimal| The time in seconds to spend in cooldown after being hurt before this goal can be used again.|
| landing_distance_from_target| [4.000000, 8.000000]| Range [a, b]| The range deciding how close to and how far away from the target the landing position can be when jumping.|
| landing_position_spread_degrees| 90| Integer| This angle (in degrees) is used for controlling the spread when picking a landing position behind the target. A zero spread angle means the landing position will be straight behind the target with no variance. A 90 degree spread angle means the landing position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction.|
| last_hurt_duration| 2.000000| Decimal| If the entity was hurt within these last seconds, the jump_cooldown_when_hurt_duration will be used instead of jump_cooldown_duration.|
| line_of_sight_obstruction_height_ignore| 4| Integer| If the entity's line of sight towards its target is obstructed by an obstacle with a height below this number, the obstacle will be ignored, and the goal will try to find a valid landing position.|
| max_jump_velocity| 1.400000| Decimal| Maximum velocity a jump can be performed at.|
| prepare_jump_duration| 0.500000| Decimal| The time in seconds to spend preparing for the jump.|
| required_vertical_space| 4| Integer| The number of blocks above the entity's head that has to be air for this goal to be usable.|
| snap_to_surface_block_range| 10| Integer| The number of blocks above and below from the jump target position that will be checked to find a surface to land on.|
| valid_distance_to_target| [4.000000, 20.000000]| Range [a, b]| Target needs to be within this range for the jump to happen.|
