---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:jump.static"
description: "Describes the minecraft:jump.static entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:jump.static

Gives the entity the ability to jump.


## Static Jump Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| jump_power | 0.42 | Decimal number | The initial vertical velocity for the jump | Dolphin: `0.6` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:jump.static": {}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:jump.static": {
  "jump_power": 0.6
}
```
