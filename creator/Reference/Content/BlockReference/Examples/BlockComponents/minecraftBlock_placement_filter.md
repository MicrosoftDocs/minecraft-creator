---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:placement_filter
ms.prod: gaming
---

# Block Documentation - minecraft:placement_filter

`minecraft:placement_filter` is a component controlled by a `JSON object` that sets rules for under what conditions the block can be placed or survive.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Conditions

`minecraft:placement_filter` can use the following conditions. Limited to 64 conditions.

> [!NOTE]
> `allowed_faces` and `block_filter` will need to be placed in the "conditions":[] array in order to work properly.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|allowed_faces|*not set* | Array| List of any of the following strings: up, down, north, south, east, west, side, all. Limited to 6 faces. |
|block_filter|*not set* |Array| List of blocks (can use tags to specify them) that this block can be placed against in the allowed_faces direction. Limited to 64 blocks. |

## Example

```json
"minecraft:placement_filter":{
    "conditions": [
    {
        "allowed_faces": ["up", "down", "side"],
        "block_filter": ["grass", "dirt"]
    }
    ]
}
```
