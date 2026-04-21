---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.jump"
description: "Describes the minecraft:movement.jump entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.jump

Move control that causes the mob to jump as it moves with a specified delay between jumps.

> [!Note]
> In order to follow targets, this entity must have the `minecraft:behavior.slime_attack` component, otherwise the entity will jump in the direction it's looking in.


## Jump Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| jump_delay | *not set* | Range of floats | Delay in seconds after landing when using the slime move control. Can be a single number, an array [min, max], or an object with range_min and range_max. | Sulfur Cube: `[0.5,1.5]`, `[0.16,0.5]` | 
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. |  | 

## Samples

#### [Sulfur Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json)

At /minecraft:entity/component_groups/minecraft:sulfur_cube_without_target/minecraft:movement.jump/: 

```json
"minecraft:movement.jump": {
  "jump_delay": [
    0.5,
    1.5
  ]
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_with_target/minecraft:movement.jump/: 

```json
"minecraft:movement.jump": {
  "jump_delay": [
    0.16,
    0.5
  ]
}
```
