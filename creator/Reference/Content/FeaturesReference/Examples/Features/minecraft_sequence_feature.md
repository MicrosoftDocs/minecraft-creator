---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:sequence_feature"
description: "Describes the minecraft:sequence_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:sequence_feature

Places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0). Succeeds if all features in the sequence are successfully placed. Fails if any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.


## Sequence Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| features | *not set* | Array of strings | List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next. |  | 
| format_version | *not set* | String |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:sequence_feature": {
  "format_version": "1.13.0",
  "minecraft:sequence_feature": {
    "description": {
      "identifier": "example:oak_tree_then_apples_feature"
    },
    "features": [
      "example:oak_tree_feature",
      "example:scatter_apples_feature"
    ]
  }
}
```
