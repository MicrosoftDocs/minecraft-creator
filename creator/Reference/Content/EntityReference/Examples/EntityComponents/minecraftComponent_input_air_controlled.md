---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:input_air_controlled"
description: "Describes the minecraft:input_air_controlled entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:input_air_controlled

When configured as a rideable entity, the entity will be controlled using WASD controls and mouse to move in three dimensions.


## Input Air Controlled Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| backwards_movement_modifier | 0.5 | Decimal number | Modifies speed going backwards. | Happy Ghast: `0.5` | 
| strafe_speed_modifier | 0.4 | Decimal number | Modifies the strafe speed. | Happy Ghast: `1` | 

## Samples

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:input_air_controlled": {
  "strafe_speed_modifier": 1,
  "backwards_movement_modifier": 0.5
}
```
