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

Places a multi-block in the world as a biome decoration feature. A multi-block must be defined with the `minecraft:multi_block` trait. The required `places_block` field supports a single block, it must be a multi-block and it must be be the first part of a multi-block i.e. the `minecraft:multi_block_part` state must have a value of 0. The optional `may_replace` field is an allowlists which specifies what blocks each part of the multi-block can replace. If this field is omitted, the multi-block parts can be placed anywhere. However, they may not replace other multi-block parts. The optional `randomize_rotation` field will randomize the multi-blocks cardinal orientation. If this field is enabled then the multi-block must have the cardinal direction state. The optional `enforce_placement_rules` field will check if each part of the multi-block may be placed on top of existing blocks. If the multi-block defines a `minecraft:placement_filter` component then each part is also checked against the blocks defined in that component.

> [!Note]
> This item requires a format version of at least 1.26.50.


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