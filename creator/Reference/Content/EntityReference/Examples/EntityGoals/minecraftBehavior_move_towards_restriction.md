---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_towards_restriction"
description: "Describes the minecraft:behavior.move_towards_restriction ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_towards_restriction

AI goal that drives entities back toward their designated home area when they've wandered too far. Works with components like minecraft:home to define the restriction zone. Used for village-bound mobs, territorial creatures, or any entity that should patrol or return to a specific location.


## Entity Move Towards Restriction Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number |  | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the entity's speed when moving towards its restriction. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |