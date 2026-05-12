---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.wither_target_highest_damage"
description: "Describes the minecraft:behavior.wither_target_highest_damage ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.wither_target_highest_damage

Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Wither (minecraft:wither)
> 

## Entity Wither Target Highest Damage Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| entity_types | [] | Array of [Entity Types](#entity-types) items | List of entity types the wither takes into account to find who dealt the most damage to it |  | 
| entity_types (Entity Types) | *not set* | [Entity Types (Entity Types)](#entity-types-entity-types) item |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wither: `1` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity Types
List of entity types the wither takes into account to find who dealt the most damage to it.


#### Entity Types Properties

**JSON path:** `entity_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again | 
| filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice | 
| must_see | false | Boolean true/false | If true, the mob has to be visible to be a valid choice | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the running speed. A value of 1.0 means the speed is unchanged | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged | 

### Entity Types (Entity Types)

#### Entity Types Properties

**JSON path:** `entity_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| check_if_outnumbered | false | Boolean true/false | If true, the mob will check if its outnumbered | 
| cooldown | 0 | Integer number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that make this entry in the list valid | 
| filters (Alternate 1) | *not set* | Object |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice | 
| max_flee | 10 | Decimal number | Maximum distance this mob can be from the target to stop fleeing | 
| max_height | -1 | Decimal number | Maximum height this mob can be away to be a valid choice | 
| must_see | *not set* | Boolean true/false | If true, the mob has to be visible to be a valid choice | 
| must_see_forget_duration | 3 | Integer number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more | 
| priority | 0 | Integer number | Priority for this mob type | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the sprinting speed. A value of 1.0 means the speed is unchanged | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged | 

#### Filters

##### Filters Properties

**JSON path:** `entity_types > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
"minecraft:behavior.wither_target_highest_damage": {
  "priority": 1
}
```
