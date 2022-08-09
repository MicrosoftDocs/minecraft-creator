---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.move_to_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_to_block

`minecraft:behavior.move_to_block` allows a mob to move towards a block.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| on_reach| |Trigger|  Event to run on block reached. |
| on_stay_completed| | Trigger| Event to run on completing a stay of stay_duration at the block. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_height| 1| Integer| The height in blocks that the mob will look for the block. |
| search_range| 0| Integer| The distance in blocks that the mob will look for the block. |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
| start_chance| 1.0| Decimal| Chance to start the behavior (applied after each random tick_interval). |
| stay_duration| 0.0| Decimal| Number of ticks needed to complete a stay at the block. |
| target_blocks| | List| Block types to move to. |
| target_offset| [0, 0, 0]| Vector [a, b, c]| Offset to add to the selected target position. |
| target_selection_method| nearest| String| Kind of block to find fitting the specification. Valid values are "random" and "nearest". |
| tick_interval| 20| Integer| Average interval in ticks to try to run this behavior. |

## Example

```json
"minecraft:behavior.move_to_block":{
    "goal_radius": 0.5,
    "search_height": 1,
    "search_range": 0,
    "speed_multiplier": 1.0
}
```
