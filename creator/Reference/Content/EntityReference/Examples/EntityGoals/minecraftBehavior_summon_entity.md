---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.summon_entity"
description: "Describes the minecraft:behavior.summon_entity ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.summon_entity

Allows the mob to attack the player by summoning other entities.

> [!Note]
> This item requires a format version of at least 1.21.50.


## Entity Summon Entity Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| summon_choices | [] | Array of objects | List of spells for the mob to use to summon entities. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
