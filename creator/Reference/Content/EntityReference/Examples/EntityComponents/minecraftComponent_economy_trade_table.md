---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:economy_trade_table
ms.prod: gaming
---

# Entity Documentation - minecraft:economy_trade_table

`minecraft:economy_trade_table` defines this entity's ability to trade with players.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| convert_trades_economy| False| Boolean| Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |
| cured_discount| [-5, -20]| Range [a, b]| How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount) |
| display_name| *not set*| String| Name to be displayed while trading with this entity |
| hero_demand_discount| -4| Integer| Used in legacy prices to determine how much should Demand be modified by when the player has the `Hero of the Village` mob effect |
| max_cured_discount| [-25, -63]| Range [a, b]| The max the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount) |
| max_nearby_cured_discount| -200| Integer| The max the discount can be modified by when the player has cured a nearby Zombie Villager |
| nearby_cured_discount| -25| Integer| How much should the discount be modified by when the player has cured a nearby Zombie Villager |
| new_screen| False| Boolean| Used to determine if trading with entity opens the new trade screen |
| persist_trades| False| Boolean| Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. |
| show_trade_screen| True| Boolean| Show an in game trade screen when interacting with the mob. |
| table| *not set*| String| File path relative to the resource pack root for this entity's trades |
| use_legacy_price_formula| False| Boolean| Determines whether the legacy formula is used to determines the trade prices. |

## Example

```json
"minecraft:economy_trade_table":{
    "convert_trades_economy": false,
    "cured_discount": [-5, -20],
    "display_name": "Got something that might interest you",
    "hero_demand_discount": -4,
    "max_cured_discount": [-25, -63],
    "max_nearby_cured_discount": -200,
    "nearby_cured_discount": -25,
    "new_screen": false,
    "persist_trades": false,
    "show_trade_screen": true,
    "table": "trading/economy_trades/farmer_trades.json",
    "use_legacy_price_formula": false
}
```

## Vanilla entities examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="67-71":::

## Vanilla entities using `minecraft:economy_trade_table`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
