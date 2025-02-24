---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.dragonflaming"
description: "Describes the minecraft:behavior.dragonflaming ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.dragonflaming

Allows this entity to use a flame-breath attack.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Ender Dragon (minecraft:ender_dragon)
> 

## Dragonflaming Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 10 | Decimal number | Time (in seconds), after roar, to breath flame. |  | 
| flame_time | 0.5 | Decimal number | Time (in seconds), after roar, to breath flame. |  | 
| ground_flame_count | 4 | Integer number | Number of ground flame-breath attacks to use before flight-takeoff. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ender Dragon: `1` | 
| roar_time | 2 | Decimal number | Time (in seconds) to roar, before breathing flame. |  | 

## Samples

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:behavior.dragonflaming": {
  "priority": 1
}
```
