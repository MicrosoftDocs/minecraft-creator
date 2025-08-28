---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:vegetation_patch_feature"
description: "Describes the minecraft:vegetation_patch_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:vegetation_patch_feature

Scatters vegetation in an area. The vegetation feature's appearance can be modified by adjusting the radius and depth that it will generate.


## Vegetation Patch Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| replaceable_blocks | *not set* | Array of strings |  |  | 
| surface | *not set* | String | Determines if a vegetation patch will grow from the ceiling or the floor. |  | 
| vertical_range | *not set* | Integer number | Vertical range used to determine a suitable surface position for the patch. |  | 
| waterlogged | *not set* | Boolean true/false | If true, waterlogs the positions occupied by the ground blocks. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:vegetation_patch_feature": {
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
