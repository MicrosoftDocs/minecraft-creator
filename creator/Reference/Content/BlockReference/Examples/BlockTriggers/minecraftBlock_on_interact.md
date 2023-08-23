---
author: mammerla
ms.author: mikeam
title: Block Documentation - minecraft:on_interact
ms.prod: gaming
description: "A reference document detailing the 'on_interact' block trigger"
---

# Block Documentation - minecraft:on_interact

`minecraft:on_interact` is an Event Trigger for when an entity interacts with a block.

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
    "condition": "query.block_state(custom:block_light) == true", //custom condition
    "event" : "light_off", //custom event
    "target": "self"
}
```
