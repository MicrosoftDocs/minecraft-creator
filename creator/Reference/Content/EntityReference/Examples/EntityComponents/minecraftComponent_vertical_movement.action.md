---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:vertical_movement_action"
description: "Describes the minecraft:vertical_movement_action entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:vertical_movement_action

When configured as a rideable entity, the entity will move upwards or downwards when the player uses the jump action.


## Vertical Movement Action Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| vertical_velocity | 0.5 | Decimal number | Vertical velocity to apply when jump action is issued. | Happy Ghast: `0.5` | 

## Samples

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:vertical_movement_action": {
  "vertical_velocity": 0.5
}
```
