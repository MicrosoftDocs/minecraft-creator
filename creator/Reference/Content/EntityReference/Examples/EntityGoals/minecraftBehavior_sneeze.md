---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.sneeze"
description: "Describes the minecraft:behavior.sneeze ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.sneeze

Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.


## Sneeze Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again |  | 
| drop_item_chance | 1 | Decimal number | The probability that the mob will drop an item when it sneezes. |  | 
| entity_types | *not set* | Array of [Entity Types](#entity-types) items | List of entity types this mob will startle (cause to jump) when it sneezes. |  | 
| loot_table | *not set* | String | Loot table to select dropped items from. |  | 
| prepare_sound | *not set* | String | Sound to play when the sneeze is about to happen. |  | 
| prepare_time | 1 | Decimal number | The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing). |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| probability | 0.02 | Decimal number | The probability of sneezing. A value of 1.00 is 100% |  | 
| sound | *not set* | String | Sound to play when the sneeze occurs. |  | 
| within_radius | 0 | Decimal number | Distance in blocks that mobs will be startled. |  | 

## Entity Types
List of entity types this mob will startle (cause to jump) when it sneezes.


#### Entity Types Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again |  | 
| filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice |  | 
| must_see | false | Boolean true/false | If true, the mob has to be visible to be a valid choice |  | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |  | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. |  | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the running speed. A value of 1.0 means the speed is unchanged |  | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |  | 

## Samples
