---
author: v-josjones
ms.author: v-josjones
title: minecraft:on_step_on
ms.prod: gaming
---

# minecraft:on_step_on

`minecraft:on_step_on` is an Event Trigger for when an actor steps on the block.

## Parameters

`minecraft:on_step_on` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String|  The condition of event to be executed on the block. |
|event|*not set* | String|  The event executed on the block. |
| target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:on_step_on":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
