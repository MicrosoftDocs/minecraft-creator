---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:multi_block_feature"
description: "Describes the minecraft:multi_block_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:multi_block_feature


## Multi Block Feature Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item |  | 
| enforce_placement_rules | *not set* | Boolean true/false | If true, enforce the multi-blocks mayPlace checks. | 
| may_replace | *not set* | Array of strings |  | 
| randomize_rotation | *not set* | Boolean true/false | If true, randomizes the block's cardinal orientation. | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 