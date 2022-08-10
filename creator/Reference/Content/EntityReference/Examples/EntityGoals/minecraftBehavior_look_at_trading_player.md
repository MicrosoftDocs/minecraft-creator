---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.look_at_trading_player
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.look_at_trading_player

`minecraft:behavior.look_at_trading_player` allows an entity to look at the player that is currently trading with the entity.

>[!IMPORTANT]
> `minecraft:behavior.look_at_trading_player` requires the ability to trade in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|angle_of_view_horizontal| 360| Integer| TThe angle in degrees that the mob can see in the X-axis (left-right).|
|angle_of_view_vertical| 360| Integer| The angle in degrees that the mob can see in the Y-axis (up-down). |
|look_distance| 8.0| Decimal| The distance in blocks from which the entity will look at. |
|look_time| [2, 4]| Range [a, b]| Time range to look at the entity. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|probability| 0.02|  Decimal| The probability of looking at the target. A value of 1.00 is 100%. |


## Example

```json
"minecraft:behavior.look_at_trading_player":{
    "priority": 6,
    "angle_of_view_horizontal":90,
    "angle_of_view_vertical":90,
    "look_distance": 8.0,
    "look_time": [1,5],
    "probability": 0.02
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1556-1558":::

## Vanilla entities using `minecraft:behavior.look_at_trading_player`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
