---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:on_player_destroyed
ms.prod: gaming
---

# Block Documentation - minecraft:on_player_destroyed

`minecraft:on_player_destroyed` is an Event Trigger for when an actor, that is tagged as a player, destroys a block.

## Parameters

`minecraft:on_player_destroyed` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String|  The condition of event to be executed on the block. |
|event|*not set* | String|  The event executed on the block. |
| target| self| String| The target of event executed on the block. |

## Example

```json
"minecraft:on_player_destroyed":{
    "condition": "query.block_property(custom:property) == true", //custom condition
    "event" : "this_is_my_block", //custom event
    "target": "self"
}
```
