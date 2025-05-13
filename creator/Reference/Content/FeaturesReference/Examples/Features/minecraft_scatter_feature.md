---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:scatter_feature"
description: "Describes the minecraft:scatter_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:scatter_feature

Scatters a feature throughout a chunk. The x, y, and z fields are per-coordinate parameters. Coordinates represent an offset from the input position instead of an absolute position, and may be a single value, random distribution, or Molang expression that resolves to a numeric value. The coordinate_eval_order field is provided for finer control of coordinate resolution (particularly when using the grid distribution). iterations controls how many individual placements should occur if the scatter_chance check succeeds. The scatter_chance check happens once, so either all placements will run or none will. Succeeds if At least one feature placement succeeds. Fails if all feature placements fail.


## Scatter Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description-item-type) item |  |  | 
| distribution | *not set* | Object | Parameters controlling the scatter of the feature. Object of type ScatterParams This item requires a format version of at least undefined. |  | 
| format_version | *not set* | String |  |  | 
| project_input_to_floor | *not set* | Boolean true/false | If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified. |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:scatter_feature": {
  "format_version": "1.21.10",
  "minecraft:scatter_feature": {
    "description": {
      "identifier": "example:scatter_flowers_feature"
    },
    "places_feature": "example:flower_feature",
    "distribution": {
      "iterations": 10,
      "scatter_chance": 50,
      "x": {
        "distribution": "uniform",
        "extent": [
          0,
          15
        ]
      },
      "y": 64,
      "z": {
        "distribution": "uniform",
        "extent": [
          0,
          15
        ]
      }
    }
  }
}
```
