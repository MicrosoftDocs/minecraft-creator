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

## Entity Slime Float Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| jump_chance_percentage | 0.800000011920929 | Decimal number | Percent chance a slime or magma cube has to jump while in water / lava. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Magma Cube: `1` | 
| speed_multiplier | 1.2000000476837158 | Decimal number | Determines the multiplier the entity's speed is modified by when moving through water / lava. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:behavior.slime_float": {
  "priority": 1
}
```
