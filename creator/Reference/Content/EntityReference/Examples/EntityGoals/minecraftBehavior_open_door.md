---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.open_door"
description: "Describes the minecraft:behavior.open_door ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.open_door

Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.


## Entity Open Door Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| close_door_after | true | Boolean true/false | If true, the mob will close the door after opening it and going through it. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
