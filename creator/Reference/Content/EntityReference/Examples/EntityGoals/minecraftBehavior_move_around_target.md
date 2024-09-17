---
author: v-kimjeff
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.move_around_target
description: "A reference document detailing the 'behavior.move_around_target' entity goal"
ms.service: minecraft-bedrock-edition
---


# Entity Documentation - minecraft:behavior.move_around_target

`minecraft:behavior.move_around_target` compels an entity to move around a target. If the entity is too close (i.e. closer than destination range min and height difference limit) it will try to move away from its target. If the entity is too far away from its target it will try to move closer to a random position within the destination range. A randomized amount of those positions will be behind the target, and the spread can be tweaked with 'destination_pos_search_spread_degrees'.

## Parameters

|Name |Default Value |Type |Description |
|:----------|:----------|:----------|:----------|
| destination_pos_search_spread_degrees| 90.000000| Decimal| This angle (in degrees) is used for controlling the spread when picking a destination position behind the target. A zero spread angle means the destination position will be straight behind the target with no variance. A 90 degree spread angle means the destination position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction.|
| destination_position_range| [4.000000, 8.000000]| Range [a, b]| The range of distances from the target entity within which the goal should look for a position to move the owner entity to.|
| filters| *not set*| Minecraft Filters| Conditions that need to be met for the behavior to start.|
| height_difference_limit| 10.000000| Decimal| Distance in height (in blocks) between the owner entity and the target has to be less than this value when owner checks if it is too close and should move away from the target. This value needs to be bigger than zero for the move away logic to trigger.|
| horizontal_search_distance| 5| Integer| Horizontal search distance (in blocks) when searching for a position to move away from target.|
| movement_speed| 0.600000| Decimal| The speed with which the entity should move to its target position.|
| vertical_search_distance| 5| Integer| Vertical search distance (in blocks) when searching for a position to move away from target.|
