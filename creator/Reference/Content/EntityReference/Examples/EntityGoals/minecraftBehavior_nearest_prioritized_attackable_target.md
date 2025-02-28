---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.nearest_prioritized_attackable_target"
description: "Describes the minecraft:behavior.nearest_prioritized_attackable_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.nearest_prioritized_attackable_target

Allows the mob to check for and pursue the nearest valid target.


## Nearest Prioritized Attackable Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_interval | 0 | Integer number | Time in seconds before selecting a target | Fox: `2` | 
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again |  | 
| entity_types | *not set* | Array of [Entity Types](#entity-types-item-type) items | List of entity types that this mob considers valid targets | Fox: `[{"filters":{"test":"is_family","subject":"other","value":"rabbit"},"max_dist":12,"priority":0},{"filters":{"test":"is_family","subject":"other","value":"chicken"},"max_dist":12,"priority":0},{"filters":{"test":"is_family","subject":"other","value":"cod"},"max_dist":12,"priority":1},{"filters":{"test":"is_family","subject":"other","value":"salmon"},"max_dist":12,"priority":1},{"filters":{"test":"is_family","subject":"other","value":"tropicalfish"},"max_dist":12,"priority":1},{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"baby_turtle"},{"test":"in_water","subject":"other","operator":"!=","value":true}]},"max_dist":12,"priority":0}]`, `[{"filters":{"test":"is_family","subject":"other","value":"rabbit"},"max_dist":12,"priority":1},{"filters":{"test":"is_family","subject":"other","value":"chicken"},"max_dist":12,"priority":1},{"filters":{"test":"is_family","subject":"other","value":"cod"},"max_dist":12,"priority":0},{"filters":{"test":"is_family","subject":"other","value":"salmon"},"max_dist":12,"priority":0},{"filters":{"test":"is_family","subject":"other","value":"tropicalfish"},"max_dist":12,"priority":0},{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"baby_turtle"},{"test":"in_water","subject":"other","operator":"!=","value":true}]},"max_dist":12,"priority":1}]` | 
| must_reach | false | Boolean true/false | If true, only entities that this mob can path to can be selected as targets |  | 
| must_see | false | Boolean true/false | If true, only entities in this mob's viewing range can be selected as targets |  | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |  | 
| persist_time | 0 | Decimal number | Time in seconds for a valid target to stay targeted when it becomes and invalid target. |  | 
| priority | 0 | Integer number | Specifies the priority in which filtered enemy types should be attacked. Lower number means higher priority. |  | 
| reselect_targets | false | Boolean true/false | If true, the target will change to the current closest entity whenever a different entity is closer |  | 
| scan_interval | 10 | Integer number | How many ticks to wait between scanning for a target. |  | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| target_search_height | -1 | Decimal number | Height in blocks to search for a target mob. -1.0f means the height does not matter. |  | 
| within_radius | 0 | Decimal number | Distance in blocks that the target can be within to launch an attack |  | 

## Entity Types item type
List of entity types that this mob considers valid targets.


#### Entity Types Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again |  | 
| filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice |  | 
| must_see | false | Boolean true/false | If true, the mob has to be visible to be a valid choice |  | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |  | 
| priority | *not set* | Decimal number |  |  | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. |  | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the running speed. A value of 1.0 means the speed is unchanged |  | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |  | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:fox_red/minecraft:behavior.nearest_prioritized_attackable_target/: 

```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
  "priority": 6,
  "attack_interval": 2,
  "reselect_targets": true,
  "target_search_height": 5,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "rabbit"
      },
      "max_dist": 12,
      "priority": 0
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "chicken"
      },
      "max_dist": 12,
      "priority": 0
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "cod"
      },
      "max_dist": 12,
      "priority": 1
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "salmon"
      },
      "max_dist": 12,
      "priority": 1
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "tropicalfish"
      },
      "max_dist": 12,
      "priority": 1
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "baby_turtle"
          },
          {
            "test": "in_water",
            "subject": "other",
            "operator": "!=",
            "value": true
          }
        ]
      },
      "max_dist": 12,
      "priority": 0
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:fox_arctic/minecraft:behavior.nearest_prioritized_attackable_target/: 

```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
  "priority": 6,
  "attack_interval": 2,
  "reselect_targets": true,
  "target_search_height": 5,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "rabbit"
      },
      "max_dist": 12,
      "priority": 1
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "chicken"
      },
      "max_dist": 12,
      "priority": 1
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "cod"
      },
      "max_dist": 12,
      "priority": 0
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "salmon"
      },
      "max_dist": 12,
      "priority": 0
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "tropicalfish"
      },
      "max_dist": 12,
      "priority": 0
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "baby_turtle"
          },
          {
            "test": "in_water",
            "subject": "other",
            "operator": "!=",
            "value": true
          }
        ]
      },
      "max_dist": 12,
      "priority": 1
    }
  ]
}
```

#### [Piglin Brute](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin_brute.json)


```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
  "priority": 3,
  "within_radius": 12,
  "persist_time": 2,
  "must_see": true,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 12,
      "priority": 0
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "wither"
      },
      "max_dist": 12,
      "priority": 1
    }
  ]
}
```

#### [Witch](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/witch.json)


```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
  "priority": 2,
  "entity_types": [
    {
      "filters": {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "snowgolem"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "irongolem"
          }
        ]
      },
      "priority": 1,
      "max_dist": 10
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_raider",
            "subject": "other",
            "value": true
          },
          {
            "test": "is_raider",
            "subject": "self",
            "value": true
          },
          {
            "none_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "witch"
              }
            ]
          }
        ]
      },
      "priority": 2,
      "cooldown": 10,
      "max_dist": 10
    }
  ],
  "must_reach": true
}
```
