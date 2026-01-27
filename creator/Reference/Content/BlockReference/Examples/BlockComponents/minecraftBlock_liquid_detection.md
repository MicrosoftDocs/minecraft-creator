---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:liquid_detection"
description: "Describes the minecraft:liquid_detection block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:liquid_detection

The definitions for how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type - if multiple are specified, the first will be used and the rest will be ignored.
Experimental toggles required: Upcoming Creator Features (in format versions before 1.21.60).

> [!Note]
> This item requires a format version of at least 1.21.60.


## Liquid Detection Properties

|Name       |Default Value |Type  |Example Values |
|:----------|:-------------|:----|:------------- |
| detection_rules | *not set* | Array of [Detection Rules](#detection-rules) items | Block Fabricator: `[{"liquid_type":"water","on_liquid_touches":"broken"}]` | 

## Detection Rules

#### Detection rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_contain_liquid | false | Boolean true/false | Whether this block can contain the liquid. For example, if the liquid type is `water`, this means the block can be waterlogged. |  | 
| liquid_type | *not set* | String | The type of liquid this detection rule is for. Currently, `water` is the only supported liquid type. If this field is omitted, `water` will be the liquid type by default. | Block Fabricator: `"water"` | 
| on_liquid_touches | *not set* | String | How the block reacts to flowing water. Must be one of the following options:<br>"blocking" - The default value for this field. The block stops the liquid from flowing.<br>"broken" - The block is destroyed completely.<br>"popped" - The block is destroyed and its item is spawned.<br>"no_reaction" - The block is unaffected; visually, the liquid will flow through the block. | Block Fabricator: `"broken"` | 
| stops_liquid_flowing_from_direction | *not set* | Array of strings | When a block contains a liquid, controls the directions in which the liquid can't flow out from the block. Also controls the directions in which a block can stop liquid flowing into it if `no_reaction` is set for the `on_liquid_touches` field. Can be a list of the following directions: "up", "down", "north", "south", "east", "west". The default is an empty list; this means that liquid can flow out of all directions by default. |  | 
| use_liquid_clipping | false | Boolean true/false | Whether this block uses the encompassing collider to visually clip the liquid. The encompassing collider is the smallest single AABB that contains all of the block's colliders. |  | 

## Samples

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:liquid_detection": {
  "detection_rules": [
    {
      "liquid_type": "water",
      "on_liquid_touches": "broken"
    }
  ]
}
```

#### [Block Leaf Pile](https://github.com/microsoft/minecraft-samples/tree/main/creator_camp/behavior_packs/creator_camp/blocks/leaf_pile.block.json)


```json
"minecraft:liquid_detection": {
  "detection_rules": [
    {
      "liquid_type": "water",
      "on_liquid_touches": "popped"
    }
  ]
}
```
