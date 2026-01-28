---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:follow_range"
description: "Describes the minecraft:follow_range entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:follow_range

Defines the maximum range, in blocks, that a mob will pursue a target. This affects AI behaviors like chasing players or attacking.


## Follow Range Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | Maximum follow distance in blocks. The entity will not pursue targets beyond this range. | Blaze: `48`, Elder Guardian: `16` | 
| value | *not set* | Integer number | The default follow range in blocks. Entities will attempt to stay within this radius of their target. | Allay: `1024`, Blaze: `48`, Breeze: `32` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:follow_range": {
  "value": 1024
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:follow_range": {
  "value": 48,
  "max": 48
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:follow_range": {
  "value": 32
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:follow_range": {
  "value": 16,
  "max": 16
}
```
