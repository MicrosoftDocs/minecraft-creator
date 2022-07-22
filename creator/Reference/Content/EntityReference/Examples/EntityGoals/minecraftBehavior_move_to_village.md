---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_to_village
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_to_village

`minecraft:behavior.move_to_village` allows an entity to travel to a random x,y,z coordinate in a village.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal|  Time in seconds the mob has to wait before using the goal again. |
|goal_radius| 0.5|  Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_range| 0| Integer| The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.move_to_village":{
    "priority": 6,
    "search_range": 25,
    "speed_multiplier": 1.25,
    "goal_radius": 0.5
}
```

## Vanilla entities examples

### vindicator

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/vindicator.json" range="101-105":::

## Vanilla entities using `minecraft:behavior.move_to_village`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
