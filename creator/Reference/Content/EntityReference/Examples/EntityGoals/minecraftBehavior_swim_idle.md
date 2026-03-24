---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swim_idle"
description: "Describes the minecraft:behavior.swim_idle ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swim_idle

Allows the entity go idle, if swimming. Entity must be in water.


## Entity Swim Idle Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| idle_time | 5 | Decimal number | Amount of time (in seconds) to stay idle. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| success_rate | 0.10000000149011612 | Decimal number | Percent chance this entity will go idle, 1.0 = 100%. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
