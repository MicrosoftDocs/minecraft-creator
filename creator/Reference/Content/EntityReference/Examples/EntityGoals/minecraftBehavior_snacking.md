---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.snacking"
description: "Describes the minecraft:behavior.snacking ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.snacking

Allows the mob to take a load off and snack on food that it found nearby.


## Snacking Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| items | *not set* | Array of strings | Items that we are interested in snacking on |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| snacking_cooldown | 7.5 | Decimal number | The cooldown time in seconds before the mob is able to snack again |  | 
| snacking_cooldown_min | 0.5 | Decimal number | The minimum time in seconds before the mob is able to snack again |  | 
| snacking_stop_chance | 0.0017 | Decimal number | This is the chance that the mob will stop snacking, from 0 to 1 |  | 