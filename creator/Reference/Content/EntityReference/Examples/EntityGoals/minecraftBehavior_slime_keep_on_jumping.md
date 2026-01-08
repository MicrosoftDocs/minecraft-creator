---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.slime_keep_on_jumping"
description: "Describes the minecraft:behavior.slime_keep_on_jumping ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.slime_keep_on_jumping

Allows the entity to continuously jump around like a slime.

> [!Note]
> Can only be used on the following types of entity:
> 
> * Slime (minecraft:slime)
> * Magma Cube (minecraft:magma_cube)
> 

## Slime Keep On Jumping Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Magma Cube: `5` | 
| speed_multiplier | 1 | Decimal number | Determines the multiplier this entity's speed is modified by when jumping around. | Magma Cube: `1` | 

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:behavior.slime_keep_on_jumping": {
  "priority": 5,
  "speed_multiplier": 1
}
```
