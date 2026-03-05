---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - minecraft:spawn_rules_document"
description: "Describes the minecraft:spawn_rules_document spawn rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation - minecraft:spawn_rules_document

A spawn rules definition document for Minecraft Bedrock Edition. This describes the complete JSON file structure including format_version and the minecraft:spawn_rules wrapper.


## Spawn Rules Document Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | Version | The format version of this spawn rules file. | 
| minecraft:spawn_rules | *not set* | [Spawn Rules](#spawn-rules) item | The spawn rules definition container. | 

### Spawn Rules
Defines the complete spawn rules for an entity type, including population control group, spawn conditions (biome, light, difficulty, etc.), and herd configuration. This is the root structure of a spawn_rules JSON file in behavior packs.


#### Spawn Rules Properties

**JSON path:** `minecraft:spawn_rules`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| conditions | [] | Array of [Conditions](#spawn-biome-conditions) items | Array of spawn condition objects that define when and how this entity spawns. | 
| description | *not set* | [Description](#spawn-description) item |  | 

#### Spawn Biome Conditions
Defines the conditions under which an entity can spawn, including biome filters, brightness, height, and herd settings.


##### Spawn Biome Conditions Properties

**JSON path:** `minecraft:spawn_rules > conditions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:biome_filter (Biome Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Biome Filter](#biome-filter) item | Filters allow data objects to specify test criteria which allows their use. | 
| minecraft:biome_filter (as Array of objects) | *not set* | Array of objects | Array of filter objects. | 
| minecraft:brightness_filter | *not set* | [Brightness Filter](#spawn-brightnessfilter) item |  | 
| minecraft:delay_filter | *not set* | [Delay Filter](#spawn-delayfilter) item |  | 
| minecraft:density_limit | *not set* | [Density Limit](#spawn-densitylimit) item |  | 
| minecraft:difficulty_filter | *not set* | [Difficulty Filter](#spawn-difficultyfilter) item |  | 
| minecraft:disallow_spawns_in_bubble | *not set* | Object | Prevents spawning inside bubble columns. | 
| minecraft:distance_filter | *not set* | [Distance Filter](#spawn-distancefilter) item |  | 
| minecraft:height_filter | *not set* | [Height Filter](#spawn-heightfilter) item |  | 
| minecraft:herd | [] | Object | Specifies herd spawning configuration. Can be a single herd object or an array of herd objects. | 
| minecraft:herd (as Array of objects) | *not set* | Array of objects | Array of herd configurations. | 
| minecraft:is_experimental | *not set* | Object |  | 
| minecraft:is_persistent | *not set* | Object |  | 
| minecraft:mob_event_filter | *not set* | [Mob Event Filter](#spawn-mobeventfilter) item |  | 
| minecraft:permute_type | [] | Object | Specifies permutation types for spawning. Can be a single object or an array of permutation objects. | 
| minecraft:permute_type (as Array of objects) | *not set* | Array of objects | Array of permutation configurations. | 
| minecraft:player_in_village_filter | *not set* | [Player In Village Filter](#spawn-playerinvillagefilter) item |  | 
| minecraft:spawn_event | {"event":""} | [Spawn Event](#spawn-mobeventfilter) item |  | 
| minecraft:spawns_above_block_filter | {"blocks":[],"distance":1} | [Spawns Above Block Filter](#spawns-above-block-filter) item |  | 
| minecraft:spawns_lava | *not set* | Object | Indicates the entity can spawn in lava. | 
| minecraft:spawns_on_block_filter | [] | Array of objects | Specifies blocks on which this entity can spawn. Can be a single block name string, an array of block objects with name property, or an array of strings representing block names. | 
| minecraft:spawns_on_block_filter (as String) | *not set* | String | A single block name string | 
| minecraft:spawns_on_block_filter (as Array of strings) | *not set* | Array of strings | An array of block name strings | 
| minecraft:spawns_on_block_prevented_filter | [] | Array of strings | Specifies blocks on which this entity cannot spawn. Can be an array of block name strings. | 
| minecraft:spawns_on_surface | *not set* | Object |  | 
| minecraft:spawns_underground | *not set* | Object |  | 
| minecraft:spawns_underwater | *not set* | Object |  | 
| minecraft:weight | *not set* | [Weight](#spawn-weight) item |  | 
| minecraft:world_age_filter | *not set* | [World Age Filter](#spawn-worldagefilter) item |  | 

##### minecraft:biome_filter

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects. This uses the Minecraft filter dataType (20) which properly handles the complex filter structure including string operators and values.


##### Biome Filter

###### Biome Filter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:biome_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| all_of | *not set* | Array of objects | All of these tests must pass. | 
| any_of | *not set* | Array of objects | Any of these tests must pass. | 
| domain | *not set* | String | The domain the test should be performed in. | 
| none_of | *not set* | Array of objects | None of these tests must pass. | 
| operator | *not set* | String | The comparison to apply with 'value'. | 
| subject | *not set* | String | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Integer number | The value being compared with the test. | 

##### Spawn BrightnessFilter
Restricts mob spawning based on light level at the spawn location. Hostile mobs typically spawn in darkness (light level 0-7), while passive mobs spawn in brighter areas. Allows setting min/max brightness thresholds and whether to adjust for spawning on a block surface.


###### Spawn BrightnessFilter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:brightness_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| adjust_for_weather | false | Boolean true/false |  | 
| max | 15 | Integer number |  | 
| min | 0 | Integer number |  | 

##### Spawn DelayFilter
Delays entity spawning by a configurable amount of time after spawn conditions are met. Useful for preventing immediate respawning after mob deaths or creating spawn cooldowns for rare creatures.


###### Spawn DelayFilter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:delay_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier |  | String |  | 
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 
| spawn_chance | 100 | Integer number |  | 

##### Spawn DensityLimit
Limits how many of this entity type can exist in an area, with separate caps for surface and underground spawning. This prevents overpopulation and controls mob density for performance and gameplay balance.


###### Spawn DensityLimit Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:density_limit`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| surface | -1 | Integer number |  | 
| underground | -1 | Integer number |  | 

##### Spawn DifficultyFilter
Restricts mob spawning to specific difficulty levels (Peaceful, Easy, Normal, Hard). For example, hostile mobs don't spawn on Peaceful, and some dangerous variants only appear on Hard difficulty.


###### Spawn DifficultyFilter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:difficulty_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | hard | [Max](#max-choices) choices |  | 
| min | peaceful | [Min](#max-choices) choices |  | 

### Max choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |

##### Spawn DistanceFilter
Controls spawning based on distance from the nearest player. Mobs typically spawn within a certain radius around players (24-128 blocks) and despawn when players move too far away.


###### Spawn DistanceFilter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:distance_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 128 | Integer number |  | 
| min | 24 | Integer number |  | 

##### Spawn HeightFilter

Same structure as [Spawn DistanceFilter](#spawn-distancefilter).


##### Spawn MobEventFilter
Controls spawning based on whether a specific mob event is active. Mob events are world-level toggles (like raids or wandering traders) that can enable or disable certain spawn behaviors.


###### Spawn MobEventFilter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:mob_event_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 

##### Spawn PlayerInVillageFilter
Restricts spawning based on whether a player is within village boundaries. Used for village-specific spawns like iron golems, cats, and raid mobs that should only appear when players are near villages.


###### Spawn PlayerInVillageFilter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:player_in_village_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| distance | *not set* | Integer number |  | 
| village_border_tolerance | 10 | Integer number |  | 

##### Spawns Above Block Filter
Filters spawning based on blocks above the spawn location. This component appears to have been deprecated or changed in versions after 1.17.20.

> [!Note]
> This spawn condition was used in versions 1.17.20 and earlier but appears to have been removed or replaced in newer versions.

> [!Note]
> This item no longer works after format versions of at least 1.18.0.


###### Spawns Above Block Filter Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:spawns_above_block_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| blocks | [] | Object |  | 
| distance | 1 | Integer number |  | 

##### Spawn Weight
Defines the relative probability of this entity spawning compared to other entities in the same biome and spawn pool. Higher weight values mean more frequent spawns. A weight of 100 is typical for common mobs.


###### Spawn Weight Properties

**JSON path:** `minecraft:spawn_rules > conditions > minecraft:weight`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| default | *not set* | Integer number |  | 
| rarity | 0 | Integer number |  | 

##### Spawn WorldAgeFilter

Same structure as [Spawn DistanceFilter](#spawn-distancefilter).


#### Spawn Description
The description block that identifies which entity these spawn rules apply to, via the entity identifier (e.g., 'minecraft:zombie'). Also specifies the population control group for managing spawn caps.


##### Spawn Description Properties

**JSON path:** `minecraft:spawn_rules > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String |  | 
| population_control |  | String |  | 