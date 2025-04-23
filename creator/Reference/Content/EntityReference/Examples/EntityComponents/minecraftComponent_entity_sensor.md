---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:entity_sensor"
description: "Describes the minecraft:entity_sensor entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:entity_sensor

A component that owns multiple subsensors, each one firing an event when a set of conditions are met by other entities within the defined range.


## Entity Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| find_players_only | false | Boolean true/false | Limits the search to Players only for all subsensors. | Happy Ghast: `true` | 
| relative_range | true | Boolean true/false | If true the subsensors' range is additive on top of the entity's size. |  | 
| subsensors | *not set* | Array of [Subsensors](#subsensors-item-type) items | The list of subsensors which sense for entities and emit events when all their conditions are met. | Armadillo: `[{"event":"minecraft:no_threat_detected","cooldown":0.2,"range":[7,2],"minimum_count":0,"maximum_count":0,"event_filters":{"any_of":[{"test":"is_family","subject":"other","value":"undead"},{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"any_of":[{"test":"was_last_hurt_by","subject":"other"},{"test":"is_sprinting","subject":"other"},{"test":"is_riding","subject":"other"}]}]}]}},{"event":"minecraft:threat_detected","cooldown":0.2,"range":[7,2],"minimum_count":1,"event_filters":{"any_of":[{"test":"is_family","subject":"other","value":"undead"},{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"any_of":[{"test":"was_last_hurt_by","subject":"other"},{"test":"is_sprinting","subject":"other"},{"test":"is_riding","subject":"other"}]}]}]}}]`, Happy Ghast: `[{"event":"minecraft:on_no_player_detected_above","cooldown":0,"y_offset":4.5,"range":[2,1.5],"minimum_count":0,"maximum_count":0,"event_filters":{"test":"is_riding","subject":"other","value":false}},{"event":"minecraft:on_player_detected_above","cooldown":0,"y_offset":4.5,"range":[2,1.5],"minimum_count":1,"event_filters":{"test":"is_riding","subject":"other","value":false}}]` | 

## Subsensors item type
The list of subsensors which sense for entities and emit events when all their conditions are met.


#### Subsensors Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | -1 | Decimal number | How many seconds should elapse before the subsensor can once again sense for entities. The cooldown is applied on top of the base 1 tick (0.05 seconds) delay. Negative values will result in no cooldown being used. |  | 
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the conditions are met. |  | 
| event_filters | *not set* | Minecraft filter | The set of conditions that must be satisfied to fire the event. |  | 
| maximum_count | -1 | Integer number | The maximum number of entities that must pass the filter conditions for the event to send. |  | 
| minimum_count | 1 | Integer number | The minimum number of entities that must pass the filter conditions for the event to send. |  | 
| range | [10, 10] | a, b coordinate array | The maximum horizontal and vertical distance another entity can be from this and have the filters checked against it. |  | 
| require_all | false | Boolean true/false | If true requires all nearby entities to pass the filter conditions for the events to send. |  | 
| y_offset | 0 | Decimal number | Vertical offset applied to the entity's position when computing the distance from other entities. |  | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:entity_sensor": {
  "subsensors": [
    {
      "event": "minecraft:no_threat_detected",
      "cooldown": 0.2,
      "range": [
        7,
        2
      ],
      "minimum_count": 0,
      "maximum_count": 0,
      "event_filters": {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "undead"
          },
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "player"
              },
              {
                "any_of": [
                  {
                    "test": "was_last_hurt_by",
                    "subject": "other"
                  },
                  {
                    "test": "is_sprinting",
                    "subject": "other"
                  },
                  {
                    "test": "is_riding",
                    "subject": "other"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "event": "minecraft:threat_detected",
      "cooldown": 0.2,
      "range": [
        7,
        2
      ],
      "minimum_count": 1,
      "event_filters": {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "undead"
          },
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "player"
              },
              {
                "any_of": [
                  {
                    "test": "was_last_hurt_by",
                    "subject": "other"
                  },
                  {
                    "test": "is_sprinting",
                    "subject": "other"
                  },
                  {
                    "test": "is_riding",
                    "subject": "other"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:entity_sensor": {
  "find_players_only": true,
  "relative_range": false,
  "subsensors": [
    {
      "event": "minecraft:on_no_player_detected_above",
      "cooldown": 0,
      "y_offset": 4.5,
      "range": [
        2,
        1.5
      ],
      "minimum_count": 0,
      "maximum_count": 0,
      "event_filters": {
        "test": "is_riding",
        "subject": "other",
        "value": false
      }
    },
    {
      "event": "minecraft:on_player_detected_above",
      "cooldown": 0,
      "y_offset": 4.5,
      "range": [
        2,
        1.5
      ],
      "minimum_count": 1,
      "event_filters": {
        "test": "is_riding",
        "subject": "other",
        "value": false
      }
    }
  ]
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)

At /minecraft:entity/component_groups/minecraft:parrot_not_riding_player/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2,
        2
      ],
      "event_filters": {
        "all_of": [
          {
            "test": "is_riding",
            "subject": "self",
            "operator": "equals",
            "value": true
          },
          {
            "test": "has_component",
            "subject": "self",
            "operator": "equals",
            "value": "minecraft:behavior.look_at_player"
          }
        ]
      },
      "event": "minecraft:on_riding_player"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:parrot_riding_player/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2,
        2
      ],
      "event_filters": {
        "all_of": [
          {
            "test": "is_riding",
            "subject": "self",
            "operator": "equals",
            "value": false
          },
          {
            "test": "has_component",
            "subject": "self",
            "operator": "not",
            "value": "minecraft:behavior.look_at_player"
          }
        ]
      },
      "event": "minecraft:on_not_riding_player"
    }
  ]
}
```

#### [Pufferfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pufferfish.json)

At /minecraft:entity/component_groups/minecraft:normal_puff/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2.5,
        2.5
      ],
      "minimum_count": 1,
      "event_filters": {
        "any_of": [
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "mob"
              },
              {
                "any_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "value": "axolotl"
                  },
                  {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "not",
                    "value": "aquatic"
                  }
                ]
              }
            ]
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          }
        ]
      },
      "event": "minecraft:start_half_puff"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:half_puff_secondary/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2.5,
        2.5
      ],
      "minimum_count": 1,
      "event_filters": {
        "any_of": [
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "mob"
              },
              {
                "any_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "value": "axolotl"
                  },
                  {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "not",
                    "value": "aquatic"
                  }
                ]
              }
            ]
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          }
        ]
      },
      "event": "minecraft:start_full_puff"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:deflate_sensor/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2.9,
        2.9
      ],
      "minimum_count": 0,
      "maximum_count": 0,
      "event_filters": {
        "any_of": [
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "mob"
              },
              {
                "any_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "value": "axolotl"
                  },
                  {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "not",
                    "value": "aquatic"
                  }
                ]
              }
            ]
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          }
        ]
      },
      "event": "minecraft:from_full_puff"
    }
  ]
}
```
