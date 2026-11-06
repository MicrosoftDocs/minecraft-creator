---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:crevasse_feature"
description: "Describes the minecraft:crevasse_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:crevasse_feature


## Crevasse Feature Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item |  | 
| max_length | *not set* | Integer number | Maximum end-to-end length of the crevasse, in blocks. | 
| max_width | *not set* | Integer number | Maximum width of the crevasse cross-section, in blocks. | 
| min_footprint | *not set* | Integer number | Minimum connected horizontal footprint required before carving begins, in blocks. | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 