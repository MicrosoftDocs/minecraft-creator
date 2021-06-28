---
author: v-josjones
ms.author: v-josjones
title: minecraft:on_fall_on
ms.prod: gaming
---

# minecraft:on_fall_on

`minecraft:on_fall_on` is an Event Trigger for when an actor falls and lands on the block.

## Parameters

`minecraft:on_fall_on` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String|  The condition of event to be executed on the block. |
|event|*not set* | String|  The event executed on the block. |
|min_fall_distance| 0.0| Decimal|  The minimum distance in blocks that an actor needs to fall to trigger this event. |
| target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:on_fall_on":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
