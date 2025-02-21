---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drink_milk"
description: "Describes the minecraft:behavior.drink_milk ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.drink_milk

Allows the mob to drink milk based on specified environment conditions.


## Drink Milk Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_seconds | 5 | Decimal number | Time (in seconds) that the goal is on cooldown before it can be used again. |  | 
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Wandering Trader: `{"all_of":[{"test":"is_daytime","value":true},{"test":"is_visible","subject":"self","value":false},{"test":"is_avoiding_mobs","subject":"self","value":false}]}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wandering Trader: `5` | 

## Samples

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
"minecraft:behavior.drink_milk": {
  "priority": 5,
  "filters": {
    "all_of": [
      {
        "test": "is_daytime",
        "value": true
      },
      {
        "test": "is_visible",
        "subject": "self",
        "value": false
      },
      {
        "test": "is_avoiding_mobs",
        "subject": "self",
        "value": false
      }
    ]
  }
}
```
