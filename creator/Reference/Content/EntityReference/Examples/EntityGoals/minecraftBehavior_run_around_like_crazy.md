---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.run_around_like_crazy"
description: "Describes the minecraft:behavior.run_around_like_crazy ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.run_around_like_crazy

Allows the mob to run around aimlessly.


## Run Around Like Crazy Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Donkey: `1` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Donkey: `1.2` | 

## Samples

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:behavior.run_around_like_crazy": {
  "priority": 1,
  "speed_multiplier": 1.2
}
```
