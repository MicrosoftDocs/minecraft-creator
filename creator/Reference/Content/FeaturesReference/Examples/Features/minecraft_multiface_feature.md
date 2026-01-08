---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:multiface_feature"
description: "Describes the minecraft:multiface_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:multiface_feature

Places multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be applied to them based on the list in the can_place_on field. If no can_replace_on field is specified, the place_block block can be placed on any existing block. This feature will also try to spread the place_block block around the location the feature is placed. Succeeds if: At least one block is successfully placed. Fails if ll block placements fail.


## Multiface Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_place_on | *not set* | Array of strings |  |  | 
| can_place_on_ceiling | *not set* | Boolean true/false | Can this feature be placed on the ceiling (bottom face of a block)? |  | 
| can_place_on_floor | *not set* | Boolean true/false | Can this feature be placed on the ground (top face of a block)? |  | 
| can_place_on_wall | *not set* | Boolean true/false | Can this feature be placed on the wall (side faces of a block)? |  | 
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| search_range | *not set* | Integer number | How far, in blocks, this feature can search for a valid position to place. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:multiface_feature": {
  "format_version": "1.13.0",
  "minecraft:multiface_feature": {
    "description": {
      "identifier": "example:blue_vines_feature"
    },
    "places_block": "example:blue_vine",
    "search_range": 64,
    "can_place_on_floor": true,
    "can_place_on_ceiling": true,
    "can_place_on_wall": true,
    "chance_of_spreading": 0.5,
    "can_place_on": [
      "minecraft:stone"
    ]
  }
}
```
