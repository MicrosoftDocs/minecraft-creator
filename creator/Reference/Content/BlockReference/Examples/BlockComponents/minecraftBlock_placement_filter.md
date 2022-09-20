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
> `allowed_faces` and `block_filter` will need to be placed in the `"conditions":[]` array in order to work properly.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|`allowed_faces`|*not set* | Array| List of any of the following strings describing which face(s) this block can be placed on: "up", "down", "north", "south", "east", "west", "side", "all". Limited to 6 faces. |
| `block_filter`| | Array | List of blocks that this block can be placed against in the "`allowed_faces`" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below. |


## BlockDescriptor Fields

| Name| Default Value | Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| `name`| | String| The name of a block. |
| `states`| | Array| The list of Vanilla block states and their values that the block can have, expressed in key/value pairs. |
| `tags`| 1| String| A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags. |

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
