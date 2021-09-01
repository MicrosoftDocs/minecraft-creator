---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:on_interact
ms.prod: gaming
---

# Block Documentation - minecraft:on_interact

`minecraft:on_interact` is an Event Trigger for when an actor interacts with a block.

## Parameters

`minecraft:on_interact` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String|  The condition of event to be executed on the block. |
|event|*not set* | String|  The event executed on the block. |
| target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:on_interact":{
    "condition": "query.block_property(custom:block_light) == true", //custom condition
    "event" : "light_off", //custom event
    "target": "self"
}
```
