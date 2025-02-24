---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:scale_by_age"
description: "Describes the minecraft:scale_by_age entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:scale_by_age

Defines the entity's size interpolation based on the entity's age.


## Scale By Age Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| end_scale | 1 | Decimal number | Ending scale of the entity when it's fully grown. | Donkey: `1` | 
| start_scale | 1 | Decimal number | Initial scale of the newborn entity. | Donkey: `0.5` | 

## Samples

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:scale_by_age": {
  "start_scale": 0.5,
  "end_scale": 1
}
```
