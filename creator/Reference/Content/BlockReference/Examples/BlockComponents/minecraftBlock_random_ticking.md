---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:random_ticking
ms.prod: gaming
---

# Block Documentation - minecraft:random_ticking

`minecraft:random_ticking` is a component controlled by a `JSON object` that describes how the component will trigger an event at an irregular interval between two values.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Triggers

`minecraft:random_ticking` can use the following parameters that are fired on-tick.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition| 1| String| The condition of event to be executed on the block. |
|event| set_block_property| String|  The type of event executed on the block. |
|range| [10, 10]| Array|  The Range between which the component will trigger his event. |
|target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:random_ticking":{
    "condition": 1,
    "event": "minecraft:redstone_signal", //custom
    "range": [10,10],
    "target": "self"
}
```
