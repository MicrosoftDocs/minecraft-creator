---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_target_leader"
description: "Describes the minecraft:behavior.follow_target_leader ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_target_leader

Allows mob to move towards its target leader.


## Entity Follow Target Leader Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| always_look_for_leader | false | Boolean true/false | If true, the mob will always search for a valid leader to follow if none is found or current leader is not valid anymore | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| follow_distance | 0 | Decimal number | Defines the distance in blocks the mob will stay from its target while following. | 
| leader_filters (Leader Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Leader Filters](#leader-filters) item | The filters to use when determining if a mob is a suitable leader or not. | 
| leader_filters (Alternate 1) | *not set* | Object |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_cooldown | 20 | Integer number | Number of ticks that must pass before a new search is initiated after a target is not found, lost, or becomes invalid. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | 
| within_radius | 0 | Decimal number | Defines the maximum distance in blocks a mob can get from its target leader before giving up trying to follow it. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Leader Filters

#### Leader Filters Properties

**JSON path:** `leader_filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 