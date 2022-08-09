---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.go_and_give_items_to_owner
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.go_and_give_items_to_owner

`minecraft:behavior.go_and_give_items_to_owner` [EXPERIMENTAL BEHAVIOR] The entity will attempt to toss the items from its inventory to its owner.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| on_item_throw| | Trigger| Event(s) to run when this mob throws items. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| reach_mob_distance| 3.000000| Decimal| Sets the desired distance to be reached before giving items to owner. |
| run_speed| 1.000000| Decimal| Sets the entity's speed when running toward the owner. |
| throw_force| 0.200000| Decimal| Sets the throw force. |
| throw_sound| item_thrown| String| Sound to play when this mob throws an item. |
| vertical_throw_mul| 1.500000| Decimal| Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction. |
