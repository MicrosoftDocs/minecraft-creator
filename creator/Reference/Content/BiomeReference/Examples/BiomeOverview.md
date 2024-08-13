---
author: iconicNurdle
ms.author: mikeam
title: Biome JSON and Overview
description: "A reference document discussing biomes"
ms.service: minecraft-bedrock-edition
---

# Biome JSON and Overview

Minecraft biomes can have different terrain characteristics. By writing custom biome data you could change the:

- general shape of the terrain
- ratio of frequency of biome types
- blocks that make up the biome, both at the surface and down below
- distribution of decorative features like trees, grass, and flowers
- mobs that spawn
- climate
- ...and more!

## JSON format

All biomes should specify the version that they target via the `"format_version"` field. The remainder of the biome data is divided into independent JSON sub-objects, or components.

In general, a **component** defines what game behaviors a biome participates in, and the **component fields** define how it participates.

There are basically two categories of components:

1. Namespaced components, such as those with a 'name:' prefix, that map to specific behaviors in-game. They may have member fields that parameterize that behavior. Only names that have a valid mapping are supported.

1. 'tags' which are defined under the "minecraft:tags" component. Tags consist of alphanumeric characters, along with '.' and '_'. A tag is attached to the biome so that either code or data may check for its existence. 

Here is a sample biome schema with additional details and the full list of namespaced components:

### Example

```json
{
  "plains": {
    "format_version": "1.20.60",

    "minecraft:climate": {
      "downfall": 0.4,
      "snow_accumulation": [ 0.0, 0.125 ],
      "temperature": 0.8
    },
    "minecraft:overworld_height": {
      "noise_type": "lowlands"
    },
    "minecraft:surface_parameters": {
      "sea_floor_depth": 7,
      "sea_floor_material": "minecraft:gravel",
      "foundation_material": "minecraft:stone",
      "mid_material": "minecraft:dirt",
      "top_material": "minecraft:grass_block"
    },
    "minecraft:overworld_generation_rules": {
      "hills_transformation": [
        [ "forest_hills", 1 ],
        [ "forest", 2 ]
      ],
      "mutate_transformation": "sunflower_plains",
      "generate_for_climates": [
        [ "medium", 3 ],
        [ "warm", 1 ],
        [ "cold", 1 ]
      ]
    },

    "minecraft:tags": {
      "tags": [
        "animal",
        "monster",
        "overworld",
        "plains"
      ]
    }
  }
}
```

## Adding Biomes

Biomes are read from JSON files in the biomes subfolders of behavior packs. Loading enforces one biome per file; and the file name and the actual biome name must match. Adding a file with a new name to the biome data location will make it available for the game to use, while existing biomes can be overridden using files that match their existing name. Note that if you add a new biome, you'll need to write component data that allows it to participate in world generation (as shown in the full schema below), or else it won't show up in your worlds!

Biomes are read from JSON files in the biomes subfolders of behavior packs. 

Loading enforces one biome per file, and the file name and the actual biome name must match. Adding a file with a new name to the biome data location will make it available for the game to use, while existing biomes can be overridden using files that match their existing name. Note that if you add a new biome, you'll need to write component data that allows it to participate in world generation (as shown in the full schema below), or else it won't show up in your worlds!

### Schema

