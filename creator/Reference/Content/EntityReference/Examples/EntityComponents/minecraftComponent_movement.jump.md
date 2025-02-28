---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.jump"
description: "Describes the minecraft:movement.jump entity component"
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
| jump_delay | *not set* | Range of integers | Delay after landing when using the slime move control. |  | 
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. |  | 