---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:surface_relative_threshold_feature"
description: "Describes the minecraft:surface_relative_threshold_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:surface_relative_threshold_feature

Determines whether the provided position is below the estimated surface level of the world, and places a feature if so. If the provided position is above the configured surface or the surface is not available, placement will fail. This feature only works for Overworld generators using world generation 1.18 or later.


## Surface Relative Threshold Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description-item-type) item |  |  | 
| format_version | *not set* | String |  |  | 
| minimum_distance_below_surface | *not set* | Integer number | The minimum number of blocks required to be between the estimated surface level and a valid place for this feature. Defaults to zero. |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:surface_relative_threshold_feature": {
  "format_version": "1.13.0",
  "minecraft:surface_relative_threshold_feature": {
    "description": {
      "identifier": "example:underwater_magma_underground_feature"
    },
    "feature_to_place": "log_decoration_feature",
    "minimum_distance_below_surface": 2
  }
}
```
