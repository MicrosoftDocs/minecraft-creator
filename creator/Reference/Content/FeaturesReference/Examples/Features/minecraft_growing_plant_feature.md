---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:growing_plant_feature"
description: "Describes the minecraft:growing_plant_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:growing_plant_feature

Places a growing plant in the world. A growing plant is a column that is anchored either to the ceiling or the floor, based on its growth direction. The growing plant has a body and a head, where the head is the tip of the plant, and the body consists of the remaining blocks. This feature can be used to define growing plants with variable body and head blocks, e.g. Cave Vines.


## Growing Plant Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_water | *not set* | Boolean true/false | Plant blocks can be placed in water. |  | 
| body_blocks | *not set* | Array of strings |  |  | 
| description | *not set* | [Description](#description-item-type) item |  |  | 
| format_version | *not set* | String |  |  | 
| growth_direction | *not set* | String | Direction that the plant grows towards. Valid values: UP and DOWN |  | 
| head_blocks | *not set* | Array of strings |  |  | 
| height_distribution | *not set* | Array of strings |  |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:growing_plant_feature": {
  "format_version": "1.13.0",
  "minecraft:growing_plant_feature": {
    "description": {
      "identifier": "example:cave_vine_feature"
    },
    "height_distribution": [
      [
        {
          "range_min": 1,
          "range_max": 13
        },
        2
      ],
      [
        {
          "range_min": 1,
          "range_max": 2
        },
        3
      ],
      [
        {
          "range_min": 1,
          "range_max": 7
        },
        10
      ]
    ],
    "growth_direction": "DOWN",
    "age": {
      "range_min": 17,
      "range_max": 26
    },
    "body_blocks": [
      [
        "minecraft:cave_vines",
        4
      ],
      [
        "minecraft:cave_vines_body_with_berries",
        1
      ]
    ],
    "head_blocks": [
      [
        "minecraft:cave_vines",
        4
      ],
      [
        "minecraft:cave_vines_head_with_berries",
        1
      ]
    ],
    "allow_water": true
  }
}
```
