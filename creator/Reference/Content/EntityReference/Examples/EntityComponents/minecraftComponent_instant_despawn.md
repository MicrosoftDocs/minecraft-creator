---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:instant_despawn"
description: "Describes the minecraft:instant_despawn entity component"
ai-usage: ai-assisted
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

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:instant_despawn": {}
```
