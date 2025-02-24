---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:damage_over_time"
description: "Describes the minecraft:damage_over_time entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:damage_over_time

Applies defined amount of damage to the entity at specified intervals.


## Damage Over Time Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_per_hurt | 1 | Integer number | Amount of damage caused each hurt. | Axolotl: `1` | 
| time_between_hurt | 0 | Decimal number | Time in seconds between damage. | Vex: `1` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:damage_over_time": {
  "damage_per_hurt": 1,
  "time_between_hurt": 0
}
```

#### [Vex](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json)


```json
"minecraft:damage_over_time": {
  "damage_per_hurt": 1,
  "time_between_hurt": 1
}
```
