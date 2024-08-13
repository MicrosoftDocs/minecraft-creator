---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:vegetation_patch_feature
description: "A reference document detailing the 'vegetation_patch_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:vegetation_patch_feature

`minecraft:vegetation_patch_feature` scatters vegetation in an area. The vegetation feature's appearance can be modified by adjusting the radius and depth that it will generate.

### Schema

```json
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
```

### Example

```json
{
  "format_version": "1.13.0",
  "minecraft:vegetation_patch_feature": {
    "description": {
      "identifier": "example:clay_pool_with_dripleaves_feature"
    },
    "replaceable_blocks": [
      "minecraft:clay",
      "minecraft:moss_block",
      "minecraft:sand",
      "minecraft:gravel",
      "minecraft:dirt",
      "minecraft:coarse_dirt",
      "minecraft:podzol",
      "minecraft:dirt_with_roots",
      "minecraft:grass_block",
      "minecraft:mycelium",
      "minecraft:stone",
      "minecraft:cave_vines",
      "minecraft:cave_vines_body_with_berries",
      "minecraft:cave_vines_head_with_berries"
    ],
    "ground_block": "minecraft:clay",
    "vegetation_feature": "minecraft:dripleaf_feature",
    "surface": "floor",
    "depth": 3,
    "vertical_range": 5,
    "vegetation_chance": 0.1,
    "horizontal_radius": {
      "range_min": 4,
      "range_max": 8
    },
    "extra_deep_block_chance": 0.8,
    "extra_edge_column_chance": 0.7,
    "waterlogged": true
  }
}
```
