---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swell"
description: "Describes the minecraft:behavior.swell ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swell

Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.


## Swell Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| start_distance | 10 | Decimal number | This mob starts swelling when a target is at least this many blocks away |  | 
| stop_distance | 2 | Decimal number | This mob stops swelling when a target has moved away at least this many blocks |  | 

## Samples
