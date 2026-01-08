---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.slime_float"
description: "Describes the minecraft:behavior.slime_float ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.slime_float

Allow slimes to float in water / lava.

> [!Note]
> Can only be used on the following types of entity:
> 
> * Slime (minecraft:slime)
> * Magma Cube (minecraft:magma_cube)
> 

## Slime Float Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| jump_chance_percentage | 0.8 | Decimal number | Percent chance a slime or magma cube has to jump while in water / lava. | Magma Cube: `0.8` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Magma Cube: `1` | 
| speed_multiplier | 1.2 | Decimal number | Determines the multiplier the entity's speed is modified by when moving through water / lava. | Magma Cube: `1.2` | 

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:behavior.slime_float": {
  "priority": 1,
  "jump_chance_percentage": 0.8,
  "speed_multiplier": 1.2
}
```
