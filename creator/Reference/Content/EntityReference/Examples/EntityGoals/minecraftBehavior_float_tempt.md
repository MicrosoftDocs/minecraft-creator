---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.float_tempt"
description: "Describes the minecraft:behavior.float_tempt ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.float_tempt

Allows a mob to be tempted by a player holding a specific item. Uses point-to-point movement. Designed for mobs that are floating (e.g. use the "minecraft:navigation.float" component).


## Float Tempt Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_get_scared | false | Boolean true/false | If true, the mob can stop being tempted if the player moves too fast while close to this mob. |  | 
| can_tempt_vertically | false | Boolean true/false | If true, vertical distance to the player will be considered when tempting. |  | 
| can_tempt_while_ridden | false | Boolean true/false | If true, the mob can be tempted even if it has a passenger (i.e. if being ridden). |  | 
| items | [] | Array of strings | List of items that can tempt the mob. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| sound_interval | *not set* | Range of integers | Range of random ticks to wait between tempt sounds. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| stop_distance | 1.5 | Decimal number | The distance at which the mob will stop following the player. |  | 
| tempt_sound | *not set* | String | Sound to play while the mob is being tempted. |  | 
| within_radius | 0 | Decimal number | Distance in blocks this mob can get tempted by a player holding an item they like. |  | 