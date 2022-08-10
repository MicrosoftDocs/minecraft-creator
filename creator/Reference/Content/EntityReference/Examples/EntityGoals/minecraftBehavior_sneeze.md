---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.sneeze
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.sneeze

`minecraft:behavior.sneeze` allows an entity to sneeze and potentially startle other entities. While sneezing, the entity may drop an item.

> [!NOTE]
> `minecraft:behavior.sneeze` requires a `player` to be tagged as the entity's owner, via taming or console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object|  List of entity types this mob will startle (cause to jump) when it sneezes.|
|cooldown_time| 0.0|Decimal| Time in seconds the mob has to wait before using the goal again |
|drop_item_chance| 1.0| Decimal| The probability that the mob will drop an item when it sneezes. |
|loot_table|*not set* | String|  Loot table to select dropped items from. |
|prepare_sound|*not set* | String|  Sound to play when the sneeze is about to happen. |
| prepare_time| 1.0| Decimal| The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing). |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|probability| 0.02| Decimal| The probability of sneezing. A value of 1.00 is 100% |
|sound|*not set* | String| Sound to play when the sneeze occurs. |
| within_radius| 0.0| Decimal| Distance in blocks that mobs will be startled. |

### entity_types

`entity_types` is a JSON Object variable that can use the following parameters:

|Name |Default Value |Type |Description |
|:-----|:--------------|:-----|:------------|
|filters | |Minecraft Filter|Conditions that make this entry in the list valid. |
|max_dist |16 |Decimal |Maximum distance this mob can be away to be a valid choice. |
|must_see |false |Boolean |If true, the mob has to be visible to be a valid choice. |
|must_see_forget_duration |3.0 | Decimal |Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
|reevaluate_description| false| Boolean|  If true, the mob will stop being targeted if it stops meeting any conditions. |
|sprint_speed_multiplier |1.0 |Decimal |Multiplier for the running speed. A value of 1.0 means the speed is unchanged. |
|walk_speed_multiplier |1.0 |Decimal |Multiplier for the walking speed. A value of 1.0 means the speed is unchanged. |

## Example

```json
"minecraft:behavior.sneeze":{
    "priority": 7,
          "probability": 0.0001666,
          "cooldown_time": 1.0,
          "within_radius": 10.0,
          "entity_types": [
            {
              "filters": {
                "all_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "value": "panda"
                  }
                ]
              },
              "max_dist": 10
            }
          ],
          "drop_item_chance": 0.001,
          "loot_table": "loot_tables/entities/panda_sneeze.json",
          "prepare_sound": "presneeze",
          "prepare_time": 1.0,
          "sound": "sneeze"
}
```

## Vanilla entities examples

### panda

```json
"minecraft:behavior.sneeze": {
          "priority": 7,
          "probability": 0.0001666,
          "cooldown_time": 1.0,
          "within_radius": 10.0,
          "entity_types": [
            {
              "filters": {
                "all_of": [
                  {
                    "test": "has_component",
                    "subject": "other",
                    "operator": "!=",
                    "value": "minecraft:is_baby"
                  },
                  {
                    "test": "is_family",
                    "subject": "other",
                    "value": "panda"
                  },
                  {
                    "test": "in_water",
                    "subject": "other",
                    "operator": "!=",
                    "value": true
                  },
                  {
                    "test": "on_ground",
                    "operator": "==",
                    "value": true
                  }
                ]
              },
              "max_dist": 10
            }
          ],
          "drop_item_chance": 0.001,
          "loot_table": "loot_tables/entities/panda_sneeze.json",
          "prepare_sound": "presneeze",
          "prepare_time": 1.0,
          "sound": "sneeze"
        }

```

## Vanilla entities using `minecraft:behavior.sneeze`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
