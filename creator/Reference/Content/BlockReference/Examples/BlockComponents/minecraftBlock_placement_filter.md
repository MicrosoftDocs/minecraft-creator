---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:placement_filter
description: "A reference document detailing the 'placement_filter' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:placement_filter

`minecraft:placement_filter` is a `JSON object` component that sets rules for under what conditions the block can be placed or survive.

## Conditions

`minecraft:placement_filter` can use the following conditions. Limited to 64 conditions.

> [!NOTE]
> `allowed_faces` and `block_filter` will need to be placed in the `"conditions":[]` array in order to work properly.

## Default Value of the Component

This component is specified as a JSON Object, so it does not have a default value. You must provide at least ONE condition with at least one of the parameters allowed_faces or  block_filter as shown below in order to use this component. By default, custom blocks can be placed anywhere and do not have placement restrictions unless you specify them in this component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|conditions | *not set* | Array	| List of conditions where the block can be placed/survive. Limited to 64 conditions. Each condition is a JSON Object that must contain at least one (and can contain both)  of the parameters allowed_faces or  block_filter as shown below.|

## Condition Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|`allowed_faces`|*not set*| Array| List of any of the following strings describing which face(s) this block can be placed on: "up", "down", "north", "south", "east", "west", "side", "all". Limited to 6 faces. |
| `block_filter`|*not set*| Array | List of blocks that this block can be placed against in the "`allowed_faces`" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below. |

## BlockDescriptor Parameters

| Name| Default Value | Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| `name`| | String| The name of a block. |
| `states`| | Array| The list of Vanilla block states and their values that the block can have, expressed in key/value pairs. |
| `tags`| 1| String| A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags. |

## Example (using Strings for block_filter)

This example describes a block that can be placed on the top, bottom, or side faces of either a grass block, or dirt block.

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

## Example (using BlockDescriptors for block_filter)

This example describes a block that can only be placed on the top face of either a stone block, or jungle planks.

```json
"minecraft:placement_filter":{
    "conditions": [
    {
        "allowed_faces": ["up"],
        "block_filter": [
            {
                "tags": "query.any_tag('stone')"
            },
            {
                "name": "minecraft:planks",
                "states": {
                    "wood_type": "jungle"
                }
            }
        ]
    }
    ]
}
```
