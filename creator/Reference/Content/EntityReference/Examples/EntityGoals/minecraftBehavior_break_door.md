---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.break_door"
description: "Describes the minecraft:behavior.break_door ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.break_door

Allows this mob to break doors.

> [!Note]
> Not currently used by any entities within Minecraft: Bedrock Edition. In its place, the parameter `can_break_doors` has been added to the `minecraft:navigation` component to allow entities to break down doors.


## Break Door Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 