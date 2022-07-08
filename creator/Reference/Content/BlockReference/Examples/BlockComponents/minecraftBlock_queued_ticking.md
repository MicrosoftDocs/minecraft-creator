---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:queued_ticking
ms.prod: gaming
---

# Block Documentation - minecraft:queued_ticking

`minecraft:queued_ticking` triggers the specified event either once or at a regular interval equal to a number of ticks randomly chosen from the `interval_range` provided.

>[!IMPORTANT]
> `minecraft:queued_ticking` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.

## Default Parameter

|Name| Type| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
|interval_range| Array | *not set* | A range of values, specified in ticks, that will be used to decide the interval between times this event triggers. Each interval will be chosen randomly from the range, so the times between this event triggering will differ given an interval_range of two different values. If the values in the interval_range are the same, the event will always be triggered after that number of ticks. |
| looping| Boolean| true| Does the event loop? If false, the event will only be triggered once, after a delay equal to a number of ticks randomly chosen from the interval_range. If true, the event will loop, and each interval between events will be equal to a number of ticks randomly chosen from the interval_range. |
| on_tick| Trigger| *not set* | The event that will be triggered once or on an interval. | 

## Triggers

`minecraft:queued_ticking` can use the following parameters.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition| 1| String|  A condition using Molang queries that results to true/false. If true on the random tick, the event will be triggered. If false on the random tick, the event will not be triggered. |
|event| set_block_property| String|  The event that will be triggered. |
|target| self| String| The target of the event executed by the block |

## Example

```json
"minecraft:queued_ticking":{
    "condition": 1,
    "range": [5,10],
    "target": "self"
}
```
