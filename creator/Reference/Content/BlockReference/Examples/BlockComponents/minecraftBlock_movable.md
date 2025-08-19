---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:movable"
description: "Describes the minecraft:movable block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:movable

The description identifier of the movable component
Experimental toggles required: Upcoming Creator Features (in format versions before 1.21.100).


## Movable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| movement_type | push_pull | String | [Required] How the block reacts to being pushed by another block like a piston. Must be one of the following options:<br>"push_pull" - The default value for this field. The block will be pushed and pulled by a piston.<br>"push" - The block will only be pulled by a piston and will ignore a sticky piston.<br>"popped" - The block is destroyed when moved by a piston.<br>"immovable" - The block is unaffected by a piston. |  | 
| sticky | none | String | [Optional] How the block should handle adjacent blocks around it when being pushed by another block like a piston. Must be one of the following options:<br>"same" - Adjacent blocks to this block will be moved when moved. This excludes other blocks with the "same" property. This will only work with the movement_type: "push_pull".<br>"none" - The default and will not move adjacent blocks. |  | 