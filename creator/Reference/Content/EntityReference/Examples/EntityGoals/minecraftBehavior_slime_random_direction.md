---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.slime_random_direction"
description: "Describes the minecraft:behavior.slime_random_direction ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.slime_random_direction

Allows the entity to move in random directions like a slime.

> [!Note]
> Can only be used on the following types of entity:
> 
> * Slime (minecraft:slime)
> * Magma Cube (minecraft:magma_cube)
> 

## Slime Random Direction Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| add_random_time_range | 3 | Integer number | Additional time (in whole seconds), chosen randomly in the range of [0, "add_random_time_range"], to add to "min_change_direction_time". | Magma Cube: `3` | 
| min_change_direction_time | 2 | Decimal number | Constant minimum time (in seconds) to wait before choosing a new direction. | Magma Cube: `2` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Magma Cube: `4` | 
| turn_range | 360 | Integer number | Maximum rotation angle range (in degrees) when randomly choosing a new direction. | Magma Cube: `360` | 

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:behavior.slime_random_direction": {
  "priority": 4,
  "add_random_time_range": 3,
  "turn_range": 360,
  "min_change_direction_time": 2
}
```
