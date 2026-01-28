---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drink_milk"
description: "Describes the minecraft:behavior.drink_milk ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.drink_milk

Allows the mob to drink milk based on specified environment conditions.


## Drink Milk Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_seconds | 5 | Decimal number | Time (in seconds) that the goal is on cooldown before it can be used again. |  | 
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples
