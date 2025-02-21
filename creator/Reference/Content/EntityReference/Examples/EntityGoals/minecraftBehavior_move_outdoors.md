---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_outdoors"
description: "Describes the minecraft:behavior.move_outdoors ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_outdoors

Allows this entity to move outdoors.


## Move Outdoors Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | The radius away from the target block to count as reaching the goal. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `2` | 
| search_count | 10 | Integer number | The amount of times to try finding a random outdoors position before failing. |  | 
| search_height | 5 | Integer number | The y range to search for an outdoors position for. |  | 
| search_range | 15 | Integer number | The x and z range to search for an outdoors position for. |  | 
| speed_multiplier | 0.5 | Decimal number | The movement speed modifier to apply to the entity while it is moving outdoors. | Villager V2: `0.8` | 
| timeout_cooldown | 8 | Decimal number | The cooldown time in seconds before the goal can be reused after pathfinding fails | Villager V2: `8` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.move_outdoors": {
  "priority": 2,
  "speed_multiplier": 0.8,
  "timeout_cooldown": 8
}
```