```json
 {
      object "minecraft:climate"[0,7] : opt // Describes temperature, humidity, precipitation, etc.  Biomes without this component will have default values.
      {
          float "temperature" : opt
          float "downfall" : opt
          float "red_spores" : opt
          float "blue_spores" : opt
          float "ash" : opt
          float "white_ash" : opt
          array "snow_accumulation"[2] : opt
          {
              float "[0..0]"
              float "[1..1]"
          }
      }
      object "minecraft:overworld_height"[0,2] : opt // Noise parameters used to drive terrain height in the Overworld.
      {
          array "noise_params"[2] : opt
          {
              float "[0..0]"
              float "[1..1]"
          }
          string "noise_type"<"stone_beach", "deep_ocean", "default", "default_mutated", "lowlands", "river", "ocean", "taiga", "mountains", "highlands", "mushroom", "less_extreme", "extreme", "beach", "swamp"> : opt
      }
      object "minecraft:forced_features"[0,1] : opt // Force specific decorative features (trees, plants, etc.) to appear in this biome, regardless of normal decoration rules.
      {
          array "<identifier>" : opt
          {
              object "<any array element>" : opt
              {
                  molang "iterations" // Number of scattered positions to generate
                  object "scatter_chance" : opt // Probability numerator / denominator that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
                  {
                      int "numerator"<1-*>
                      int "denominator"<1-*>
                  }
                  molang "scatter_chance" : opt // Probability (0-100] that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
                  enumerated_value "coordinate_eval_order"<"xyz", "xzy", "yxz", "yzx", "zxy", "zyx"> : opt // The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to "xzy".
                  molang "x" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
                  object "x" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
                  {
                      enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
                      int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
                      int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
                      array "extent"[2]
                      {
                          molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                          molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                      }
                  }
                  molang "z" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
                  object "z" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
                  {
                      enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
                      int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
                      int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
                      array "extent"[2]
                      {
                          molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                          molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                      }
                  }
                  molang "y" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
                  object "y" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
                  {
                      enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
                      int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
                      int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
                      array "extent"[2]
                      {
                          molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                          molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                      }
                  }
                  feature_reference "places_feature"
                  string "identifier"
              }
          }
      }
      object "minecraft:ignore_automatic_features" : opt // No features will be automatically attached to this biome, only features specified in the minecraft:forced_features component will appear.
      object "minecraft:consolidated_features" : opt
      object "minecraft:surface_parameters"[0,6] : opt // Control the blocks used for the default Minecraft Overworld terrain generation.
      {
           "top_material" // Controls the block type used for the surface of this biome.
           "mid_material" // Controls the block type used in a layer below the surface of this biome.
           "sea_floor_material" // Controls the block type used as a floor for bodies of water in this biome.
           "foundation_material" // Controls the block type used deep underground in this biome.
           "sea_material" // Controls the block type used for the bodies of water in this biome.
          int "sea_floor_depth" // Controls how deep below the world water level the floor should occur.
      }
      object "minecraft:surface_material_adjustments"[0,1] : opt // Specify fine-detail changes to blocks used in terrain generation (based on a noise function)
      {
          array "adjustments" : opt // All adjustments that match the column's noise values will be applied in the order listed.
          {
              object "<any array element>"
              {
                  object "materials"
                  {
                       "top_material" : opt // Controls the block type used for the surface of this biome when this adjustment is active.
                       "mid_material" : opt // Controls the block type used in a layer below the surface of this biome when this adjustment is active.
                       "sea_floor_material" : opt // Controls the block type used as a floor for bodies of water in this biome when this adjustment is active.
                       "foundation_material" : opt // Controls the block type used deep underground in this biome when this adjustment is active.
                       "sea_material" : opt // Controls the block type used in the bodies of water in this biome when this adjustment is active.
                  }
                  array "noise_range"[2] : opt // Defines a range of noise values [min, max) for which this adjustment should be applied.
                  {
                      float "[0..0]"<-1.000000-1.000000>
                      float "[1..1]"<-1.000000-1.000000>
                  }
                  array "height_range"[2] : opt // Defines a range of noise values [min, max] for which this adjustment should be applied.
                  {
                      molang "[0..0]"
                      molang "[1..1]"
                  }
                  float "noise_frequency_scale" : opt // The scale to multiply by the position when accessing the noise value for the material adjustments.
              }
          }
      }
      object "minecraft:swamp_surface"[0,6] : opt // Similar to overworld_surface.  Adds swamp surface details.
      {
           "top_material" // Controls the block type used for the surface of this biome.
           "mid_material" // Controls the block type used in a layer below the surface of this biome.
           "sea_floor_material" // Controls the block type used as a floor for bodies of water in this biome.
           "foundation_material" // Controls the block type used deep underground in this biome.
           "sea_material" // Controls the block type used for the bodies of water in this biome.
          int "sea_floor_depth" // Controls how deep below the world water level the floor should occur.
      }
      object "minecraft:frozen_ocean_surface"[0,6] : opt // Similar to overworld_surface.  Adds icebergs.
      {
           "top_material" // Controls the block type used for the surface of this biome.
           "mid_material" // Controls the block type used in a layer below the surface of this biome.
           "sea_floor_material" // Controls the block type used as a floor for bodies of water in this biome.
           "foundation_material" // Controls the block type used deep underground in this biome.
           "sea_material" // Controls the block type used for the bodies of water in this biome.
          int "sea_floor_depth" // Controls how deep below the world water level the floor should occur.
      }
      object "minecraft:mesa_surface"[0,10] : opt // Similar to overworld_surface.  Adds colored strata and optional pillars.
      {
           "top_material" // Controls the block type used for the surface of this biome.
           "mid_material" // Controls the block type used in a layer below the surface of this biome.
           "sea_floor_material" // Controls the block type used as a floor for bodies of water in this biome.
           "foundation_material" // Controls the block type used deep underground in this biome.
           "sea_material" // Controls the block type used for the bodies of water in this biome.
          int "sea_floor_depth" // Controls how deep below the world water level the floor should occur.
           "clay_material"
           "hard_clay_material"
          bool "bryce_pillars"
          bool "has_forest"
      }
      object "minecraft:nether_surface" : opt // Use default Minecraft Nether terrain generation.
      object "minecraft:the_end_surface" : opt // Use default Minecraft End terrain generation.
      object "minecraft:capped_surface"[0,5] : opt // Generates surface on blocks with non-solid blocks above or below.
      {
          array "floor_materials"[1,*] // Materials used for the surface floor.
          {
              block_reference "<any array element>"
          }
          array "ceiling_materials"[1,*] // Materials used for the surface ceiling.
          {
              block_reference "<any array element>"
          }
          block_reference "sea_material" // Material used to replace air blocks below sea level.
          block_reference "foundation_material" // Material used to replace solid blocks that are not surface blocks.
          block_reference "beach_material" : opt // Material used to decorate surface near sea level.
      }
      object "minecraft:mountain_parameters"[0,3] : opt // Noise parameters used to drive mountain terrain generation in Overworld
      {
          float "peaks_factor" : opt
          object "steep_material_adjustment" : opt // Defines surface material for steep slopes
          {
               "material" : opt // Block type use as steep material.
              bool "north_slopes" : opt // Enable for north facing slopes
              bool "south_slopes" : opt // Enable for south facing slopes
              bool "west_slopes" : opt // Enable for west facing slopes
              bool "east_slopes" : opt // Enable for east facing slopes
          }
          object "top_slide" : opt // Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high
          {
              bool "enabled" // If false, top slide will be disabled. If true, other parameters will be taken into account
          }
      }
      object "minecraft:overworld_generation_rules"[0,5] : opt // Control how this biome is instantiated (and then potentially modified) during world generation of the overworld.
      {
          biome_reference "hills_transformation" : opt
          array "hills_transformation"[1,*] : opt
          {
              biome_reference "<any array element>" : opt
              array "<any array element>"[2] : opt
              {
                  biome_reference "[0..0]"
                  int "[1..1]"
              }
          }
          biome_reference "mutate_transformation" : opt
          array "mutate_transformation"[1,*] : opt
          {
              biome_reference "<any array element>" : opt
              array "<any array element>"[2] : opt
              {
                  biome_reference "[0..0]"
                  int "[1..1]"
              }
          }
          array "generate_for_climates" : opt // Controls the world generation climate categories that this biome can spawn for.  A single biome can be associated with multiple categories with different weightings.
          {
              array "<any array element>"[2]
              {
                  enumerated_value "[0..0]"<"medium", "warm", "lukewarm", "cold", "frozen"> // Name of a climate category
                  int "[1..1]" // Weight with which this biome should be selected, relative to other biomes in the same category
              }
          }
          biome_reference "river_transformation" : opt
          array "river_transformation"[1,*] : opt
          {
              biome_reference "<any array element>" : opt
              array "<any array element>"[2] : opt
              {
                  biome_reference "[0..0]"
                  int "[1..1]"
              }
          }
          biome_reference "shore_transformation" : opt
          array "shore_transformation"[1,*] : opt
          {
              biome_reference "<any array element>" : opt
              array "<any array element>"[2] : opt
              {
                  biome_reference "[0..0]"
                  int "[1..1]"
              }
          }
      }
      object "minecraft:multinoise_generation_rules"[0,5] : opt // Controls how this biome is instantiated (and then potentially modified) during world generation of the nether.
      {
          float "target_temperature" : opt // Temperature with which this biome should selected, relative to other biomes.
          float "target_humidity" : opt // Humidity with which this biome should selected, relative to other biomes.
          float "target_altitude" : opt // Altitude with which this biome should selected, relative to other biomes.
          float "target_weirdness" : opt // Weirdness with which this biome should selected, relative to other biomes.
          float "weight" : opt // Weight with which this biome should selected, relative to other biomes.
      }
      object "minecraft:legacy_world_generation_rules" : opt // Additional world generation control applicable only to legacy limited worlds.
      object "minecraft:tags"[0,1] : opt // Attach arbitrary string tags to this biome
      {
          array "tags"[0,18446744073709551615] // String tags to apply to this biome.
          {
              string "<any array element>" : opt
          }
      }
  }
```


