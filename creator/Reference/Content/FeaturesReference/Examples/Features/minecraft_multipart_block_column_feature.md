---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:multipart_block_column_feature"
description: "Describes the minecraft:multipart_block_column_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:multipart_block_column_feature


## Multipart Block Column Feature Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item |  | 
| direction | *not set* | String | The direction of the column. If omitted then it will default to 'UP' | 
| may_place_on | *not set* | Array of strings |  | 
| may_replace | *not set* | Array of strings |  | 
| weighted_heights | *not set* | Array of strings |  | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 