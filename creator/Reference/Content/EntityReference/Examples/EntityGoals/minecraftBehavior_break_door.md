---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.break_door"
description: "Describes the minecraft:behavior.break_door ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.break_door

Allows this mob to break doors.

> [!Note]
> Not currently used by any entities within Minecraft: Bedrock Edition. In its place, the parameter `can_break_doors` has been added to the `minecraft:navigation` component to allow entities to break down doors.


## Entity Break Door Behavior Properties

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