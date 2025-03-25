---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:horse.jump_strength"
description: "Describes the minecraft:horse.jump_strength entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:horse.jump_strength

Determines the jump height for a horse or similar entity, like a donkey.


## Horse Jump Strength Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Array of [Value](#value-item-type) items | Value of jump strength the entity has when spawned. | Donkey: `0.5`, Horse: `{"range_min":0.4,"range_max":1}` | 
| value (Alternate 1) | *not set* | Integer number |  |  | 

## Value item type
Describes the range of jump strength.


#### Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number | Defines the maximum strength level. |  | 
| range_min | *not set* | Integer number | Defines the minimum strength level. |  | 

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
