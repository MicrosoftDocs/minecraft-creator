---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:leashable_to"
description: "Describes the minecraft:leashable_to entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:leashable_to

Allows players to leash entities to this entity, retrieve entities already leashed to it, or free them using shears. For the last interaction to work, the leashed entities must have "can_be_cut" set to true in their "minecraft:leashable" component.


## Leashable To Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_retrieve_from | false | Boolean true/false | Allows players to retrieve entities that are leashed to this entity. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:leashable_to": {}
```
