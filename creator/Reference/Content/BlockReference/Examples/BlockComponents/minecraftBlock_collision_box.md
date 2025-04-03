---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:collision_box"
description: "Describes the minecraft:collision_box block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:collision_box

Defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.  If this component is omitted, the default value for this component is true, which will give your block the default values for its parameters (a collision box the size/shape of a regular block).

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Collision Box Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| origin | [-8, 0, -8] | x, y, z coordinate array | Minimal position of the bounds of the collision box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |  | 
| size | [16, 16, 16] | x, y, z coordinate array | Size of each side of the collision box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |  | 

## Samples


```json
"minecraft:collision_box": {
  "origin": [
    -8,
    0,
    -8
  ],
  "size": [
    16,
    16,
    16
  ]
}
```

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:collision_box": true
```
