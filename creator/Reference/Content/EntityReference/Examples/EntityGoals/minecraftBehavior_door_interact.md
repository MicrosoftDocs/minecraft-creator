---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.door_interact"
description: "Describes the minecraft:behavior.door_interact ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.door_interact

Allows the mob to open and close doors.

> [!Note]
> Not currently used by any entities within Minecraft: Bedrock Edition.


## Entity Door Interact Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |