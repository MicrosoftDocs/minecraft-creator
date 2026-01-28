---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.place_block"
description: "Describes the minecraft:behavior.place_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.place_block

AI goal that makes entities place blocks into the world, like Endermen placing their carried block or snow golems leaving snow trails. Configure which blocks can be placed, where they can be placed, and how often the entity attempts placement. Creates mobs that modify the environment.


## Place Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| affected_by_griefing_rule | *not set* | Boolean true/false | If true, whether the goal is affected by the mob griefing game rule. |  | 
| can_place | *not set* | Minecraft filter | Filters for if the entity should try to place its block. Self and Target are set. |  | 
| chance | *not set* | Decimal number | Chance each tick for the entity to try and place a block. |  | 
| on_place | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Trigger ran if the entity does place its block. Self, Target, and Block are set. |  | 
| placeable_carried_blocks | *not set* | Array of strings | Block descriptors for which blocks are valid to be placed from the entity's carried item, if empty all blocks are valid. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| randomly_placeable_blocks | *not set* | Array of strings | Weighted block descriptors for which blocks should be randomly placed, if empty the entity will try to place its carried block from placeable_carried_blocks. |  | 
| xz_range | *not set* | Range of integers | XZ range from which the entity will try and place blocks in. |  | 
| y_range | *not set* | Range of integers | Y range from which the entity will try and place blocks in. |  | 

## Samples
