---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.croak"
description: "Describes the minecraft:behavior.croak ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.croak

Allows the entity to croak at a random time interval with configurable conditions.


## Croak Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| duration | *not set* | Range of integers | Random range in seconds after which the croaking stops. Can also be a constant. | Frog: `4.5` | 
| filters | *not set* | Minecraft filter | Conditions for the behavior to start and keep running. The interval between runs only starts after passing the filters. | Frog: `{"all_of":[{"test":"in_water","value":false},{"test":"in_lava","value":false}]}` | 
| interval | *not set* | Range of integers | Random range in seconds between runs of this behavior. Can also be a constant. | Frog: `[10,20]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `9` | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.croak": {
  "priority": 9,
  "interval": [
    10,
    20
  ],
  "duration": 4.5,
  "filters": {
    "all_of": [
      {
        "test": "in_water",
        "value": false
      },
      {
        "test": "in_lava",
        "value": false
      }
    ]
  }
}
```
