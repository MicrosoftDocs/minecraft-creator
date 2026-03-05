---
author: mammerla
ms.author: mikeam
title: "Trade Tables Documentation - minecraft:tradetier"
description: "Describes the minecraft:tradetier trade table component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Trade Tables Documentation - minecraft:tradetier

Defines a tier of trades that becomes available as a villager levels up.


## Trade Tier Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| groups | *not set* | Array of [Groups](#trade-group) items | Array of trade groups available at this tier. Each group can randomly select one or more trades to offer. | 
| total_exp_required | 0 | Integer number | The total experience points required for this tier to unlock. For novice (tier 1), this is typically 0. Higher tiers require more XP (e.g., 10, 70, 150, 250). | 
| trades | *not set* | Array of [Trades](#trade) items | Array of trades directly in this tier, without grouping. Alternative to using groups. | 

### Trade Group
A group of trades from which one or more can be randomly selected for a villager to offer.


#### Trade Group Properties

**JSON path:** `groups`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| num_to_select | 1 | Integer number | The number of trades to randomly select from this group to offer to the player. Typically 1-2. | 
| trades | *not set* | Array of [Trades](#trade) items | Array of possible trades in this group. The specified number will be randomly chosen. | 

#### Trade
Defines a single trade offered by a villager or wandering trader.


##### Trade Properties

**JSON path:** `groups > trades`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| gives | *not set* | Array of [Gives](#trade-item) items | Array of items the villager gives to the player in exchange. Usually 1 item. | 
| max_uses | 12 | Integer number | Maximum number of times this trade can be used before it becomes locked. Trade refreshes when villager restocks at workstation. | 
| reward_exp | true | Boolean true/false | Whether the player receives experience orbs when completing this trade. | 
| trader_exp | 1 | Integer number | Amount of experience the villager gains when this trade is used. Contributes to villager leveling up. | 
| wants | *not set* | Array of [Wants](#trade-item) items | Array of items the villager wants to receive from the player in exchange. Usually 1-2 items. | 

##### Trade Item
Defines an item used in a trade, either as input (wants) or output (gives).


###### Trade Item Properties

**JSON path:** `groups > trades > gives`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| __DEP_fltrs | *not set* | Object | __DEP_fltrs | 
| __DEP_fnctns | *not set* | Object | __DEP_fnctns | 
| choice | *not set* | Array of objects | Alternative items that can be traded. | 
| filters | *not set* | Object | Optional filters that must pass for this item to be included in the trade. | 
| functions | *not set* | Array of objects | Array of functions to apply to the trade item, such as enchantments. | 
| item | *not set* | String | The item identifier, e.g., 'minecraft:emerald' or 'minecraft:coal'. Can include data value suffix like 'minecraft:coal:0'. | 
| price_multiplier | 0.05 | Decimal number | Multiplier applied to price increases when supply/demand changes. Higher values mean prices fluctuate more. Typical value is 0.05. | 
| quantity | 1 | Integer number | Number of this item involved in the trade. Can be a fixed number or an object with min/max for random quantity. | 
| quantity (as Object) | *not set* | [Quantity (Trade Item Quantity)](#trade-item-quantity) item |  | 

###### Trade Item Quantity
Defines a random quantity range for a trade item.


###### Trade Item Quantity Properties

**JSON path:** `groups > trades > gives > quantity`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 1 | Integer number | Maximum number of items for this trade. | 
| min | 1 | Integer number | Minimum number of items for this trade. | 