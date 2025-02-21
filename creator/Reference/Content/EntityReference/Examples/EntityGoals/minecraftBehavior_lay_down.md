---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.lay_down"
description: "Describes the minecraft:behavior.lay_down ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.lay_down

Allows mobs to lay down at times.


## Lay Down Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval | 120 | Integer number | A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal | Panda: `400` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Panda: `5` | 
| random_stop_interval | 120 | Integer number | a random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound | Panda: `2000` | 

## Samples

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:behavior.lay_down": {
  "priority": 5,
  "interval": 400,
  "random_stop_interval": 2000
}
```
