---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.squid_move_away_from_ground"
description: "Describes the minecraft:behavior.squid_move_away_from_ground ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.squid_move_away_from_ground

Allows the squid to move away from ground blocks and back to water.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Squid (minecraft:squid)
> 

## Entity Squid Move Away From Ground Behavior Properties

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

## Samples
