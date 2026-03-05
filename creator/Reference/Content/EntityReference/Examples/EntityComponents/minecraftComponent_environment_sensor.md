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
| triggers | *not set* | Array of objects | The list of triggers that fire when the environment conditions match the given filter criteria. Can be an array of trigger objects or a single trigger object. | Breeze: `[{"event":"minecraft:stop_playing_idle_ground_sound","filters":{"all_of":[{"subject":"self","test":"on_ground","value":true},{"subject":"self","test":"has_target","value":true},{"domain":"minecraft:is_playing_idle_ground_sound","operator":"==","test":"bool_property"}]}},{"event":"minecraft:start_playing_idle_ground_sound","filters":{"all_of":[{"domain":"minecraft:is_playing_idle_ground_sound","operator":"!=","test":"bool_property"},{"any_of":[{"subject":"self","test":"on_ground","value":false},{"subject":"self","test":"has_target","value":false}]}]}}]`, Cave Spider: `{"event":"minecraft:become_neutral","filters":{"operator":">","test":"is_brightness","value":0.49}}`, `{"event":"minecraft:become_hostile","filters":{"operator":"<","test":"is_brightness","value":0.49}}` | 
| triggers (as Object) | *not set* | Object |  |  | 

## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "event": "minecraft:stop_playing_idle_ground_sound",
      "filters": {
        "all_of": [
          {
            "subject": "self",
            "test": "on_ground",
            "value": true
          },
          {
            "subject": "self",
            "test": "has_target",
            "value": true
          },
          {
            "domain": "minecraft:is_playing_idle_ground_sound",
            "operator": "==",
            "test": "bool_property"
          }
        ]
      }
    },
    {
      "event": "minecraft:start_playing_idle_ground_sound",
      "filters": {
        "all_of": [
          {
            "domain": "minecraft:is_playing_idle_ground_sound",
            "operator": "!=",
            "test": "bool_property"
          },
          {
            "any_of": [
              {
                "subject": "self",
                "test": "on_ground",
                "value": false
              },
              {
                "subject": "self",
                "test": "has_target",
                "value": false
              }
            ]
          }
        ]
      }
    }
  ]
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_hostile/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": {
    "event": "minecraft:become_neutral",
    "filters": {
      "operator": ">",
      "test": "is_brightness",
      "value": 0.49
    }
  }
}
```

At /minecraft:entity/component_groups/minecraft:spider_neutral/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": {
    "event": "minecraft:become_hostile",
    "filters": {
      "operator": "<",
      "test": "is_brightness",
      "value": 0.49
    }
  }
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

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)

At /minecraft:entity/component_groups/zombification_sensor/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": {
    "filters": {
      "test": "in_nether",
      "subject": "self",
      "operator": "==",
      "value": false
    },
    "event": "start_zombification_event"
  }
}
```

At /minecraft:entity/component_groups/start_zombification/minecraft:environment_sensor/: 

```json
"minecraft:environment_sensor": {
  "triggers": {
    "filters": {
      "test": "in_nether",
      "subject": "self",
      "operator": "==",
      "value": true
    },
    "event": "stop_zombification_event"
  }
}
```

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:environment_sensor": {
  "triggers": {
    "event": "minecraft:gain_raid_omen",
    "filters": {
      "all_of": [
        {
          "subject": "self",
          "test": "has_mob_effect",
          "value": "bad_omen"
        },
        {
          "subject": "self",
          "test": "is_in_village",
          "value": true
        }
      ]
    }
  }
}
```
