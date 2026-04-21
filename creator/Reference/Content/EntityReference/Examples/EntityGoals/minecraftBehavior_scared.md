---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.scared"
description: "Describes the minecraft:behavior.scared ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.scared

Allows the mob to become scared when the weather outside is thundering.


## Entity Scared Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| sound_delay | 0 | Integer number | The interval in which a sound will play when active in a 1/delay chance to kick off. | 
| sound_interval | 0 | Integer number | The interval in which a sound will play when active in a 1/delay chance to kick off | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
