---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.scared"
description: "Describes the minecraft:behavior.scared ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.scared

Allows the a mob to become scared when the weather outside is thundering.


## Scared Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Panda: `1` | 
| sound_interval | 0 | Integer number | The interval in which a sound will play when active in a 1/delay chance to kick off | Panda: `20` | 

## Samples

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:behavior.scared": {
  "priority": 1,
  "sound_interval": 20
}
```
