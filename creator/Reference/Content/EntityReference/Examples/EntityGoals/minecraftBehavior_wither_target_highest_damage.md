---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.wither_target_highest_damage"
description: "Describes the behavior.wither_target_highest_damage AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.wither_target_highest_damage

Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.


## Wither Target Highest Damage Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entity_types | *not set* | Array of [Entity Types](#entity-types-item-type) items | List of entity types the wither takes into account to find who dealt the most damage to it |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wither: `1` | 

## Entity Types item type
List of entity types the wither takes into account to find who dealt the most damage to it.


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

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
{
  "priority": 1
}
```
