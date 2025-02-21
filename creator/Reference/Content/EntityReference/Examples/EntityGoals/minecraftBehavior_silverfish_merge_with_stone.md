---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.silverfish_merge_with_stone"
description: "Describes the minecraft:behavior.silverfish_merge_with_stone ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.silverfish_merge_with_stone

Allows the mob to go into stone blocks like Silverfish do.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Silverfish (minecraft:silverfish)
> 

## Silverfish Merge With Stone Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Silverfish: `5` | 

## Samples

#### [Silverfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json)


```json
"minecraft:behavior.silverfish_merge_with_stone": {
  "priority": 5
}
```