## Biome Components

Any component that this biome uses.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|minecraft:capped_surface| Object | Optional| Generates surface on blocks with non-solid blocks above or below.|
|minecraft:climate| Object | Optional| Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values.|
|minecraft:frozen_ocean_surface| Object | Optional| Similar to overworld_surface. Adds icebergs.|
|minecraft:mesa_surface| Object | Optional| Similar to overworld_surface. Adds colored strata and optional pillars.|
|minecraft:mountain_parameters| Object | Optional| Noise parameters used to drive mountain terrain generation in Overworld.|
|minecraft:multinoise_generation_rules| Object | Optional| Controls how this biome is instantiated (and then potentially modified) during world generation of the nether.|
|minecraft:overworld_generation_rules| Object | Optional| Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld.|
|minecraft:overworld_height| Object | Optional| Noise parameters used to drive terrain height in the Overworld.|
|minecraft:surface_material_adjustments| Object | Optional| Specify fine-detail changes to blocks used in terrain generation (based on a noise function).|
|minecraft:surface_parameters| Object | Optional| Controls the blocks used for the default Minecraft Overworld terrain generation.|
|minecraft:swamp_surface| Object | Optional| Similar to overworld_surface. Adds swamp surface details.|
|minecraft:tags| Object | Optional| Attach arbitrary string tags to this biome.|
|minecraft:the_end_surface| Object | Optional| Use default Minecraft End terrain generation.|

