---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:biome_components"
description: "Describes the minecraft:biome_components biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:biome_components

Any components that this Biome uses.


## Biome Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:climate | *not set* | [Climate](#biome-climate) item | Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values. |  | 
| minecraft:creature_spawn_probability | *not set* | [Creature Spawn Probability](#biome-creature-spawn-probability) item | Probability that creatures will spawn within the biome when a chunk is generated. |  | 
| minecraft:humidity | *not set* | [Humidity](#biome-humidity) item | Forces a biome to ether always be humid or never humid. Humidity effects the spread chance, and spread rate of fire in the biome |  | 
| minecraft:map_tints | *not set* | [Map Tints](#biome-map-tints) item | Sets the color grass and foliage will be tinted by in this biome on the map. |  | 
| minecraft:mountain_parameters | *not set* | [Mountain Parameters](#biome-mountain-parameters) item | Noise parameters used to drive mountain terrain generation in Overworld. |  | 
| minecraft:multinoise_generation_rules | *not set* | [Multinoise Generation Rules](#biome-multinoise-generation-rules) item | Controls how this biome is instantiated (and then potentially modified) during world generation of the nether. |  | 
| minecraft:overworld_generation_rules | *not set* | [Overworld Generation Rules](#biome-overworld-generation-rules) item | Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld. |  | 
| minecraft:overworld_height | *not set* | [Overworld Height](#biome-overworld-height) item | Noise parameters used to drive terrain height in the Overworld. |  | 
| minecraft:partially_frozen | *not set* | Object | Component will impact the temperature in a frozen biome, causing some areas to not be frozen. Ex: patchy ice, patchy snow |  | 
| minecraft:replace_biomes | *not set* | [Replace Biomes](#biome-replace-biomes) item | Replaces a specified portion of one or more Minecraft biomes. |  | 
| minecraft:surface_builder | *not set* | [Surface Builder](#biome-surface-builder) item | Controls the materials used for terrain generation. |  | 
| minecraft:surface_material_adjustments | *not set* | [Surface Material Adjustments](#biome-surface-material-adjustments) item | Specify fine-detail changes to blocks used in terrain generation (based on a noise function). |  | 
| minecraft:tags | *not set* | [Tags](#biome-tags) item | Attach arbitrary string tags to this biome.<br>Most biome tags are referenced by JSON settings, but some meanings of tags are directly implemented in the game's code. These tags are listed here:<br>birch: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".<br>cold: Villagers will be dressed for snowy weather.<br>deep: Pre-Caves and Cliffs, prevents an ocean from having islands or connected rivers and makes the biome less likely to have hills.<br>desert: Allows partially-buried ruined portals to be placed in the biome. Sand blocks will play ambient sounds when the player is nearby.<br>extreme_hills: Ruined portals can be placed higher than normal. Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers.<br>flower_forest: Biome uses forest flowers (mutually exclusive with other flower biome tags).<br>forest: Biome uses forest flowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged tagged "taiga" or "extreme_hills".<br>forest_generation: Equivalent to "forest".<br>frozen: Villagers will be dressed for snowy weather. Prevents the biome from containing lava springs if it is also tagged "ocean".<br>ice: Around ruined portals, lava is always replaced by Netherrack and Netherrack cannot be replaced by magma.<br>ice_plains: Prevents the biome from containing lava springs if it is also tagged "mutated".<br>jungle: Ruined portals will be very mossy.<br>hills: Biomes tagged "meadow" or "birch" will use normal Overworld flowers instead of wildflowers.<br>meadow: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".<br>mesa: Sand blocks will play ambient sounds when the player is nearby.<br>mountain: Ruined portals can be placed higher than normal.<br>mutated: Pre-Caves and Cliffs, prevents switching to the specified "mutate_transformation" as the biome is already considered mutated. Prevents the biome from containing lava springs if it is also tagged "ice_plains".<br>no_legacy_worldgen: Prevents biome from using legacy world generation behavior unless the biome is being placed in the Overworld.<br>ocean: Prevents the biome from containing lava springs if it is also tagged "frozen". Allows ruined portals to be found underwater. Pre-Caves and Cliffs, determines if shorelines and rivers should be placed at the edges of the biome and identifies the biome as a shallow ocean for placing islands, unless the "deep" tag is present.<br>pale_garden: Biome uses closed-eye blossoms (mutually exclusive with other flower biome tags).<br>plains: Biome uses plains flowers (mutually exclusive with other flower biome tags).<br>rare: Pre-Caves and Cliffs, this tag flags the biome as a special biome. Oceans cannot be special.<br>swamp: Allows ruined portals to be found underwater. Biome uses swamp flowers (mutually exclusive with other flower biome tags).<br>taiga: Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers. |  | 

## Biome Climate
Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values.


#### Biome Climate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| downfall | *not set* | Decimal number | Amount that precipitation affects colors and block changes. Setting to 0 will stop rain from falling in the biome. |  | 
| snow_accumulation | *not set* | Array of numbers | Minimum and maximum snow level, each multiple of 0.125 is another snow layer Value must have at least 2 items. Value must have at most 2 items. |  | 
| temperature | *not set* | Decimal number | Temperature affects a variety of visual and behavioral things, including snow and ice placement, sponge drying, and sky color |  | 

## Biome Creature Spawn Probability
Probability that creatures will spawn within the biome when a chunk is generated.


#### Biome Creature Spawn Probability Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| probability | *not set* | Decimal number | Probabiltity between [0.0, 0.75] of creatures spawning within the biome on chunk generation. Value must be <= 0.75. |  | 

## Biome Humidity
Forces a biome to ether always be humid or never humid. Humidity effects the spread chance, and spread rate of fire in the biome.


#### Biome Humidity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| is_humid | *not set* | Boolean true/false |  |  | 

## Biome Map Tints
Sets the color grass and foliage will be tinted by in this biome on the map.


#### Biome Map Tints Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foliage | *not set* | String | Sets the color foliage will be tinted by in this biome on the map. |  | 
| foliage (Alternate 1) | *not set* | Array of numbers |  |  | 
| grass | *not set* | Object | Controls whether the grass will use a custom tint color or a noise based tint color. |  | 

## Biome Mountain Parameters
Noise parameters used to drive mountain terrain generation in Overworld.


#### Biome Mountain Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| east_slopes | *not set* | Boolean true/false | Enable for east-facing slopes |  | 
| material | *not set* | Object | Block type use as steep material |  | 
| north_slopes | *not set* | Boolean true/false | Enable for north-facing slopes |  | 
| south_slopes | *not set* | Boolean true/false | Enable for south-facing slopes |  | 
| steep_material_adjustment | *not set* | [Steep Material Adjustment](#steep-material-adjustment) item | Defines surface material for steep slopes |  | 
| top_slide | *not set* | [Top Slide](#top-slide) item | Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high |  | 
| west_slopes | *not set* | Boolean true/false | Enable for west-facing slopes |  | 

## Steep Material Adjustment
Defines surface material for steep slopes.


#### Mountain Parameters - Steep Material Adjustment Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| east_slopes | *not set* | Boolean true/false | Enable for east-facing slopes |  | 
| material | *not set* | String | Block type use as steep material |  | 
| material (Alternate 1) | *not set* | [Material](#material) item |  |  | 
| north_slopes | *not set* | Boolean true/false | Enable for north-facing slopes |  | 
| south_slopes | *not set* | Boolean true/false | Enable for south-facing slopes |  | 
| west_slopes | *not set* | Boolean true/false | Enable for west-facing slopes |  | 

## Material

#### Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Slide
Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high.


#### Mountain Parameters - Top Slide Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| enabled | *not set* | Boolean true/false | If false, top slide will be disabled. If true, other parameters will be taken into account. |  | 

## Biome Multinoise Generation Rules
Controls how this biome is instantiated (and then potentially modified) during world generation of the nether.

> [!Note]
> This is a pre-Caves and Cliffs component and is unused for custom biomes.


#### Biome Multinoise Generation Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| target_altitude | *not set* | Decimal number | Altitude with which this biome should be generated, relative to other biomes. |  | 
| target_humidity | *not set* | Decimal number | Humidity with which this biome should be generated, relative to other biomes. |  | 
| target_temperature | *not set* | Decimal number | Temperature with which this biome should be generated, relative to other biomes. |  | 
| target_weirdness | *not set* | Decimal number | Weirdness with which this biome should be generated, relative to other biomes. |  | 
| weight | *not set* | Decimal number | Weight with which this biome should be generated, relative to other biomes. |  | 

## Biome Overworld Generation Rules
Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld.

> [!Note]
> This is a pre-Caves and Cliffs component and is unused for custom biomes.


#### Biome Overworld Generation Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| generate_for_climates | *not set* | Array of objects | Can be just the name of a biome, or an array of any size. If an array, each entry can be a biome name string, or an array of size 2, where the first entry is a biome name and the second entry is a positive integer representing how that biome is weighted against other entries. If no weight is provided, a weight of 1 is used. |  | 
| hills_transformation | *not set* | Array of strings | An array of any size containing arrays of exactly two elements. For each contained array, the first element is a climate category string ('medium', 'warm', 'lukewarm', 'cold', or 'frozen'). The second element is a positive integer for how much that entry is weighted relative to other entries. |  | 
| hills_transformation (Alternate 1) | *not set* | String |  |  | 
| mutate_transformation | *not set* | Array of strings | What biome to switch to when converting to a mutated biome |  | 
| mutate_transformation (Alternate 1) | *not set* | String |  |  | 
| river_transformation | *not set* | Array of strings | What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome) |  | 
| river_transformation (Alternate 1) | *not set* | String |  |  | 
| shore_transformation | *not set* | Array of strings | What biome to switch to when adjacent to an ocean biome |  | 
| shore_transformation (Alternate 1) | *not set* | String |  |  | 

## Biome Overworld Height
Noise parameters used to drive terrain height in the Overworld.

> [!Note]
> This is a pre-Caves and Cliffs component. It does not change overworld height, and currently only affects map item rendering.


#### Biome Overworld Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| noise_params | *not set* | Array of numbers | First value is depth - more negative means deeper underwater, while more positive means higher. Second value is scale, which affects how much noise changes as it moves from the surface. Value must have at least 2 items. Value must have at most 2 items. |  | 
| noise_type | *not set* | [Noise Type](#noise-type-choices) choices | Specifies a preset based on a built-in setting rather than manually using noise_params |  | 

### Noise Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| beach | Beach | |
| deep_ocean | Deep ocean | |
| default | Default | |
| default_mutated | Default mutated | |
| extreme | Extreme | |
| highlands | Highlands | |
| less_extreme | Less extreme | |
| lowlands | Lowlands | |
| mountains | Mountains | |
| mushroom | Mushroom | |
| ocean | Ocean | |
| river | River | |
| stone_beach | Stone beach | |
| swamp | Swamp | |
| taiga | Taiga | |

## Biome Replace Biomes
Replaces a specified portion of one or more Minecraft biomes.


#### Biome Replace Biomes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| replacements | *not set* | [Replacements](#biome-replacement) item | List of biome replacement configurations. Retroactively adding a new replacement to the front of this list will cause the world generation to change. Please add any new replacements to the end of the list. |  | 

## Biome Replacement
Represents the replacement information used to determine the placement of the overriding biome.


#### Biome Replacement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amount | *not set* | Decimal number | Noise value used to determine whether or not the replacement is attempted, similar to a percentage. Must be in the range (0.0, 1.0]. Value must be <= 1. |  | 
| dimension | *not set* | String | Dimension in which this replacement can happen. Must be 'minecraft:overworld'. |  | 
| noise_frequency_scale | *not set* | Decimal number | Scaling value used to alter the frequency of replacement attempts. A lower frequency will mean a bigger contiguous biome area that occurs less often. A higher frequency will mean smaller contiguous biome areas that occur more often. Must be in the range (0.0, 100.0]. Value must be <= 100. |  | 
| targets | *not set* | Array of objects | Biomes that are going to be replaced by the overriding biome. Target biomes must not contain namespaces. Value must have at least 1 items. |  | 

## Biome Surface Builder
Controls the materials used for terrain generation.


#### Biome Surface Builder Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| builder (Biome Overworld) | *not set* | [Builder](#biome-overworld) item | Controls the block types used for terrain generation. |  | 
| builder (Alternate 1) | *not set* | [Builder](#biome-frozen-ocean) item |  |  | 
| builder (Alternate 2) | *not set* | [Builder](#biome-mesa) item |  |  | 
| builder (Alternate 3) | *not set* | [Builder](#biome-swamp) item |  |  | 
| builder (Alternate 4) | *not set* | [Builder](#biome-capped) item |  |  | 
| builder (Alternate 5) | *not set* | [Builder](#biome-the-end) item |  |  | 

## Biome Overworld
Controls the blocks used for the default Minecraft Overworld terrain generation.


#### Biome Overworld Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use |  | 

## Foundation Material

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

## Biome Frozen Ocean
Similar to overworld_surface. Adds icebergs.


#### Biome Frozen Ocean Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

## Biome Mesa
Similar to overworld_surface. Adds colored strata and optional pillars.


#### Biome Mesa Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars |  | 
| clay_material | *not set* | String | Base clay block to use |  | 
| clay_material (Alternate 1) | *not set* | [Clay Material](#clay-material) item |  |  | 
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| hard_clay_material | *not set* | String | Hardened clay block to use |  | 
| hard_clay_material (Alternate 1) | *not set* | [Hard Clay Material](#hard-clay-material) item |  |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use |  | 

## Clay Material

#### Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Hard Clay Material

#### Hard Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

## Biome Swamp
Used to add decoration to the surface of swamp biomes such as water lilies.


#### Biome Swamp Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| max_puddle_depth_below_sea_level | *not set* | Integer number | Controls the depth at which surface level blocks can be replaced with water for puddles. The number represents the number of blocks (0, 127) below sea level that we will go down to look for a surface block. Value must be <= 127. |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome. |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

## Biome Capped
Generates surface on blocks with non-solid blocks above or below.


#### Biome Capped Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| beach_material | *not set* | String | Material used to decorate surface near sea level. |  | 
| beach_material (Alternate 1) | *not set* | [Beach Material](#beach-material) item |  |  | 
| ceiling_materials | *not set* | String | Materials used for the surface ceiling. Value must have at least 1 items. |  | 
| ceiling_materials (Alternate 1) | *not set* | [Ceiling Materials](#ceiling-materials) item |  |  | 
| floor_materials | *not set* | String | Materials used for the surface floor. Value must have at least 1 items. |  | 
| floor_materials (Alternate 1) | *not set* | [Floor Materials](#floor-materials) item |  |  | 
| foundation_material | *not set* | String | Material used to replace solid blocks that are not surface blocks. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| sea_material | *not set* | String | Material used to replace air blocks below sea level. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use |  | 

## Beach Material

#### Beach Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Ceiling Materials

#### Ceiling Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Floor Materials

#### Floor Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

## Biome The End

#### Biome The End Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | *not set* | [Type](#type-choices) choices | Use default Minecraft End terrain generation. |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

## Biome Surface Material Adjustments
Specify fine-detail changes to blocks used in terrain generation (based on a noise function).


#### Biome Surface Material Adjustments Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjustments | *not set* | Array of [Adjustments](#adjustments) items | All adjustments that match the column's noise values will be applied in the order listed. |  | 

## Adjustments
An adjustment to generated terrain, replacing blocks based on the specified settings.


#### Surface Material Adjustments - Surface Adjustment Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height_range | *not set* | Decimal number | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. |  | 
| height_range (Alternate 1) | *not set* | Boolean true/false |  |  | 
| height_range (Alternate 2) | *not set* | String |  |  | 
| materials | *not set* | [Materials](#materials) item | The specific blocks used for this surface adjustment |  | 
| noise_frequency_scale | *not set* | Decimal number | The scale to multiply by the position when accessing the noise value for the material adjustments. |  | 
| noise_range | *not set* | Array of numbers | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. |  | 

## Materials
The specific blocks used for this surface adjustment.


#### Surface Material Adjustments - Surface Adjustment Materials Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome when this adjustment is active. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome when this adjustment is active. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome when this adjustment is active. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used in the bodies of water in this biome when this adjustment is active. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome when this adjustment is active. |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 

## Biome Tags
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


#### Biome Tags Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | Array of strings | Array of string tags used by other systems such as entity spawning |  | 