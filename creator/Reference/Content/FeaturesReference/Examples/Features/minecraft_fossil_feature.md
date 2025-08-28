---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:fossil_feature"
description: "Describes the minecraft:fossil_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:fossil_feature

Generates a skeletal structure composed of bone blocks and parametric ore blocks. Succeeds if the fossil is placed. Fails if the fossil is not placed because it overlaps with another structure or because its bounding box has too many corners occupied by air or fluid.


## Fossil Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| max_empty_corners | *not set* | Integer number |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:fossil_feature": {
  "format_version": "1.13.0",
  "minecraft:fossil_feature": {
    "description": {
      "identifier": "example:fossil_feature"
    },
    "ore_block": "minecraft:coal_ore",
    "max_empty_corners": 4
  }
}
```
