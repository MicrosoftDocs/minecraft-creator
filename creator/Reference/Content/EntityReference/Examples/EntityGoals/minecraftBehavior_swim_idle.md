---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swim_idle"
description: "Describes the minecraft:behavior.swim_idle ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swim_idle

Allows the entity go idle, if swimming. Entity must be in water.


## Swim Idle Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| idle_time | 5 | Decimal number | Amount of time (in seconds) to stay idle. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| success_rate | 0.1 | Decimal number | Percent chance this entity will go idle, 1.0 = 100%. |  | 

## Samples
