---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:trade_table
ms.prod: gaming
---

# Entity Documentation - minecraft:trade_table

`minecraft:trade_table` defines this entity's ability to trade with players.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| convert_trades_economy| False| Boolean| Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |
| display_name| *not set*| String| Name to be displayed while trading with this entity. |
| new_screen| False| Boolean| Used to determine if trading with entity opens the new trade screen. |
| persist_trades| False| Boolean| Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. |
| table| *not set*| String| File path relative to the behavior pack root for this entity's trades. |

## Example

```json
"minecraft:trade_table":{
    "convert_trades_economy": false,
    "display_name": "What are you buying?",
    "new_screen": false,
    "persist_trades": false,
    "table":
}
```

## Vanilla entities examples

### villager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager.json" range="125-129":::

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager.json" range="140-144":::

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager.json" range="155-159":::

## Vanilla entities using `minecraft:trade_table`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)