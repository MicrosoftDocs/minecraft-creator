---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:follow_range"
description: "Describes the minecraft:follow_range entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:follow_range

Defines the range, in blocks, that a mob will pursue a target.


## Follow Range Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | Maximum distance the mob will go from a target. | Blaze: `48`, Creaking: `32`, Elder Guardian: `16` | 
| value | *not set* | Integer number | The radius of the area of blocks the entity will attempt to stay within around a target. | Allay: `1024`, Blaze: `48`, Breeze: `32` | 

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

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:follow_range": {
  "value": 32,
  "max": 32
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:follow_range": {
  "value": 16,
  "max": 16
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:follow_range": {
  "value": 64,
  "max": 64
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:follow_range": {
  "value": 64
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:follow_range": {
  "value": 40,
  "max": 40
}
```

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)


```json
"minecraft:follow_range": {
  "value": 48
}
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:follow_range": {
  "value": 128
}
```

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:follow_range": 30
```
