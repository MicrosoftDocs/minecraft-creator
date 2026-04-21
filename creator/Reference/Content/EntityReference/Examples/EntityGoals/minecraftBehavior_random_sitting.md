---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_sitting"
description: "Describes the minecraft:behavior.random_sitting ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_sitting

Allows the mob to randomly sit for a duration.


## Entity Random Sitting Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown | 100 | Decimal number | Time in seconds the mob has to wait before using the goal again | 
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again | 
| min_sit_time | 10 | Decimal number | The minimum amount of time in seconds before the mob will stand back up | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| start_chance | 0.10000000149011612 | Decimal number | This is the chance that the mob will start this goal, from 0 to 1 | 
| stop_chance | 0.30000001192092896 | Decimal number | This is the chance that the mob will stop this goal, from 0 to 1 | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |