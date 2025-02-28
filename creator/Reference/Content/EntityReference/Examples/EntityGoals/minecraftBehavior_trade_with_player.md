---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.trade_with_player"
description: "Describes the behavior.trade_with_player AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.trade_with_player

Allows the player to trade with this mob. When the goal starts, it will stop the mob's navigation.


## Trade With Player Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Villager V2: `{"all_of":[{"all_of":[{"test":"in_water","value":false}]},{"any_of":[{"test":"on_ground","value":true},{"test":"is_sleeping","value":true}]}]}` | 
| max_distance_from_player | 8 | Decimal number | The max distance that the mob can be from the player before exiting the goal. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `2`, Villager: `1` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
{
  "priority": 2,
  "filters": {
    "all_of": [
      {
        "all_of": [
          {
            "test": "in_water",
            "value": false
          }
        ]
      },
      {
        "any_of": [
          {
            "test": "on_ground",
            "value": true
          },
          {
            "test": "is_sleeping",
            "value": true
          }
        ]
      }
    ]
  }
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
{
  "priority": 1,
  "filters": {
    "all_of": [
      {
        "all_of": [
          {
            "test": "in_water",
            "value": false
          }
        ]
      },
      {
        "any_of": [
          {
            "test": "on_ground",
            "value": true
          },
          {
            "test": "is_sleeping",
            "value": true
          }
        ]
      }
    ]
  }
}
```

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
{
  "priority": 1,
  "filters": {
    "all_of": [
      {
        "all_of": [
          {
            "test": "in_water",
            "value": false
          }
        ]
      },
      {
        "any_of": [
          {
            "test": "on_ground",
            "value": true
          },
          {
            "test": "is_sleeping",
            "value": true
          }
        ]
      }
    ]
  }
}
```
