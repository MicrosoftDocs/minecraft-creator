---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.take_block"
description: "Describes the minecraft:behavior.take_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.take_block

AI goal that makes entities pick up blocks from the world, like Endermen grabbing blocks to carry. Configure which blocks the entity can take and the search radius. Works with place_block behavior to create entities that relocate blocks or harvest materials from the environment.


## Take Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| affected_by_griefing_rule | *not set* | Boolean true/false | If true, whether the goal is affected by the mob griefing game rule. |  | 
| blocks | *not set* | Array of strings | Block descriptors for which blocks are valid to be taken by the entity, if empty all blocks are valid. |  | 
| can_take | *not set* | Minecraft filter | Filters for if the entity should try to take a block. Self and Target are set. |  | 
| chance | *not set* | Decimal number | Chance each tick for the entity to try and take a block. |  | 
| on_take | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Trigger ran if the entity does take a block. Self, Target, and Block are set. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| requires_line_of_sight | *not set* | Boolean true/false | If true, whether the entity needs line of sight to the block they are trying to take. |  | 
| xz_range | *not set* | Range of integers | XZ range from which the entity will try and take blocks from. |  | 
| y_range | *not set* | Range of integers | Y range from which the entity will try and take blocks from. |  | 

## Samples
