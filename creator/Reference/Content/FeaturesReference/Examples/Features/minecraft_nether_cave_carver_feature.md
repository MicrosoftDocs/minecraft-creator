---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:nether_cave_carver_feature"
description: "Describes the minecraft:nether_cave_carver_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:nether_cave_carver_feature

Carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature will also only work when placed specifically in the pass "pregeneration_pass".


## Nether Cave Carver Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| height_limit | *not set* | Integer number | The height limit where we attempt to carve. |  | 
| skip_carve_chance | *not set* | Integer number | The chance to skip doing the carve (1 / value). |  | 
| width_modifier | *not set* | Molang | How many blocks to increase the cave radius by, from the center point of the cave. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:nether_cave_carver_feature": {
  "format_version": "1.13.0",
  "minecraft:nether_cave_carver_feature": {
    "description": {
      "identifier": "example:nether_cave_carver_feature"
    },
    "fill_with": "minecraft:air",
    "width_modifier": 0
  }
}
```
