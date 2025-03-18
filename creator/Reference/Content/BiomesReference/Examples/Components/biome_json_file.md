---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:biome_json_file"
description: "Describes the minecraft:biome_json_file biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:biome_json_file

Contains a format version and a biome definition.


## Biome JSON File Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | Version of the JSON schema used by this file |  | 
| minecraft:biome | *not set* | [Biome](#biome-item-type) item | A single biome definition |  | 

## Biome item type
Contains a description and components to define a Biome.


#### Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | [Components](#components-item-type) item | Components for this Biome. |  | 
| description | *not set* | [Description](#description-item-type) item | Non-component settings, including the Biome name. |  | 

## Components item type
Any components that this Biome uses.


#### Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:capped_surface | *not set* | [Capped Surface](#capped-surface-item-type) item | Generates surface on blocks with non-solid blocks above or below. |  | 
| minecraft:climate | *not set* | [Climate](#climate-item-type) item | Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values. |  | 
| minecraft:creature_spawn_probability | *not set* | [Creature Spawn Probability](#creature-spawn-probability-item-type) item | Probability that creatures will spawn within the biome when a chunk is generated. |  | 
| minecraft:frozen_ocean_surface | *not set* | [Frozen Ocean Surface](#frozen-ocean-surface-item-type) item | Similar to overworld_surface. Adds icebergs. |  | 
| minecraft:mesa_surface | *not set* | [Mesa Surface](#mesa-surface-item-type) item | Similar to overworld_surface. Adds colored strata and optional pillars. |  | 
| minecraft:mountain_parameters | *not set* | [Mountain Parameters](#mountain-parameters-item-type) item | Noise parameters used to drive mountain terrain generation in Overworld. |  | 
| minecraft:multinoise_generation_rules | *not set* | [Multinoise Generation Rules](#multinoise-generation-rules-item-type) item | Controls how this biome is instantiated (and then potentially modified) during world generation of the nether. |  | 
| minecraft:overworld_generation_rules | *not set* | [Overworld Generation Rules](#overworld-generation-rules-item-type) item | Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld. |  | 
| minecraft:overworld_height | *not set* | [Overworld Height](#overworld-height-item-type) item | Noise parameters used to drive terrain height in the Overworld. |  | 
| minecraft:surface_material_adjustments | *not set* | [Surface Material Adjustments](#surface-material-adjustments-item-type) item | Specify fine-detail changes to blocks used in terrain generation (based on a noise function). |  | 
| minecraft:surface_parameters | *not set* | [Surface Parameters](#surface-parameters-item-type) item | Controls the blocks used for the default Minecraft Overworld terrain generation. |  | 
| minecraft:swamp_surface | *not set* | [Swamp Surface](#swamp-surface-item-type) item | Similar to overworld_surface. Adds swamp surface details. |  | 
| minecraft:tags | *not set* | [Tags](#tags-item-type) item | Attach arbitrary string tags to this biome. |  | 
| minecraft:the_end_surface | *not set* | Object | Use default Minecraft End terrain generation. |  | 

## Capped Surface item type
Generates surface on blocks with non-solid blocks above or below.


#### Capped Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| beach_material | *not set* | Object | Material used to decorate surface near sea level. |  | 
| ceiling_materials | *not set* | Array of objects | Materials used for the surface ceiling. |  | 
| floor_materials | *not set* | Array of objects | Materials used for the surface floor. |  | 
| foundation_material | *not set* | Object | Material used to replace solid blocks that are not surface blocks. |  | 
| sea_material | *not set* | Object | Material used to replace air blocks below sea level. |  | 

## Climate item type
Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values.


#### Climate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ash | *not set* | Decimal number | Density of ash precipitation visuals |  | 
| blue_spores | *not set* | Decimal number | Density of blue spore precipitation visuals |  | 
| downfall | *not set* | Decimal number | Amount that precipitation affects colors and block changes |  | 
| red_spores | *not set* | Decimal number | Density of blue spore precipitation visuals |  | 
| snow_accumulation | *not set* | Array of objects | Minimum and maximum snow level, each multiple of 0.125 is another snow layer |  | 
| temperature | *not set* | Decimal number | Temperature affects a variety of visual and behavioral things, including snow and ice placement, sponge drying, and sky color |  | 
| white_ash | *not set* | Decimal number | Density of white ash precipitation visuals |  | 

## Creature Spawn Probability item type
Probability that creatures will spawn within the biome when a chunk is generated.


#### Creature Spawn Probability Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| probability | *not set* | Decimal number | Probabiltity between [0.0, 0.75] of creatures spawning within the biome on chunk generation. |  | 

## Frozen Ocean Surface item type
Similar to overworld_surface. Adds icebergs.


#### Frozen Ocean Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome |  | 

## Mesa Surface item type
Similar to overworld_surface. Adds colored strata and optional pillars.


#### Mesa Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars |  | 
| clay_material | *not set* | Object | Base clay block to use |  | 
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome |  | 
| hard_clay_material | *not set* | Object | Hardened clay block to use |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome |  | 

## Mountain Parameters item type
Noise parameters used to drive mountain terrain generation in Overworld.


#### Mountain Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| steep_material_adjustment | *not set* | Object | Defines surface material for steep slopes |  | 
| top_slide | *not set* | Object | Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high |  | 

## Multinoise Generation Rules item type
Controls how this biome is instantiated (and then potentially modified) during world generation of the nether.


#### Multinoise Generation Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| target_altitude | *not set* | Decimal number | Altitude with which this biome should be generated, relative to other biomes. |  | 
| target_humidity | *not set* | Decimal number | Humidity with which this biome should be generated, relative to other biomes. |  | 
| target_temperature | *not set* | Decimal number | Temperature with which this biome should be generated, relative to other biomes. |  | 
| target_weirdness | *not set* | Decimal number | Weirdness with which this biome should be generated, relative to other biomes. |  | 
| weight | *not set* | Decimal number | Weight with which this biome should be generated, relative to other biomes. |  | 

## Overworld Generation Rules item type
Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld.


#### Overworld Generation Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| generate_for_climates | *not set* | Array of objects | Controls the world generation climate categories that this biome can spawn for. A single biome can be associated with multiple categories with different weightings. |  | 
| hills_transformation | *not set* | Object | What biome to switch to when converting to a hilly biome |  | 
| mutate_transformation | *not set* | Object | What biome to switch to when converting to a mutated biome |  | 
| river_transformation | *not set* | Object | What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome) |  | 
| shore_transformation | *not set* | Object | What biome to switch to when adjacent to an ocean biome |  | 

## Overworld Height item type
Noise parameters used to drive terrain height in the Overworld.


#### Overworld Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| noise_params | *not set* | Array of objects | First value is depth - more negative means deeper underwater, while more positive means higher. Second value is scale, which affects how much noise changes as it moves from the surface. |  | 
| noise_type | *not set* | String | Specifies a preset based on a built-in setting rather than manually using noise_params |  | 

## Surface Material Adjustments item type
Specify fine-detail changes to blocks used in terrain generation (based on a noise function).


#### Surface Material Adjustments Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjustments | *not set* | Array of objects | All adjustments that match the column's noise values will be applied in the order listed. |  | 

## Surface Parameters item type
Controls the blocks used for the default Minecraft Overworld terrain generation.


#### Surface Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome. |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome. |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome. |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome. |  | 

## Swamp Surface item type
Similar to overworld_surface. Adds swamp surface details.


#### Swamp Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome. |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome. |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome. |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome. |  | 

## Tags item type
Attach arbitrary string tags to this biome.


#### Tags Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | Array of objects | Array of string tags used by other systems such as entity spawning |  | 

## Description item type
Contains non-component settings for a Biome.


#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of the Biome, used by other features like the '/locate biome' command. |  | 