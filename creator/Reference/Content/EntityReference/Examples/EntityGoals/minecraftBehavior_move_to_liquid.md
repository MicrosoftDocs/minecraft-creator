---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.move_to_liquid
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_to_liquid

`minecraft:behavior.move_to_liquid` allows the mob to move into a liquid when on land.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
| material_type| Any| String| The material type of the liquid block to find. Valid values are "Any", "Water", and "Lava". |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_count| 10| Integer| The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |
| search_height| 1| Integer| Height in blocks the mob will look for the liquid block to move towards. |
| search_range| 0| Integer| The distance in blocks it will look for the liquid block to move towards. |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.move_to_liquid":{
    "goal_radius": 0.5,
    "material_type": "Any",
    "search_count": 10,
    "search_height": 5,
    "speed_multiplier": 1.25    
}
```
