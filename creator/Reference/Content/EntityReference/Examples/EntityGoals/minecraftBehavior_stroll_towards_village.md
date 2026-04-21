---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stroll_towards_village"
description: "Describes the minecraft:behavior.stroll_towards_village ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stroll_towards_village

Allows the mob to move into a random location within a village within the search range.


## Entity Stroll Towards Village Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown_time | 8 | Decimal number | Time in seconds the mob has to wait before using the goal again | 
| goal_radius | 1.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_range | 0 | Integer number | The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 
| start_chance | 1 | Decimal number | Chance that the mob will start this goal, from 0 to 1. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
