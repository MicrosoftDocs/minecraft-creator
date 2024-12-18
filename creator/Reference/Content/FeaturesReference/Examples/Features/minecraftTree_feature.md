---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:tree_feature
description: "A reference document detailing the 'minecraftTree_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:tree_feature

`minecraft:tree_feature` places a tree in the world. A tree consists of a column that is anchored to a base block with set parameters for what it can be placed on and canopy that extends from the column. The trunk height can be randomized with a min and max value, as well as the canopy offset.

### Schema

```json
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
```

### Example: Azalea Tree

```json
{
  "format_version": "1.13.0",
  "minecraft:tree_feature": {
    "description": {
      "identifier": "example:azalea_tree_feature"
    },
    "acacia_trunk": {
      "trunk_width": 1,
      "trunk_height": {
        "base": 4,
        "intervals": [2],
        "min_height_for_canopy": 3
      },
      "trunk_block": {
        "name": "minecraft:log",
        "states": {
          "old_log_type": "oak"
        }
      },
      "trunk_lean": {
        "allow_diagonal_growth": true,
        "lean_height": {
          "range_min": 2,
          "range_max": 3
        },
        "lean_steps": {
          "range_min": 3,
          "range_max": 4
        },
        "lean_length": {
          "range_min": 1,
          "range_max": 2
        }
      }
    },
    "random_spread_canopy": {
      "canopy_height": 2,
      "canopy_radius": 3,
      "leaf_placement_attempts": 50,
      "leaf_blocks": [
        ["minecraft:azalea_leaves", 3],
        ["minecraft:azalea_leaves_flowered", 1]
      ]
    },
    "base_block": ["minecraft:dirt_with_roots"],
    "may_grow_on": [
      "minecraft:dirt",
      "minecraft:grass_block",
      "minecraft:podzol",
      "minecraft:dirt",
      "minecraft:farmland",
      "minecraft:dirt_with_roots",
      "minecraft:moss_block",
      "minecraft:clay",
      "minecraft:mycelium",
      "minecraft:mud",
      "minecraft:muddy_mangrove_roots"
    ],
    "may_replace": [
      "minecraft:oak_leaves",
      "minecraft:spruce_leaves",
      "minecraft:birch_leaves",
      "minecraft:jungle_leaves",
      "minecraft:acacia_leaves",
      "minecraft:dark_oak_leaves",
      "minecraft:azalea",
      "minecraft:flowering_azalea",
      "minecraft:azalea_leaves",
      "minecraft:azalea_leaves_flowered",
      "minecraft:mangrove_leaves",
      "minecraft:water",
      "minecraft:flowing_water",
      "minecraft:moss_carpet",
      "minecraft:tallgrass",
      "minecraft:grass_block",
      "minecraft:air",
      "minecraft:sunflower",
      "minecraft:lilac",
      "minecraft:tall_grass",
      "minecraft:large_fern",
      "minecraft:rose_bush",
      "minecraft:peony"
    ],
    "may_grow_through": [
      "minecraft:dirt",
      "minecraft:grass_block",
      "minecraft:moss_carpet",
      "minecraft:tallgrass",
      "minecraft:sunflower",
      "minecraft:lilac",
      "minecraft:tall_grass",
      "minecraft:large_fern",
      "minecraft:rose_bush",
      "minecraft:peony"
    ]
  }
}
```
