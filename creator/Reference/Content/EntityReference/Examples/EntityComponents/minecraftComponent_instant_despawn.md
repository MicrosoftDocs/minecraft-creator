---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:instant_despawn"
description: "Describes the minecraft:instant_despawn entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:instant_despawn

Despawns the Actor immediately.


## Instant Despawn Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| remove_child_entities | false | Boolean true/false | If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned. |  | 

## Samples

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:instant_despawn": {}
```
