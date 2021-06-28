---
author: v-josjones
ms.author: v-josjones
title: minecraft:on_player_placing
ms.prod: gaming
---

# minecraft:on_player_placing

`minecraft:on_player_placing` is an Event Trigger for when an actor, that is tagged as a player, places a block in the world.

## Parameters

`minecraft:on_player_placing` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String|  The condition of event to be executed on the block. |
|event|*not set* | String|  The event executed on the block. |
| target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:on_player_placing":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
