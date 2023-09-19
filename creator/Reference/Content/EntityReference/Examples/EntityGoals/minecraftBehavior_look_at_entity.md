---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.look_at_entity
description: "A reference document detailing the 'behavior.look_at_entity' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.look_at_entity

`minecraft:behavior.look_at_entity` compels an entity to look at a specific entity by rotating the head bone pose within a set limit.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|angle_of_view_horizontal| 360| Integer| TThe angle in degrees that the mob can see in the X-axis (left-right)|
|angle_of_view_vertical| 360| Integer| The angle in degrees that the mob can see in the Y-axis (up-down) |
|filters|*not set* | Minecraft Filter|  Filter to determine the conditions for this mob to look at the entity |
|look_distance| 8.0| Decimal| The distance in blocks from which the entity will look at |
|look_time| [2, 4]| Range [a, b]| Time range to look at the entity |
|probability| 0.02|  Decimal| The probability of looking at the entity. A value of 1.00 is 100% |

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

```json
"minecraft:behavior.look_at_entity": {
          "priority": 10,
          "look_distance": 8,
          "angle_of_view_horizontal": 45,
          "filters": {
            "test": "is_family",
            "subject": "other",
            "value": "mob"
          }
        }
```

## Vanilla entities using `minecraft:behavior.look_at_entity`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
