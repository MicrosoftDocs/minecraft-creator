---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.look_at_entity"
description: "Describes the minecraft:behavior.look_at_entity ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.look_at_entity

Compels an entity to look at a specific entity by rotating the `head` bone pose within a set limit.


## Look At Entity Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_of_view_horizontal | 360 | Integer number | The angle in degrees that the mob can see in the Y-axis (up-down). | Ravager: `45` | 
| angle_of_view_vertical | 360 | Integer number | The angle in degrees that the mob can see in the X-axis (left-right). |  | 
| filters | *not set* | Minecraft filter | Filter to determine the conditions for this mob to look at the entity | Evocation Illager: `{"test":"is_family","subject":"other","value":"mob"}` | 
| look_distance | 8 | Decimal number | The distance in blocks from which the entity will look at the nearest entity. | Evocation Illager: `8`, Vex: `6` | 
| look_time | *not set* | Range of integers | Time range to look at the nearest entity. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `10`, Vex: `9` | 
| probability | 0.02 | Decimal number | The probability of looking at the target. A value of 1.00 is 100%. | Vex: `0.02` | 

## Samples

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.look_at_entity": {
  "priority": 10,
  "look_distance": 8,
  "filters": {
    "test": "is_family",
    "subject": "other",
    "value": "mob"
  }
}
```

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:behavior.look_at_entity": {
  "priority": 10,
  "look_distance": 8,
  "angle_of_view_horizontal": 45,
  "filters": {
    "test": "is_family",
    "subject": "other",
    "value": "mob"
  }
}
```

#### [Vex](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json)


```json
"minecraft:behavior.look_at_entity": {
  "priority": 9,
  "look_distance": 6,
  "probability": 0.02,
  "filters": {
    "test": "is_family",
    "subject": "other",
    "value": "mob"
  }
}
```
