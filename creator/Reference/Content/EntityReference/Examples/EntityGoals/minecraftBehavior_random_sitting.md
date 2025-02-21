---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_sitting"
description: "Describes the minecraft:behavior.random_sitting ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_sitting

Allows the mob to randomly sit for a duration.


## Random Sitting Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again |  | 
| min_sit_time | 10 | Decimal number | The minimum amount of time in seconds before the mob can stand back up |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| start_chance | 0.1 | Decimal number | This is the chance that the mob will start this goal, from 0 to 1 |  | 
| stop_chance | 0.3 | Decimal number | This is the chance that the mob will stop this goal, from 0 to 1 |  | 