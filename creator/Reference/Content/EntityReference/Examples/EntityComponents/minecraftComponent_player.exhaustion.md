---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:player.exhaustion"
description: "Describes the minecraft:player.exhaustion entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:player.exhaustion

Defines the player's exhaustion level.


## Player Exhaustion Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | A maximum value for a player's exhaustion. | Player: `20` | 
| value | *not set* | Integer number | The initial value of a player's exhaustion level. |  | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:player.exhaustion": {
  "value": 0,
  "max": 20
}
```
