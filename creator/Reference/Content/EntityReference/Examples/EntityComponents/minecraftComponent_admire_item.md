---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:admire_item"
description: "Describes the minecraft:admire_item entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:admire_item

Allows an entity to ignore attackable targets for a given duration.


## Admire Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_after_being_attacked | 0 | Integer number | Duration, in seconds, for which mob won't admire items if it was hurt | Piglin: `20` | 
| duration | 10 | Integer number | Duration, in seconds, that the mob is pacified. | Piglin: `8` | 

## Samples

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:admire_item": {
  "duration": 8,
  "cooldown_after_being_attacked": 20
}
```
