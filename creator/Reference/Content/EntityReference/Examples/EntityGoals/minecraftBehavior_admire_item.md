---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.admire_item"
description: "Describes the minecraft:behavior.admire_item ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.admire_item

Enables the mob to admire items that have been configured as admirable.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Admire Item (minecraft:admire_item)](../EntityComponents/minecraftComponent_admire_item.md)
> 

## Entity Admire Item Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| admire_item_sound |  | String | The sound event to play when admiring the item | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| on_admire_item_start | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Admire Item Start](#entity-actordefinitiontrigger) item | Event to run when the mob starts admiring an item. | 
| on_admire_item_stop | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Admire Item Stop](#entity-actordefinitiontrigger) item | Event to run when the mob stops admiring an item. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| sound_interval (Item Components FloatRange) | 0 | [Sound Interval](#item-components-floatrange) item | The range of time in seconds to randomly wait before playing the sound again. Can be a number, an array [min, max], or an object with range_min and range_max. | 
| sound_interval (as Array of objects) | *not set* | Array of [Sound Interval](#sound-interval) items |  | 
| sound_interval (as Object) | *not set* | [Sound Interval](#sound-interval) item |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_admire_item_start`

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

**JSON path:** `on_admire_item_start > filters`

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

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `sound_interval`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Sound Interval

#### Sound Interval Properties

**JSON path:** `sound_interval`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| 0 | *not set* | Integer number |  | 
| 1 | *not set* | Integer number |  | 

## Samples
