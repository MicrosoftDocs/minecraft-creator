---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.player_ride_tamed"
description: "Describes the minecraft:behavior.player_ride_tamed ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.player_ride_tamed

Allows the mob to be ridden by the player after being tamed.


## Player Ride Tamed Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples

#### [Skeleton Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton_horse.json)


```json
"minecraft:behavior.player_ride_tamed": {}
```
