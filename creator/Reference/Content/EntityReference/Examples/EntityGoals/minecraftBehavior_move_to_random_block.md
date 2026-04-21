---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_random_block"
description: "Describes the minecraft:behavior.move_to_random_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_random_block

Allows mob to move towards a random block.


## Entity Move To Random Block Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block_distance | 16 | Decimal number | Defines the distance from the mob, in blocks, that the block to move to will be chosen. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | 
| within_radius | 0 | Decimal number | Defines the distance in blocks the mob has to be from the block for the movement to be finished. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
