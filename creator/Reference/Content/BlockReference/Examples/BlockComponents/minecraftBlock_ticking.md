---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:ticking
ms.prod: gaming
---

# Block Documentation - minecraft:ticking

`minecraft:ticking` is a component controlled by a `JSON object` that triggers the specified event, either once, or at a regular interval equal to a number of ticks randomly chosen from the range provided.

>[!IMPORTANT]
> `minecraft:random_ticking` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Extra Parameters

`minecraft:ticking` can use the following parameters that are fired on-tick.

### Trigger

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition| 1| String| A condition using Molang queries that results in true or false. If true on the scheduled tick, the event will be triggered. If false on the scheduled tick, the event will not be triggered. |
|event| set_block_property| String|  The event that will be triggered. |
|range| [10, 10]| Array|  The Range between which the component will trigger his event. |
|target| self| String| The target of the event executed by the block. |
|looping| true| Boolean| Does the event loop? If false, the event will only be triggered once, after a delay equal to a number of ticks randomly chosen from the range. If true, the event will loop, and each interval between events will be equal to a number of ticks randomly chosen from the range. |

## Example

```json
"minecraft:ticking":{
    "condition": 1,
    "event": "minecraft:redstone_signal", //custom
    "range": [0,10],
    "target": "self",
    "looping": true
}
```
