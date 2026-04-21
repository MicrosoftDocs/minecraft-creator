---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.raid_garden"
description: "Describes the minecraft:behavior.raid_garden ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.raid_garden

Allows the mob to eat/raid crops out of farms until they are full.


## Entity Raid Garden Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| blocks | [] | Array of strings | Blocks that the mob is looking for to eat/raid | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| eat_delay | 2 | Integer number | Time in seconds between each time it eats/raids | 
| full_delay | 100 | Integer number | Amount of time in seconds before this mob wants to eat/raid again after eating its maximum | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. Value must be > 0. | 
| initial_eat_delay | 0 | Integer number | Time in seconds before starting to eat/raid once it arrives at it | 
| max_to_eat | 6 | Integer number | Maximum number of crops this entity wants to eat/raid. If set to zero or less then it doesn't have a maximum | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_height | 1 | Integer number | Height in blocks the mob will look for crops to eat Value must be > 0. | 
| search_range | 0 | Integer number | Distance in blocks the mob will look for crops to eat Value must be > 0. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
