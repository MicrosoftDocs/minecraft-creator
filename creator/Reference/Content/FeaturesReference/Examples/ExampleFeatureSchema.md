---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - Feature schema
description: "Examples of feature schemas available in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
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
    int "min_distribution_points"<1-10> // The minimum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all distribution points. [0,10]
    int "max_distribution_points"<1-20> // The maximum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all distribution points. [0,20]
    int "min_point_offset"<0-10> // The lowest possible value of random offset applied to the position of each distribution point. [0,10]
    int "max_point_offset"<0-10> // The highest possible value of random offset applied to the position of each distribution point. [0,10]
    int "max_radius" // The maximum possible radius of the geode generated.
    int "crack_point_offset"<0-10> // An offset applied to each distribution point that forms the geode crack opening. [0,10]
    float "generate_crack_chance"<0.000000-1.000000> // The likelihood of a geode generating with a crack in its shell. [0,1]
    float "base_crack_size"<0.000000-5.000000> // How large the crack opening of the geode should be when generated. [0,5]
    float "noise_multiplier" // A multiplier applied to the noise that is applied to the distribution points within the geode. Higher = more noisy.
    float "use_potential_placements_chance"<0.000000-1.000000> // The likelihood that a special block will be placed on the inside of the geode. [0,1]
    float "use_alternate_layer0_chance"<0.000000-1.000000> // The likelihood that a block in the innermost layer of the geode will be replaced with an alternate option. [0,1]
    bool "placements_require_layer0_alternate" // If true, the potential placement block will only be placed on the alternate layer0 blocks that get placed. Potential placement blocks are blocks that depend on the existence of another block to be placed. The latter are the layer0 alternate blocks.
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
  object "minecraft:nether_cave_carver_feature" : opt
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
  object "minecraft:scatter_feature" : opt
  {
    object "description"
    {
      string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
    }
    feature_reference "places_feature" // Named reference of feature to be placed
    bool "project_input_to_floor" : opt // If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
    object "distribution" // Parameters controlling the scatter of the feature. Object of type ScatterParams
  }
  }
  object "minecraft:sculk_patch_feature" : opt
  {
    object "description"
    {
      string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
    }
    array "can_place_sculk_patch_on"
    {
      "<any array element>" : opt
    }
    "central_block" : opt
    float "central_block_placement_chance"<0.000000-1.000000> : opt
    int "cursor_count"<0-32>
    int "charge_amount"<1-1000>
    int "spread_attempts"<1-64>
    int "growth_rounds"<0-8>
    int "spread_rounds"<0-8>
    "extra_growth_chance" : opt
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
      array "max"[3] // Maximum extent of the bounding volume expressed as [ x, y, z ]
      {
        int "[0..0]" // x_max
        int "[1..1]" // y_max
        int "[2..2]" // z_max
      }
    }
    enumerated_value "search_axis"<"-x", "+x", "-y", "+y", "-z", "+z"> // Axis that the search will sweep along through the 'search_volume'
    int "required_successes"<1-*> : opt // Number of valid positions the search must find in order to place the referenced feature
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
    int "vertical_search_range" // Range to search for a floor or ceiling for snapping the feature.
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
        array "block_allowlist"
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
  object "minecraft:tree_feature" : opt
  {
    object "description"
    {
      string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
    }
    "base_block" : opt // The block used for the base of the tree.
    array "base_block" : opt
    {
      "<any array element>" // The blocks used for the base of the tree.
    }
    object "base_cluster" : opt // List of blocks that the base cluster of a tree can replace.
    {
      array "may_replace"
      {
        "<any array element>" : opt // List of blocks that the base cluster of a tree can replace.
      }
      int "num_clusters"<1-*> // Number of clusters that can be generated.
      int "cluster_radius"<0-*> // Radius where the clusters can be generated.
    }
    array "may_grow_on" : opt
    {
      "<any array element>" // List of blocks a tree can grow on.
    }
    array "may_replace" : opt
    {
      "<any array element>" // List of blocks a tree may replace.
    }
    array "may_grow_through" : opt
    {
      "<any array element>" // List of blocks a tree can grow through.
    }
    object "acacia_trunk" : opt
    {
      int "trunk_width" // The width of the tree trunk.
      object "trunk_height" // Configuration object for the trunk height.
      {
        int "base"<1-*> // Min height for the trunk.
        array "intervals" : opt
        {
          int "<any array element>"<1-*> : opt // Intervals used to randomize the trunk height, the value of each interval will create a random number where (0 <= rand < interval), and will be added to the height.
        }
        int "min_height_for_canopy"<1-*> : opt // Minimum height for the canopy to be placed.
      }
      object "trunk_lean" // Configuration object for diagonal branches.
      {
        bool "allow_diagonal_growth" // If true, diagonal branches will be created.
        "lean_height" // Number of blocks below the tree height at which diagonal branches can be created.
        "lean_steps" // Number of steps taken in X/Z direction while creating a diagonal branch.
        "lean_length" : opt // Length for the diagonal branch in the Y axis.
      }
      "trunk_block" // The block that forms the tree trunk
      object "branches" : opt // Configuration object for branches
      {
        "branch_length" // Length for the branch in the Y axis.
        "branch_position" // Starting Y position for the branch.
        chance_information "branch_chance" // Probability of creating a branch.
        object "branch_canopy" : opt // Configuration object for the canopy.
        {
          object "acacia_canopy" : opt
          {
            int "canopy_size"<1-*> // The size of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
            bool "simplify_canopy" : opt // If 'true', the canopy uses a simple pattern.
          }
          object "canopy" : opt
          {
            object "canopy_offset" // Canopy position relative to the block above the trunk.
            {
              int "min" // Min canopy position offset.
              int "max" // Max canopy position offset.
            }
            int "min_width"<0-*> : opt // Minimum width for the canopy.
            object "canopy_slope" : opt // Configuration object for the canopy slope.
            {
              int "rise"<1-*> : opt // The numerator for the slope fraction
              int "run"<1-*> : opt // The denominator for the slope fraction.
            }
            chance_information "variation_chance" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a more dense tree.
            array "variation_chance" : opt
            {
              chance_information "<any array element>" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a more dense tree.
            }
            "leaf_block" // The block that forms the canopy of the tree.
            object "canopy_decoration" : opt // Configuration object for the canopy decoration.
            {
              chance_information "decoration_chance" // Probability of decorating the trunk.
              "decoration_block" : opt // The block used for decorating the trunk.
              int "num_steps" : opt // Number of decoration blocks to place.
              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt //Directions to spread decoration blocks.
            }
          }
          object "cherry_canopy" : opt
          {
            "leaf_block" // The block that forms the canopy of the tree.
            "height" // Number of layers for the canopy.
            "radius" // The radius of the canopy. 
            int "trunk_width"<1-*> : opt // The width of the tree trunk.
            chance_information "wide_bottom_layer_hole_chance" // Probability of the canopy having a hole in the bottom layer [0-100%].
            chance_information "corner_hole_chance" // Probability of the canopy having a hole in the corner [0-100%].
            chance_information "hanging_leaves_chance" // Probability of the canopy having hanging leaves [0-100%].
            chance_information "hanging_leaves_extension_chance" // Probability of hanging leaves extending further down [0-100%].
          }
          object "fancy_canopy" : opt
          {
            int "height"<1-*> // Number of layers for the canopy.
            int "radius"<0-*> // The radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "mangrove_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            "canopy_radius" // The radius of the canopy.
            int "leaf_placement_attempts"<1-*> // Maximum number of attempts to create leaf blocks.
            array "leaf_blocks"
            {
              array "<any array element>"[2] // The blocks that form the canopy of the tree.
              {
                "[0..0]"
                float "[1..1]"
              }
            }
            object "canopy_decoration" : opt // Configuration object for the canopy decoration.
            {
              chance_information "decoration_chance" // Probability of decorating the trunk.
              "decoration_block" : opt // The block used for decorating the trunk.
              int "num_steps" : opt // Number of decoration blocks to place.
              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
            }
            "hanging_block" // The block to be used as a hanging block.
            chance_information "hanging_block_placement_chance" // Probability of creating a hanging leaf block.
          }
          object "mega_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<0-*> // Radius of the canopy.
            int "core_width"<1-*> : opt // Width of the tree trunk.
            bool "simplify_canopy" : opt // If 'true', the canopy uses a simple pattern.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "mega_pine_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<0-*> // Radius of the canopy.
            float "radius_step_modifier"<0.000000-*> // Modifier for the base radius of the canopy.
            int "core_width"<1-*> : opt // Width of the tree trunk.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "pine_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<1-*> // Radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "roofed_canopy" : opt
          {
            int "canopy_height"<3-*> // Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions; this value controls the number of layers in the middle.
            int "core_width"<1-*> // Width of the tree trunk.
            int "outer_radius"<0-*> // Radius used for the base and top layers.
            int "inner_radius"<0-*> // Radius used for the middle layers.
            "leaf_block" // The block that forms the canopy of the tree. 
          }
          object "spruce_canopy" : opt
          {
            "lower_offset" // Minimum canopy position offset.
            "upper_offset" // Maximum canopy position offset.
            "max_radius" // Maximum radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
        }
      }
      object "trunk_decoration" : opt // Configuration object for the trunk decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used to decorate the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
    }
    object "cherry_trunk" : opt
    {
      "trunk_block" // The block that forms the tree trunk.
      object "trunk_height" // Configuration object for the trunk height.
      {
        int "base"<2-*> // Minimum height for the trunk.
        array "intervals" : opt
        {
          int "<any array element>"<1-*> : opt // Intervals used to randomize the trunk height; the value of each interval will create a random number where (0 <= rand < interval), and will be added to the height.
        }
      }
      object "branches" // Configuration object for the branches.
      {
        object "tree_type_weights" : opt // Configuration object to pick a tree variant based on a weighted random number.
        {
          int "one_branch"<0-*> // Tree variant with one branch.
          int "two_branches"<0-*> // Tree variant with two branches.
          int "two_branches_and_trunk"<0-*> // Tree variant with three branches.
        }
        "branch_horizontal_length" // Branch length in X/Z axis.
        "branch_start_offset_from_top" // Branch starting position relative to the top of the tree.
        "branch_end_offset_from_top" // Branch end position relative to the top of the tree.
        object "branch_canopy" : opt // Configuration object for the canopy.
        {
          object "acacia_canopy" : opt
          {
            int "canopy_size"<1-*> // The size of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
            bool "simplify_canopy" : opt // If 'true', the canopy uses a simple pattern.
          }
          object "canopy" : opt
          {
            object "canopy_offset" // Canopy position offset relative to the block above the trunk.
            {
              int "min" // The minimum canopy position offset.
              int "max" // The maximum canopy position offset.
            }
            int "min_width"<0-*> : opt // Minimum width for the canopy.
            object "canopy_slope" : opt // Configuration object for the canopy slope.
            {
              int "rise"<1-*> : opt // The numerator for the slope fraction.
              int "run"<1-*> : opt // The denominator for the slope fraction.
            }
            chance_information "variation_chance" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a more dense tree.
            array "variation_chance" : opt
            {
              chance_information "<any array element>" : opt // Determines the chance of creating leaf blocks for ever layer of the canopy. Larger numbers create a more dense tree.
            }
            "leaf_block" // The block that forms the canopy of the tree.
            object "canopy_decoration" : opt // Configuration object for the canopy decoration.
            {
              chance_information "decoration_chance" // Probability of decorating the trunk.
              "decoration_block" : opt // The block used for decorating the trunk.
              int "num_steps" : opt // Number of decoration blocks to place.
              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
            }
          }
          object "cherry_canopy" : opt
          {
            "leaf_block" // The block that forms the canopy of the tree.
            "height" // Number of layers for the canopy.
            "radius" // The radius of the canopy. 
            int "trunk_width"<1-*> : opt // The width of the tree trunk.
            chance_information "wide_bottom_layer_hole_chance" // Probability of the canopy having a hole in the bottom layer [0-100%].
            chance_information "corner_hole_chance" // Probability of the canopy having a hole in the corner [0-100%].
            chance_information "hanging_leaves_chance" // Probability of the canopy having hanging leaves [0-100%].
            chance_information "hanging_leaves_extension_chance"  // Probability of hanging leaves extending further down [0-100%].
          }
          object "fancy_canopy" : opt
          {
            int "height"<1-*> // Number of layers for the canopy.
            int "radius"<0-*> // The radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "mangrove_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            "canopy_radius" // Radius of the canopy.
            int "leaf_placement_attempts"<1-*> // Maximum number of attempts to create leaf blocks.
            array "leaf_blocks"
            {
              array "<any array element>"[2] // The blocks that form the canopy of the tree.
              {
                "[0..0]"
                float "[1..1]"
              }
            }
            object "canopy_decoration" : opt // Configuration object for the canopy decoration.
            {
              chance_information "decoration_chance" // Probability of decorating the trunk.
              "decoration_block" : opt // The block used for decorating the trunk.
              int "num_steps" : opt // Number of decoration blocks to place.
              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
            }
            "hanging_block" // The block to be used as a hanging block.
            chance_information "hanging_block_placement_chance" // Probability of creating a hanging leaf block.
          }
          object "mega_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<0-*> // Radius of the canopy.
            int "core_width"<1-*> : opt // Width of the tree trunk.
            bool "simplify_canopy" : opt // If true the canopy uses a simple pattern.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "mega_pine_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<0-*> // Radius of the canopy.
            float "radius_step_modifier"<0.000000-*> // Modifier for the base radius of the canopy.
            int "core_width"<1-*> : opt // Width of the tree trunk.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "pine_canopy" : opt
          {
            "canopy_height" // The number of layers for the canopy.
            int "base_radius"<1-*> // Radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "roofed_canopy" : opt
          { 
            int "canopy_height"<3-*> // Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle.
            int "core_width"<1-*> // Width of the tree trunk.
            int "outer_radius"<0-*> // Radius used for the base and top layers.
            int "inner_radius"<0-*> // Radius used for the middle layers.
            "leaf_block" // The block that form the canopy of the tree.
          }
          object "spruce_canopy" : opt
          {
            "lower_offset" // Minimum canopy position offset.
            "upper_offset" // Maximum canopy position offset.
            "max_radius" // Maximum radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
        }
      }
    }
    object "cherry_trunk" : opt
    {
      "trunk_block"
      object "trunk_height"
      {
        int "base"<2-*>
        array "intervals" : opt
        {
          int "<any array element>"<1-*> : opt
        }
      }
      object "branches"
      {
        object "tree_type_weights" : opt
        {
          int "one_branch"<0-*>
          int "two_branches"<0-*>
          int "two_branches_and_trunk"<0-*>
        }
        "branch_horizontal_length"
        "branch_start_offset_from_top"
        "branch_end_offset_from_top"
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
          object "cherry_canopy" : opt
          {
            "leaf_block"
            "height"
            "radius"
            int "trunk_width"<1-*> : opt
            chance_information "wide_bottom_layer_hole_chance"
            chance_information "corner_hole_chance"
            chance_information "hanging_leaves_chance"
            chance_information "hanging_leaves_extension_chance"
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
    object "fallen_trunk" : opt
    {
      "log_length" // Length of the fallen log.
      "stump_height" : opt // Height of the stump.
      "height_modifier" : opt // Modifier for the length of the fallen log.
      "trunk_block" // The block that forms the tree trunk.
      feature_reference "log_decoration_feature" : opt // Feature that can be used to decorate the fallen log
      object "trunk_decoration" : opt // Configuration object for the trunk decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used for decorating the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
    }
    object "fancy_trunk" : opt
    {
      object "trunk_height" // Configuration object for the trunk height.
      {
        int "base"<1-*> // Minimum height for the trunk.
        int "variance"<1-*> // Modifier for the trunk height.
        float "scale" // Final tree height is multiplied by this scale. Max supported scale is 1.
      }
      int "trunk_width"<1-*> // The width of the tree trunk.
      object "branches" // Configuration object for branches.
      {
        float "slope" // Slope for the branch, where 0 is horizontal and 1 is vertical.
        float "density" // Density of foliage.
        float "min_altitude_factor"<0.000000-1.000000> // Min height for branches. Represented by a percentage of the tree height.
      }
      "trunk_block" // The block that forms the tree trunk.
      float "width_scale"<0.000000-*> // Scale modifier for the tree radius.
      float "foliage_altitude_factor"<0.000000-1.000000> // Min height for foliage. Represented by a percentage of the tree height.
    }
    object "mangrove_trunk" : opt
     {
      int "trunk_width" // The width of the tree trunk.
      object "trunk_height" // Configuration object for the trunk height.
      {
        int "base"<1-*> // Minimum height for the trunk.
        int "height_rand_a"<1-*> // Tree height modifier A.
        int "height_rand_b"<1-*> // Tree height modifier B.
      }
      "trunk_block" // The block that forms the tree trunk.
      object "branches" : opt // Configuration object for branches.
      {
        "branch_length" // Length for the branch in the Y axis.
        "branch_steps" // Number of branches to place.
        chance_information "branch_chance" // Probability of creating a branch.
      }
      object "trunk_decoration" : opt // Configuration object for the trunk decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used for decorating the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
    }
    object "mega_trunk" : opt
    {
      int "trunk_width" // The width of the tree trunk.
      object "trunk_height" // Configuration object for the trunk height.
      {
        int "base"<1-*> // Minimum height for the trunk.
        array "intervals" : opt
        {
          int "<any array element>"<1-*> : opt // Intervals used to randomize the trunk height, the value of each interval will create a random number where (0 <= rand < interval)), and will be added to the height.
        }
      }
      "trunk_block" // The block that forms the tree trunk.
      object "trunk_decoration" : opt // Configuration object for the trunk decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used for decorating the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
      object "branches" : opt // Configuration object for branches.
      {
        int "branch_length"<1-*> // Length for the branch.
        float "branch_slope" // Slope for the branch, where 0 is horizontal and 1 is vertical.
        "branch_interval" // Randomized distance between branches.
        object "branch_altitude_factor" // Altitude at which branches can spawn, relative to the tree height.
        {
          float "min"<0.000000-1.000000> // Minimum altitude where branches can spawn.
          float "max"<0.000000-1.000000> // Maximum altitude where branches can spawn.
        }
        object "branch_canopy" : opt // Configuration object for the canopy.
        {
          object "acacia_canopy" : opt
          {
            int "canopy_size"<1-*> // The size of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
            bool "simplify_canopy" : opt // If 'true', the canopy uses a simple pattern.
          }
          object "canopy" : opt
          {
            object "canopy_offset" // Canopy position offset relative to the block above the trunk.
            {
              int "min" // Minimum canopy position offset.
              int "max" // Maximum canopy position offset.
            }
            int "min_width"<0-*> : opt // Minimum width for the canopy.
            object "canopy_slope" : opt // Configuration object for the canopy slope.
            {
              int "rise"<1-*> : opt // The numerator for the slope fraction.
              int "run"<1-*> : opt // The denominator for the slope fraction.
            }
            chance_information "variation_chance" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a denser tree.
            array "variation_chance" : opt
            {
              chance_information "<any array element>" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a denser tree.
            }
            "leaf_block" // The block that forms the canopy of the tree.
            object "canopy_decoration" : opt // Configuration option for the canopy decoration.
            {
              chance_information "decoration_chance" // Probability of decorating the trunk.
              "decoration_block" : opt // The block used for decorating the trunk.
              int "num_steps" : opt // Number of decoration blocks to place.
              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
            }
          }
          object "cherry_canopy" : opt
          {
            "leaf_block" // The block that forms the canopy of the tree.
            "height" // Number of layers for the canopy.
            "radius" // The radius of the canopy.
            int "trunk_width"<1-*> : opt // The width of the tree trunk.
            chance_information "wide_bottom_layer_hole_chance" // Probability of the canopy having a hole in the bottom layer [0-100%].
            chance_information "corner_hole_chance" // Probability of the canopy having a hole in the corner [0-100%].
            chance_information "hanging_leaves_chance" // Probability of the canopy having hanging leaves [0-100%].
            chance_information "hanging_leaves_extension_chance" // Probability of hanging leaves extending further down [0-100%].
          }
          object "fancy_canopy" : opt
          {
            int "height"<1-*> // Number of layers for the canopy.
            int "radius"<0-*> // The radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "mangrove_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            "canopy_radius" // Radius of the canopy.
            int "leaf_placement_attempts"<1-*> // Max number of attempts to create leaf blocks.
            array "leaf_blocks"
            {
              array "<any array element>"[2] // The blocks that form the canopy of the tree.
              {
                "[0..0]"
                float "[1..1]"
              }
            }
            object "canopy_decoration" : opt // Configuration object for the canopy decoration.
            {
              chance_information "decoration_chance" // Probability of decorating the trunk.
              "decoration_block" : opt // The block used for decorating the trunk.
              int "num_steps" : opt // Number of decoration blocks to place.
              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
            }
            "hanging_block" // The block to be used as a hanging block.
            chance_information "hanging_block_placement_chance" // Probability of creating a hanging leaf block.
          }
          object "mega_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<0-*> // Radius of the canopy.
            int "core_width"<1-*> : opt // Width of the tree trunk.
            bool "simplify_canopy" : opt // If true the canopy uses a simple pattern.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "mega_pine_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<0-*> // Radius of the canopy.
            float "radius_step_modifier"<0.000000-*> // Modifier for the base radius of the canopy
            int "core_width"<1-*> : opt // Width of the tree trunk.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "pine_canopy" : opt
          {
            "canopy_height" // Number of layers for the canopy.
            int "base_radius"<1-*> // Radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "roofed_canopy" : opt
          {
            int "canopy_height"<3-*> // Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle.
            int "core_width"<1-*> // Width of the tree trunk.
            int "outer_radius"<0-*> // Radius used for the base and top layers.
            int "inner_radius"<0-*> // Radius used for the middle layers.
            "leaf_block" // The block that forms the canopy of the tree.
          }
          object "spruce_canopy" : opt
          {
            "lower_offset" // Minimum canopy position offset.
            "upper_offset" // Maximum canopy position offset.
            "max_radius" // Maximum radius of the canopy.
            "leaf_block" // The block that forms the canopy of the tree.
          }
        }
      }
    }
    object "trunk" : opt
    {
      "trunk_height" // Defines the height of the trunk.
      "height_modifier" : opt // Modifier for the height of the trunk.
      object "can_be_submerged" : opt // Specifies if the trunk can be submerged.
      {
        int "max_depth"<1-*> // Defines the max depth at which the trunk can be submerged.
      }
      bool "can_be_submerged" : opt // Specifies if the trunk can be submerged.
      "trunk_block" // The block that forms the tree trunk.
      object "trunk_decoration" : opt // Configuration object for the trunk decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used for decorating the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
    }
    object "acacia_canopy" : opt
    {
      int "canopy_size"<1-*> // The size of the canopy.
      "leaf_block" // The block that forms the canopy of the tree.
      bool "simplify_canopy" : opt // If true the canopy uses a simple pattern.
    }
    object "canopy" : opt
    {
      object "canopy_offset" // Canopy position offset relative to the block above the trunk.
      {
        int "min" // Minimum canopy position offset.
        int "max" // Maximum canopy position offset.
      }
      int "min_width"<0-*> : opt // Minimum width for the canopy.
      object "canopy_slope" : opt // Configuration object for the canopy slope.
      {
        int "rise"<1-*> : opt // The numerator for the slope fraction.
        int "run"<1-*> : opt // The denominator for the slope fraction.
      }
      chance_information "variation_chance" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a more dense tree.
      array "variation_chance" : opt
      {
        chance_information "<any array element>" : opt // Determines the chance of creating leaf blocks for every layer of the canopy. Larger numbers create a denser tree.
      }
      "leaf_block" // The block that forms the canopy of the tree.
      object "canopy_decoration" : opt // Configuration object for the canopy decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used for decorating the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
    }
    object "cherry_canopy" : opt
    {
      "leaf_block" // The block that forms the canopy of the tree.
      "height" // Number of layers for the canopy.
      "radius" // The radius of the canopy.
      int "trunk_width"<1-*> : opt // The width of the tree trunk.
      chance_information "wide_bottom_layer_hole_chance" // Probability of the canopy having a hole in the bottom layer [0-100%].
      chance_information "corner_hole_chance" // Probability of the canopy having a hole in the corner [0-100%].
      chance_information "hanging_leaves_chance" // Probability of the canopy having hanging leaves [0-100%].
      chance_information "hanging_leaves_extension_chance" // Probability of hanging leaves extending further down [0-100%].
    }
    object "fancy_canopy" : opt
    {
      int "height"<1-*> // Number of layers for the canopy.
      int "radius"<0-*> // The radius of the canopy.
      "leaf_block" // The block that forms the canopy of the tree.
    }
    object "mangrove_canopy" : opt
    {
      "canopy_height" // Number of layers for the canopy.
      "canopy_radius" // Radius of the canopy.
      int "leaf_placement_attempts"<1-*> // Max number of attempts to create leaf blocks.
      array "leaf_blocks"
      {
        array "<any array element>"[2] // The blocks that form the canopy of the tree.
        {
          "[0..0]"
          float "[1..1]"
        }
      }
      object "canopy_decoration" : opt // Configuration object for the canopy decoration.
      {
        chance_information "decoration_chance" // Probability of decorating the trunk.
        "decoration_block" : opt // The block used for decorating the trunk.
        int "num_steps" : opt // Number of decoration blocks to place.
        enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
      }
      "hanging_block" // The block to be used as a hanging block.
      chance_information "hanging_block_placement_chance" // Probability of creating a hanging leaf block.
    }
    object "mega_canopy" : opt
    {
      "canopy_height" // Number of layers for the canopy.
      int "base_radius"<0-*> // Radius of the canopy.
      int "core_width"<1-*> : opt // Width of the tree trunk.
      bool "simplify_canopy" : opt // If true the canopy uses a simple pattern.
      "leaf_block" // The block that forms the canopy of the tree.
    }
    object "mega_pine_canopy" : opt
    {
      "canopy_height" // Number of layers for the canopy.
      int "base_radius"<0-*> // Radius of the canopy.
      float "radius_step_modifier"<0.000000-*> // Modifier for the base radius of the canopy.
      int "core_width"<1-*> : opt // Width of the tree trunk.
      "leaf_block" // The block that forms the canopy of the tree.
    }
    object "pine_canopy" : opt
    {
      "canopy_height" // Number of layers for the canopy.
      int "base_radius"<1-*> // Radius of the canopy.
      "leaf_block" // The block that forms the canopy of the tree.
    }
    object "roofed_canopy" : opt
    {
      int "canopy_height"<3-*> // Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle.
      int "core_width"<1-*> // Width of the tree trunk.
      int "outer_radius"<0-*> // Radius used for the base and top layers.
      int "inner_radius"<0-*> // Radius used for the middle layers.
      "leaf_block" // The block that forms the canopy of the tree.
    }
    object "spruce_canopy" : opt
    {
      "lower_offset" // Minimum canopy position offset.
      "upper_offset" // Maximum canopy position offset.
      "max_radius" // Maximum radius of the canopy.
      "leaf_block" // The block that forms the canopy of the tree.
    }
    object "random_spread_canopy" : opt
    {
      "canopy_height" // Number of layers for the canopy.
      "canopy_radius" // Radius of the canopy.
      int "leaf_placement_attempts"<1-*> // Max number of attempts to create leaf blocks.
      array "leaf_blocks"
      {
        array "<any array element>"[2] // The blocks that form the canopy of the tree.
        {
          "[0..0]"
          float "[1..1]"
        }
      }
    }
    object "mangrove_roots" : opt
    {
      int "max_root_width"<1-*> // Max width that the roots can occupy. The width increases up to the max width while moving downwards. When a max width is reached, roots will grow vertically.
      int "max_root_length"<1-*> // Max length for the roots.
      "root_block" // The block used for the roots.
      object "above_root" : opt // Configuration object for blocks decorating the top of the roots.
        {
          chance_information "above_root_chance" : opt // Probability of creating a block above the root.
          "above_root_block" : opt // The block placed on the top of the roots.
        }
        "muddy_root_block" // The block used for muddy roots.
        "mud_block" // The block used to determine if a muddy root should be placed.
        "y_offset" // Root offset from the trunk.
        array "roots_may_grow_through"
        {
          "<any array element>" // List of blocks that a root can grow through.
        }
        object "root_decoration" : opt // Configuration object for the root decoration.
        {
          chance_information "decoration_chance" // Probability of decorating the trunk.
          "decoration_block" : opt // The block used for decorating the trunk.
          int "num_steps" : opt // Number of decoration blocks to place.
          enumerated_value "step_direction"<"down", "up", "out", "away"> : opt // Directions to spread decoration blocks.
        }
      }
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
  object "minecraft:vegetation_patch_feature" : opt
  {
    object "description"
    {
      string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
    }
    array "replaceable_blocks"
    {
      "<any array element>" : opt // Blocks that can be replaced by the ground blocks on the patch.
    }
    "ground_block" // Block used to create a base for the vegetation patch.
    feature_reference "vegetation_feature" // Feature that will be placed by the patch.
    string "surface" : opt // Determines if a vegetation patch will grow from the ceiling or the floor.
    "depth" // Depth of the base covered by the ground blocks.
    float "extra_deep_block_chance" : opt // Probability of putting the ground blocks one block deeper. Adds some randomness to the bottom of the patch.
    int "vertical_range" // Vertical range used to determine a suitable surface position for the patch.
    float "vegetation_chance" : opt // Probability of spawning vegetation on the patch. Larger numbers create a denser vegetation patch.
    "horizontal_radius" // Horizontal area that the vegetation patch will cover.
    float "extra_edge_column_chance"<0.000000-*> : opt // Probability of spawning vegetation on the edge of the patch radius.
    bool "waterlogged" : opt // If true, waterlogs the positions occupied by the ground blocks.
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
