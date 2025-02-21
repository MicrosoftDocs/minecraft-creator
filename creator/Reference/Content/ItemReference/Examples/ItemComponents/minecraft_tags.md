---
author: mammerla
ms.author: mikeam
title: "Items Documentation - tags"
description: "Describes the tags Items"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - tags

Determines which tags are included on a given item.


## Tags Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | Array of objects | An array that can contain multiple item tags. | Apple: `["minecraft:is_food"]` | 

## Samples

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
{
  "tags": [
    "minecraft:is_food"
  ]
}
```
