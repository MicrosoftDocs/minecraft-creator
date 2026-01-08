---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_lava"
description: "Describes the minecraft:behavior.move_to_lava ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_lava

> [!IMPORTANT]
> This type is now deprecated, and no longer in use in the latest versions of Minecraft.

Allows the mob to move back into lava when on land. This behavior has been replaced by minecraft:behavior.move_to_liquid.

> [!Note]
> This behavior was introduced in 1.16 but replaced by minecraft:behavior.move_to_liquid in 1.16.100 which supports any liquid type.

## Move To Lava Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_count | 10 | Integer number | The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |  | 
| search_height | 1 | Integer number | Height in blocks the mob will look for lava to move towards |  | 
| search_range | 0 | Integer number | The distance in blocks it will look for lava to move towards |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 