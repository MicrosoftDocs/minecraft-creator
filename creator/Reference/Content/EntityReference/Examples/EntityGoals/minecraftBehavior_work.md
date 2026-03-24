---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.work"
description: "Describes the minecraft:behavior.work ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.work

Allows the NPC to use the POI.


## Entity Work Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| active_time | 0 | Integer number | The amount of ticks the NPC will stay in their the work location | 
| can_work_in_rain | false | Boolean true/false | If true, this entity can work when their jobsite POI is being rained on. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| goal_cooldown | 0 | Integer number | The amount of ticks the goal will be on cooldown before it can be used again | 
| on_arrival | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Arrival](#entity-actordefinitiontrigger) item | Event to run when the mob reaches their jobsite. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| sound_delay_max | 0 | Integer number | The max interval in which a sound will play. | 
| sound_delay_min | 0 | Integer number | The min interval in which a sound will play. | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal Value must be > 0. | 
| work_in_rain_tolerance | -1 | Integer number | If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_arrival`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

#### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


#### Filters

##### Filters Properties

**JSON path:** `on_arrival > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

## Samples
