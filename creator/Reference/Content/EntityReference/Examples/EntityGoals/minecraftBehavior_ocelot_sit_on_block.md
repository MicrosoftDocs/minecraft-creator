---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ocelot_sit_on_block"
description: "Describes the minecraft:behavior.ocelot_sit_on_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ocelot_sit_on_block

Allows to mob to be able to sit in place like the ocelot.


## Entity Ocelot Sit On Block Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
