---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:horse.jump_strength"
description: "Describes the minecraft:horse.jump_strength entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:horse.jump_strength

Determines the jump height for a horse or similar entity, like a donkey.


## Horse Jump Strength Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | [Value](#value) item | Value of jump strength the entity has when spawned. | Donkey: `0.5`, Horse: `{"range_min":0.4,"range_max":1}`, Zombie Horse: `{"range_min":0.5,"range_max":0.7}` | 
| value (Alternate 1) | *not set* | Decimal number |  |  | 

## Value
Describes the range of jump strength.


#### Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Decimal number | Defines the maximum strength level. |  | 
| range_min | *not set* | Decimal number | Defines the minimum strength level. |  | 

## Samples

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:horse.jump_strength": {
  "value": 0.5
}
```

#### [Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/horse.json)


```json
"minecraft:horse.jump_strength": {
  "value": {
    "range_min": 0.4,
    "range_max": 1
  }
}
```

#### [Zombie Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_horse.json)


```json
"minecraft:horse.jump_strength": {
  "value": {
    "range_min": 0.5,
    "range_max": 0.7
  }
}
```
