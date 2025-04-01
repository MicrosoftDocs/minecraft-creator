---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:cave_carver_feature"
description: "Describes the minecraft:cave_carver_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:cave_carver_feature

Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature only works when placed in the pass "pregeneration_pass".


## Cave Carver Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description-item-type) item |  |  | 
| format_version | *not set* | String |  |  | 
| height_limit | *not set* | Integer number | The height limit where we attempt to carve. |  | 
| skip_carve_chance | *not set* | Integer number | The chance to skip doing the carve (1 / value). |  | 
| width_modifier | *not set* | Molang | How many blocks to increase the cave radius by, from the center point of the cave. |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:cave_carver_feature": {
  "format_version": "1.13.0",
  "minecraft:aggregate_feature": {
    "description": {
      "identifier": "example:monument_with_flowers_feature"
    },
    "features": [
      "example:monument_feature",
      "example:scatter_white_flowers_feature",
      "example:scatter_yellow_flower_feature"
    ]
  }
}
```
