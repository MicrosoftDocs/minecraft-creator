---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.drink_potion
description: "A reference document detailing the 'behavior.drink_potion' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.drink_potion

`minecraft:behavior.drink_potion` compels an entity to drink a potion as a reaction to an event or when set conditions are met.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|potions |*not set* |List |A list of potions that this entity can drink. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_modifier| 0.0| Decimal| The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed.|

### Potion Parameters

Each potion entry has the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|chance | 1.0| Decimal| The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use. |
| [filters](../FilterList.md)|*not set* | Minecraft Filter| The filters to use when determining if this potion can be selected. |
|id| -1|Integer | The registry ID of the potion to use |

## Vanilla entities examples

### wandering_trader

```json
"minecraft:behavior.drink_potion": {
        "priority": 1,
        "speed_modifier": -0.2,
        "potions": [
          {
            "id": 7, // Short invisibility
            "chance": 1.0,
            "filters": {
              "all_of": [
                {
                  "any_of": [
                    { "test": "hourly_clock_time", "operator": ">=", "value": 18000 },
                    { "test": "hourly_clock_time", "operator": "<", "value": 12000 }
                  ]
                },
                { "test": "is_visible", "subject": "self", "value": true },
                {
                  "any_of": [
                    { "test": "is_avoiding_mobs", "subject": "self", "value": true },
                    {
                      "all_of": [
                        { "test": "has_component", "subject": "self", "value": "minecraft:angry" },
                        { "test": "is_family", "subject": "target", "operator": "!=", "value": "player" }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": 8, // Long invisibility
            "chance": 1.0,
            "filters": {
              "all_of": [
                { "test": "hourly_clock_time", "operator": ">=", "value": 12000 },
                { "test": "hourly_clock_time", "operator": "<", "value": 18000 },
                { "test": "is_visible", "subject": "self", "value": true },
                {
                  "any_of": [
                    { "test": "is_avoiding_mobs", "subject": "self", "value": true },
                    { "test": "has_component", "subject": "self", "value": "minecraft:angry" }
                  ]
                }
              ]
            }
          }
        ]
      }
```

## Vanilla entities using `minecraft:behavior.drink_potion`

- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
