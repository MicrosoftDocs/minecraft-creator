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
| potions | [] | Array of [Potions](#entity-drinkpotiongoaldefinition-potiondata) items | A list of potions that this entity can drink. Each potion entry has the following parameters: | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| speed_modifier | 0 | Decimal number | The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity DrinkPotionGoalDefinition PotionData

#### Entity DrinkPotionGoalDefinition PotionData Properties

**JSON path:** `potions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| chance | 1 | Decimal number | The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use. | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | The filters to use when determining if this potion can be selected. | 
| filters (Alternate 1) | *not set* | Object |  | 
| id | -1 | Integer number | The registry ID of the potion to use | 

#### Filters

##### Filters Properties

**JSON path:** `potions > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples
