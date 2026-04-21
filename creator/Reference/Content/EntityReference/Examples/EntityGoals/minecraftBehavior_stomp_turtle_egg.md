---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stomp_turtle_egg"
description: "Describes the minecraft:behavior.stomp_turtle_egg ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stomp_turtle_egg

Allows this mob to stomp turtle eggs.


## Entity Stomp Turtle Egg Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. Value must be > 0. | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal Value must be > 0. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_count | 10 | Integer number | The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. | 
| search_height | 1 | Integer number | Height in blocks the mob will look for turtle eggs to move towards Value must be > 0. | 
| search_range | 0 | Integer number | The distance in blocks it will look for turtle eggs to move towards Value must be > 0. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 

### search_count

The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
