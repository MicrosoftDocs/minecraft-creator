---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.hurt_by_target"
description: "Describes the minecraft:behavior.hurt_by_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.hurt_by_target

Allows the mob to target another mob that hurts them.


## Hurt By Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| alert_same_type | false | Boolean true/false | If true, nearby mobs of the same type will be alerted about the damage |  | 
| entity_types | *not set* | Array of [Entity Types](#entity-types) items | List of entity types that this mob can target when hurt by them | Bogged: `[{"filters":{"operator":"!=","test":"is_family","subject":"other","value":"breeze"}}]`, Breeze: `[{"filters":{"all_of":[{"operator":"!=","test":"is_family","subject":"other","value":"skeleton"},{"operator":"!=","test":"is_family","subject":"other","value":"stray"},{"operator":"!=","test":"is_family","subject":"other","value":"zombie"},{"operator":"!=","test":"is_family","subject":"other","value":"husk"},{"operator":"!=","test":"is_family","subject":"other","value":"spider"},{"operator":"!=","test":"is_family","subject":"other","value":"cavespider"},{"operator":"!=","test":"is_family","subject":"other","value":"slime"}]}}]` | 
| entity_types (as Object) | *not set* | Object |  |  | 
| hurt_owner | false | Boolean true/false | If true, the mob will hurt its owner and other mobs with the same owner as itself |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

### Entity Types
List of entity types that this mob can target when hurt by them.


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

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.hurt_by_target": {
  "entity_types": [
    {
      "filters": {
        "operator": "!=",
        "test": "is_family",
        "subject": "other",
        "value": "breeze"
      }
    }
  ],
  "priority": 1
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.hurt_by_target": {
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "skeleton"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "stray"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "zombie"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "husk"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "spider"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "cavespider"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "slime"
          }
        ]
      }
    }
  ],
  "priority": 4
}
```
