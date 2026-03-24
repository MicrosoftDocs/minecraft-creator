---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.timer_flag_2"
description: "Describes the minecraft:behavior.timer_flag_2 ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.timer_flag_2

Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_2 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.


## Entity Timer Flag 2 Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | Sniffer: `["move"]` | 
| cooldown_range (Item Components FloatRange) | {"max":0,"min":0} | [Cooldown Range](#item-components-floatrange) item | Goal cooldown range in seconds. Can be a range object or a single number. | Sniffer: `{"min":0,"max":0}` | 
| cooldown_range (as Decimal number) | *not set* | Decimal number |  |  | 
| duration_range (Item Components FloatRange) | {"max":0,"min":0} | [Duration Range](#item-components-floatrange) item | Goal duration range in seconds. Can be a range object or a single number. | Sniffer: `{"min":2,"max":5}` | 
| duration_range (as Decimal number) | *not set* | Decimal number |  |  | 
| on_end | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [End](#entity-actordefinitiontrigger) item | Event(s) to run when the goal ends. | Sniffer: `{"event":"on_rising_end","target":"self"}` | 
| on_start | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Start](#entity-actordefinitiontrigger) item | Event(s) to run when the goal starts. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sniffer: `2` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `cooldown_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_end`

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

**JSON path:** `on_end > filters`

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

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
"minecraft:behavior.timer_flag_2": {
  "priority": 2,
  "control_flags": [
    "move"
  ],
  "cooldown_range": {
    "min": 0,
    "max": 0
  },
  "duration_range": {
    "min": 2,
    "max": 5
  },
  "on_end": {
    "event": "on_rising_end",
    "target": "self"
  }
}
```
