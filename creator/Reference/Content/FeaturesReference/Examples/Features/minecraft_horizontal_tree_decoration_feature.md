---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:horizontal_tree_decoration_feature"
description: "Describes the minecraft:horizontal_tree_decoration_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:horizontal_tree_decoration_feature


## Horizontal Tree Decoration Feature Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| allow_adjacent | *not set* | Boolean true/false | Whether neighbors of the same block type are allowed. Will result in blocks being placed with at least one block gap when set to false | 
| bark_side_only | *not set* | Boolean true/false | If true, will never place the block on the 'open' side of a block (imagine the block is a fallen tree trunk). | 
| description | *not set* | [Description](#description) item |  | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 