---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.receive_love"
description: "Describes the minecraft:behavior.receive_love ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.receive_love

Allows the villager to stop so another villager can breed with it. Can only be used by a Villager.


## Receive Love Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `6`, Villager: `7` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.receive_love": {
  "priority": 6
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.receive_love": {
  "priority": 7
}
```
