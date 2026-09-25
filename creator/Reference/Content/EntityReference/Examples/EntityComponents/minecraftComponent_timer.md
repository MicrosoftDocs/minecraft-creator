---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:timer"
description: "Describes the minecraft:timer entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:timer

Adds a timer after which an event will fire.


## Entity Timer Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| looping | true | Boolean true/false | If true, the timer will restart every time after it fires. | 
| random_time_choices | [] | Array of [Random Time Choices](#entity-timerweightchoiceentry) items | This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time. | 
| randomInterval | true | Boolean true/false | If true, the amount of time on the timer will be random between the min and max values specified in time. | 
| time (Legacy FloatRange) | *not set* | [Time](#legacy-floatrange) item | Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices. | 
| time (as Decimal number) | *not set* | Decimal number |  | 
| time_down_event (Entity ActorDefinitionTrigger) | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Time Down Event](#entity-actordefinitiontrigger) item | Event to fire when the time on the timer runs out. Can be an object with event and target properties, or a simple event string. | 
| time_down_event (as String) | *not set* | String |  | 

### Entity TimerWeightChoiceEntry

#### Entity TimerWeightChoiceEntry Properties

**JSON path:** `random_time_choices`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | 0 | Decimal number |  | 
| weight | 0 | Integer number |  | 

### Legacy FloatRange

#### Legacy FloatRange Properties

**JSON path:** `time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `time_down_event`

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

**JSON path:** `time_down_event > filters`

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
