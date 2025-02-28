---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_village"
description: "Describes the minecraft:behavior.move_to_village ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_village

Allows the mob to move into a random location within a village.


## Move To Village Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Pillager: `2` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `6`, Pillager: `5`, Vindicator: `4` | 
| search_range | 0 | Integer number | The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Evocation Illager: `0.7`, Pillager: `1`, Witch: `1.2` | 

## Samples

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.move_to_village": {
  "priority": 6,
  "speed_multiplier": 0.7
}
```

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)


```json
"minecraft:behavior.move_to_village": {
  "priority": 5,
  "speed_multiplier": 1,
  "goal_radius": 2
}
```

#### [Vindicator](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vindicator.json)


```json
"minecraft:behavior.move_to_village": {
  "priority": 4,
  "speed_multiplier": 1,
  "goal_radius": 2
}
```

#### [Witch](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/witch.json)


```json
"minecraft:behavior.move_to_village": {
  "priority": 3,
  "speed_multiplier": 1.2,
  "goal_radius": 2
}
```
