---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:trade_table
description: "A reference document detailing the 'trade_table' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:trade_table

`minecraft:trade_table` defines the entity's ability to trade with players.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| convert_trades_economy| False| Boolean| Determines when the entity transforms, if the trades should be converted when the new entity has a economy_trade_table. When the trades are converted, the entity will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |
| display_name| *not set*| String| Name to be displayed while trading with this entity. |
| new_screen| False| Boolean| Used to determine if trading with entity opens the new trade screen. |
| persist_trades| False| Boolean| Determines if the trades should persist when the entity transforms. This makes it so that the next time the entity is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. |
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

### farmer villager

```json
"minecraft:trade_table": {
          "display_name": "entity.villager.farmer",
          "table": "trading/farmer_trades.json",
          "convert_trades_economy": true
        }
```

## Vanilla entities using `minecraft:trade_table`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
