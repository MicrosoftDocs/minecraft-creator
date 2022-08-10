---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.trade_interest
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.trade_interest

`minecraft:behavior.trade_interest` allows an entity to focus on a player that will initiate a trade.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|carried_item_switch_time| 2.0| Decimal| The max time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade. |
|cooldown | 2.0| Decimal| The time in seconds before the trader can use this goal again. |
|interest_time | 45.0| Decimal|  The max time in seconds that the trader will be interested with showing its trade items. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|remove_item_time | 1.0| Decimal| The max time in seconds that the trader will wait when you no longer have items to trade. |
|within_radius| 0.0| Decimal| Distance in blocks this mob can be interested by a player holding an item they like. |

## Example

```json
"minecraft:behavior.trade_interest":{
    "priority": 1,
    "carried_item_switch_time": 3.0,
    "cooldown": 5.0,
    "interest_time": 30.0,
    "remove_item_time": 1.0,
    "within_radius": 8
}
```

## Vanilla entities examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="155-162":::

## Vanilla entities using `minecraft:behavior.trade_interest`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
