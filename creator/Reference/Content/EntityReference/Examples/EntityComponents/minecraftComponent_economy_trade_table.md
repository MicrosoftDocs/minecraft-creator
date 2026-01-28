---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:economy_trade_table"
description: "Describes the minecraft:economy_trade_table entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:economy_trade_table

Defines this entity's ability to trade with players.


## Economy Trade Table Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| convert_trades_economy | false | Boolean true/false | Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |  | 
| cured_discount | *not set* | Range of integers | How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (When use_legacy_price_formula is true this is the low-tier trade discount and high-tier trade discount, otherwise it is the minor positive gossip and major positive gossip.) |  | 
| display_name | *not set* | String | Name to be displayed while trading with this entity |  | 
| hero_demand_discount | -4 | Integer number | Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect |  | 
| max_cured_discount | *not set* | Range of integers | The max the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (When use_legacy_price_formula is true this is the low-tier trade discount and high-tier trade discount, otherwise it is the minor positive gossip and major positive gossip.) |  | 
| max_nearby_cured_discount | -200 | Integer number | The max the discount can be modified by when the player has cured a nearby Zombie Villager. Only used when use_legacy_price_formula is true, otherwise max_cured_discount (low) is used. |  | 
| nearby_cured_discount | -20 | Integer number | How much should the discount be modified by when the player has cured a nearby Zombie Villager |  | 
| new_screen | false | Boolean true/false | Used to determine if trading with entity opens the new trade screen |  | 
| persist_trades | false | Boolean true/false | Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. |  | 
| show_trade_screen | true | Boolean true/false | Show an in game trade screen when interacting with the mob. |  | 
| table | *not set* | String | File path relative to the resource pack root for this entity's trades |  | 
| use_legacy_price_formula | false | Boolean true/false | Determines whether the legacy formula is used to determines the trade prices. |  | 

## Samples