## Biome Definition

Contains a description and components to define a biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|components| Object of type biome Components| Required| Components for this biome.|
|description| Object of type biome Description| Required| Non-component settings, including the biome name.|

## Biome Description

Contains non-component settings for a biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|identifier| String| Required| The name of the biome, used by other features like the '/locate biome' command.|

## Biome JSON File

Contains a format version and a biome definition

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|format_version| String| Required| Version of the JSON schema used by this file|
|minecraft:biome| Object of type biome Definition| Required| A single biome definition|

## Block Specifier

Specifies a particular block. Can be a string block name or a JSON object.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|name| String| Required| Name of the block|
|states| Object| Optional| Contains members named after each state, with Boolean, integer, or string values.|

## Molang Expression

A JSON field that specifies a Molang expression. Can be an integer, float, Boolean, or string.

### minecraft:capped_surface

Generates surface on blocks with non-solid blocks above or below.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|beach_material| Object of type Block Specifier| Optional| Material used to decorate surface near sea level.|
|ceiling_materials| Array of Object of type Block Specifier| Required| Materials used for the surface ceiling.|
|floor_materials| Array of Object of type Block Specifier| Required| Materials used for the surface floor.|
|foundation_material| Object of type Block Specifier| Required| Material used to replace solid blocks that are not surface blocks.|
|sea_material| Object of type Block Specifier| Required| Material used to replace air blocks below sea level.|


### minecraft:climate

Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|ash| Float| Optional| Density of ash precipitation visuals|
|blue_spores| Float| Optional| Density of blue spore precipitation visuals|
|downfall| Float| Optional| Amount that precipitation affects colors and block changes|
|red_spores| Float| Optional| Density of blue spore precipitation visuals|
|snow_accumulation| Array of 2 Floats| Optional| Minimum and maximum snow level, each multiple of 0.125 is another snow layer|
|temperature| Float| Optional| Temperature affects a variety of visual and behavioral things, including snow and ice placement, sponge drying, and sky color|
|white_ash| Float| Optional| Density of white ash precipitation visuals|


### minecraft:frozen_ocean_surface

