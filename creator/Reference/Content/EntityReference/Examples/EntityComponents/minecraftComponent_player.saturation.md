---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:player.saturation"
description: "Describes the minecraft:player.saturation entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:player.saturation

Defines the player's need for food.


## Player Saturation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | The maximum player saturation value. | Player: `20` | 
| value | *not set* | Integer number | The initial value of player saturation. | Player: `5` | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:player.saturation": {
  "value": 5,
  "max": 20
}
```
