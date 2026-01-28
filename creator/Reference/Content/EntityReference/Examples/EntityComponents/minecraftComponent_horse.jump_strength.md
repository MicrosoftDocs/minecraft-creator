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
| value | *not set* | [Value](#value) item | Value of jump strength the entity has when spawned. | Skeleton Horse: `{"range_min":0.4,"range_max":1}` | 
| value (Alternate 1) | *not set* | Decimal number |  |  | 

## Value
Describes the range of jump strength.


#### Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Decimal number | Defines the maximum strength level. |  | 
| range_min | *not set* | Decimal number | Defines the minimum strength level. |  | 

## Samples

#### [Skeleton Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton_horse.json)


```json
"minecraft:horse.jump_strength": {
  "value": {
    "range_min": 0.4,
    "range_max": 1
  }
}
```
