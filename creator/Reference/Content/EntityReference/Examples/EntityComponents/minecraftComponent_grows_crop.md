---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:grows_crop"
description: "Describes the minecraft:grows_crop entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:grows_crop

Could increase crop growth when entity walks over crop.


## Grows Crop Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | 0 | Decimal number | Value between 0-1. Chance of success per tick. | Bee: `0.03` | 
| charges | 10 | Integer number | Number of charges | Bee: `10` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:grows_crop": {
  "charges": 10,
  "chance": 0.03
}
```
