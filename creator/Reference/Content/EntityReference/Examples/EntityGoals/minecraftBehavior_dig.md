---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.dig"
description: "Describes the minecraft:behavior.dig ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.dig

Allows this entity to dig into the ground before despawning.


## Entity Dig Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_dig_when_named | false | Boolean true/false | If true, this behavior can run when this entity is named. Otherwise not. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| digs_in_daylight | false | Boolean true/false | Indicates that the actor should start digging when it sees daylight |  | 
| duration | 0 | Decimal number | Goal duration in seconds | Warden: `5.5` | 
| idle_time | 0 | Decimal number | The minimum idle time in seconds between the last detected disturbance to the start of digging. | Warden: `60` | 
| on_start | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Start](#entity-actordefinitiontrigger) item | Event(s) to run when the goal starts. | Warden: `{"event":"on_digging_event"}` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `1` | 
| suspicion_is_disturbance | false | Boolean true/false | If true, finding new suspicious locations count as disturbances that may delay the start of this goal. | Warden: `true` | 
| vibration_is_disturbance | false | Boolean true/false | If true, vibrations count as disturbances that may delay the start of this goal. | Warden: `true` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_start`

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

**JSON path:** `on_start > filters`

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

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.dig": {
  "duration": 5.5,
  "idle_time": 60,
  "vibration_is_disturbance": true,
  "suspicion_is_disturbance": true,
  "on_start": {
    "event": "on_digging_event"
  },
  "priority": 1
}
```
