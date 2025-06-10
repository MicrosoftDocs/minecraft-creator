---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.make_love"
description: "Describes the minecraft:behavior.make_love ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.make_love

Allows the villager to look for a mate to spawn other villagers with.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Make Love Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `5`, Villager: `6` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.make_love": {
  "priority": 5
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.make_love": {
  "priority": 6
}
```
