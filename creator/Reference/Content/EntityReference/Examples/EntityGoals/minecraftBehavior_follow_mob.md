---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_mob"
description: "Describes the minecraft:behavior.follow_mob ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_mob

Allows the mob to follow other mobs.


## Follow Mob Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Parrot: `4` | 
| search_range | 0 | Integer number | The distance in blocks it will look for a mob to follow | Parrot: `20` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Parrot: `1` | 
| stop_distance | 2 | Decimal number | The distance in blocks this mob stops from the mob it is following | Parrot: `3` | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.follow_mob": {
  "priority": 4,
  "speed_multiplier": 1,
  "stop_distance": 3,
  "search_range": 20
}
```
