---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:vegetation_patch_feature 
ms.prod: gaming
---

# Features Documentation - minecraft:vegetation_patch_feature 

`minecraft:vegetation_patch_feature` scatters vegetation in an area. The vegetation feature’s appearance can be modified by adjusting the radius and depth that it will generate. 

## Example

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
