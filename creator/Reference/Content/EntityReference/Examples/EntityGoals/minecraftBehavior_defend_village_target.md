---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.defend_village_target"
description: "Describes the minecraft:behavior.defend_village_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.defend_village_target

Allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village this goal will cause the entity to attack the player regardless of filter conditions.

> [!Note]
> This behavior is typically used with the minecraft:dweller component which defines the entity's role in a village. See iron_golem.json for a complete example.


## Entity Defend Village Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_chance | 0.05000000074505806 | Decimal number | The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%. Value must be <= 1. |  | 
| attack_owner | false | Boolean true/false | If true, this entity can attack its owner. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| entity_types | [] | Array of objects | Filters which types of targets are valid for this entity. | Iron Golem: `[{"filters":{"AND":[{"OR":[{"test":"is_family","subject":1,"operator":0,"value":"mob"},{"test":"is_family","subject":1,"operator":0,"value":"player"}]}]}}]` | 
| entity_types (Entity Types) | *not set* | [Entity Types (Entity Types)](#entity-types-entity-types) item |  |  | 
| must_reach | false | Boolean true/false | If true, this entity requires a path to the target. | Iron Golem: `true` | 
| must_see | false | Boolean true/false | Determines if target-validity requires this entity to be in range only, or both in range and in sight. |  | 
| must_see_forget_duration | 3 | Decimal number | Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true. |  | 
| persist_time | 0 | Decimal number | Time (in seconds) this entity can continue attacking the target after the target is no longer valid. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `1` | 
| within_radius | 0 | Decimal number | Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range". |  | 

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
"minecraft:behavior.defend_village_target": {
  "must_reach": true,
  "entity_types": [
    {
      "filters": {
        "AND": [
          {
            "OR": [
              {
                "test": "is_family",
                "subject": 1,
                "operator": 0,
                "value": "mob"
              },
              {
                "test": "is_family",
                "subject": 1,
                "operator": 0,
                "value": "player"
              }
            ]
          }
        ]
      }
    }
  ],
  "priority": 1
}
```
