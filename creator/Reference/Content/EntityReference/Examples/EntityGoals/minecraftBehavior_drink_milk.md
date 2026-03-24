---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drink_milk"
description: "Describes the minecraft:behavior.drink_milk ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.drink_milk

Allows the mob to drink milk based on specified environment conditions.


## Entity Drink Milk Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown_seconds | 5 | Decimal number | Time (in seconds) that the goal is on cooldown before it can be used again. | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that need to be met for the behavior to start. | 
| filters (Alternate 1) | *not set* | Object |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Filters

#### Filters Properties

**JSON path:** `filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples
