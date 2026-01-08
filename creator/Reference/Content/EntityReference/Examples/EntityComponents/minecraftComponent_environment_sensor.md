---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:environment_sensor"
description: "Describes the minecraft:environment_sensor entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:environment_sensor

Creates a trigger based on environment conditions.


## Environment Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| triggers | *not set* | Array of Minecraft Event Triggers | The list of triggers that fire when the environment conditions match the given filter criteria. | Armadillo: `[{"filters":{"any_of":[{"test":"on_fire"},{"test":"in_water"},{"test":"is_panicking"},{"test":"is_leashed"},{"test":"is_riding"}]},"event":"minecraft:unroll"}]`, Axolotl: `[{"filters":{"test":"in_water","operator":"!=","value":true},"event":"start_drying_out"}]`, `[{"filters":{"test":"in_water_or_rain","operator":"!=","value":true},"event":"start_drying_out"},{"filters":{"test":"in_water","operator":"==","value":true},"event":"enter_water"}]` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "any_of": [
          {
            "test": "on_fire"
          },
          {
            "test": "in_water"
          },
          {
            "test": "is_panicking"
          },
          {
            "test": "is_leashed"
          },
          {
            "test": "is_riding"
          }
        ]
      },
      "event": "minecraft:unroll"
    }
  ]
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)

At /minecraft:entity/component_groups/axolotl_in_water/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "test": "in_water",
        "operator": "!=",
        "value": true
      },
      "event": "start_drying_out"
    }
  ]
}
```

At /minecraft:entity/component_groups/axolotl_on_land_in_rain/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "test": "in_water_or_rain",
        "operator": "!=",
        "value": true
      },
      "event": "start_drying_out"
    },
    {
      "filters": {
        "test": "in_water",
        "operator": "==",
        "value": true
      },
      "event": "enter_water"
    }
  ]
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/shelter_detection/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "event": "seek_shelter",
      "filters": {
        "all_of": [
          {
            "any_of": [
              {
                "test": "is_daytime",
                "value": false
              },
              {
                "test": "weather",
                "operator": "==",
                "value": "precipitation"
              }
            ]
          },
          {
            "test": "bool_property",
            "domain": "minecraft:has_nectar",
            "operator": "!="
          },
          {
            "test": "has_biome_tag",
            "value": "overworld"
          }
        ]
      }
    }
  ]
}
```

At /minecraft:entity/component_groups/abort_shelter_detection/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "event": "abort_sheltering",
      "filters": {
        "all_of": [
          {
            "test": "weather",
            "operator": "==",
            "value": "clear"
          },
          {
            "test": "is_daytime",
            "value": true
          }
        ]
      }
    }
  ]
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "all_of": [
          {
            "test": "on_ground",
            "subject": "self",
            "value": true
          },
          {
            "test": "has_target",
            "subject": "self",
            "value": true
          },
          {
            "test": "bool_property",
            "operator": "==",
            "domain": "minecraft:is_playing_idle_ground_sound"
          }
        ]
      },
      "event": "minecraft:stop_playing_idle_ground_sound"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "bool_property",
            "operator": "!=",
            "domain": "minecraft:is_playing_idle_ground_sound"
          },
          {
            "any_of": [
              {
                "test": "on_ground",
                "subject": "self",
                "value": false
              },
              {
                "test": "has_target",
                "subject": "self",
                "value": false
              }
            ]
          }
        ]
      },
      "event": "minecraft:start_playing_idle_ground_sound"
    }
  ]
}
```

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "all_of": [
          {
            "test": "bool_property",
            "domain": "minecraft:has_rider_mounted"
          },
          {
            "test": "rider_count",
            "subject": "self",
            "value": 0
          }
        ]
      },
      "event": "minecraft:all_riders_dismounted"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "bool_property",
            "domain": "minecraft:has_rider_mounted",
            "value": false
          },
          {
            "test": "rider_count",
            "subject": "self",
            "operator": ">",
            "value": 0
          }
        ]
      },
      "event": "minecraft:rider_mounted"
    }
  ]
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_neutral/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": {
    "filters": {
      "test": "is_brightness",
      "operator": "<",
      "value": 0.49
    },
    "event": "minecraft:become_hostile"
  }
}
```

At /minecraft:entity/component_groups/minecraft:spider_hostile/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": {
    "filters": {
      "test": "is_brightness",
      "operator": ">",
      "value": 0.49
    },
    "event": "minecraft:become_neutral"
  }
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:spawned_by_player/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "all_of": [
          {
            "any_of": [
              {
                "test": "enum_property",
                "domain": "minecraft:creaking_state",
                "value": "hostile_observed"
              },
              {
                "test": "enum_property",
                "domain": "minecraft:creaking_state",
                "value": "hostile_unobserved"
              }
            ]
          },
          {
            "any_of": [
              {
                "test": "has_target",
                "value": false
              },
              {
                "test": "actor_health",
                "subject": "target",
                "value": 0
              },
              {
                "test": "target_distance",
                "operator": ">",
                "value": 24
              }
            ]
          }
        ]
      },
      "event": "minecraft:become_neutral"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "all_of": [
          {
            "any_of": [
              {
                "test": "enum_property",
                "domain": "minecraft:creaking_state",
                "value": "hostile_observed"
              },
              {
                "test": "enum_property",
                "domain": "minecraft:creaking_state",
                "value": "hostile_unobserved"
              }
            ]
          },
          {
            "any_of": [
              {
                "test": "has_target",
                "value": false
              },
              {
                "test": "actor_health",
                "subject": "target",
                "value": 0
              },
              {
                "test": "target_distance",
                "operator": ">",
                "value": 24
              }
            ]
          }
        ]
      },
      "event": "minecraft:become_neutral"
    },
    {
      "filters": {
        "all_of": [
          {
            "none_of": [
              {
                "test": "enum_property",
                "domain": "minecraft:creaking_state",
                "value": "twitching"
              },
              {
                "test": "has_nametag"
              }
            ]
          },
          {
            "any_of": [
              {
                "test": "home_distance",
                "operator": ">",
                "value": 34
              },
              {
                "test": "hourly_clock_time",
                "operator": ">",
                "value": 23400
              },
              {
                "test": "hourly_clock_time",
                "operator": "<=",
                "value": 12600
              }
            ]
          }
        ]
      },
      "event": "minecraft:crumble_and_notify_creaking_heart"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "enum_property",
            "domain": "minecraft:creaking_state",
            "operator": "not",
            "value": "twitching"
          },
          {
            "test": "enum_property",
            "domain": "minecraft:creaking_state",
            "operator": "not",
            "value": "crumbling"
          },
          {
            "test": "is_bound_to_creaking_heart",
            "value": false
          }
        ]
      },
      "event": "minecraft:crumble"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "int_property",
            "domain": "minecraft:creaking_swaying_ticks",
            "operator": ">",
            "value": 0
          },
          {
            "test": "int_property",
            "domain": "minecraft:creaking_swaying_ticks",
            "operator": "<=",
            "value": 5
          }
        ]
      },
      "event": "minecraft:increment_swaying_ticks"
    },
    {
      "filters": {
        "test": "int_property",
        "domain": "minecraft:creaking_swaying_ticks",
        "operator": ">",
        "value": 5
      },
      "event": "minecraft:reset_swaying_ticks"
    }
  ]
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)

At /minecraft:entity/component_groups/dolphin_swimming_navigation/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "all_of": [
          {
            "test": "on_ground",
            "operator": "==",
            "value": true
          },
          {
            "test": "in_water",
            "operator": "!=",
            "value": true
          }
        ]
      },
      "event": "navigation_on_land"
    }
  ]
}
```

At /minecraft:entity/component_groups/dolphin_on_land_in_rain/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "test": "in_water",
        "operator": "==",
        "value": true
      },
      "event": "navigation_off_land"
    },
    {
      "filters": {
        "test": "in_water_or_rain",
        "operator": "!=",
        "value": true
      },
      "event": "start_dryingout"
    }
  ]
}
```
