---
author: VassilAnguelov
ms.author: vassil.anguelov@skyboxlabs.com
title: Features Documentation - minecraft:multi_block_feature
description: "A reference document detailing the 'multi_block_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:multi_block_feature

``minecraft:multi_block_feature`` places a [multi-block](../../../BlockReference/Examples/traits/multi_block.md) in the world as a biome decoration feature. A multi-block must be defined with the `minecraft:multi_block` trait. The required `places_block` field supports a single block, it must be a multi-block and it must be be the first part of a multi-block i.e. the `minecraft:multi_block_part` state must have a value of 0. The optional `may_replace` field is an allowlists which specifies what blocks each part of the multi-block can replace. If this field is omitted, the multi-block parts can be placed anywhere. However, they may not replace other multi-block parts. The optional `randomize_rotation` field will randomize the multi-blocks cardinal orientation. If this field is enabled then the multi-block must have the cardinal direction state. The optional `enforce_placement_rules` field will check if each part of the multi-block may be placed on top of existing blocks. If the multi-block defines a `minecraft:placement_filter` component then each part is also checked against the blocks defined in that component.

Succeeds if: all parts of the multi-block are successfully placed in the world.

Fails if: The any block part fails to be placed or fails one of the optional checks above.

### Schema

```json
object "minecraft:multi_block_feature" : opt
{
    object "description"
    {
        string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
    }
    "places_block" // Reference to the multi-block to be placed, must be the first part of a multi-block.
    bool "enforce_placement_rules" : opt // If true, enforce the multi-blocks mayPlace checks.
    bool "randomize_rotation" : opt // If true, randomizes the block's cardinal orientation.
    array "may_replace" : opt
    {
         "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced, except other multi-blocks.
    }
}
```

### Example - Placing a horizontal log multi-block where the direction is randomized, it may replace 3 types of blocks, and it must respect any blocks in the placement filter component.

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