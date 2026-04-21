---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.nearest_prioritized_attackable_target"
description: "Describes the minecraft:behavior.nearest_prioritized_attackable_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.nearest_prioritized_attackable_target

Allows the mob to check for and pursue the nearest valid target.


## Nearest Prioritized Attackable Target Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| attack_interval | 0 | Integer number | Time in seconds before selecting a target | 
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again | 
| entity_types | *not set* | Array of [Entity Types](#entity-types) items | List of entity types that this mob considers valid targets | 
| must_reach | false | Boolean true/false | If true, only entities that this mob can path to can be selected as targets | 
| must_see | false | Boolean true/false | If true, only entities in this mob's viewing range can be selected as targets | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more | 
| persist_time | 0 | Decimal number | Time in seconds for a valid target to stay targeted when it becomes and invalid target. | 
| priority | 0 | Integer number | Specifies the priority in which filtered enemy types should be attacked. Lower number means higher priority. | 
| reselect_targets | false | Boolean true/false | If true, the target will change to the current closest entity whenever a different entity is closer | 
| scan_interval | 10 | Integer number | How many ticks to wait between scanning for a target. | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player | 
| target_search_height | -1 | Decimal number | Height in blocks to search for a target mob. -1.0f means the height does not matter. | 
| within_radius | 0 | Decimal number | Distance in blocks that the target can be within to launch an attack | 

### Entity Types
List of entity types that this mob considers valid targets.


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

## Samples
