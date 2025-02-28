---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:water_movement"
description: "Describes the minecraft:water_movement entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:water_movement


## Water Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| drag_factor | 0.8 | Decimal number | Drag factor to determine movement speed when in water. | Panda: `0.98`, Turtle: `0.9` | 

## Samples

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:water_movement": {
  "drag_factor": 0.98
}
```

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:water_movement": {
  "drag_factor": 0.9
}
```
