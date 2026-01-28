---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:scheduler"
description: "Describes the minecraft:scheduler entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:scheduler

Fires off scheduled mob events at time of day events.


## Scheduler Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_delay_secs | *not set* | Decimal number |  |  | 
| min_delay_secs | *not set* | Decimal number |  |  | 
| scheduled_events | *not set* | Array of Minecraft Event Triggers | The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked. | Fox: `[{"filters":[{"test":"is_sleeping","value":true}],"event":"minecraft:ambient_sleep"},{"filters":{"all_of":[{"test":"is_daytime","value":false},{"test":"distance_to_nearest_player","operator":">","value":16}]},"event":"minecraft:ambient_night"},{"filters":{"all_of":[{"test":"is_sleeping","value":false},{"any_of":[{"test":"is_daytime","value":true},{"test":"distance_to_nearest_player","operator":"<=","value":16}]}]},"event":"minecraft:ambient_normal"}]` | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 0,
  "scheduled_events": [
    {
      "filters": [
        {
          "test": "is_sleeping",
          "value": true
        }
      ],
      "event": "minecraft:ambient_sleep"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_daytime",
            "value": false
          },
          {
            "test": "distance_to_nearest_player",
            "operator": ">",
            "value": 16
          }
        ]
      },
      "event": "minecraft:ambient_night"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_sleeping",
            "value": false
          },
          {
            "any_of": [
              {
                "test": "is_daytime",
                "value": true
              },
              {
                "test": "distance_to_nearest_player",
                "operator": "<=",
                "value": 16
              }
            ]
          }
        ]
      },
      "event": "minecraft:ambient_normal"
    }
  ]
}
```
