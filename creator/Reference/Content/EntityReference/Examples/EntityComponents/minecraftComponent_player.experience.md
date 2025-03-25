---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:player.experience"
description: "Describes the minecraft:player.experience entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:player.experience

Defines how much experience each player action should take.


## Player Experience Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 5 | Integer number | The maximum player experience of this entity. | Player: `1` | 
| value | 1 | Integer number | The initial value of the player experience. |  | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:player.experience": {
  "value": 0,
  "max": 1
}
```
