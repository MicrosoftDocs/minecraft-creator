---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.stroll_towards_village
ms.prod: gaming
---

# vminecraft:behavior.stroll_towards_village

`minecraft:behavior.stroll_towards_village` allows an entity to navigate and search for a nearby village.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the goal again. |
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_range| 0| Integer| The distance in blocks to search for points inside villages. If <= 0, find the closest village regardless of distance. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
|start_chance| 0.1| Decimal| This is the chance that the mob will start this goal, from 0 to 1. |

## Example

```json
"minecraft:behavior.stroll_towards_village":{
    "priority": 4,
    "speed_multiplier": 1.0,
    "goal_radius": 4.0,
    "cooldown_time": 10.0,
    "search_range": 64,
    "start_chance": 0.02
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="417-424":::

## Vanilla entities using `minecraft:behavior.stroll_towards_village`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
