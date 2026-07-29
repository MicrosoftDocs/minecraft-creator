---
author: VassilAnguelov
ms.author: vassil.anguelov@skyboxlabs.com
title: "Feature Documentation - minecraft:multi_block_feature"
description: "Describes the minecraft:multi_block_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 07/28/2026 
---

# Feature Documentation - minecraft:multi_block_feature

Places a multi-block in the world as a biome decoration feature. A multi-block must be defined with the `minecraft:multi_block` trait. The required `places_block` field supports a single block, it must be a multi-block and it must be be the first part of a multi-block i.e. the `minecraft:multi_block_part` state must have a value of 0. The optional `may_replace` field is an allowlists which specifies what blocks each part of the multi-block can replace. If this field is omitted, the multi-block parts can be placed anywhere. However, they may not replace other multi-block parts. The optional `randomize_rotation` field will randomize the multi-blocks cardinal orientation. If this field is enabled then the multi-block must have the cardinal direction state. The optional `enforce_placement_rules` field will check if each part of the multi-block may be placed on top of existing blocks. If the multi-block defines a `minecraft:placement_filter` component then each part is also checked against the blocks defined in that component.

> [!Note]
> This item requires a format version of at least 1.26.50.


## Multi Block Feature Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | Feature requires minimum version `1.26.50` | 
| description | *not set* | [Description](#description) item |  | 
| places_block | *not set* | Array of [Places Block](#places-block) items |  | 
| enforce_placement_rules | *not set* | Boolean true/false | If true, enforce the block's canPlace check. Which can optionally come from the placement filter component. | 
| may_replace | *not set* | Array of strings | List of blocks that may be replaced by this multi-block. Other multi-blocks can never be replaced. | 
| randomize_rotation | *not set* | Boolean true/false | If true, randomizes the block's cardinal orientation. | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 

### Places Block

#### Places Block Properties

**JSON path:** `places_block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block | *not set* | Object | Reference to the multi-block to be placed. Must be the first part of a multi-block. | 

## Samples

#### Example


```json
{
  "format_version": "1.26.50",
  "minecraft:multi_block_feature": {
    "description": {
      "identifier": "example:horizontal_log_feature"
    },
    "places_block": "example:horizontal_log",
    "randomize_rotation": true,
    "enforce_placement_rules": true,
    "may_replace": [
      "minecraft:air",
      "minecraft:grass",
      "minecraft:dirt"
    ]
  }
}
```
