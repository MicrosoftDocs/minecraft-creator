---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.beg"
description: "Describes the minecraft:behavior.beg ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.beg

Allows this mob to look at and follow the player that holds food they like.


## Entity Beg Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| items | [] | String | List of items that this mob likes | 
| items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| look_distance | 8 | Decimal number | Distance in blocks the mob will beg from | 
| look_time | {"max":4,"min":2} | [Look Time](#block-intrange) item | The range of time in seconds this mob will stare at the player holding a food they like, begging for it | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Block IntRange

#### Block IntRange Properties

**JSON path:** `look_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples
