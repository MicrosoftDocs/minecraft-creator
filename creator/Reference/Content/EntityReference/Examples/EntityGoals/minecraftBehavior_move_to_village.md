---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_village"
description: "Describes the minecraft:behavior.move_to_village ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_village

Allows the mob to move into a random location within a village.


## Move To Village Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_range | 0 | Integer number | The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 

## Samples
