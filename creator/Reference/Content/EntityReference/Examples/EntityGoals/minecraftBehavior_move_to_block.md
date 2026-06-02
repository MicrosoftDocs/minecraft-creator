---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_block"
description: "Describes the minecraft:behavior.move_to_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_block

Allows mob to move towards a block.


## Entity Move To Block Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. | 
| on_reach | [] | Array of [Reach](#entity-actordefinitiontrigger) items | Event to run on block reached. | 
| on_stay_completed | [] | Array of [Stay Completed](#entity-actordefinitiontrigger) items | Event to run on completing a stay of stay_duration at the block. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_height | 1 | Integer number | The height in blocks that the mob will look for the block. | 
| search_range | 0 | Integer number | The distance in blocks that the mob will look for the block. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. | 
| start_chance | 1 | Decimal number | Chance to start the behavior (applied after each random tick_interval). | 
| stay_duration | 0 | Decimal number | Number of ticks needed to complete a stay at the block. | 
| target_block_filters (Target Block Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Target Block Filters](#target-block-filters) item | Conditions that need to be met for a block to be a valid target. | 
| target_block_filters (Alternate 1) | *not set* | Object |  | 
| target_blocks | [] | String | Block types to move to. | 
| target_blocks (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| target_offset | [0, 0, 0] | Array of numbers | Offset to add to the selected target position. | 
| target_offset (Target Offset) | *not set* | [Target Offset (Target Offset)](#target-offset-target-offset) item |  | 
| target_selection_method | nearest | [Target Selection Method](#target-selection-method-choices) choices | Kind of block to find fitting the specification. Valid values are "random" and "nearest". | 
| tick_interval | 20 | Integer number | Average interval in ticks to try to run this behavior. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_reach`

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

**JSON path:** `on_reach > filters`

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

### Target Block Filters

#### Target Block Filters Properties

**JSON path:** `target_block_filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target Offset (Target Offset)

#### Target Offset Properties

**JSON path:** `target_offset`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Target Selection Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| nearest | Nearest | |
| random | Random | |

## Samples
