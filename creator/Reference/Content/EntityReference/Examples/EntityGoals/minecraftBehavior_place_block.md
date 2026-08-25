---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.place_block"
description: "Describes the minecraft:behavior.place_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.place_block

## Contents

- [Can Place](#can-place)
- [Entity ActorDefinitionTrigger](#entity-actordefinitiontrigger)
- [Placeable Carried Blocks](#placeable-carried-blocks)
- [Entity PlaceBlockGoalWeightedBlockDescriptor](#entity-placeblockgoalweightedblockdescriptor)
- [Block IntRange](#block-intrange)

AI goal that makes entities place blocks into the world, like Endermen placing their carried block or snow golems leaving snow trails. Configure which blocks can be placed, where they can be placed, and how often the entity attempts placement. Creates mobs that modify the environment.

> [!Note]
> This item requires a format version of at least 1.21.100.


## Entity Place Block Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| affected_by_griefing_rule | true | Boolean true/false | If true, whether the goal is affected by the mob griefing game rule. | 
| can_place (Can Place) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Can Place](#can-place) item | Filters for if the entity should try to place its block. Self and Target are set. | 
| can_place (Alternate 1) | *not set* | Object |  | 
| chance | 1 | Decimal number | Chance each tick for the entity to try and place a block. Value must be <= 1. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| on_place | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Place](#entity-actordefinitiontrigger) item | Trigger ran if the entity does place its block. Self, Target, and Block are set. | 
| placeable_carried_blocks (Placeable Carried Blocks) | [] | Array of [Placeable Carried Blocks](#placeable-carried-blocks) items | Block descriptors for which blocks are valid to be placed from the entity's carried item, if empty all blocks are valid. | 
| placeable_carried_blocks (as String) | *not set* | String |  | 
| placeable_carried_blocks (as Object) | *not set* | Object |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| randomly_placeable_blocks | [] | Array of [Randomly Placeable Blocks](#entity-placeblockgoalweightedblockdescriptor) items | Weighted block descriptors for which blocks should be randomly placed, if empty the entity will try to place its carried block from placeable_carried_blocks. | 
| xz_range | {"max":2,"min":-2} | [Xz Range](#block-intrange) item | XZ range from which the entity will try and place blocks in. | 
| y_range | {"max":3,"min":0} | [y Range](#block-intrange) item | Y range from which the entity will try and place blocks in. | 

### Can Place

#### Can Place Properties

**JSON path:** `can_place`

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

**JSON path:** `on_place`

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

**JSON path:** `on_place > filters`

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

### Placeable Carried Blocks

#### Placeable Carried Blocks Properties

**JSON path:** `placeable_carried_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

### Entity PlaceBlockGoalWeightedBlockDescriptor

#### Entity PlaceBlockGoalWeightedBlockDescriptor Properties

**JSON path:** `randomly_placeable_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block (Block) | {"name":"","states":{},"tags":""} | [Block](#block) item | Block descriptor for this entry. | 
| block (as String) | *not set* | String |  | 
| block (Alternate 2) | *not set* | Object |  | 
| filter (Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filter](#filter) item | Filter for if this entry should be randomly selected from. Self, Target, and Block are set. | 
| filter (Alternate 1) | *not set* | Object |  | 
| weight | 1 | Integer number | Weight for this entry. | 

#### Block

##### Block Properties

**JSON path:** `randomly_placeable_blocks > block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

#### Filter

##### Filter Properties

**JSON path:** `randomly_placeable_blocks > filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Block IntRange

#### Block IntRange Properties

**JSON path:** `xz_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples
