---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.sneeze
ms.prod: gaming
---

# minecraft:behavior.sneeze

`minecraft:behavior.sneeze` allows an entity to sneeze and potentially started other entities. While sneezing, the entity may drop an item.

> [!NOTE]
> `minecraft:behavior.sneeze` requires a `player` to be tagged as the entity's owner, via taming or console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|cooldown_time| 0.0|Decimal| Time in seconds the mob has to wait before using the goal again |
|drop_item_chance| 1.0| Decimal| The probability that the mob will drop an item when it sneezes. |
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object|  List of entity types this mob will startle (cause to jump) when it sneezes.|
|loot_table|*not set* | String|  Loot table to select dropped items from. |
|prepare_sound|*not set* | String|  Sound to play when the sneeze is about to happen. |
| prepare_time| 1.0| Decimal| The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing). |
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
|must_see_forget_duration |3.0 | Boolean |Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="217-258":::

## Vanilla entities using `minecraft:behavior.sneeze`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
