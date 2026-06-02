---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.nap"
description: "Describes the minecraft:behavior.nap ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.nap

Allows mobs to occassionally stop and take a nap under certain conditions.


## Entity Nap Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_nap_filters (Can Nap Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Can Nap Filters](#can-nap-filters) item | Conditions that need to be met for the entity to nap. | 
| can_nap_filters (as Object) | *not set* | Object |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown_max | 0 | Decimal number | Maximum time in seconds the mob has to wait before using the goal again | 
| cooldown_min | 0 | Decimal number | Minimum time in seconds the mob has to wait before using the goal again | 
| mob_detect_dist | 6 | Decimal number | The block distance in x and z that will be checked for mobs that this mob detects | 
| mob_detect_height | 6 | Decimal number | The block distance in y that will be checked for mobs that this mob detects | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| wake_mob_exceptions (Wake Mob Exceptions) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Wake Mob Exceptions](#wake-mob-exceptions) item | Filters for mobs that will not wake this entity from napping. | 
| wake_mob_exceptions (as Object) | *not set* | Object |  | 

### Can Nap Filters

#### Can Nap Filters Properties

**JSON path:** `can_nap_filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Wake Mob Exceptions

Same structure as [Can Nap Filters](#can-nap-filters).


## Samples
