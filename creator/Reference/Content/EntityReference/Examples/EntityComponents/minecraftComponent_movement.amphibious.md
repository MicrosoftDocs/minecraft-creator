---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.amphibious"
description: "Describes the minecraft:movement.amphibious entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.amphibious

This move control allows the mob to swim in water and walk on land.


## Amphibious Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. | Turtle: `5` | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:movement.amphibious": {}
```

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:movement.amphibious": {
  "max_turn": 5
}
```
