---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:aggregate_feature"
description: "Describes the minecraft:aggregate_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:aggregate_feature

Places a collection of features in an arbitrary order. All features in the collection use the same input position. Features should not depend on each other, as there is no guarantee in which order the features will be placed. Succeeds if at least one feature is placed successfully. Fails if all features fail to be placed.


## Aggregate Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description-item-type) item |  |  | 
| features | *not set* | Array of strings | Collection of features to be placed one by one. No guarantee of order. All features use the same input position. |  | 
| format_version | *not set* | String |  |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:aggregate_feature": {
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