Similar to overworld_surface. Adds icebergs.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|foundation_material| Object of type Block Specifier| Required| Controls the block type used deep underground in this biome|
|mid_material| Object of type Block Specifier| Required| Controls the block type used in a layer below the surface of this biome|
|sea_floor_depth| Integer| Required| Controls how deep below the world water level the floor should occur|
|sea_floor_material| Object of type Block Specifier| Required| Controls the block type used as a floor for bodies of water in this biome|
|sea_material| Object of type Block Specifier| Required| Controls the block type used for the bodies of water in this biome|
|top_material| Object of type Block Specifier| Required| Controls the block type used for the surface of this biome|


### minecraft:mesa_surface

Similar to overworld_surface. Adds colored strata and optional pillars.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|bryce_pillars| Boolean| Required| Whether the mesa generates with pillars|
|clay_material| Object of type Block Specifier| Required| Base clay block to use|
|foundation_material| Object of type Block Specifier| Required| Controls the block type used deep underground in this biome|
|hard_clay_material| Object of type Block Specifier| Required| Hardened clay block to use|
|has_forest| Boolean| Required| Places coarse dirt and grass at high altitudes|
|mid_material| Object of type Block Specifier| Required| Controls the block type used in a layer below the surface of this biome|
|sea_floor_depth| Integer| Required| Controls how deep below the world water level the floor should occur|
|sea_floor_material| Object of type Block Specifier| Required| Controls the block type used as a floor for bodies of water in this biome|
|sea_material| Object of type Block Specifier| Required| Controls the block type used for the bodies of water in this biome|
|top_material| Object of type Block Specifier| Required| Controls the block type used for the surface of this biome|


### minecraft:mountain_parameters

Noise parameters used to drive mountain terrain generation in Overworld.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|peaks_factor| Float| Optional| Does nothing|
|steep_material_adjustment| Object of type minecraft:mountain_parameters - steep_material_adjustment settings| Optional| Defines surface material for steep slopes
|top_slide| Object of type minecraft:mountain_parameters - top_slide settings| Optional| Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high|


### minecraft:mountain_parameters - steep_material_adjustment settings

Defines surface material for steep slopes

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|east_slopes| Boolean| Optional| Enable for east-facing slopes|
material| Object of type Block Specifier| Optional| Block type use as steep material|
|north_slopes| Boolean| Optional| Enable for north-facing slopes|
|south_slopes| Boolean| Optional| Enable for south-facing slopes|
|west_slopes| Boolean| Optional| Enable for west-facing slopes|


### minecraft:mountain_parameters - top_slide settings

Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|enabled| Boolean| Required| If false, top slide will be disabled. If true, other parameters will be taken into account.|


### minecraft:multinoise_generation_rules

Controls how this biome is instantiated (and then potentially modified) during world generation of the nether.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|target_altitude| Float| Optional| Altitude with which this biome should be generated, relative to other biomes.|
|target_humidity| Float| Optional| Humidity with which this biome should be generated, relative to other biomes.|
|target_temperature| Float| Optional| Temperature with which this biome should be generated, relative to other biomes.|
|target_weirdness| Float| Optional| Weirdness with which this biome should be generated, relative to other biomes.|
|weight| Float| Optional| Weight with which this biome should be generated, relative to other biomes.|


### minecraft:overworld_generation_rules

Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|generate_for_climates| Array of Object of type minecraft:overworld_generation_rules - Weighted climate categories settings| Optional| Controls the world generation climate categories that this biome can spawn for. A single biome can be associated with multiple categories with different weightings.|
|hills_transformation| Object of type minecraft:overworld_generation_rules - Weighted biome names settings| Optional| What biome to switch to when converting to a hilly biome|
|mutate_transformation| Object of type minecraft:overworld_generation_rules - Weighted biome names settings| Optional| What biome to switch to when converting to a mutated biome|
|river_transformation| Object of type minecraft:overworld_generation_rules - Weighted biome names settings| Optional| What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome)|
|shore_transformation| Object of type minecraft:overworld_generation_rules - Weighted biome names settings| Optional| What biome to switch to when adjacent to an ocean biome|


### minecraft:overworld_generation_rules - Weighted biome names settings

