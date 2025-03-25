---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.vex_random_move"
description: "Describes the minecraft:behavior.vex_random_move ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.vex_random_move

Allows the mob to move around randomly like the Vex.

> [!Note]
> No longer used for the `vex` entity. Instead, `minecraft:navigation.walk` and `minecraft:behavior.float` allow the `vex` entity to navigate.


## Vex Random Move Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 