---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:partially_exposed_blob_feature"
description: "Describes the minecraft:partially_exposed_blob_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:partially_exposed_blob_feature

Generates a blob of the specified block with the specified dimensions. For the most part, the blob is embedded in the specified surface, however a single side is allowed to be exposed.


## Partially Exposed Blob Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| exposed_face | *not set* | String | Defines a block face that is allowed to be exposed to air and/or water. Other faces need to be embedded for blocks to be placed by this feature. Defaults to upwards face. |  | 
| format_version | *not set* | String |  |  | 
| placement_radius_around_floor | *not set* | Integer number | Defines the cubic radius of the blob. [1, 8] |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:partially_exposed_blob_feature": {
  "format_version": "1.13.0",
  "minecraft:partially_exposed_blob_feature": {
    "description": {
      "identifier": "example:underwater_magma_feature"
    },
    "places_block": "minecraft:magma",
    "placement_radius_around_floor": 1,
    "placement_probability_per_valid_position": 0.5,
    "exposed_face": "up"
  }
}
```
