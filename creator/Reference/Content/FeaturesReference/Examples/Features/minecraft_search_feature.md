---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:search_feature"
description: "Describes the minecraft:search_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:search_feature

Sweeps a volume searching for a valid placement location for its referenced feature. The search_volume field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the search_axis field, layer by layer. For example, if search_axis is set to -x, blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the required_successes field. If fewer than the required successes are found, no placement will occur. Succeeds if the number of valid positions is equal to the value specified by required_successes. Fails if the number of valid positions is less than the value specified by required_successes.


## Search Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| required_successes | *not set* | Integer number | Number of valid positions the search must find in order to place the referenced feature |  | 
| search_axis"<"-x", "+x", "-y", "+y", "-z", "+z" | *not set* | String | Axis that the search will sweep along through the 'search_volume' |  | 
| search_volume | *not set* | [Search Volume](#search-volume) item | Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Search Volume

#### Search Volume Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [0..0] | *not set* | Integer number | x_min |  | 
| [0..0] (Alternate 1) | *not set* | Integer number | x_max |  | 
| [1..1] | *not set* | Integer number | y_min |  | 
| [1..1] (Alternate 1) | *not set* | Integer number | y_max |  | 
| [2..2] | *not set* | Integer number | z_min |  | 
| [2..2] (Alternate 1) | *not set* | Integer number | z_max |  | 
| max | *not set* | Array of strings | Maxium extent of the bounding volume expressed as [ x, y, z ] |  | 
| min | *not set* | Array of strings | Minimum extent of the bounding volume expressed as [ x, y, z ] |  | 

## Samples

#### [Example](example)


```json
"minecraft:search_feature": {
  "format_version": "1.13.0",
  "minecraft:search_feature": {
    "description": {
      "identifier": "example:find_valid_apples_feature"
    },
    "places_feature": "example:apple_feature",
    "search_volume": {
      "min": [
        -3,
        -3,
        -3
      ],
      "max": [
        3,
        3,
        3
      ]
    },
    "search_axis": "-y",
    "required_successes": 3
  }
}
```
