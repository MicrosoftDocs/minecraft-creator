---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drink_potion"
description: "Describes the minecraft:behavior.drink_potion ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.drink_potion

Allows the mob to drink potions based on specified environment conditions.


## Drink Potion Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| potions | *not set* | Array of [Potions](#potions-item-type) items | A list of potions that this entity can drink. Each potion entry has the following parameters: | Wandering Trader: `[{"id":7,"chance":1,"filters":{"all_of":[{"any_of":[{"test":"hourly_clock_time","operator":">=","value":18000},{"test":"hourly_clock_time","operator":"<","value":12000}]},{"test":"is_visible","subject":"self","value":true},{"any_of":[{"test":"is_avoiding_mobs","subject":"self","value":true},{"all_of":[{"test":"has_component","subject":"self","value":"minecraft:angry"},{"test":"is_family","subject":"target","operator":"!=","value":"player"}]}]}]}},{"id":8,"chance":1,"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":18000},{"test":"is_visible","subject":"self","value":true},{"any_of":[{"test":"is_avoiding_mobs","subject":"self","value":true},{"test":"has_component","subject":"self","value":"minecraft:angry"}]}]}}]`, Witch: `[{"id":19,"chance":0.15,"filters":{"all_of":[{"test":"is_underwater","subject":"self","value":true},{"none_of":[{"test":"has_mob_effect","subject":"self","value":"water_breathing"}]}]}},{"id":12,"chance":0.15,"filters":{"all_of":[{"any_of":[{"test":"on_fire","subject":"self","value":true},{"test":"on_hot_block","subject":"self","value":true},{"test":"taking_fire_damage","subject":"self","value":true}]},{"none_of":[{"test":"has_mob_effect","subject":"self","value":"fire_resistance"}]}]}},{"id":21,"chance":0.05,"filters":{"all_of":[{"test":"is_missing_health","subject":"self","value":true}]}},{"id":14,"chance":0.25,"filters":{"all_of":[{"test":"has_target","subject":"self","value":true},{"none_of":[{"test":"has_mob_effect","subject":"self","value":"speed"}]},{"test":"target_distance","subject":"self","value":11,"operator":">="}]}}]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wandering Trader: `1` | 
| speed_modifier | 0 | Decimal number | The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed. | Wandering Trader: `-0.2`, Witch: `-0.25` | 

## Potions item type
A list of potions that this entity can drink. Each potion entry has the following parameters:


#### Potions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | 1 | Decimal number | The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use. |  | 
| filters | *not set* | Minecraft filter | The filters to use when determining if this potion can be selected. |  | 
| id | -1 | Integer number | The registry ID of the potion to use |  | 

## Samples

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
"minecraft:behavior.drink_potion": {
  "priority": 1,
  "speed_modifier": -0.2,
  "potions": [
    {
      "id": 7,
      "chance": 1,
      "filters": {
        "all_of": [
          {
            "any_of": [
              {
                "test": "hourly_clock_time",
                "operator": ">=",
                "value": 18000
              },
              {
                "test": "hourly_clock_time",
                "operator": "<",
                "value": 12000
              }
            ]
          },
          {
            "test": "is_visible",
            "subject": "self",
            "value": true
          },
          {
            "any_of": [
              {
                "test": "is_avoiding_mobs",
                "subject": "self",
                "value": true
              },
              {
                "all_of": [
                  {
                    "test": "has_component",
                    "subject": "self",
                    "value": "minecraft:angry"
                  },
                  {
                    "test": "is_family",
                    "subject": "target",
                    "operator": "!=",
                    "value": "player"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": 8,
      "chance": 1,
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 18000
          },
          {
            "test": "is_visible",
            "subject": "self",
            "value": true
          },
          {
            "any_of": [
              {
                "test": "is_avoiding_mobs",
                "subject": "self",
                "value": true
              },
              {
                "test": "has_component",
                "subject": "self",
                "value": "minecraft:angry"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

#### [Witch](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/witch.json)


```json
"minecraft:behavior.drink_potion": {
  "priority": 1,
  "speed_modifier": -0.25,
  "potions": [
    {
      "id": 19,
      "chance": 0.15,
      "filters": {
        "all_of": [
          {
            "test": "is_underwater",
            "subject": "self",
            "value": true
          },
          {
            "none_of": [
              {
                "test": "has_mob_effect",
                "subject": "self",
                "value": "water_breathing"
              }
            ]
          }
        ]
      }
    },
    {
      "id": 12,
      "chance": 0.15,
      "filters": {
        "all_of": [
          {
            "any_of": [
              {
                "test": "on_fire",
                "subject": "self",
                "value": true
              },
              {
                "test": "on_hot_block",
                "subject": "self",
                "value": true
              },
              {
                "test": "taking_fire_damage",
                "subject": "self",
                "value": true
              }
            ]
          },
          {
            "none_of": [
              {
                "test": "has_mob_effect",
                "subject": "self",
                "value": "fire_resistance"
              }
            ]
          }
        ]
      }
    },
    {
      "id": 21,
      "chance": 0.05,
      "filters": {
        "all_of": [
          {
            "test": "is_missing_health",
            "subject": "self",
            "value": true
          }
        ]
      }
    },
    {
      "id": 14,
      "chance": 0.25,
      "filters": {
        "all_of": [
          {
            "test": "has_target",
            "subject": "self",
            "value": true
          },
          {
            "none_of": [
              {
                "test": "has_mob_effect",
                "subject": "self",
                "value": "speed"
              }
            ]
          },
          {
            "test": "target_distance",
            "subject": "self",
            "value": 11,
            "operator": ">="
          }
        ]
      }
    }
  ]
}
```
