---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.stay_near_noteblock
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.stay_near_noteblock

`minecraft:behavior.stay_near_noteblock` [EXPERIMENTAL BEHAVIOR] The entity will attempt to stay near a recently played noteblock.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| listen_time| 0 | Integer| Sets the time an entity should stay near a noteblock after hearing it. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed| 1.000000| Decimal| Sets the entity's speed when moving toward the block. |
| start_distance| 10.000000| Decimal| Sets the distance the entity needs to be away from the block to attempt to start the goal. |
| stop_distance| 2.000000| Decimal| Sets the distance from the block the entity will attempt to reach. |
