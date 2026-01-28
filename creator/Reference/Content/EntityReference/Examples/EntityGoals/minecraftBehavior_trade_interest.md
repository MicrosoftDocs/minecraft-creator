---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.trade_interest"
description: "Describes the minecraft:behavior.trade_interest ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.trade_interest

Allows the mob to look at a player that is holding a tradable item.


## Trade Interest Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| carried_item_switch_time | 2 | Decimal number | The max time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade |  | 
| cooldown | 2 | Decimal number | The time in seconds before the trader can use this goal again |  | 
| interest_time | 45 | Decimal number | The max time in seconds that the trader will be interested with showing its trade items |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| remove_item_time | 1 | Decimal number | The max time in seconds that the trader will wait when you no longer have items to trade |  | 
| within_radius | 0 | Decimal number | Distance in blocks this mob can be interested by a player holding an item they like |  | 

## Samples
