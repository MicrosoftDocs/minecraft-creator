---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.mingle"
description: "Describes the minecraft:behavior.mingle ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.mingle

Allows an entity to go to the village bell and mingle with other entities.


## Mingle Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again |  | 
| duration | 1 | Decimal number | Amount of time in seconds that the entity will chat with another entity |  | 
| mingle_distance | 2 | Decimal number | The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities. |  | 
| mingle_partner_type | empty | Array of strings | The entity type that this entity is allowed to mingle with |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 

## Samples
