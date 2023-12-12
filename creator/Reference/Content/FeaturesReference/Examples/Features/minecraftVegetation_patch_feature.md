---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:vegetation_patch_feature 
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
  "format_version": "1.16.0",
  "minecraft:vegetation_patch_feature": {
    "description": {
      "identifier": "example:custom_patch_feature"
    },
    "replaceable_blocks": [
      "minecraft:dirt",
      "minecraft:podzol",
      "minecraft:dirt_with_roots",
      "minecraft:grass",
      "minecraft:mycelium",
      "minecraft:stone",
      "minecraft:sand"
    ],
    "ground_block": "minecraft:cactus",
    "vegetation_feature": "example:flowering_cactus_vegetation_feature",
    "surface": "floor",
    "depth": {
      "range_min": 1,
      "range_max": 2
    },
    "vertical_range": 5,
    "vegetation_chance": 0.8,
    "horizontal_radius": {
      "range_min": 4,
      "range_max": 8
    },
    "extra_edge_column_chance": 0.3
  }
}
```
