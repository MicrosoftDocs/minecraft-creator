---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.nap"
description: "Describes the minecraft:behavior.nap ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.nap

Allows mobs to occassionally stop and take a nap under certain conditions.


## Nap Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_nap_filters | *not set* | Minecraft filter | Conditions that need to be met for the entity to nap. | 
| cooldown_max | 0 | Decimal number | Maximum time in seconds the mob has to wait before using the goal again | 
| cooldown_min | 0 | Decimal number | Minimum time in seconds the mob has to wait before using the goal again | 
| mob_detect_dist | 6 | Decimal number | The block distance in x and z that will be checked for mobs that this mob detects | 
| mob_detect_height | 6 | Decimal number | The block distance in y that will be checked for mobs that this mob detects | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| wake_mob_exceptions | *not set* | Minecraft filter | Filters for mobs that will not wake this entity from napping. | 

## Samples
