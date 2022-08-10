---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.stomp_turtle_egg
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.stomp_turtle_egg

`minecraft:behavior.stomp_turtle_egg` allows an entity to target and stomp on turtle eggs when detected.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| goal_radius|0.5| Decimal|  Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
| interval| 120| Integer|  A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_height| 1| Integer|  Height in blocks the mob will look for turtle eggs to move towards. |
| search_range| 0| Integer| The distance in blocks it will look for turtle eggs to move towards. |
| speed_multiplier| 1.0| Decimal|  Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.stomp_turtle_egg":{
    "priority": 3,
    "speed_multiplier": 2,
    "search_range": 10,
    "search_height": 1,
    "interval" : 5,
    "goal_radius": 0.75
}
```

## Vanilla entities examples

### drowned

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/drowned.json" range="404-411":::

## Vanilla entities using `minecraft:behavior.stomp_turtle_egg`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
