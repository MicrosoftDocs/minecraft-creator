---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:despawn"
description: "Describes the minecraft:despawn entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:despawn

Despawns the Actor when the despawn rules or optional filters evaluate to true.


## Despawn Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| despawn_from_chance | true | Boolean true/false | Determines if "min_range_random_chance" is used in the standard despawn rules |  | 
| despawn_from_distance | *not set* | [Despawn From Distance](#despawn-from-distance) item | Specifies if the 'min_distance' and 'max_distance' are used in the standard despawn rules. | Armadillo: `{}`, Fish: `{"min_distance":32,"max_distance":40}` | 
| despawn_from_inactivity | true | Boolean true/false | Determines if the "min_range_inactivity_timer" is used in the standard despawn rules. |  | 
| despawn_from_simulation_edge | true | Boolean true/false | Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules. |  | 
| filters | *not set* | Minecraft filter | The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored. | Piglin Brute: `{"any_of":[{"all_of":[{"test":"is_persistent","value":false},{"test":"distance_to_nearest_player","operator":">","value":54}]},{"all_of":[{"test":"is_persistent","value":false},{"test":"inactivity_timer","subject":"self","value":30},{"test":"random_chance","value":800},{"test":"distance_to_nearest_player","operator":">","value":32}]}]}`, Wandering Trader: `{"all_of":[{"any_of":[{"test":"is_family","subject":"self","value":"wandering_trader_despawning"},{"test":"has_trade_supply","subject":"self","value":false}]},{"test":"distance_to_nearest_player","operator":">","value":24}]}` | 
| min_range_inactivity_timer | 30 | Integer number | The amount of time in seconds that the mob must be inactive. |  | 
| min_range_random_chance | 800 | Integer number | A random chance between 1 and the given value. |  | 
| remove_child_entities | false | Boolean true/false | If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned. | Wandering Trader: `true` | 

## Despawn From Distance

#### Despawn From Distance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_distance | 128 | Integer number | Maximum distance for standard despawn rules to instantly despawn the mob. |  | 
| min_distance | 32 | Integer number | Minimum distance for standard despawn rules to try to despawn the mob. |  | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:despawn": {
  "despawn_from_distance": {}
}
```

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
"minecraft:despawn": {
  "despawn_from_distance": {
    "min_distance": 32,
    "max_distance": 40
  }
}
```

#### [Piglin Brute](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin_brute.json)


```json
"minecraft:despawn": {
  "filters": {
    "any_of": [
      {
        "all_of": [
          {
            "test": "is_persistent",
            "value": false
          },
          {
            "test": "distance_to_nearest_player",
            "operator": ">",
            "value": 54
          }
        ]
      },
      {
        "all_of": [
          {
            "test": "is_persistent",
            "value": false
          },
          {
            "test": "inactivity_timer",
            "subject": "self",
            "value": 30
          },
          {
            "test": "random_chance",
            "value": 800
          },
          {
            "test": "distance_to_nearest_player",
            "operator": ">",
            "value": 32
          }
        ]
      }
    ]
  }
}
```

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
"minecraft:despawn": {
  "remove_child_entities": true,
  "filters": {
    "all_of": [
      {
        "any_of": [
          {
            "test": "is_family",
            "subject": "self",
            "value": "wandering_trader_despawning"
          },
          {
            "test": "has_trade_supply",
            "subject": "self",
            "value": false
          }
        ]
      },
      {
        "test": "distance_to_nearest_player",
        "operator": ">",
        "value": 24
      }
    ]
  }
}
```
