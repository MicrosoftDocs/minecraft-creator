---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_caravan"
description: "Describes the minecraft:behavior.follow_caravan ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_caravan

Allows the mob to follow mobs that are in a caravan.


## Follow Caravan Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entity_count | 1 | Integer number | Number of entities that can be in the caravan | Llama: `10` | 
| entity_types | *not set* | Array of [Entity Types](#entity-types) items | List of entity types that this mob can follow in a caravan | Llama: `{"filters":{"test":"is_family","subject":"other","value":"llama"}}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Llama: `3` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Llama: `2.1` | 

## Entity Types
List of entity types that this mob can follow in a caravan.


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

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:behavior.follow_caravan": {
  "priority": 3,
  "speed_multiplier": 2.1,
  "entity_count": 10,
  "entity_types": {
    "filters": {
      "test": "is_family",
      "subject": "other",
      "value": "llama"
    }
  }
}
```
