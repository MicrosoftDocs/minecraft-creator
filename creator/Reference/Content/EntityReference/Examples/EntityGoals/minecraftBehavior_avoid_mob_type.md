---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.avoid_mob_type"
description: "Describes the minecraft:behavior.avoid_mob_type ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.avoid_mob_type

Allows the entity to run away from other entities that meet the criteria specified.

> [!Note]
> This behavior defines which entities cause this mob to flee. Use entity_types filters to specify which mobs to avoid, with optional speed multipliers for walking and sprinting away.


## Avoid Mob Type Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_mob_sound | *not set* | String | The sound event to play when the mob is avoiding another mob. |  | 
| avoid_target_xz | 16 | Integer number | The next target position the entity chooses to avoid another entity will be chosen within this XZ Distance. |  | 
| avoid_target_y | 7 | Integer number | The next target position the entity chooses to avoid another entity will be chosen within this Y Distance. |  | 
| entity_types | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to avoid. | Bogged: `[{"filters":{"test":"is_family","subject":"other","value":"wolf"},"max_dist":6,"walk_speed_multiplier":1.2,"sprint_speed_multiplier":1.2}]`, Cave Spider: `[{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"armadillo"},{"test":"enum_property","subject":"other","domain":"minecraft:armadillo_state","value":"unrolled"}]},"max_dist":6,"sprint_speed_multiplier":1.2}]`, Dolphin: `[{"filters":{"any_of":[{"test":"is_family","subject":"other","value":"guardian_elder"},{"test":"is_family","subject":"other","value":"guardian"}]},"max_dist":8,"walk_speed_multiplier":1,"sprint_speed_multiplier":1}]` | 
| ignore_visibility | false | Boolean true/false | Whether or not to ignore direct line of sight while this entity is running away from other specified entities. |  | 
| max_dist | 3 | Decimal number | Maximum distance to look for an avoid target for the entity. |  | 
| max_flee | 10 | Decimal number | How many blocks away from its avoid target the entity must be for it to stop fleeing from the avoid target. |  | 
| on_escape_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event that is triggered when escaping from a mob. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Bogged: `4`, Cave Spider: `2`, Fox: `5` | 
| probability_per_strength | 1 | Decimal number | Percent chance this entity will stop avoiding another entity based on that entity's strength, where 1.0 = 100%. | Dolphin: `0.14` | 
| remove_target | false | Boolean true/false | Determine if we should remove target when fleeing or not. |  | 
| sound_interval | *not set* | Range of integers | The range of time in seconds to randomly wait before playing the sound again. |  | 
| sprint_distance | 7 | Decimal number | How many blocks within range of its avoid target the entity must be for it to begin sprinting away from the avoid target. |  | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster. |  | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster. |  | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.avoid_mob_type": {
  "priority": 4,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "wolf"
      },
      "max_dist": 6,
      "walk_speed_multiplier": 1.2,
      "sprint_speed_multiplier": 1.2
    }
  ]
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.avoid_mob_type": {
  "priority": 2,
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "armadillo"
          },
          {
            "test": "enum_property",
            "subject": "other",
            "domain": "minecraft:armadillo_state",
            "value": "unrolled"
          }
        ]
      },
      "max_dist": 6,
      "sprint_speed_multiplier": 1.2
    }
  ]
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.avoid_mob_type": {
  "priority": 2,
  "entity_types": [
    {
      "filters": {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "guardian_elder"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "guardian"
          }
        ]
      },
      "max_dist": 8,
      "walk_speed_multiplier": 1,
      "sprint_speed_multiplier": 1
    }
  ],
  "probability_per_strength": 0.14
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.avoid_mob_type": {
  "priority": 5,
  "entity_types": [
    {
      "filters": {
        "any_of": [
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "player"
              },
              {
                "test": "trusts",
                "subject": "other",
                "operator": "!=",
                "value": true
              },
              {
                "test": "is_sneaking",
                "subject": "other",
                "operator": "!=",
                "value": true
              }
            ]
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "polarbear"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "wolf"
          }
        ]
      },
      "max_dist": 10,
      "walk_speed_multiplier": 1,
      "sprint_speed_multiplier": 1.5
    }
  ]
}
```

#### [Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json)


```json
"minecraft:behavior.avoid_mob_type": {
  "priority": 1,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 8,
      "walk_speed_multiplier": 1,
      "sprint_speed_multiplier": 1
    }
  ]
}
```
