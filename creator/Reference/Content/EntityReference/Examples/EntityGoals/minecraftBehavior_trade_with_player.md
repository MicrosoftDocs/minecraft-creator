---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.trade_with_player
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.trade_with_player

`minecraft:behavior.trade_with_player` allows an entity to focus on a player that will initiate a trade.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.trade_with_player":{
    "priority": 1
}
```

## Vanilla entities examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="152-154":::

## Vanilla entities using `minecraft:behavior.trade_with_player`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
