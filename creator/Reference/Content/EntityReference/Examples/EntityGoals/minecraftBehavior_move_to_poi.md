---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_poi"
description: "Describes the minecraft:behavior.move_to_poi ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_poi

Allows the mob to move to a POI if able to.


## Entity Move To Poi Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| poi_type | null | [Poi Type](#poi-type-choices) choices | Tells the goal what POI type it should be looking for | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 

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