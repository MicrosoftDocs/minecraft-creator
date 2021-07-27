---
author: v-josjones
ms.author: v-josjones
title: minecraft:placement_filter
ms.prod: gaming
---

# minecraft:placement_filter

`minecraft:placement_filter` is a component controlled by a `JSON object` that sets rules for under what conditions the block can be placed.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Conditions

`minecraft:placement_filter` can use the following conditions

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|allowed_faces|*not set* | Array| List of any of the following strings: up, down, north, south, east, west, side, all |
| block_filter|*not set* |Array| List of blocks (can use tags to specify them) that this block can be placed against in the allowed_faces direction |

## Example

```json
"minecraft:placement_filter":{
    "allowed_faces": ["up", "down", "side"],
    "block_filter": ["grass", "dirt"]
}
```
