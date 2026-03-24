---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.take_flower"
description: "Describes the minecraft:behavior.take_flower ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.take_flower

Allows the mob to accept flowers from another mob with the minecraft:offer_flower behavior.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Entity Take Flower Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that need to be met for the behavior to start. | 
| filters (Alternate 1) | *not set* | Object |  | 
| max_head_rotation_y | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. Value must be > 0. | 
| max_rotation_x | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. Value must be > 0. | 
| max_wait_time | 20 | Decimal number | The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower. | 
| min_distance_to_target | 2 | Decimal number | Minimum distance (in blocks) for the entity to be considered having reached its target. Value must be > 0. | 
| min_wait_time | 4 | Decimal number | The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower. | 
| on_take_flower | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Take Flower](#entity-actordefinitiontrigger) item | Event triggered when the entity takes a flower from another entity. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_area | [6, 2, 6] | Array of numbers | The dimensions of the AABB used to search for a potential mob to take a flower from. | 
| search_area (Search Area) | *not set* | [Search Area (Search Area)](#search-area-search-area) item |  | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Filters

#### Filters Properties

**JSON path:** `filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_take_flower`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

#### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


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

### Search Area (Search Area)

#### Search Area Properties

**JSON path:** `search_area`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

## Samples
