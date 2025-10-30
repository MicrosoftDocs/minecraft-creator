---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.flee_sun"
description: "Describes the minecraft:behavior.flee_sun ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.flee_sun

Allows the mob to run away from direct sunlight and seek shade.


## Flee Sun Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Bogged: `2`, Parched: `3`, Zombie Horse: `1` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Bogged: `1`, Zombie Horse: `1.2` | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.flee_sun": {
  "priority": 2,
  "speed_multiplier": 1
}
```

#### [Parched](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json)


```json
"minecraft:behavior.flee_sun": {
  "priority": 3,
  "speed_multiplier": 1
}
```

#### [Zombie Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_horse.json)


```json
"minecraft:behavior.flee_sun": {
  "priority": 1,
  "speed_multiplier": 1.2
}
```

#### [Zombie Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_villager.json)


```json
"minecraft:behavior.flee_sun": {
  "priority": 4,
  "speed_multiplier": 1
}
```
