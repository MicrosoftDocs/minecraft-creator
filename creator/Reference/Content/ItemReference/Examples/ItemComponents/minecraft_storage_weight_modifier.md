---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:storage_weight_modifier"
description: "Describes the minecraft:storage_weight_modifier item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:storage_weight_modifier

Specifies the maximum weight limit that a storage item can hold.


## Minecraft Storage Weight Modifier Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| weight_in_storage_item | *not set* | Integer number | The weight of this item when inside another Storage Item. Default is 4. 0 means item is not allowed in another Storage Item. | Black Bundle: `4` | 

## Samples

#### [Black Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/black_bundle.json)


```json
"minecraft:storage_weight_modifier": {
  "weight_in_storage_item": 4
}
```
