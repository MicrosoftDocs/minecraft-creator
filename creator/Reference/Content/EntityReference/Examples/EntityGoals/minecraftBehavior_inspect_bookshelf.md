---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.inspect_bookshelf"
description: "Describes the minecraft:behavior.inspect_bookshelf ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.inspect_bookshelf

Allows the mob to inspect bookshelves.


## Inspect Bookshelf Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_count | 10 | Integer number | The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |  | 
| search_height | 1 | Integer number | The height that the mob will search for bookshelves |  | 
| search_range | 0 | Integer number | Distance in blocks the mob will look for books to inspect |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 

## Samples
