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


## Drink Potion Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| potions | *not set* | Array of [Potions](#potions) items | A list of potions that this entity can drink. Each potion entry has the following parameters: |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| speed_modifier | 0 | Decimal number | The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed. |  | 

## Potions
A list of potions that this entity can drink. Each potion entry has the following parameters:


#### Potions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | 1 | Decimal number | The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use. |  | 
| filters | *not set* | Minecraft filter | The filters to use when determining if this potion can be selected. |  | 
| id | -1 | Integer number | The registry ID of the potion to use |  | 

## Samples
