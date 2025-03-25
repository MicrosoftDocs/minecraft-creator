---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stay_near_noteblock"
description: "Describes the minecraft:behavior.stay_near_noteblock ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stay_near_noteblock

The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.


## Stay Near Noteblock Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| listen_time | 30 | Integer number | Sets the time an entity should stay near a noteblock after hearing it. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `5` | 
| speed | 1 | Decimal number | Sets the entity's speed when moving toward the block. | Allay: `8` | 
| start_distance | 10 | Decimal number | Sets the distance the entity needs to be away from the block to attempt to start the goal. | Allay: `16` | 
| stop_distance | 2 | Decimal number | Sets the distance from the block the entity will attempt to reach. | Allay: `4` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.stay_near_noteblock": {
  "priority": 5,
  "speed": 8,
  "start_distance": 16,
  "stop_distance": 4
}
```
