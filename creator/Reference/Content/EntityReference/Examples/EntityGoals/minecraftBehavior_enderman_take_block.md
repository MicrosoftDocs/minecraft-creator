---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.enderman_take_block"
description: "Describes the minecraft:behavior.enderman_take_block ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.enderman_take_block

Allows the enderman to take a block and carry it around.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Enderman (minecraft:enderman)
> 

## Enderman Take Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Enderman: `11` | 

## Samples

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:behavior.enderman_take_block": {
  "priority": 11
}
```
