---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.explore_outskirts"
description: "Describes the minecraft:behavior.explore_outskirts ai behavior component"
ai-usage: ai-assisted
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
| dist_from_boundary | [5, 0, 5] | x, y, z coordinate array | The distance from the boundary the villager must be within in to explore the outskirts. |  | 
| explore_dist | 5 | Decimal number | Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point. |  | 
| max_travel_time | 60 | Decimal number | This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits. |  | 
| max_wait_time | 0 | Decimal number | The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops. |  | 
| min_dist_from_target | 2.2 | Decimal number | The entity must be within this distance for it to consider it has successfully reached its target. |  | 
| min_perimeter | 1 | Decimal number | The minimum perimeter of the village required to run this goal. |  | 
| min_wait_time | 3 | Decimal number | The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time. |  | 
| next_xz | 5 | Integer number | A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed. |  | 
| next_y | 3 | Integer number | A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| speed_multiplier | 1 | Decimal number | The multiplier for speed while using this goal. 1.0 maintains the speed. |  | 
| timer_ratio | 2 | Decimal number | Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs. |  | 

## Samples
