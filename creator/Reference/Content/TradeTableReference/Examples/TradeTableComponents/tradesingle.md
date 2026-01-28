---
author: mammerla
ms.author: mikeam
title: "Trade Tables Documentation - minecraft:tradesingle"
description: "Describes the minecraft:tradesingle trade table component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Trade Tables Documentation - minecraft:tradesingle

Defines a single trade offered by a villager or wandering trader.


## Trade Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| gives | *not set* | Array of [Gives](#trade-item) items | Array of items the villager gives to the player in exchange. Usually 1 item. |  | 
| max_uses | 12 | Integer number | Maximum number of times this trade can be used before it becomes locked. Trade refreshes when villager restocks at workstation. |  | 
| reward_exp | true | Boolean true/false | Whether the player receives experience orbs when completing this trade. |  | 
| trader_exp | 1 | Integer number | Amount of experience the villager gains when this trade is used. Contributes to villager leveling up. |  | 
| wants | *not set* | Array of [Wants](#trade-item) items | Array of items the villager wants to receive from the player in exchange. Usually 1-2 items. |  | 

## Trade Item
Defines an item used in a trade, either as input (wants) or output (gives).


#### Trade Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| __DEP_fltrs | *not set* | Object | __DEP_fltrs |  | 
| __DEP_fnctns | *not set* | Object | __DEP_fnctns |  | 
| filters | *not set* | Object | Optional filters that must pass for this item to be included in the trade. |  | 
| item | *not set* | String | The item identifier, e.g., 'minecraft:emerald' or 'minecraft:coal'. Can include data value suffix like 'minecraft:coal:0'. |  | 
| price_multiplier | 0.05 | Decimal number | Multiplier applied to price increases when supply/demand changes. Higher values mean prices fluctuate more. Typical value is 0.05. |  | 
| quantity | 1 | Integer number | Number of this item involved in the trade. Can be a fixed number or an object with min/max for random quantity. |  | 
| quantity (Alternate 1) | *not set* | [Quantity](#trade-item-quantity) item |  |  | 
| choice | *not set* | Array of objects | Deprecated - no longer in use. Alternative items that can be traded. This property was deprecated and removed in newer versions of trade tables. This property no longer works after format versions of at least 1.19.0. The choice property was available in versions 1.16 through 1.18 but has been removed. |  | 
| functions | *not set* | Array of objects | Deprecated - no longer in use. Array of functions to apply to the trade item, such as enchantments. This property was deprecated and removed in newer versions of trade tables. This property no longer works after format versions of at least 1.19.0. The functions property was available in versions 1.16 through 1.18 but has been removed. Use standard item properties instead. |  | 

## Trade Item Quantity
Defines a random quantity range for a trade item.


#### Trade Item Quantity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 1 | Integer number | Maximum number of items for this trade. |  | 
| min | 1 | Integer number | Minimum number of items for this trade. |  | 