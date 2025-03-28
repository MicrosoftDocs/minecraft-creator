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

Be sure to also check out [the ways to customize the audio and visual of a biome](./../../Reference/Content/ClientBiomesReference/Examples/ClientBiomesOverview.md) for more on using client biomes files to customize audio and visual aspects of a biome.

## JSON format

All biomes should specify the version that they target via the `"format_version"` field. The remainder of the biome data is divided into independent JSON sub-objects, or components.

In general, a **component** defines what game behaviors a biome participates in, and the **component fields** define how it participates.

There are basically two categories of components:

1. Namespaced components, such as those with a 'name:' prefix, that map to specific behaviors in-game. They may have member fields that parameterize that behavior. Only names that have a valid mapping are supported.

1. 'tags' which are defined under the "minecraft:tags" component. Tags consist of alphanumeric characters, along with '.' and '_'. A tag is attached to the biome so that either code or data may check for its existence.

## Biome Definition

Contains a description and components to define a biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|description| Object of type biome Description| Required| Non-component settings, including the biome name.|
|components| Object of type biome Components| Required| Components for this biome.|

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

## Biome Components

|Biome Component JSON |
|:-----|
|[capped_surface](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_capped_surface.md)|
|[climate](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_climate.md)|
|[creature_spawn_probability](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_creature_spawn_probability.md)|
|[frozen_ocean_surface](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_frozen_ocean_surface.md)|
|[mesa_surface](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_frozen_ocean_surface.md)|
|[frozen_ocean_surface](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_frozen_ocean_surface.md)|
|[mountain_parameters](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_mountain_parameters.md)|
|[multinoise_generation_rules](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_multinoise_generation_rules.md)|
|[overworld_generation_rules](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_overworld_generation_rules.md)|
|[overworld_height](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_overworld_height.md)|
|[surface_material_adjustments](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_surface_material_adjustments.md)|
|[surface_parameters](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_surface_parameters.md)|
|[swamp_surface](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_swamp_surface.md)|
|[tags](./../../Reference/Content/BiomesReference/Examples/Components/minecraftBiomes_tags.md)|

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

