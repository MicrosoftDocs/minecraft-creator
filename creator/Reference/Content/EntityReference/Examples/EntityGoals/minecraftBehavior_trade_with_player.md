---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.trade_with_player"
description: "Describes the minecraft:behavior.trade_with_player ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.trade_with_player

Allows the player to trade with this mob. When the goal starts, it will stop the mob's navigation.


## Trade With Player Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. |  | 
| max_distance_from_player | 8 | Decimal number | The max distance that the mob can be from the player before exiting the goal. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples
