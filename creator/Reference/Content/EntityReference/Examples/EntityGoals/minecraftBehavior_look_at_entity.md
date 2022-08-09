---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.look_at_entity
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.look_at_entity

`minecraft:behavior.look_at_entity` allows an entity to look at a specific entity by rotating the head bone pose within a set limit.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|angle_of_view_horizontal| 360| Integer| TThe angle in degrees that the mob can see in the X-axis (left-right).|ght).|
|angle_of_view_vertical| 360| Integer| The angle in degrees that the mob can see in the Y-axis (up-down). |
|filters|*not set* | Minecraft Filter|  Filter to determine the conditions for this mob to look at the entity. |
|look_distance| 8.0| Decimal| The distance in blocks from which the entity will look at. |
|look_time| [2, 4]| Range [a, b]| Time range to look at the entity. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|probability| 0.02|  Decimal| The probability of looking at the entity. A value of 1.00 is 100%. |

## Example

```json
"minecraft:behavior.look_at_entity":{
    "priority": 2,
    "angle_of_view_horizontal":90,
    "angle_of_view_vertical":90,
    "look_distance": 16,
    "look_time": [1,5],
    "probability": 0.5,
    "filters":{
        "test": "is_family", "subject": "other", "value": "wolf"
    }
}
```

## Vanilla entities examples

### ravager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ravager.json" range="114-123":::

## Vanilla entities using `minecraft:behavior.look_at_entity`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
