---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.take_block"
description: "Describes the minecraft:behavior.take_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.take_block

AI goal that makes entities pick up blocks from the world, like Endermen grabbing blocks to carry. Configure which blocks the entity can take and the search radius. Works with place_block behavior to create entities that relocate blocks or harvest materials from the environment.

> [!Note]
> This item requires a format version of at least 1.21.100.


## Entity Take Block Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| affected_by_griefing_rule | true | Boolean true/false | If true, whether the goal is affected by the mob griefing game rule. | 
| blocks (Blocks) | [] | Array of [Blocks](#blocks) items | Block descriptors for which blocks are valid to be taken by the entity, if empty all blocks are valid. | 
| blocks (as String) | *not set* | String |  | 
| blocks (as Object) | *not set* | Object |  | 
| can_take (Can Take) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Can Take](#can-take) item | Filters for if the entity should try to take a block. Self and Target are set. | 
| can_take (Alternate 1) | *not set* | Object |  | 
| chance | 1 | Decimal number | Chance each tick for the entity to try and take a block. Value must be <= 1. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| on_take | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Take](#entity-actordefinitiontrigger) item | Trigger ran if the entity does take a block. Self, Target, and Block are set. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| requires_line_of_sight | true | Boolean true/false | If true, whether the entity needs line of sight to the block they are trying to take. | 
| xz_range | {"max":2,"min":-2} | [Xz Range](#block-intrange) item | XZ range from which the entity will try and take blocks from. | 
| y_range | {"max":3,"min":0} | [y Range](#block-intrange) item | Y range from which the entity will try and take blocks from. | 

### Blocks

#### Blocks Properties

**JSON path:** `blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

### Can Take

#### Can Take Properties

**JSON path:** `can_take`

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

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_take`

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

**JSON path:** `on_take > filters`

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

### Block IntRange

#### Block IntRange Properties

**JSON path:** `xz_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples
