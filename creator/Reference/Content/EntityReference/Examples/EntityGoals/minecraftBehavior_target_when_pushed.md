---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.target_when_pushed"
description: "Describes the minecraft:behavior.target_when_pushed ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.target_when_pushed

Allows the mob to target another mob when it is pushed by that mob.


## Entity Target When Pushed Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| entity_types | [] | Array of objects | List of entity types that can trigger this mob to begin targeting | Iron Golem: `[{"filters":{"all_of":[{"subject":"other","test":"is_family","value":"monster"},{"operator":"not","test":"is_family","subject":"other","value":"creeper"}]}}]` | 
| entity_types (Entity Types) | *not set* | [Entity Types (Entity Types)](#entity-types-entity-types) item |  |  | 
| percent_chance | 0 | Decimal number | The probability that the mob will target another mob when pushed. A value of 100 is 100% | Iron Golem: `5` | 
| priority | 0 | Integer number |  | Iron Golem: `1` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

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

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.target_when_pushed": {
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "subject": "other",
            "test": "is_family",
            "value": "monster"
          },
          {
            "operator": "not",
            "test": "is_family",
            "subject": "other",
            "value": "creeper"
          }
        ]
      }
    }
  ],
  "percent_chance": 5,
  "priority": 1
}
```
