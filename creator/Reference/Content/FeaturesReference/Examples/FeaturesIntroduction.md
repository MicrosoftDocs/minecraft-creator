---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - Introduction to Features
ms.prod: gaming
---

# Features Documentation - Introduction to Features

Features are decorations scattered throughout the world. Things such as trees, plants, flowers, springs, ore, and coral are all features. Basically, if it isn't the terrain or a mob, it's probably a feature!
Features can be standalone or composed of multiple sub-features. In practice, most features in Minecraft are defined as a chain of two or more features. These chains typically end with features that place blocks in the world. Other feature types control flow such as conditional, sequential, or random distribution.

## JSON format

All features must specify the version that they target via the "format_version" field. The remainder of the data is contained in independent JSON sub-objects for each supported feature type. These feature types define the behavior of the feature and include properties specific to that behavior. To be valid, a definition must include exactly one of these type objects. See the full feature schema below for additional details and the full list of supported feature types.

### Example

```json
{
  "format_version": "1.13.0",
  "minecraft:ore_feature": {
    "description": {
      "identifier": "minecraft:coal_ore_feature"
    },
    "count": 17,
    "places_block": "minecraft:coal_ore",
    "may_replace": [
      {
        "name": "minecraft:stone"
      }
    ]
  }
}
```

## Adding features

Features are read from JSON files in the "features" subfolder of behavior packs. Loading enforces one feature per file; the file name and the name of the feature must match. Feature names can include a namespace of the form "namespace:feature_name" to help distinguish them from features that may be in other behavior packs. This namespace is not considered when matching the filename to the feature name. For example, in a file called "my_tree_feature.json" both "my_tree_feature" and "my_pack_name:my_tree_feature" would be valid identifiers. If two behavior packs define the same feature name (including namespace), then the feature from the highest pack in the stack will be used. This allows users to override base features if desired.

## Supported features

| Name| Description |
|:-----------|:-----------|
| [minecraft:aggregate_feature](Features\minecraftAggregate_feature.md)| A collection of features in an arbitrary order.|
| [minecraft:beards_and_shavers](Features\minecraftBeards_and_shavers.md)| Will build a 'beard' or 'shave' out space so as to provide a clear space for a feature to place.|
| [minecraft:cave_carver_feature](Features\minecraftCave_carver_feature.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:conditional_list](Features\minecraftConditional_list.md)| Places the first suitable feature within a collection.|
| [minecraft:fossil_feature](Features\minecraftFossil_feature.md)| Generates a skeletal structure composed of bone blocks and parametric ore blocks.
| [minecraft:geode_feature](Features\minecraftGeode_feature.md)| Generates a rock formation to simulate a geode.|
| [minecraft:growing_plant_feature](Features\minecraftGrowing_plant_feature.md)| Places a growing plant in the world.|
| [minecraft:hell_cave_carver_feature](Features\minecraftHell_cave_carver_feature.md)| Carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:multiface_feature](Features\minecraftMultiface_feature.md)| Places one or a few multiface blocks on floors/walls/ceilings.|
| [minecraft:ore_feature](Features\minecraftOre_feature.md)| Places a vein of blocks to simulate ore deposits.|
| [minecraft:rect_layout](Features\minecraftRect_layout.md)| Scans the surface of a Chunk, calling place() on the surface of each block column.|
| [minecraft:scan_surface](Features\minecraftScan_surface.md)| Scans the surface of a Chunk, calling place() on the surface of each block column.|
| [minecraft:scatter_feature](Features\minecraftScatter_feature.md)| Scatters a feature throughout a chunk.|
| [minecraft:search_feature](Features\minecraftSearch_feature.md)| Sweeps a volume searching for a valid placement location for its referenced feature.|
| [minecraft:sequence_feature](Features\minecraftSequence_feature.md)| A collection of features sequentially, in the order they appear in data.|
| [minecraft:single_block_feature](Features\minecraftSingle_block_feature.md)| Places a single block in the world.|
| [minecraft:snap_to_surface_feature](Features\minecraftSnap_to_surface_feature.md)| snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`.|
| [minecraft:Surface_relative_threshold_feature](Features\minecraftSurface_relative_threshold_feature.md)| Determines whether the provided position is below the estimated surface level of the world, and places a feature if so.If the provided position is above configured surface or the surface is not available, placement will fail. This feature only works for Overworld generators using world generation 1.18 or later.|
| [minecraft:structure_template_feature](Features\minecraftStructure_template_feature.md)| Places a structure in the world. The structure must be stored as a .mcstructure file in the "structures" subdirectory of a behavior pack.|
| [minecraft:underwater_cave_carver_feature](Features\minecraftUnderwater_cave_carver.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:weighted_random_feature](Features\minecraftWeighted_random_feature.md)| Randomly selects and places a feature based on a weight value.|

### Full Feature Schema

Click [here](ExampleFeatureSchema.md) to see an example of the full feature schema.

## Attaching features

Features must be attached to at least one biome in order to show up in the world. During world generation, biomes attempt to place their attached features chunk-by-chunk. Features can be attached in two ways:

1) Via a feature rule definition
2) Via the "minecraft:forced_features" biome component

## Feature rules

Feature rules are separate JSON definition files found in the "feature_rules" subfolder of behavior packs. Feature rules follow the same filename rules as features. Each feature rule controls exactly one feature and serves as the root of a chain of feature data. To attach a feature to a biome with a feature rule, the "conditions" object must include the "minecraft:biome_filter" field. This is a list of filter tests that are performed on each biome to determine if the feature should be attached. Most relevant is the "has_biome_tag" test.

### Example

```json
{
  "format_version": "1.13.0",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "minecraft:birch_forest_surface_trees_feature",
      "places_feature": "minecraft:legacy:birch_forest_tree_feature"
    },
    "conditions": {
      "placement_pass": "surface_pass",
      "minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "forest"
        },
        {
          "all_of": [
            {
              "test": "has_biome_tag",
              "operator": "==",
              "value": "birch"
            },
            {
              "test": "has_biome_tag",
              "operator": "!=",
              "value": "mutated"
            }
          ]
        }
      ]
    },
    "distribution": {
      "iterations": 1,
      "x": 0,
      "y": 0,
      "z": 0
    }
  }
}
```

## Feature rule schema

```json
  {
      version "format_version"
      object "minecraft:feature_rules"
      {
          object "description"
          {
              string "identifier" // The name of this feature rule in the format 'namespace_name:rule_name'. 'rule_name' must match the filename.
              feature_reference "places_feature" // Named reference to the feature controlled by this rule.
          }
          object "conditions" // Parameters to control where and when the feature will be placed.
          {
              string "placement_pass" // When the feature should be placed relative to others. Earlier passes in the list are guaranteed to occur before later passes. Order is not guaranteed within each pass.
              biome_filter_group "minecraft:biome_filter" : opt // List of filter tests to determine which biomes this rule will attach to.
          }
          object "distribution" : opt // Parameters controlling the initial scatter of the feature.
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
          }
      }
  }
```

## Forced features

Features attached with the second method are called "forced" or "explicit" features. Unlike feature rules, forced features are not defined in separate JSON files. Instead, they are specified in the existing biome JSON definitions via the "minecraft:forced_features" component. Like feature rules, this component includes fields that define when features should be placed ("placement_pass") and how they should be scattered ("distribution"). For more information about biome components (including the complete JSON schema), consult the biome documentation.
