---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.lay_egg
ms.prod: gaming
---

# minecraft:behavior.lay_egg

`minecraft:behavior.lay_egg` allows an entity to lay eggs

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| on_lay|*not set* | String| Event to run when this mob lays the egg. |
|search_height| 1| Integer| Height in blocks the mob will look for sand block to move towards |
|search_range| 0| Integer| The distance in blocks it will look for a sand block to move towards |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |

## Example

```json
"minecraft:behavior.lay_egg":{
    "priority": 1,
    "search_range": 32,
    "speed_multiplier": 1.0,
    "search_height": 2,
    "goal_radius": 0.5,
    "on_lay": {
        "event": "minecraft:laid_egg",
        "target": "self"
    }
}
```

## Vanilla entities examples

### turtle

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/turtle.json" range="112-122":::

## Vanilla entities using `minecraft:behavior.lay_egg`

- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