Can be just the string name of a biome, or an array of any size. If an array, each entry can be a biome name string, or an array of size 2, where the first entry is a biome name and the second entry is a positive integer representing how that biome is weighted against other entries. If no weight is provided, a weight of 1 is used.


### minecraft:overworld_generation_rules - Weighted climate categories settings

An array of any size containing arrays of exactly two elements. For each contained array, the first element is a climate category string ('medium', 'warm', 'lukewarm', 'cold', or 'frozen'). The second element is a positive integer for how much that entry is weighted relative to other entries.


### minecraft:overworld_height

Noise parameters used to drive terrain height in the Overworld.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|noise_params| Array of 2 Floats| Optional| First value is depth - more negative means deeper underwater, while more positive means higher. Second value is scale, which affects how much noise changes as it moves from the surface.|
|noise_type| "default", "default_mutated", "river", "ocean", "deep_ocean", "lowlands", "taiga", "mountains", "highlands", "extreme", "less_extreme", "beach", "stone_beach", "mushroom", "swamp"| Optional| Specifies a preset based on a built-in setting rather than manually using noise_params|


### minecraft:surface_material_adjustments

Specify fine-detail changes to blocks used in terrain generation (based on a noise function).

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|adjustments| Array of Object of type minecraft:surface_material_adjustments - surface adjustment settings| Optional| All adjustments that match the column's noise values will be applied in the order listed.|


### minecraft:surface_material_adjustments - surface adjustment materials settings

The specific blocks used for this surface adjustment

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|foundation_material| Object of type Block Specifier| Optional| Controls the block type used deep underground in this biome when this adjustment is active.|
|mid_material| Object of type Block Specifier| Optional| Controls the block type used in a layer below the surface of this biome when this adjustment is active.|
|sea_floor_material| Object of type Block Specifier| Optional| Controls the block type used as a floor for bodies of water in this biome when this adjustment is active.|
|sea_material| Object of type Block Specifier| Optional| Controls the block type used in the bodies of water in this biome when this adjustment is active.|
|top_material| Object of type Block Specifier| Optional| Controls the block type used for the surface of this biome when this adjustment is active.|


### minecraft:surface_material_adjustments - surface adjustment settings

An adjustment to generated terrain, replacing blocks based on the specified settings.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|height_range| Array of 2 Molang expressions| Optional| Defines a range of noise values [min, max] for which this adjustment should be applied.|
|materials| Object of type minecraft:surface_material_adjustments - surface adjustment materials settings| Required| |
|noise_frequency_scale| Float| Optional| The scale to multiply by the position when accessing the noise value for the material adjustments.|
|noise_range| Array of 2 Floats| Optional| Defines a range of noise values [min, max] for which this adjustment should be applied.|


### minecraft:surface_parameters

Controls the blocks used for the default Minecraft Overworld terrain generation.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|foundation_material| Object of type Block Specifier| Required| Controls the block type used deep underground in this biome.|
|mid_material| Object of type Block Specifier| Required| Controls the block type used in a layer below the surface of this biome.|
|sea_floor_depth| Integer| Required| Controls how deep below the world water level the floor should occur.|
|sea_floor_material| Object of type Block Specifier| Required| Controls the block type used as a floor for bodies of water in this biome.|
|sea_material| Object of type Block Specifier| Required| Controls the block type used for the bodies of water in this biome.|
|top_material| Object of type Block Specifier| Required| Controls the block type used for the surface of this biome.|


### minecraft:swamp_surface

Similar to overworld_surface. Adds swamp surface details.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|foundation_material| Object of type Block Specifier| Required| Controls the block type used deep underground in this biome.|
|mid_material| Object of type Block Specifier| Required| Controls the block type used in a layer below the surface of this biome.|
|sea_floor_depth| Integer| Required| Controls how deep below the world water level the floor should occur.|
|sea_floor_material| Object of type Block Specifier| Required| Controls the block type used as a floor for bodies of water in this biome.|
|sea_material| Object of type Block Specifier| Required| Controls the block type used for the bodies of water in this biome.|
|top_material| Object of type Block Specifier| Required| Controls the block type used for the surface of this biome.|


### minecraft:tags

Attach arbitrary string tags to this biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|tags| Array of String| Required| Array of string tags used by other systems such as entity spawning|


### minecraft:the_end_surface

Use default Minecraft End terrain generation.

