---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.trade_with_player"
description: "Describes the minecraft:behavior.trade_with_player ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.trade_with_player

Allows the player to trade with this mob. When the goal starts, it will stop the mob's navigation.


## Trade With Player Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Villager v2: `{"all_of":[{"all_of":[{"test":"in_water","value":false}]},{"any_of":[{"test":"on_ground","value":true},{"test":"is_sleeping","value":true}]}]}` | 
| max_distance_from_player | 8 | Decimal number | The max distance that the mob can be from the player before exiting the goal. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `2`, Villager: `1` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.trade_with_player": {
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
"minecraft:behavior.trade_with_player": {
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

#### [Beachager](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/entities/beachager.behavior.json)


```json
"minecraft:behavior.trade_with_player": {
  "priority": 2
}
```
