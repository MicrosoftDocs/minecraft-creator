---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_block"
description: "Describes the minecraft:behavior.move_to_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_block

Allows mob to move towards a block.


## Move To Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |  | 
| on_reach | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run on block reached. |  | 
| on_stay_completed | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run on completing a stay of stay_duration at the block. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_height | 1 | Integer number | The height in blocks that the mob will look for the block. |  | 
| search_range | 0 | Integer number | The distance in blocks that the mob will look for the block. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| start_chance | 1 | Decimal number | Chance to start the behavior (applied after each random tick_interval). |  | 
| stay_duration | 0 | Decimal number | Number of ticks needed to complete a stay at the block. |  | 
| target_blocks | *not set* | Array of strings | Block types to move to. |  | 
| target_offset | [0, 0, 0] | x, y, z coordinate array | Offset to add to the selected target position. |  | 
| target_selection_method | nearest | String | Kind of block to find fitting the specification. Valid values are "random" and "nearest". |  | 
| tick_interval | 20 | Integer number | Average interval in ticks to try to run this behavior. |  | 

## Samples
