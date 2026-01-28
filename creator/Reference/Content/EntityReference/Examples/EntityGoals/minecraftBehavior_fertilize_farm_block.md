---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.fertilize_farm_block"
description: "Describes the minecraft:behavior.fertilize_farm_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.fertilize_farm_block

Allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.


## Fertilize Farm Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 1.5 | Decimal number | Distance in blocks within the mob considers it has reached it's target position. |  | 
| max_fertilizer_usage | 1 | Integer number | The maximum number of times the mob will use fertilzer on the target block. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_cooldown_max_seconds | 8 | Decimal number | The maximum amount of time in seconds that the goal can take before searching again. The time is chosen between 0 and this number. |  | 
| search_count | 9 | Integer number | The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |  | 
| search_height | 1 | Integer number | The height in blocks the mob will search within to find a valid target position. |  | 
| search_range | 1 | Integer number | The distance in blocks the mob will search within to find a valid target position. |  | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this goal. |  | 

## Samples
