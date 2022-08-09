---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.go_and_give_items_to_noteblock
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.go_and_give_items_to_noteblock

`minecraft:behavior.go_and_give_items_to_noteblock` [EXPERIMENTAL BEHAVIOR] The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| listen_time| 0.000000| Integer | Sets the time an entity should continue delivering items to a noteblock after hearing it. |
| on_item_throw| *not set* | Trigger| Event(s) to run when this mob throws items. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| reach_block_distance| 3.000000| Decimal| Sets the desired distance to be reached before throwing the items towards the block. |
| run_speed| 1.000000| Decimal| Sets the entity's speed when running toward the block. |
| throw_force| 0.200000| Decimal| Sets the throw force. |
| throw_sound| | String|Sound to play when this mob throws an item. |
| vertical_throw_mul| 1.500000| Decimal| Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction. |

## Example

```json
"minecraft:behavior.go_and_give_items_to_noteblock":{
    "priority": 2,
    "listen_time": 0.000000,
    "reach_block_distance": 10.0,
}
```