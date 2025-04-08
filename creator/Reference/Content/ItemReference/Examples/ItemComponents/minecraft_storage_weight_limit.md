---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:storage_weight_limit"
description: "Describes the minecraft:storage_weight_limit item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:storage_weight_limit

Specifies the maximum weight limit that a storage item can hold.


## Storage Weight Limit Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_weight_limit | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. Value must be <= 64. | Black Bundle: `64` | 

## Samples

#### [Black Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/black_bundle.json)


```json
"minecraft:storage_weight_limit": {
  "max_weight_limit": 64
}
```
