---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:player.level"
description: "Describes the minecraft:player.level entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:player.level

Defines the player's level.


## Player Level Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | The maximum player level value of the entity. | Player: `24791` | 
| value | *not set* | Integer number | The initial value of the player level. |  | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:player.level": {
  "value": 0,
  "max": 24791
}
```
