---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - minecraft:random_ticking
description: "A reference document detailing the 'random_ticking' block trigger"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:random_ticking

`minecraft:random_ticking`  triggers the specified event randomly based on the random tick speed game rule. The random tick speed determines how often blocks are updated.

>[!IMPORTANT]
> `minecraft:random_ticking` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.

## Default Parameter

|Default Value|Type | Description |
|:----|:----|:----|
|on_tick| trigger | The event that will be triggered on random ticks. |

## Triggers

`minecraft:random_ticking` can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition| 1| String|  A condition using Molang queries that results to true/false. If true, the event will be triggered. If false, the event will not be triggered. |
|event| set_block_state| String|  The event that will be triggered. |
|target| self| String| The target of the event executed by the block. |

## Example

```json
"minecraft:random_ticking":{
    "condition": 1,
    "event": "minecraft:redstone_signal", //custom
    "range": [5,10],
    "target": "self"
}
```
