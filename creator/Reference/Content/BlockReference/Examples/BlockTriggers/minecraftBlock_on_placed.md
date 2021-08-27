---
author: v-josjones
ms.author: v-josjones
title: Block Documentation -minecraft:on_placed
ms.prod: gaming
---

# Block Documentation - minecraft:on_placed

`minecraft:on_placed` is an Event Trigger for when an actor places a block in the world.

## Parameters

`minecraft:on_placed` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String|  The condition of event to be executed on the block. |
|event|*not set* | String|  The event executed on the block. |
| target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:on_placed":{
    "condition": "query.block_property(custom:normal_facing_up) == true", //custom condition
    "event" : "the_thing_has_been_placed", //custom event
    "target": "self"
}
```
