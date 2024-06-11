---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:geode_feature
description: "A reference document detailing the 'geode_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:geode_feature

`minecraft:geode_feature` generates a rock formation to simulate a geode. Each layer of, and block within, the geode can be replaced.

**Succeeds if**
At least one block within the geode is placed.

**Fails if**
All blocks within the geode fail to be placed.

### Schema

```json
object "example:geode_feature" : opt
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
```

### Example

Diamond geodes with emerald blocks inside and obsidian on the outside

```json
{
  "format_version": "1.13.0",
  "minecraft:geode_feature": {
    "description": {
      "identifier": "minecraft:diamond_geode_feature"
    },
    "filler": "minecraft:air",
    "inner_layer": "minecraft:diamond_block",
    "alternate_inner_layer": "minecraft:emerald_block",
    "middle_layer": "minecraft:calcite",
    "outer_layer": "minecraft:obsidian",
    "inner_placements": [
      {
        "name": "minecraft:amethyst_cluster",
        "states": {
          "amethyst_cluster_type": "small"
        }
      }
    ],
    "min_outer_wall_distance": 4,
    "max_outer_wall_distance": 7,
    "min_distribution_points": 3,
    "max_distribution_points": 5,
    "min_point_offset": 1,
    "max_point_offset": 3,
    "max_radius": 16,
    "crack_point_offset": 2.0,
    "generate_crack_chance": 0.95,
    "base_crack_size": 2.0,
    "noise_multiplier": 0.025,
    "use_potential_placements_chance": 0.35,
    "use_alternate_layer0_chance": 0.083,
    "placements_require_layer0_alternate": true,
    "invalid_blocks_threshold": 1
  }
}
```
