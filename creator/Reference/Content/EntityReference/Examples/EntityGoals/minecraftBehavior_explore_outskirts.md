---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.explore_outskirts"
description: "Describes the minecraft:behavior.explore_outskirts ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.explore_outskirts

Allows the entity to first travel to a random point on the outskirts of the village, and then explore random points within a small distance.

> [!Note]
> Requires the following components in order to work properly:
> 
> * [Dweller (minecraft:dweller)](../EntityComponents/minecraftComponent_dweller.md)
> * [Navigation (minecraft:navigation)](../EntityComponents/minecraftComponent_navigation.md)
> 

## Explore Outskirts Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dist_from_boundary | [5, 0, 5] | x, y, z coordinate array | The distance from the boundary the villager must be within in to explore the outskirts. | Villager V2: `[5,0,5]` | 
| explore_dist | 5 | Decimal number | Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point. | Villager V2: `6` | 
| max_travel_time | 60 | Decimal number | This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits. | Villager V2: `60` | 
| max_wait_time | 0 | Decimal number | The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops. | Villager V2: `10` | 
| min_dist_from_target | 2.2 | Decimal number | The entity must be within this distance for it to consider it has successfully reached its target. | Villager V2: `2.5` | 
| min_perimeter | 1 | Decimal number | The minimum perimeter of the village required to run this goal. | Villager V2: `1` | 
| min_wait_time | 3 | Decimal number | The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time. | Villager V2: `3` | 
| next_xz | 5 | Integer number | A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed. | Villager V2: `5` | 
| next_y | 3 | Integer number | A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed. | Villager V2: `3` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `9` | 
| speed_multiplier | 1 | Decimal number | The multiplier for speed while using this goal. 1.0 maintains the speed. | Villager V2: `0.6` | 
| timer_ratio | 2 | Decimal number | Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs. | Villager V2: `2` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/job_specific_goals/minecraft:behavior.explore_outskirts/: 

```json
"minecraft:behavior.explore_outskirts": {}
```

At /minecraft:entity/component_groups/wander_schedule_villager/minecraft:behavior.explore_outskirts/: 

```json
"minecraft:behavior.explore_outskirts": {
  "priority": 9,
  "next_xz": 5,
  "next_y": 3,
  "min_wait_time": 3,
  "max_wait_time": 10,
  "max_travel_time": 60,
  "speed_multiplier": 0.6,
  "explore_dist": 6,
  "min_perimeter": 1,
  "min_dist_from_target": 2.5,
  "timer_ratio": 2,
  "dist_from_boundary": [
    5,
    0,
    5
  ]
}
```
