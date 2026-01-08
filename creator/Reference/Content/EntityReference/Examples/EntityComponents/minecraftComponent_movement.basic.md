---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.basic"
description: "Describes the minecraft:movement.basic entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.basic

This component accents the movement of an entity.


## Basic Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. | Wither: `180` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:movement.basic": {}
```

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
"minecraft:movement.basic": {
  "max_turn": 180
}
```
