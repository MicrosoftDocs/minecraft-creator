---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.transport_items"
description: "Describes the minecraft:behavior.transport_items ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.transport_items

A behavior that enables a mob to transport items from and to containers.


## Entity Transport Items Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| allow_simultaneous_interaction | false | Boolean true/false | When true the mob will wait until a container is not used by other entities before starting to interact with it. | 
| allowed_items | [] | String | A list of item descriptors that are the only items the mob is allowed to transport. | 
| allowed_items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| destination_container_types (Destination Container Types) | [] | [Destination Container Types](#destination-container-types) item | A list of block descriptors that should be container types to put items in. Can be simple block identifier strings or objects with name, states, and tags. | 
| destination_container_types (Destination Container Type) | *not set* | Array of [Destination Container Types (Destination Container Type)](#destination-container-types-destination-container-type) items |  | 
| disallowed_items | [] | String | A list of item descriptors that are the mob is not allowed to transport. If non-empty "allowed_items" must be empty. | 
| disallowed_items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| idle_cooldown | 20 | Integer number | When the mob cannot find a container in which to get or put items, the goal will stop being active for this amount of time in seconds. | 
| initial_cooldown | 0 | Integer number | How long the mob will wait after spawning or getting the goal added before the goal can start. | 
| interaction_time | 3 | Decimal number | The amount of time in seconds spent interacting with the containers. | 
| max_stack_size | 64 | Integer number | The maximum stack size that the mob will try to take from a container. Value must be >= 1. Value must be <= 64. | 
| max_visited_containers | 16 | Integer number | The maximum number of containers that the mob will try to take/place items from before going on cooldown and starting over. | 
| place_strategy | any | [Place Strategy](#place-strategy-choices) choices | The strategy to use for placing the transported item. | 
| priority | 0 | Integer number |  | 
| search_distance | [64, 32] | Array of numbers | The maximum search distance horizontally and vertically at which to find containers for taking or placing items. | 
| search_distance (Search Distance) | *not set* | [Search Distance (Search Distance)](#search-distance-search-distance) item |  | 
| search_strategy | random | [Search Strategy](#search-strategy-choices) choices | The strategy to use for finding source or destination containers. The nearest valid container or a random valid container in range. | 
| source_container_types (Source Container Types) | [] | [Source Container Types](#source-container-types) item | A list of block descriptors that should be container types to take items from. Can be simple block identifier strings or objects with name, states, and tags. | 
| source_container_types (Source Container Type) | *not set* | Array of [Source Container Types (Source Container Type)](#source-container-types-source-container-type) items |  | 

### allowed_items

A list of item descriptors that are the only items the mob is allowed to transport. If this and "disallowed_items" are both empty, then all items are allowed. If non-empty "disallowed_items" must be empty.

### place_strategy

The strategy to use for placing the transported item. Any - always place if there is room, With matching - place if there is a matching item in the container, With matching or empty - like With matching but will also place in empty containers.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Destination Container Types

#### Destination Container Types Properties

**JSON path:** `destination_container_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

### Destination Container Types (Destination Container Type)

#### Destination Container Type Properties

**JSON path:** `destination_container_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | String | Block identifier like 'minecraft:chest' | 
| states | *not set* | Keyed set of strings | Block state values to match | 
| tags | *not set* | String | Block tags to match | 

### Place Strategy choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| any | Any | |
| with_matching | With matching | |
| with_matching_or_empty | With matching or empty | |

### Search Distance (Search Distance)

#### Search Distance Properties

**JSON path:** `search_distance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 

### Search Strategy choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| nearest | Nearest | |
| random | Random | |

### Source Container Types

Same structure as [Destination Container Types](#destination-container-types).


### Source Container Types (Source Container Type)

Same structure as [Destination Container Types (Destination Container Type)](#destination-container-types-destination-container-type).


## Samples
