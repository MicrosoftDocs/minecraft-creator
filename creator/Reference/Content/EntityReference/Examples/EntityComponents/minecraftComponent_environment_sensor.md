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
| triggers | *not set* | Array of Minecraft Event Triggers | The list of triggers that fire when the environment conditions match the given filter criteria. | Breeze: `[{"filters":{"all_of":[{"test":"on_ground","subject":"self","value":true},{"test":"has_target","subject":"self","value":true},{"test":"bool_property","operator":"==","domain":"minecraft:is_playing_idle_ground_sound"}]},"event":"minecraft:stop_playing_idle_ground_sound"},{"filters":{"all_of":[{"test":"bool_property","operator":"!=","domain":"minecraft:is_playing_idle_ground_sound"},{"any_of":[{"test":"on_ground","subject":"self","value":false},{"test":"has_target","subject":"self","value":false}]}]},"event":"minecraft:start_playing_idle_ground_sound"}]`, Cave Spider: `{"filters":{"test":"is_brightness","operator":"<","value":0.49},"event":"minecraft:become_hostile"}`, `{"filters":{"test":"is_brightness","operator":">","value":0.49},"event":"minecraft:become_neutral"}` | 

## Samples

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
    "filters": {
      "all_of": [
        {
          "test": "has_mob_effect",
          "subject": "self",
          "value": "bad_omen"
        },
        {
          "test": "is_in_village",
          "subject": "self",
          "value": true
        }
      ]
    },
    "event": "minecraft:gain_raid_omen"
  }
}
```
