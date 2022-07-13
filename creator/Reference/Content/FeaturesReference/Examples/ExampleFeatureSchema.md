---
author: docsbryce
ms.author: v-bbortree
title: Features Documentation - Feature schema
ms.prod: gaming
description: "Examples of feature schemas available in Minecraft: Bedrock Edition."
---

# Features Documentation - Feature Schema

Here is an example of the complete feature schema:

```json
  {
      version "format_version"
      object "minecraft:aggregate_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "features"[1,*] // Collection of features to be placed one by one. No guarantee of order. All features use the same input position.
          {
              feature_reference "<any array element>" : opt
          }
          enumerated_value "early_out"<"none", "first_failure", "first_success"> : opt // LIKELY TO BE CHANGED: Do not continue placing features once either the first success or first failure has occurred.
      }
      object "minecraft:sequence_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "features"[1,*] // List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next.
          {
              feature_reference "<any array element>" : opt
          }
      }
      object "minecraft:beards_and_shavers" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "places_feature" // Named reference of feature to be placed
          array "bounding_box_min" // Dimensions of the Bounding Box
          {
              float "[0..0]"
              float "[1..1]"
              float "[2..2]"
          }
          array "bounding_box_max" // Dimensions of the Bounding Box
          {
              float "[0..0]"
              float "[1..1]"
              float "[2..2]"
          }
          float "y_delta" // Y Delta for BAS
           "surface_block_type" // Reference to the block to be placed.
           "subsurface_block_type" // Reference to the block to be placed.
          float "beard_raggedness_min" : opt // Y Delta for BAS
          float "beard_raggedness_max" : opt // Y Delta for BAS
      }
      object "minecraft:cave_carver_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          block_reference "fill_with" : opt // Reference to the block to fill the cave with.
          molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
          int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
          int "height_limit" : opt // The height limit where we attempt to carve.
          float_range "y_scale" : opt // The scaling in y.
          float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
          float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
          float_range "floor_level" : opt // Floor Level.
      }
      object "minecraft:conditional_list" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "conditional_features" // Array of Features, and their associated Conditions, for attempted placement. These features will be evaluated as ordered.
          {
              object "<any array element>" : opt
              {
                  feature_reference "places_feature" // Feature to be placed.
                  molang "condition" // Condition for placing associated Feature
              }
          }
          enumerated_value "early_out_scheme"<"condition_success", "placement_success"> : opt // Denote whether placement should end on first successful placement or first passed condition.
      }
      object "minecraft:fossil_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "ore_block"
          int "max_empty_corners"
      }
      object "minecraft:geode_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "filler" // The block to fill the inside of the geode.
           "inner_layer" // The block that forms the inside layer of the geode shell.
           "alternate_inner_layer" // The block that has a chance of generating instead of inner_layer.
           "middle_layer" // The block that forms the middle layer of the geode shell.
           "outer_layer" // The block that forms the outer shell of the geode.
          array "inner_placements"[1,*] : opt
          {
               "<any array element>" // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
          }
          int "min_outer_wall_distance"<1-10> // The minimum distance each distribution point must be from the outer wall. [0,10]
          int "max_outer_wall_distance"<1-20> // The maximum distance each distribution point can be from the outer wall. [0,20]
          int "min_distribution_points"<1-10> // The minimum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,10]
          int "max_distribution_points"<1-20> // The maximum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,20]
          int "min_point_offset"<0-10> // The lowest possible value of random offset applied to the position of each distribution point. [0,10]
          int "max_point_offset"<0-10> // The highest possible value of random offset applied to the position of each distribution point. [0,10]
          int "max_radius" // The maximum possible radius of the geode generated.
          int "crack_point_offset"<0-10> // An offset applied to each distribution point that forms the geode crack opening. [0,10]
          float "generate_crack_chance"<0.000000-1.000000> // The likelihood of a geode generating with a crack in its shell. [0,1]
          float "base_crack_size"<0.000000-5.000000> // How large the crack opening of the geode should be when generated. [0,5]
          float "noise_multiplier" // A multiplier applied to the noise that is applied to the distribution points within the geode. Higher = more noisy.
          float "use_potential_placements_chance"<0.000000-1.000000> // The likelihood that a special block will be placed on the inside of the geode. [0,1]
          float "use_alternate_layer0_chance"<0.000000-1.000000> // The likelihood that a block in the innermost layer of the geode will be replaced with an alternate option. [0,1]
          bool "placements_require_layer0_alternate" // If true, the potential placement block will only be placed on the alternate layer0 blocks that get placed. Potential placement blocks are blocks that depend on the existance of another block to be placed. The latter are the layer0 alternate blocks.
          int "invalid_blocks_threshold" // The threshold of invalid blocks for a geode to have a distribution point in before it aborts generation entirely.
      }
      object "minecraft:growing_plant_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "height_distribution"[1,*]
          {
              array "<any array element>"[2] // Collection of weighted heights that placement will select from.
              {
                   "[0..0]" // Plant height.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
          string "growth_direction" // Direction that the plant grows towards. Valid values: UP and DOWN
           "age" : opt // Age of the head of the plant.
          array "body_blocks"[1,*]
          {
              array "<any array element>"[2] // Collection of weighted block descriptor that placement will select from for the body of the plant.
              {
                   "[0..0]" // Plant body block.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
          array "head_blocks"[1,*]
          {
              array "<any array element>"[2] // Collection of weighted block descriptor that placement will select from for the head of the plant.
              {
                   "[0..0]" // Plant head block.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
          bool "allow_water" : opt // Plant blocks can be placed in water.
      }
      object "minecraft:hell_cave_carver_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          block_reference "fill_with" : opt // Reference to the block to fill the cave with.
          molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
          int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
          int "height_limit" : opt // The height limit where we attempt to carve.
          float_range "y_scale" : opt // The scaling in y.
          float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
          float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
          float_range "floor_level" : opt // Floor Level.
      }
      object "minecraft:multiface_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "places_block" // Reference to the block to be placed.
          int "search_range"<1-64> // How far, in blocks, this feature can search for a valid position to place.
          bool "can_place_on_floor" // Can this feature be placed on the ground (top face of a block)?
          bool "can_place_on_ceiling" // Can this feature be placed on the ceiling (bottom face of a block)?
          bool "can_place_on_wall" // Can this feature be placed on the wall (side faces of a block)?
          float "chance_of_spreading"<0.000000-1.000000> // For each block placed by this feature, how likely will that block spread to another?
          array "can_place_on"[1,*] : opt
          {
               "<any array element>" : opt // A list of blocks that the block in this feature can be placed on. Omit this field to allow any block to be placed on.
          }
      }
      object "minecraft:ore_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          int "count"<1-*> // The number of blocks to be placed.
          float "discard_chance_on_air_exposure"<0.000000-1.000000> : opt // Chance of discarding placement if neighboring block is Air.
          array "replace_rules"[1,*] : opt
          {
              object "<any array element>" // Collection of replace rules that will be checked in order of definition. If a rule is resolved, the rest will not be resolved for that block position.
              {
                   "places_block" // Reference to the block to be placed.
                  array "may_replace"[1,*] : opt
                  {
                       "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
                  }
              }
          }
      }
      object "minecraft:partially_exposed_blob_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          int "placement_radius_around_floor"<1-8> // Defines the cubic radius of the blob. [1, 8]
          float "placement_probability_per_valid_position"<0.000000-1.000000> // The probability of trying to place a block at each position within the placement bounds. [0,1]
          string "exposed_face" : opt // Defines a block face that is allowed to be exposed to air and/or water. Other faces need to be embedded for blocks to be placed by this feature. Defaults to upwards face.
           "places_block" // Reference to the block to be placed.
      }
      object "minecraft:rect_layout" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          float "ratio_of_empty_space" : opt // Ratio of a Chunk to be filled with empty space rather than features.
          array "feature_areas"[1,4294967295]
          {
              object "<any array element>" : opt
              {
                  feature_reference "feature" // Feature to be placed.
                  array "area_dimensions" // Dimensions (size) of the associated Feature.
                  {
                      int "[0..0]"
                      int "[1..1]"
                  }
              }
          }
      }
      object "minecraft:scan_surface" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "scan_surface_feature" // Named reference of feature to be placed
      }
      object "minecraft:scatter_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "places_feature" // Named reference of feature to be placed
          bool "project_input_to_floor" : opt // If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
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
      object "minecraft:sculk_patch_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "replaceable_blocks"
          {
               "<any array element>" : opt
          }
          array "cant_place_sculk_vein_on"
          {
               "<any array element>" : opt
          }
           "ground_block"
          feature_reference "growth_feature" : opt
          string "surface" : opt
          int "vertical_range"
          float "growth_chance" : opt
           "horizontal_radius"
      }
      object "minecraft:search_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "places_feature" // Named reference of feature to be placed
          object "search_volume" // Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position.
          {
              array "min"[3] // Minimum extent of the bounding volume expressed as [ x, y, z ]
              {
                  int "[0..0]" // x_min
                  int "[1..1]" // y_min
                  int "[2..2]" // z_min
              }
              array "max"[3] // Maxium extent of the bounding volume expressed as [ x, y, z ]
              {
                  int "[0..0]" // x_max
                  int "[1..1]" // y_max
                  int "[2..2]" // z_max
              }
          }
          enumerated_value "search_axis"<"-x", "+x", "-y", "+y", "-z", "+z"> // Axis that the search will sweep along through the 'search_volume'
          int "required_successes"<1-*> : opt // Number of valid positions the search must find in order to place the referenced feature
      }
      object "minecraft:single_block_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "places_block" // Reference to the block to be placed.
          bool "enforce_placement_rules" // If true, enforce the block's canPlace check.
          bool "enforce_survivability_rules" // If true, enforce the block's canSurvive check.
          object "may_attach_to" : opt
          {
              int "min_sides_must_attach"<1-4> : opt
              bool "auto_rotate" : opt // Automatically rotate the block to attach sensibly.
               "top" : opt
              array "top" : opt
              {
                   "<any array element>"
              }
               "bottom" : opt
              array "bottom" : opt
              {
                   "<any array element>"
              }
               "north" : opt
              array "north" : opt
              {
                   "<any array element>"
              }
               "east" : opt
              array "east" : opt
              {
                   "<any array element>"
              }
               "south" : opt
              array "south" : opt
              {
                   "<any array element>"
              }
               "west" : opt
              array "west" : opt
              {
                   "<any array element>"
              }
               "all" : opt
              array "all" : opt
              {
                   "<any array element>"
              }
               "sides" : opt
              array "sides" : opt
              {
                   "<any array element>"
              }
          }
          array "may_replace" : opt
          {
               "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
          }
      }
      object "minecraft:snap_to_surface_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "feature_to_snap" // Named reference of feature to be snapped
          int "vertical_search_range" // Range to search for a floor or ceiling for snaping the feature.
          string "surface" : opt // Defines the surface that the y-value of the placement position will be snapped to. Valid values: 'ceiling', 'floor' and 'random_horizontal'
          bool "allow_air_placement" : opt // Determines whether the feature can snap through air blocks. Defaults to true.
          bool "allow_underwater_placement" : opt // Determines whether the feature can snap through water blocks. Defaults to false.
      }
      object "minecraft:structure_template_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          structure_reference "structure_name" // Reference to the structure to be placed.
          int "adjustment_radius"<0-16> : opt // How far the structure is allowed to move when searching for a valid placement position. Search is radial, stopping when the nearest valid position is found. Defaults to 0 if omitted.
          enumerated_value "facing_direction"<"north", "south", "east", "west", "random"> : opt // Direction the structure will face when placed in the world. Defaults to "random" if omitted.
          object "constraints" // Specific constraints that must be satisfied when placing this structure.
          {
              object "grounded" : opt // When specified, ensures the structure is on the ground.
              object "unburied" : opt // When specified, ensures the structure has air above it.
              object "block_intersection" : opt // When specified, ensures the structure only intersects with allowlisted blocks.
              {
                  array "block_allowlist|block_whitelist"
                  {
                       "<any array element>" : opt // List of blocks the owning structure is allowed to intersect with.
                  }
              }
          }
      }
      object "minecraft:surface_relative_threshold_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "feature_to_place" // Named reference of feature to be placed
          int "minimum_distance_below_surface" : opt // The minimum number of blocks required to be between the estimated surface level and a valid place for this feature. Defaults to zero.
      }
      object "minecraft:underwater_cave_carver_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          block_reference "fill_with" : opt // Reference to the block to fill the cave with.
          molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
          int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
          int "height_limit" : opt // The height limit where we attempt to carve.
          float_range "y_scale" : opt // The scaling in y.
          float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
          float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
          float_range "floor_level" : opt // Floor Level.
          block_reference "replace_air_with" : opt // Reference to the block to replace air blocks with.
      }
      object "minecraft:tree_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "base_block" : opt
          array "base_block" : opt
          {
               "<any array element>"
          }
          object "base_cluster" : opt
          {
              array "may_replace"
              {
                   "<any array element>" : opt
              }
              int "num_clusters"<1-*>
              int "cluster_radius"<0-*>
          }
          array "may_grow_on" : opt
          {
               "<any array element>"
          }
          array "may_replace" : opt
          {
               "<any array element>"
          }
          array "may_grow_through" : opt
          {
               "<any array element>"
          }
          object "acacia_trunk" : opt
          {
              int "trunk_width"
              object "trunk_height"
              {
                  int "base"<1-*>
                  array "intervals" : opt
                  {
                      int "<any array element>"<1-*> : opt
                  }
                  int "min_height_for_canopy"<1-*> : opt
              }
              object "trunk_lean"
              {
                  bool "allow_diagonal_growth"
                   "lean_height"
                   "lean_steps"
                   "lean_length" : opt
              }
               "trunk_block"
              object "branches" : opt
              {
                   "branch_length"
                   "branch_position"
                  chance_information "branch_chance"
                  object "branch_canopy" : opt
                  {
                      object "acacia_canopy" : opt
                      {
                          int "canopy_size"<1-*>
                           "leaf_block"
                          bool "simplify_canopy" : opt
                      }
                      object "canopy" : opt
                      {
                          object "canopy_offset"
                          {
                              int "min"
                              int "max"
                          }
                          int "min_width"<0-*> : opt
                          object "canopy_slope" : opt
                          {
                              int "rise"<1-*> : opt
                              int "run"<1-*> : opt
                          }
                          chance_information "variation_chance" : opt
                          array "variation_chance" : opt
                          {
                              chance_information "<any array element>" : opt
                          }
                           "leaf_block"
                          object "canopy_decoration" : opt
                          {
                              chance_information "decoration_chance"
                               "decoration_block" : opt
                              int "num_steps" : opt
                              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
                          }
                      }
                      object "fancy_canopy" : opt
                      {
                          int "height"<1-*>
                          int "radius"<0-*>
                           "leaf_block"
                      }
                      object "mangrove_canopy" : opt
                      {
                           "canopy_height"
                           "canopy_radius"
                          int "leaf_placement_attempts"<1-*>
                          array "leaf_blocks"
                          {
                              array "<any array element>"[2]
                              {
                                   "[0..0]"
                                  float "[1..1]"
                              }
                          }
                          object "canopy_decoration" : opt
                          {
                              chance_information "decoration_chance"
                               "decoration_block" : opt
                              int "num_steps" : opt
                              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
                          }
                           "hanging_block"
                          chance_information "hanging_block_placement_chance"
                      }
                      object "mega_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          int "core_width"<1-*> : opt
                          bool "simplify_canopy" : opt
                           "leaf_block"
                      }
                      object "mega_pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          float "radius_step_modifier"<0.000000-*>
                          int "core_width"<1-*> : opt
                           "leaf_block"
                      }
                      object "pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<1-*>
                           "leaf_block"
                      }
                      object "roofed_canopy" : opt
                      {
                          int "canopy_height"<3-*>
                          int "core_width"<1-*>
                          int "outer_radius"<0-*>
                          int "inner_radius"<0-*>
                           "leaf_block"
                      }
                      object "spruce_canopy" : opt
                      {
                           "lower_offset"
                           "upper_offset"
                           "max_radius"
                           "leaf_block"
                      }
                  }
              }
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "fallen_trunk" : opt
          {
               "log_length"
               "stump_height" : opt
               "height_modifier" : opt
               "trunk_block"
              feature_reference "log_decoration_feature" : opt
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "fancy_trunk" : opt
          {
              object "trunk_height"
              {
                  int "base"<1-*>
                  int "variance"<1-*>
                  float "scale"
              }
              int "trunk_width"<1-*>
              object "branches"
              {
                  float "slope"
                  float "density"
                  float "min_altitude_factor"<0.000000-1.000000>
              }
               "trunk_block"
              float "width_scale"<0.000000-*>
              float "foliage_altitude_factor"<0.000000-1.000000>
          }
          object "mangrove_trunk" : opt
          {
              int "trunk_width"
              object "trunk_height"
              {
                  int "base"<1-*>
                  int "height_rand_a"<1-*>
                  int "height_rand_b"<1-*>
              }
               "trunk_block"
              object "branches" : opt
              {
                   "branch_length"
                   "branch_steps"
                  chance_information "branch_chance"
              }
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "mega_trunk" : opt
          {
              int "trunk_width"
              object "trunk_height"
              {
                  int "base"<1-*>
                  array "intervals" : opt
                  {
                      int "<any array element>"<1-*> : opt
                  }
              }
               "trunk_block"
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
              object "branches" : opt
              {
                  int "branch_length"<1-*>
                  float "branch_slope"
                   "branch_interval"
                  object "branch_altitude_factor"
                  {
                      float "min"<0.000000-1.000000>
                      float "max"<0.000000-1.000000>
                  }
                  object "branch_canopy" : opt
                  {
                      object "acacia_canopy" : opt
                      {
                          int "canopy_size"<1-*>
                           "leaf_block"
                          bool "simplify_canopy" : opt
                      }
                      object "canopy" : opt
                      {
                          object "canopy_offset"
                          {
                              int "min"
                              int "max"
                          }
                          int "min_width"<0-*> : opt
                          object "canopy_slope" : opt
                          {
                              int "rise"<1-*> : opt
                              int "run"<1-*> : opt
                          }
                          chance_information "variation_chance" : opt
                          array "variation_chance" : opt
                          {
                              chance_information "<any array element>" : opt
                          }
                           "leaf_block"
                          object "canopy_decoration" : opt
                          {
                              chance_information "decoration_chance"
                               "decoration_block" : opt
                              int "num_steps" : opt
                              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
                          }
                      }
                      object "fancy_canopy" : opt
                      {
                          int "height"<1-*>
                          int "radius"<0-*>
                           "leaf_block"
                      }
                      object "mangrove_canopy" : opt
                      {
                           "canopy_height"
                           "canopy_radius"
                          int "leaf_placement_attempts"<1-*>
                          array "leaf_blocks"
                          {
                              array "<any array element>"[2]
                              {
                                   "[0..0]"
                                  float "[1..1]"
                              }
                          }
                          object "canopy_decoration" : opt
                          {
                              chance_information "decoration_chance"
                               "decoration_block" : opt
                              int "num_steps" : opt
                              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
                          }
                           "hanging_block"
                          chance_information "hanging_block_placement_chance"
                      }
                      object "mega_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          int "core_width"<1-*> : opt
                          bool "simplify_canopy" : opt
                           "leaf_block"
                      }
                      object "mega_pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          float "radius_step_modifier"<0.000000-*>
                          int "core_width"<1-*> : opt
                           "leaf_block"
                      }
                      object "pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<1-*>
                           "leaf_block"
                      }
                      object "roofed_canopy" : opt
                      {
                          int "canopy_height"<3-*>
                          int "core_width"<1-*>
                          int "outer_radius"<0-*>
                          int "inner_radius"<0-*>
                           "leaf_block"
                      }
                      object "spruce_canopy" : opt
                      {
                           "lower_offset"
                           "upper_offset"
                           "max_radius"
                           "leaf_block"
                      }
                  }
              }
          }
          object "trunk" : opt
          {
               "trunk_height"
               "height_modifier" : opt
              object "can_be_submerged" : opt
              {
                  int "max_depth"<1-*>
              }
              bool "can_be_submerged" : opt
               "trunk_block"
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "acacia_canopy" : opt
          {
              int "canopy_size"<1-*>
               "leaf_block"
              bool "simplify_canopy" : opt
          }
          object "canopy" : opt
          {
              object "canopy_offset"
              {
                  int "min"
                  int "max"
              }
              int "min_width"<0-*> : opt
              object "canopy_slope" : opt
              {
                  int "rise"<1-*> : opt
                  int "run"<1-*> : opt
              }
              chance_information "variation_chance" : opt
              array "variation_chance" : opt
              {
                  chance_information "<any array element>" : opt
              }
               "leaf_block"
              object "canopy_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "fancy_canopy" : opt
          {
              int "height"<1-*>
              int "radius"<0-*>
               "leaf_block"
          }
          object "mangrove_canopy" : opt
          {
               "canopy_height"
               "canopy_radius"
              int "leaf_placement_attempts"<1-*>
              array "leaf_blocks"
              {
                  array "<any array element>"[2]
                  {
                       "[0..0]"
                      float "[1..1]"
                  }
              }
              object "canopy_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
               "hanging_block"
              chance_information "hanging_block_placement_chance"
          }
          object "mega_canopy" : opt
          {
               "canopy_height"
              int "base_radius"<0-*>
              int "core_width"<1-*> : opt
              bool "simplify_canopy" : opt
               "leaf_block"
          }
          object "mega_pine_canopy" : opt
          {
               "canopy_height"
              int "base_radius"<0-*>
              float "radius_step_modifier"<0.000000-*>
              int "core_width"<1-*> : opt
               "leaf_block"
          }
          object "pine_canopy" : opt
          {
               "canopy_height"
              int "base_radius"<1-*>
               "leaf_block"
          }
          object "roofed_canopy" : opt
          {
              int "canopy_height"<3-*>
              int "core_width"<1-*>
              int "outer_radius"<0-*>
              int "inner_radius"<0-*>
               "leaf_block"
          }
          object "spruce_canopy" : opt
          {
               "lower_offset"
               "upper_offset"
               "max_radius"
               "leaf_block"
          }
          object "random_spread_canopy" : opt
          {
               "canopy_height"
               "canopy_radius"
              int "leaf_placement_attempts"<1-*>
              array "leaf_blocks"
              {
                  array "<any array element>"[2]
                  {
                       "[0..0]"
                      float "[1..1]"
                  }
              }
          }
          object "mangrove_roots" : opt
          {
              int "max_root_width"<1-*>
              int "max_root_length"<1-*>
               "root_block"
              object "above_root" : opt
              {
                  chance_information "above_root_chance" : opt
                   "above_root_block" : opt
              }
               "muddy_root_block"
               "mud_block"
               "y_offset"
              array "roots_may_grow_through"
              {
                   "<any array element>"
              }
              object "root_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
      }
      object "minecraft:vegetation_patch_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "replaceable_blocks"
          {
               "<any array element>" : opt
          }
           "ground_block"
          feature_reference "vegetation_feature"
          string "surface" : opt
           "depth"
          float "extra_deep_block_chance" : opt
          int "vertical_range"
          float "vegetation_chance" : opt
           "horizontal_radius"
          float "extra_edge_column_chance"<0.000000-*> : opt
          bool "waterlogged" : opt
      }
      object "minecraft:weighted_random_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "features"[1,*]
          {
              array "<any array element>"[2] : opt // Collection of weighted features that placement will select from.
              {
                  feature_reference "[0..0]" // Named reference to a feature.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
      }
  }
```
