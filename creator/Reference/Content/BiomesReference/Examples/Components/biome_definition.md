---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:biome_definition"
description: "Describes the minecraft:biome_definition biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:biome_definition

Contains a description and components to define a Biome.


## Biome Definition Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | [Components](#components-item-type) item | Components for this Biome. |  | 
| description | *not set* | [Description](#description-item-type) item | Non-component settings, including the Biome name. |  | 

## Components item type
Any components that this Biome uses.


#### Biome Components Properties

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
| minecraft:replace_biomes | *not set* | [Replace Biomes](#replace-biomes-item-type) item | Replaces a specified portion of one or more Minecraft biomes. |  | 
| minecraft:surface_material_adjustments | *not set* | [Surface Material Adjustments](#surface-material-adjustments-item-type) item | Specify fine-detail changes to blocks used in terrain generation (based on a noise function). |  | 
| minecraft:surface_parameters | *not set* | [Surface Parameters](#surface-parameters-item-type) item | Controls the blocks used for the default Minecraft Overworld terrain generation. |  | 
| minecraft:swamp_surface | *not set* | [Swamp Surface](#swamp-surface-item-type) item | Similar to overworld_surface. Adds swamp surface details. |  | 
| minecraft:tags | *not set* | [Tags](#tags-item-type) item | Attach arbitrary string tags to this biome.<br>Most biome tags are referenced by JSON settings, but some meanings of tags are directly implemented in the game's code. These tags are listed here:<br>birch: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".<br>cold: Villagers will be dressed for snowy weather.<br>deep: Pre-Caves and Cliffs, prevents an ocean from having islands or connected rivers and makes the biome less likely to have hills.<br>desert: Allows partially-buried ruined portals to be placed in the biome. Sand blocks will play ambient sounds when the player is nearby.<br>extreme_hills: Ruined portals can be placed higher than normal. Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers.<br>flower_forest: Biome uses forest flowers (mutually exclusive with other flower biome tags).<br>forest: Biome uses forest flowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged tagged "taiga" or "extreme_hills".<br>forest_generation: Equivalent to "forest".<br>frozen: Villagers will be dressed for snowy weather. Prevents the biome from containing lava springs if it is also tagged "ocean".<br>ice: Around ruined portals, lava is always replaced by Netherrack and Netherrack cannot be replaced by magma.<br>ice_plains: Prevents the biome from containing lava springs if it is also tagged "mutated".<br>jungle: Ruined portals will be very mossy.<br>hills: Biomes tagged "meadow" or "birch" will use normal Overworld flowers instead of wildflowers.<br>meadow: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".<br>mesa: Sand blocks will play ambient sounds when the player is nearby.<br>mountain: Ruined portals can be placed higher than normal.<br>mutated: Pre-Caves and Cliffs, prevents switching to the specified "mutate_transformation" as the biome is already considered mutated. Prevents the biome from containing lava springs if it is also tagged "ice_plains".<br>no_legacy_worldgen: Prevents biome from using legacy world generation behavior unless the biome is being placed in the Overworld.<br>ocean: Prevents the biome from containing lava springs if it is also tagged "frozen". Allows ruined portals to be found underwater. Pre-Caves and Cliffs, determines if shorelines and rivers should be placed at the edges of the biome and identifies the biome as a shallow ocean for placing islands, unless the "deep" tag is present.<br>pale_garden: Biome uses closed-eye blossoms (mutually exclusive with other flower biome tags).<br>plains: Biome uses plains flowers (mutually exclusive with other flower biome tags).<br>rare: Pre-Caves and Cliffs, this tag flags the biome as a special biome. Oceans cannot be special.<br>swamp: Allows ruined portals to be found underwater. Biome uses swamp flowers (mutually exclusive with other flower biome tags).<br>taiga: Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers. |  | 
| minecraft:the_end_surface | *not set* | Object | Use default Minecraft End terrain generation. |  | 

## Capped Surface item type
Generates surface on blocks with non-solid blocks above or below.


#### Capped Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| beach_material | *not set* | Keyed set of strings | Material used to decorate surface near sea level. |  | 
| beach_material (Alternate 1) | *not set* | [Beach Material (Alternate 1)](#beach-material-(alternate-1)-item-type) item |  |  | 
| ceiling_materials | *not set* | Keyed set of strings | Materials used for the surface ceiling. Value must have at least 1 items. |  | 
| ceiling_materials (Alternate 1) | *not set* | [Ceiling Materials (Alternate 1)](#ceiling-materials-(alternate-1)-item-type) item |  |  | 
| floor_materials | *not set* | Keyed set of strings | Materials used for the surface floor. Value must have at least 1 items. |  | 
| floor_materials (Alternate 1) | *not set* | [Floor Materials (Alternate 1)](#floor-materials-(alternate-1)-item-type) item |  |  | 
| foundation_material | *not set* | Keyed set of strings | Material used to replace solid blocks that are not surface blocks. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Material used to replace air blocks below sea level. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 

## Beach Material (Alternate 1) item type

#### Beach Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Ceiling Materials (Alternate 1) item type

#### Ceiling Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Floor Materials (Alternate 1) item type

#### Floor Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Climate item type
Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values.


#### Climate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ash | *not set* | Decimal number | Density of ash precipitation visuals |  | 
| blue_spores | *not set* | Decimal number | Density of blue spore precipitation visuals |  | 
| downfall | *not set* | Decimal number | Amount that precipitation affects colors and block changes |  | 
| red_spores | *not set* | Decimal number | Density of blue spore precipitation visuals |  | 
| snow_accumulation | *not set* | Array of numbers | Minimum and maximum snow level, each multiple of 0.125 is another snow layer Value must have at least 2 items. Value must have at most 2 items. |  | 
| temperature | *not set* | Decimal number | Temperature affects a variety of visual and behavioral things, including snow and ice placement, sponge drying, and sky color |  | 
| white_ash | *not set* | Decimal number | Density of white ash precipitation visuals |  | 

## Creature Spawn Probability item type
Probability that creatures will spawn within the biome when a chunk is generated.


#### Creature Spawn Probability Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| probability | *not set* | Decimal number | Probabiltity between [0.0, 0.75] of creatures spawning within the biome on chunk generation. Value must be <= 0.75. |  | 

## Frozen Ocean Surface item type
Similar to overworld_surface. Adds icebergs.


#### Frozen Ocean Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Alternate 1)](#mid-material-(alternate-1)-item-type) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Alternate 1)](#sea-floor-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Alternate 1)](#top-material-(alternate-1)-item-type) item |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 1) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 1) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 1) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mesa Surface item type
Similar to overworld_surface. Adds colored strata and optional pillars.


#### Mesa Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars |  | 
| clay_material | *not set* | Keyed set of strings | Base clay block to use |  | 
| clay_material (Alternate 1) | *not set* | [Clay Material (Alternate 1)](#clay-material-(alternate-1)-item-type) item |  |  | 
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| hard_clay_material | *not set* | Keyed set of strings | Hardened clay block to use |  | 
| hard_clay_material (Alternate 1) | *not set* | [Hard Clay Material (Alternate 1)](#hard-clay-material-(alternate-1)-item-type) item |  |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Alternate 1)](#mid-material-(alternate-1)-item-type) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Alternate 1)](#sea-floor-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Alternate 1)](#top-material-(alternate-1)-item-type) item |  |  | 

## Clay Material (Alternate 1) item type

#### Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Hard Clay Material (Alternate 1) item type

#### Hard Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 1) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 1) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 1) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mountain Parameters item type
Noise parameters used to drive mountain terrain generation in Overworld.


#### Mountain Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| steep_material_adjustment | *not set* | [Steep Material Adjustment](#steep-material-adjustment-item-type) item | Defines surface material for steep slopes |  | 
| top_slide | *not set* | [Top Slide](#top-slide-item-type) item | Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high |  | 

## Steep Material Adjustment item type
Defines surface material for steep slopes.


#### Mountain Parameters - Steep Material Adjustment Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| east_slopes | *not set* | Boolean true/false | Enable for east-facing slopes |  | 
| material | *not set* | Keyed set of strings | Block type use as steep material |  | 
| material (Alternate 1) | *not set* | [Material (Alternate 1)](#material-(alternate-1)-item-type) item |  |  | 
| north_slopes | *not set* | Boolean true/false | Enable for north-facing slopes |  | 
| south_slopes | *not set* | Boolean true/false | Enable for south-facing slopes |  | 
| west_slopes | *not set* | Boolean true/false | Enable for west-facing slopes |  | 

## Material (Alternate 1) item type

#### Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Slide item type
Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high.


#### Mountain Parameters - Top Slide Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| enabled | *not set* | Boolean true/false | If false, top slide will be disabled. If true, other parameters will be taken into account. |  | 

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
| hills_transformation | *not set* | Array of strings | What biome to switch to when converting to a hilly biome |  | 
| hills_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| hills_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 
| mutate_transformation | *not set* | Array of strings | What biome to switch to when converting to a mutated biome |  | 
| mutate_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| mutate_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 
| river_transformation | *not set* | Array of strings | What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome) |  | 
| river_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| river_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 
| shore_transformation | *not set* | Array of strings | What biome to switch to when adjacent to an ocean biome |  | 
| shore_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| shore_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Overworld Height item type
Noise parameters used to drive terrain height in the Overworld.


#### Overworld Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| noise_params | *not set* | Array of numbers | First value is depth - more negative means deeper underwater, while more positive means higher. Second value is scale, which affects how much noise changes as it moves from the surface. Value must have at least 2 items. Value must have at most 2 items. |  | 
| noise_type | *not set* | String | Specifies a preset based on a built-in setting rather than manually using noise_params |  | 

## Replace Biomes item type
Replaces a specified portion of one or more Minecraft biomes.


#### Replace Biomes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| replacements | *not set* | Array of [Replacements](#replacements-item-type) items | List of biome replacement configurations. Retroactively adding a new replacement to the front of this list will cause the world generation to change. Please add any new replacements to the end of the list. |  | 

## Replacements item type
Represents the replacement information used to determine the placement of the overriding biome.


#### Biome Replacement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amount | *not set* | Decimal number | Noise value used to determine whether or not the replacement is attempted, similar to a percentage. Must be in the range (0.0, 1.0]. Value must be <= 1. |  | 
| dimension | *not set* | String | Dimension in which this replacement can happen. Must be 'minecraft:overworld'. |  | 
| noise_frequency_scale | *not set* | Decimal number | Scaling value used to alter the frequency of replacement attempts. A lower frequency will mean a bigger contiguous biome area that occurs less often. A higher frequency will mean smaller contiguous biome areas that occur more often. Must be in the range (0.0, 100.0]. Value must be <= 100. |  | 
| targets | *not set* | String | Biomes that are going to be replaced by the overriding biome. Target biomes must not contain namespaces. Value must have at least 1 items. |  | 

## Surface Material Adjustments item type
Specify fine-detail changes to blocks used in terrain generation (based on a noise function).


#### Surface Material Adjustments Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjustments | *not set* | Array of [Adjustments](#adjustments-item-type) items | All adjustments that match the column's noise values will be applied in the order listed. |  | 

## Adjustments item type
An adjustment to generated terrain, replacing blocks based on the specified settings.


#### Surface Material Adjustments - Surface Adjustment Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height_range | *not set* | Decimal number | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. |  | 
| height_range (Alternate 1) | *not set* | Boolean true/false |  |  | 
| height_range (Alternate 2) | *not set* | String |  |  | 
| materials | *not set* | [Materials](#materials-item-type) item | The specific blocks used for this surface adjustment |  | 
| noise_frequency_scale | *not set* | Decimal number | The scale to multiply by the position when accessing the noise value for the material adjustments. |  | 
| noise_range | *not set* | Array of numbers | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. |  | 

## Materials item type
The specific blocks used for this surface adjustment.


#### Surface Material Adjustments - Surface Adjustment Materials Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome when this adjustment is active. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome when this adjustment is active. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Alternate 1)](#mid-material-(alternate-1)-item-type) item |  |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome when this adjustment is active. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Alternate 1)](#sea-floor-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used in the bodies of water in this biome when this adjustment is active. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome when this adjustment is active. |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Alternate 1)](#top-material-(alternate-1)-item-type) item |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 1) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 1) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 1) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Surface Parameters item type
Controls the blocks used for the default Minecraft Overworld terrain generation.


#### Surface Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Alternate 1)](#mid-material-(alternate-1)-item-type) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Alternate 1)](#sea-floor-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used for the bodies of water in this biome. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome. |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Alternate 1)](#top-material-(alternate-1)-item-type) item |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 1) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 1) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 1) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Swamp Surface item type
Similar to overworld_surface. Adds swamp surface details.


#### Swamp Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Alternate 1)](#mid-material-(alternate-1)-item-type) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Alternate 1)](#sea-floor-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used for the bodies of water in this biome. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome. |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Alternate 1)](#top-material-(alternate-1)-item-type) item |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 1) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 1) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 1) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Tags item type
Attach arbitrary string tags to this biome.
Most biome tags are referenced by JSON settings, but some meanings of tags are directly implemented in the game's code. These tags are listed here:
birch: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".
cold: Villagers will be dressed for snowy weather.
deep: Pre-Caves and Cliffs, prevents an ocean from having islands or connected rivers and makes the biome less likely to have hills.
desert: Allows partially-buried ruined portals to be placed in the biome. Sand blocks will play ambient sounds when the player is nearby.
extreme_hills: Ruined portals can be placed higher than normal. Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers.
flower_forest: Biome uses forest flowers (mutually exclusive with other flower biome tags).
forest: Biome uses forest flowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged tagged "taiga" or "extreme_hills".
forest_generation: Equivalent to "forest".
frozen: Villagers will be dressed for snowy weather. Prevents the biome from containing lava springs if it is also tagged "ocean".
ice: Around ruined portals, lava is always replaced by Netherrack and Netherrack cannot be replaced by magma.
ice_plains: Prevents the biome from containing lava springs if it is also tagged "mutated".
jungle: Ruined portals will be very mossy.
hills: Biomes tagged "meadow" or "birch" will use normal Overworld flowers instead of wildflowers.
meadow: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".
mesa: Sand blocks will play ambient sounds when the player is nearby.
mountain: Ruined portals can be placed higher than normal.
mutated: Pre-Caves and Cliffs, prevents switching to the specified "mutate_transformation" as the biome is already considered mutated. Prevents the biome from containing lava springs if it is also tagged "ice_plains".
no_legacy_worldgen: Prevents biome from using legacy world generation behavior unless the biome is being placed in the Overworld.
ocean: Prevents the biome from containing lava springs if it is also tagged "frozen". Allows ruined portals to be found underwater. Pre-Caves and Cliffs, determines if shorelines and rivers should be placed at the edges of the biome and identifies the biome as a shallow ocean for placing islands, unless the "deep" tag is present.
pale_garden: Biome uses closed-eye blossoms (mutually exclusive with other flower biome tags).
plains: Biome uses plains flowers (mutually exclusive with other flower biome tags).
rare: Pre-Caves and Cliffs, this tag flags the biome as a special biome. Oceans cannot be special.
swamp: Allows ruined portals to be found underwater. Biome uses swamp flowers (mutually exclusive with other flower biome tags).
taiga: Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers.


#### Tags Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | Array of strings | Array of string tags used by other systems such as entity spawning |  | 

## Description item type
Contains non-component settings for a Biome.


#### Biome Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | Object | The name of the Biome, used by other features like the '/locate biome' command. Identifiers should only be lowercase. Value must match a regular expression pattern of "^[a-z0-9._%+-]+:[a-z0-9._%+-]+$". |  | 