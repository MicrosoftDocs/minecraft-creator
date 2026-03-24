---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.hide"
description: "Describes the minecraft:behavior.hide ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.hide

Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.

> [!Note]
> Requires a point of interest to be set in order to work properly.


## Entity Hide Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| duration | 1 | Decimal number | Amount of time in seconds that the mob reacts. | 
| poi_type | null | [Poi Type](#poi-type-choices) choices | Tells the goal what POI type it should be looking for | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 
| timeout_cooldown | 8 | Decimal number | The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Poi Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| bed | Bed | |
| jobsite | Jobsite | |
| meeting_area | Meeting area | |

## Samples
