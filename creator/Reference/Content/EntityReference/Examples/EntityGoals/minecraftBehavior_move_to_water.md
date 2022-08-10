---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_to_water
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_to_water

`minecraft:behavior.move_to_water` allows an entity to move to water when on land.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_count| 10| Integer| The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |
|search_height| 1| Integer| Height in blocks the mob will look for water to move towards. |
|search_range| 0| Integer| The distance in blocks it will look for water to move towards. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.move_to_water":{
    "priority": 2,
    "search_range": 25,
    "search_height": 5,
    "goal_radius": 0.75,
    "search_count": 10
}
```

## Vanilla entities examples

### dolphin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/dolphin.json" range="284-288":::

## Vanilla entities using `minecraft:behavior.move_to_water`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
