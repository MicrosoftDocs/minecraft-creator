---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_indoors"
description: "Describes the minecraft:behavior.move_indoors ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_indoors

Allows this entity to move indoors.


## Move Indoors Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager: `4`, Villager v2: `6` | 
| speed_multiplier | 0.8 | Decimal number | The movement speed modifier to apply to the entity while it is moving indoors. | Villager: `0.8` | 
| timeout_cooldown | 8 | Decimal number | The cooldown time in seconds before the goal can be reused after pathfinding fails | Villager v2: `8` | 

## Samples

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.move_indoors": {
  "priority": 4,
  "speed_multiplier": 0.8
}
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.move_indoors": {
  "priority": 6,
  "speed_multiplier": 0.8,
  "timeout_cooldown": 8
}
```
