---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:snap_to_surface_feature"
description: "Describes the minecraft:snap_to_surface_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:snap_to_surface_feature

Snaps the y-value of a feature placement pos to the floor or the ceiling within the provided vertical_search_range. The placement biome is preserved. If the snap position goes outside of the placement biome, placement will fail.


## Snap To Surface Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_air_placement | *not set* | Boolean true/false | Determines whether the feature can snap through air blocks. Defaults to true. |  | 
| allow_underwater_placement | *not set* | Boolean true/false | Determines whether the feature can snap through water blocks. Defaults to false. |  | 
| allowed_surface_blocks | *not set* | Array of strings | A list of blocks that the feature is permitted to snap to. Leaving this empty results in the feature snapping to blocks that can provide support for the given face (up/down/horizontal) |  | 
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| surface | *not set* | String | Defines the surface that the y-value of the placement position will be snapped to. Valid values: 'ceiling', 'floor' and 'random_horizontal' |  | 
| vertical_search_range | *not set* | Integer number | Range to search for a floor or ceiling for snaping the feature. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:snap_to_surface_feature": {
  "format_version": "1.13.0",
  "minecraft:snap_to_surface_feature": {
    "description": {
      "identifier": "example:cave_vine_snapped_to_ceiling_feature"
    },
    "feature_to_snap": "example:cave_vine_feature",
    "vertical_search_range": 12,
    "surface": "ceiling",
    "allowed_surface_blocks": {
      "name": "minecraft:cobblestone"
    }
  }
}
```
