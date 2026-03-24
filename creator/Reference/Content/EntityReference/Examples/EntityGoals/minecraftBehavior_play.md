---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.play"
description: "Describes the minecraft:behavior.play ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.play

Allows the mob to offer a flower to another mob with the minecraft:take_flower behavior.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Entity Play Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| chance_to_start | 0.0024999999441206455 | Decimal number | Percent chance that the mob will start this goal, from 0 to 1. Value must be <= 1. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| follow_distance | 2 | Integer number | The distance (in blocks) that the mob tries to be in range of the friend it's following. | 
| friend_search_area | [6, 3, 6] | Array of numbers | The dimensions of the AABB used to search for a potential friend to play with. | 
| friend_search_area (Friend Search Area) | *not set* | [Friend Search Area (Friend Search Area)](#friend-search-area-friend-search-area) item |  | 
| friend_types | [] | Array of objects | The entity type(s) to consider when searching for a potential friend to play with. | 
| friend_types (Friend Types) | *not set* | [Friend Types (Friend Types)](#friend-types-friend-types) item |  | 
| max_play_duration_seconds | 50 | Decimal number | The max amount of seconds that the mob will play for before exiting the Goal. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| random_pos_search_height | 3 | Integer number | The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1. Value must be >= 1. | 
| random_pos_search_range | 16 | Integer number | The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1. Value must be >= 1. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Friend Search Area (Friend Search Area)

#### Friend Search Area Properties

**JSON path:** `friend_search_area`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Friend Types (Friend Types)

#### Friend Types Properties

**JSON path:** `friend_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| check_if_outnumbered | false | Boolean true/false | If true, the mob will check if its outnumbered | 
| cooldown | 0 | Integer number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that make this entry in the list valid | 
| filters (Alternate 1) | *not set* | Object |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice | 
| max_flee | 10 | Decimal number | Maximum distance this mob can be from the target to stop fleeing | 
| max_height | -1 | Decimal number | Maximum height this mob can be away to be a valid choice | 
| must_see | *not set* | Boolean true/false | If true, the mob has to be visible to be a valid choice | 
| must_see_forget_duration | 3 | Integer number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more | 
| priority | 0 | Integer number | Priority for this mob type | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the sprinting speed. A value of 1.0 means the speed is unchanged | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged | 

#### Filters

##### Filters Properties

**JSON path:** `friend_types > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples
