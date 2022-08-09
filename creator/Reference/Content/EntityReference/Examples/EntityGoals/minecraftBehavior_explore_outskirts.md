---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.explore_outskirts
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.explore_outskirts

`minecraft:behavior.explore_outskirts` allows the entity to first travel to a random point on the outskirts of the village, and then explore random points within a small distance. This goal requires "minecraft:dweller" and "minecraft:navigation" to execute.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| dist_from_boundary| [5, 0, 5]| Vector [a, b, c]| The distance from the boundary the villager must be within in to explore the outskirts. |
| explore_dist| 5.00| Decimal| Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point. |
| max_travel_time| 60.0| Decimal| This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits. |
| max_wait_time| 0.0| Decimal| The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops. |
| min_dist_from_target| 2.2| Decimal| The entity must be within this distance for it to consider it has successfully reached its target. |
| min_perimeter| 1.0| Decimal| The minimum perimeter of the village required to run this goal. |
| min_wait_time| 3.0| Decimal| The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time. |
| next_xz| 5| Integer| A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed. |
| next_y| 3| Integer| A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| The multiplier for speed while using this goal. 1.0 maintains the speed. |
| timer_ratio| 2.0| Decimal| Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs. |

## Example

```json
"minecraft:behavior.explore_outskirts":{
    "priority": 2,
    "explore_dist": 5.0,
    "speed_multiplier": 1.0,
    "wait_time": 0
}
```

## Vanilla entities examples

### villager_v2

> [!NOTE]
> in the **villager_v2** example shown below,`minecraft:behavior.explore_outskirts` is being used in conjunction with `minecraft:scheduler` component in order to allow villagers to wander during a set time of day.

```json
"wander_schedule_villager": {
    "minecraft:behavior.explore_outskirts": {
        "priority": 9,
        "next_xz": 5,
        "next_y": 3,
        "min_wait_time": 3.0,
        "max_wait_time": 10.0,
        "max_travel_time": 60.0,
        "speed_multiplier": 0.6,
        "explore_dist": 6.0,
        "min_perimeter": 1.0,
        "min_dist_from_target": 2.5,
        "timer_ratio": 2.0,
        "dist_from_boundary": [ 5.0, 0.0, 5.0 ]
    }
}
```

## Vanilla entities using `minecraft:behavior.explore_outskirts`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
