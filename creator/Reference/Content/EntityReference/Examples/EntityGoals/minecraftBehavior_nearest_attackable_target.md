---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.nearest_attackable_target"
description: "Describes the minecraft:behavior.nearest_attackable_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.nearest_attackable_target

Allows an entity to attack the closest target within a given subset of specific target types.


## Nearest Attackable Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_interval | *not set* | Decimal number |  | Cave Spider: `5`, `10`, Llama: `16` | 
| attack_interval_min | *not set* | Decimal number |  | Elder Guardian: `1` | 
| attack_owner | false | Boolean true/false | If true, this entity can attack its owner. |  | 
| entity_types | *not set* | Array of [Entity Types](#entity-types-item-type) items | List of entity types that this mob considers valid targets | Axolotl: `[{"filters":{"all_of":[{"test":"in_water","subject":"other","value":true},{"test":"has_component","subject":"self","operator":"!=","value":"minecraft:attack_cooldown"},{"any_of":[{"test":"is_family","subject":"other","value":"squid"},{"test":"is_family","subject":"other","value":"fish"},{"test":"is_family","subject":"other","value":"tadpole"}]}]},"max_dist":8},{"filters":{"all_of":[{"test":"in_water","subject":"other","value":true},{"any_of":[{"test":"is_family","subject":"other","value":"drowned"},{"test":"is_family","subject":"other","value":"guardian"},{"test":"is_family","subject":"other","value":"guardian_elder"}]}]},"max_dist":8}]`, Bee: `[{"filters":{"test":"is_family","subject":"other","value":"player"},"max_dist":10}]`, Blaze: `[{"filters":{"test":"is_family","subject":"other","value":"player"},"max_dist":48}]` | 
| must_reach | false | Boolean true/false | If true, this entity requires a path to the target. | Iron Golem: `true` | 
| must_see | false | Boolean true/false | Determines if target-validity requires this entity to be in range only, or both in range and in sight. | Axolotl: `true` | 
| must_see_forget_duration | 3 | Decimal number | Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true. | Axolotl: `17`, Creeper: `3`, Phantom: `0.5` | 
| persist_time | 0 | Decimal number | Time (in seconds) this entity can continue attacking the target after the target is no longer valid. | Drowned: `0.5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Axolotl: `3`, Bee: `2`, Breeze: `1` | 
| reselect_targets | false | Boolean true/false | Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each "scan_interval" or "attack_interval". | Axolotl: `true` | 
| scan_interval | 10 | Integer number | If "attack_interval" is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to "scan_interval", minimum value is 1. Values under 10 can affect performance. | Breeze: `10`, Phantom: `20` | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| target_invisible_multiplier | 0.7 | Decimal number | Multiplied with the target's armor coverage percentage to modify "max_dist" when detecting an invisible target. |  | 
| target_search_height | -1 | Decimal number | Maximum vertical target-search distance, if it's greater than the target type's "max_dist". A negative value defaults to "entity_types" greatest "max_dist". | Phantom: `80` | 
| target_sneak_visibility_multiplier | 0.8 | Decimal number | Multiplied with the target type's "max_dist" when trying to detect a sneaking target. |  | 
| within_radius | 0 | Decimal number | Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range". | Axolotl: `20`, Breeze: `24`, Cat: `16` | 

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

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 3,
  "must_see": true,
  "reselect_targets": true,
  "within_radius": 20,
  "must_see_forget_duration": 17,
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "test": "in_water",
            "subject": "other",
            "value": true
          },
          {
            "test": "has_component",
            "subject": "self",
            "operator": "!=",
            "value": "minecraft:attack_cooldown"
          },
          {
            "any_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "squid"
              },
              {
                "test": "is_family",
                "subject": "other",
                "value": "fish"
              },
              {
                "test": "is_family",
                "subject": "other",
                "value": "tadpole"
              }
            ]
          }
        ]
      },
      "max_dist": 8
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "in_water",
            "subject": "other",
            "value": true
          },
          {
            "any_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "drowned"
              },
              {
                "test": "is_family",
                "subject": "other",
                "value": "guardian"
              },
              {
                "test": "is_family",
                "subject": "other",
                "value": "guardian_elder"
              }
            ]
          }
        ]
      },
      "max_dist": 8
    }
  ]
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 2,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 10
    }
  ]
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 2,
  "must_see": true,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 48
    }
  ]
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 2,
  "must_see": true,
  "reselect_targets": true,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 16
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      },
      "max_dist": 16
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
      "max_dist": 16
    }
  ]
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 1,
  "within_radius": 24,
  "scan_interval": 10,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 24
    },
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      },
      "max_dist": 24
    }
  ],
  "must_see": true
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 1,
  "reselect_targets": true,
  "within_radius": 16,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "rabbit"
      },
      "max_dist": 8
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
      "max_dist": 8
    }
  ]
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_hostile/minecraft:behavior.nearest_attackable_target/: 

```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 2,
  "must_see": true,
  "attack_interval": 5,
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
      "max_dist": 16
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:spider_angry/minecraft:behavior.nearest_attackable_target/: 

```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 2,
  "must_see": true,
  "attack_interval": 10,
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
      "max_dist": 16
    }
  ]
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 1,
  "must_see": true,
  "must_see_forget_duration": 3,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 16
    }
  ]
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 2,
  "reselect_targets": true,
  "must_see": true,
  "within_radius": 12,
  "must_see_forget_duration": 17,
  "persist_time": 0.5,
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
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
              },
              {
                "test": "is_family",
                "subject": "other",
                "value": "axolotl"
              }
            ]
          },
          {
            "any_of": [
              {
                "test": "in_water",
                "subject": "other",
                "value": true
              },
              {
                "test": "is_daytime",
                "value": false
              }
            ]
          }
        ]
      },
      "max_dist": 20
    },
    {
      "filters": {
        "all_of": [
          {
            "any_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "villager"
              },
              {
                "test": "is_family",
                "subject": "other",
                "value": "wandering_trader"
              }
            ]
          },
          {
            "any_of": [
              {
                "test": "in_water",
                "subject": "other",
                "value": true
              },
              {
                "test": "is_daytime",
                "value": false
              }
            ]
          }
        ]
      },
      "max_dist": 20,
      "must_see": false
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
      "max_dist": 20
    }
  ]
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 1,
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
            "value": "squid"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "axolotl"
          }
        ]
      },
      "max_dist": 16
    }
  ],
  "attack_interval_min": 1,
  "must_see": true
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:behavior.nearest_attackable_target": {
  "priority": 5,
  "must_see": true,
  "attack_interval": 10,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "endermite"
      },
      "max_dist": 64
    }
  ]
}
```
