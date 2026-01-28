---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - minecraft:spawn_biomeconditions"
description: "Describes the minecraft:spawn_biomeconditions spawn rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation - minecraft:spawn_biomeconditions

Defines the conditions under which an entity can spawn, including biome filters, brightness, height, and herd settings.


## Spawn Biome Conditions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:biome_filter (Biome Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Biome Filter](#biome-filter) item | Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects. This uses the Minecraft filter dataType (20) which properly handles the complex filter structure including string operators and values. |  | 
| minecraft:biome_filter (Alternate 1) | *not set* | Array of objects | Array of filter objects. |  | 
| minecraft:brightness_filter | *not set* | [Brightness Filter](#spawn-brightnessfilter) item |  |  | 
| minecraft:delay_filter | *not set* | [Delay Filter](#spawn-delayfilter) item |  |  | 
| minecraft:density_limit | *not set* | [Density Limit](#spawn-densitylimit) item |  |  | 
| minecraft:difficulty_filter | *not set* | [Difficulty Filter](#spawn-difficultyfilter) item |  |  | 
| minecraft:distance_filter | *not set* | [Distance Filter](#spawn-distancefilter) item |  |  | 
| minecraft:height_filter | *not set* | [Height Filter](#spawn-heightfilter) item |  |  | 
| minecraft:herd | [] | Object | Specifies herd spawning configuration. Can be a single herd object or an array of herd objects. |  | 
| minecraft:herd (Alternate 1) | *not set* | Array of objects | Array of herd configurations. |  | 
| minecraft:is_experimental | *not set* | Object |  |  | 
| minecraft:is_persistent | *not set* | Object |  |  | 
| minecraft:mob_event_filter | *not set* | [Mob Event Filter](#spawn-mobeventfilter) item |  |  | 
| minecraft:permute_type | [] | Object | Specifies permutation types for spawning. Can be a single object or an array of permutation objects. |  | 
| minecraft:permute_type (Alternate 1) | *not set* | Array of objects | Array of permutation configurations. |  | 
| minecraft:player_in_village_filter | *not set* | [Player In Village Filter](#spawn-playerinvillagefilter) item |  |  | 
| minecraft:spawn_event | {"event":""} | [Spawn Event](#spawn-mobeventfilter) item |  |  | 
| minecraft:spawns_above_block_filter | {"blocks":[],"distance":1} | [Spawns Above Block Filter](#spawns-above-block-filter) item |  |  | 
| minecraft:spawns_on_block_filter | [] | Array of objects | Specifies blocks on which this entity can spawn. Can be a single block name string, an array of block objects with name property, or an array of strings representing block names. |  | 
| minecraft:spawns_on_block_filter (Alternate 1) | *not set* | String | A single block name string |  | 
| minecraft:spawns_on_block_filter (Alternate 2) | *not set* | Array of strings | An array of block name strings |  | 
| minecraft:spawns_on_block_prevented_filter | [] | Array of strings | Specifies blocks on which this entity cannot spawn. Can be an array of block name strings. |  | 
| minecraft:spawns_on_surface | *not set* | Object |  |  | 
| minecraft:spawns_underground | *not set* | Object |  |  | 
| minecraft:spawns_underwater | *not set* | Object |  |  | 
| minecraft:weight | *not set* | [Weight](#spawn-weight) item |  |  | 
| minecraft:world_age_filter | *not set* | [World Age Filter](#spawn-worldagefilter) item |  |  | 
| minecraft:disallow_spawns_in_bubble | *not set* | Object | Deprecated - no longer in use. Prevents spawning inside bubble columns. This condition appears to have been deprecated after version 1.18.0. This property no longer works after format versions of at least 1.19.0. This spawn condition was used in versions 1.17.20-1.18.0 but has been removed in newer versions. |  | 
| minecraft:spawns_lava | *not set* | Object | Deprecated - no longer in use. Indicates the entity can spawn in lava. This condition was deprecated in version 1.16.100 and replaced with more general spawning conditions. This property no longer works after format versions of at least 1.16.100. This spawn condition was used in version 1.16 but has been removed in favor of other spawn conditions like minecraft:spawns_on_block_filter. |  | 

## Biome Filter

#### Biome Filter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all_of | *not set* | Array of objects | All of these tests must pass. |  | 
| any_of | *not set* | Array of objects | Any of these tests must pass. |  | 
| domain | *not set* | String | The domain the test should be performed in. |  | 
| none_of | *not set* | Array of objects | None of these tests must pass. |  | 
| operator | *not set* | String | The comparison to apply with 'value'. |  | 
| subject | *not set* | String | The subject of this filter test. |  | 
| test | *not set* | String | The name of the test to apply. |  | 
| value | *not set* | Integer number | The value being compared with the test. |  | 

## Spawn BrightnessFilter
Restricts mob spawning based on light level at the spawn location. Hostile mobs typically spawn in darkness (light level 0-7), while passive mobs spawn in brighter areas. Allows setting min/max brightness thresholds and whether to adjust for spawning on a block surface.


#### Spawn BrightnessFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjust_for_weather | false | Boolean true/false |  |  | 
| max | 15 | Integer number |  |  | 
| min | 0 | Integer number |  |  | 

## Spawn DelayFilter
Delays entity spawning by a configurable amount of time after spawn conditions are met. Useful for preventing immediate respawning after mob deaths or creating spawn cooldowns for rare creatures.


#### Spawn DelayFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier |  | String |  |  | 
| max | 0 | Integer number |  |  | 
| min | 0 | Integer number |  |  | 
| spawn_chance | 100 | Integer number |  |  | 

## Spawn DensityLimit
Limits how many of this entity type can exist in an area, with separate caps for surface and underground spawning. This prevents overpopulation and controls mob density for performance and gameplay balance.


#### Spawn DensityLimit Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| surface | -1 | Integer number |  |  | 
| underground | -1 | Integer number |  |  | 

## Spawn DifficultyFilter
Restricts mob spawning to specific difficulty levels (Peaceful, Easy, Normal, Hard). For example, hostile mobs don't spawn on Peaceful, and some dangerous variants only appear on Hard difficulty.


#### Spawn DifficultyFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | hard | [Max](#max-choices) choices |  |  | 
| min | peaceful | [Min](#min-choices) choices |  |  | 

### Max choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |

### Min choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |

## Spawn DistanceFilter
Controls spawning based on distance from the nearest player. Mobs typically spawn within a certain radius around players (24-128 blocks) and despawn when players move too far away.


#### Spawn DistanceFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 128 | Integer number |  |  | 
| min | 24 | Integer number |  |  | 

## Spawn HeightFilter
Restricts entity spawning to specific Y-coordinate ranges. Useful for creating depth-based mob distribution like slimes in swamps (below Y=40), or limiting surface mobs from spawning underground.


#### Spawn HeightFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 128 | Integer number |  |  | 
| min | 24 | Integer number |  |  | 

## Spawn MobEventFilter
Controls spawning based on whether a specific mob event is active. Mob events are world-level toggles (like raids or wandering traders) that can enable or disable certain spawn behaviors.


#### Spawn MobEventFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event |  | String |  |  | 

## Spawn PlayerInVillageFilter
Restricts spawning based on whether a player is within village boundaries. Used for village-specific spawns like iron golems, cats, and raid mobs that should only appear when players are near villages.


#### Spawn PlayerInVillageFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| distance | *not set* | Integer number |  |  | 
| village_border_tolerance | 10 | Integer number |  |  | 

## Spawns Above Block Filter
Filters spawning based on blocks above the spawn location. This component appears to have been deprecated or changed in versions after 1.17.20.

> [!Note]
> This spawn condition was used in versions 1.17.20 and earlier but appears to have been removed or replaced in newer versions.

> [!Note]
> This item no longer works after format versions of at least 1.18.0.


#### Spawns Above Block Filter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| blocks | [] | Object |  |  | 
| distance | 1 | Integer number |  |  | 

## Spawn Weight
Defines the relative probability of this entity spawning compared to other entities in the same biome and spawn pool. Higher weight values mean more frequent spawns. A weight of 100 is typical for common mobs.


#### Spawn Weight Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default | *not set* | Integer number |  |  | 
| rarity | 0 | Integer number |  |  | 

## Spawn WorldAgeFilter
Restricts spawning based on how long the world has existed (measured in ticks). Useful for progressive difficulty where certain mobs only start appearing after the world has been played for a minimum amount of time.


#### Spawn WorldAgeFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | -1 | Integer number |  |  | 
| min | 0 | Integer number |  |  | 