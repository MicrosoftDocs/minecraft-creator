---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.jump"
description: "Describes the minecraft:movement.jump entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.jump

Move control that causes the mob to jump as it moves with a specified delay between jumps.

> [!Note]
> In order to follow targets, this entity must have the `minecraft:behavior.slime_attack` component, otherwise the entity will jump in the direction it's looking in.


## Jump Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| jump_delay | *not set* | Decimal number | Delay in seconds after landing when using the slime move control. Can be a single number, an array [min, max], or an object with range_min and range_max. |  | 
| jump_delay (Alternate 1) | *not set* | Array of [Jump Delay](#jump-delay) items |  |  | 
| jump_delay (Alternate 2) | *not set* | [Jump Delay](#jump-delay) item |  |  | 
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. |  | 

## Jump Delay

#### Jump Delay Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| 0 | *not set* | Decimal number |  |  | 
| 1 | *not set* | Decimal number |  |  | 