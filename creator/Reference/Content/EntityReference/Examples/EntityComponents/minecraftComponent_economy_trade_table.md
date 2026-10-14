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


## Entity Economy Trade Table Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| convert_trades_economy | false | Boolean true/false | Whether legacy trade data is converted into economy trade data. | 
| cured_discount | {"max":-20,"min":-25} | [Cured Discount](#block-intrange) item | Range of cured villager discounts applied to trade prices. | 
| display_name |  | String | The entity localization key used for the trading UI display name. | 
| hero_demand_discount | -4 | Integer number | Additional demand discount applied while the player has Hero of the Village. | 
| max_cured_discount | {"max":-20,"min":-25} | [Max Cured Discount](#block-intrange) item | Maximum allowed range for cured villager discounts. | 
| max_nearby_cured_discount | -200 | Integer number | Most negative nearby cured villager discount allowed by legacy pricing. | 
| nearby_cured_discount | -20 | Integer number | Nearby cured villager discount step applied by legacy pricing. | 
| new_screen | false | Boolean true/false | Whether this trader uses the newer trade screen implementation. | 
| persist_trades | false | Boolean true/false | Whether generated offers are persisted with the actor save data. | 
| show_trade_screen | true | Boolean true/false | Whether interacting with this trader opens the trade screen. | 
| table |  | String | Path to the trade table JSON that defines available offers. | 
| use_legacy_price_formula | false | Boolean true/false | Whether legacy price calculations are used instead of the newer pricing formula. | 

### Block IntRange

#### Block IntRange Properties

**JSON path:** `cured_discount`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples
