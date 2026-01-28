---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.beg"
description: "Describes the minecraft:behavior.beg ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.beg

Allows this mob to look at and follow the player that holds food they like.


## Beg Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| items | *not set* | Array of strings | List of items that this mob likes |  | 
| look_distance | 8 | Decimal number | Distance in blocks the mob will beg from |  | 
| look_time | *not set* | Range of integers | The range of time in seconds this mob will stare at the player holding a food they like, begging for it |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples
