---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.look_at_target
ms.prod: gaming
---

# minecraft:behavior.look_at_target

`minecraft:behavior.look_at_target` allows an entity to look at the target by rotating the head bone pose within a set limit.

> [!IMPORTANT]
> `minecraft:behavior.look_at_target` requires a target in order to work properly.
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|angle_of_view_horizontal| 360| Integer| The angle in degrees that the mob can see in the Y-axis (up-down) |
|angle_of_view_vertical| 360| Integer| The angle in degrees that the mob can see in the X-axis (left-right) |
|look_distance| 8.0| Decimal| The distance in blocks from which the entity will look at |
|look_time| [2, 4]| Range [a, b]| Time range to look at the entity |
|probability| 0.02|  Decimal| The probability of looking at the target. A value of 1.00 is 100% |

## Example

```json
"minecraft:behavior.look_at_target":{
    "priority": 2,
    "angle_of_view_horizontal":90,
    "angle_of_view_vertical":90,
    "look_distance": 16,
    "look_time": [1,5],
    "probability": 0.5
}
```

## Vanilla entities examples

### wither

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither.json" range="113-115":::

## Vanilla entities using `minecraft:behavior.look_at_target`

- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
