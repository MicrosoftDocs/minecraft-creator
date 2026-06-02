---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drink_potion"
description: "Describes the minecraft:behavior.drink_potion ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.drink_potion

Allows the mob to drink potions based on specified environment conditions.


## Entity Drink Potion Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| potions | [] | Array of objects | A list of potions that this entity can drink. Each potion entry has the following parameters: | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| speed_modifier | 0 | Decimal number | The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
