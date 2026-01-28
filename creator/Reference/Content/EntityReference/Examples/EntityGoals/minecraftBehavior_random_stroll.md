---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_stroll"
description: "Describes the minecraft:behavior.random_stroll ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_stroll

Allows a mob to randomly stroll around.


## Random Stroll Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Blaze: `4`, Bogged: `6` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Blaze: `1`, Cave Spider: `0.8` | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |  | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |  | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 4,
  "speed_multiplier": 1
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 1
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 0.8
}
```
