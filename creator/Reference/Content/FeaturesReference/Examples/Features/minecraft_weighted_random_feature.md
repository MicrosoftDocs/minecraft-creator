---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:weighted_random_feature"
description: "Describes the minecraft:weighted_random_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:weighted_random_feature


## Weighted Random Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| features | *not set* | Array of strings |  |  | 
| format_version | *not set* | String |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:weighted_random_feature": {
  "format_version": "1.13.0",
  "minecraft:weighted_random_feature": {
    "description": {
      "identifier": "example:select_flower_feature"
    },
    "features": [
      [
        "example:white_flower_feature",
        1
      ],
      [
        "example:red_flower_feature",
        2
      ],
      [
        "example:blue_flower_feature",
        1
      ],
      [
        "example:yellow_flower_feature",
        4
      ]
    ]
  }
}
```
