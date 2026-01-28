---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:underwater_movement"
description: "Describes the minecraft:underwater_movement entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:underwater_movement

Defines the speed with which an entity can move through water.


## Underwater Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Decimal number | Movement speed of the entity under water. | Dolphin: `0.15`, Elder Guardian: `0.3`, Guardian: `0.12` | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:underwater_movement": {
  "value": 0.15
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:underwater_movement": {
  "value": 0.3
}
```

#### [Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json)


```json
"minecraft:underwater_movement": {
  "value": 0.12
}
```

#### [Skeleton Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton_horse.json)


```json
"minecraft:underwater_movement": {
  "value": 0.08
}
```
