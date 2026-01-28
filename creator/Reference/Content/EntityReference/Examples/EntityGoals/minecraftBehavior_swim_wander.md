---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swim_wander"
description: "Describes the minecraft:behavior.swim_wander ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swim_wander

Allows the entity to wander around while swimming, when not path-finding.


## Swim Wander Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval | 0.00833 | Decimal number | Percent chance to start wandering, when not path-finding. 1 = 100% |  | 
| look_ahead | 5 | Decimal number | Distance to look ahead for obstacle avoidance, while wandering. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the entity's speed when wandering. |  | 
| wander_time | 5 | Decimal number | Amount of time (in seconds) to wander after wandering behavior was successfully started. |  | 

## Samples
