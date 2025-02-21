---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.swim_idle"
description: "Describes the behavior.swim_idle AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.swim_idle

Allows the entity go idle, if swimming. Entity must be in water.


## Swim Idle Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| idle_time | 5 | Decimal number | Amount of time (in seconds) to stay idle. | Axolotl: `5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Axolotl: `7`, Fish: `5` | 
| success_rate | 0.1 | Decimal number | Percent chance this entity will go idle, 1.0 = 100%. | Axolotl: `0.05`, Fish: `0.1` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
{
  "priority": 7,
  "idle_time": 5,
  "success_rate": 0.05
}
```

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
{
  "priority": 5,
  "idle_time": 5,
  "success_rate": 0.1
}
```

#### [Salmon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/salmon.json)


```json
{
  "priority": 5,
  "idle_time": 5,
  "success_rate": 0.1
}
```

#### [Tropicalfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tropicalfish.json)


```json
{
  "priority": 5,
  "idle_time": 5,
  "success_rate": 0.1
}
```
