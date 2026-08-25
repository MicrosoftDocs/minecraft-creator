---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:collision_box"
description: "Describes the minecraft:collision_box block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:collision_box

Defines the area of the block that collides with entities. If set to true, default values are used (a full 16x16x16 block). If set to false, the block's collision with entities is disabled, allowing entities to pass through. If this component is omitted, default values are used.

> [!Note]
> Released from the Holiday Creator Features experiment in 1.19.50. Pairs with the custom geometry component so creators can author bespoke collision shapes.

> [!Note]
> Supports an array of collision boxes (for multi-part collision shapes) and a maximum collision box height of 24 units (up from 16). Available without the Upcoming Creator Features experiment and without the format_version 1.21.130 requirement starting in 1.26.0.

> [!Note]
> This item requires a format version of at least 1.19.50.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Collision Box Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| origin | [-8, 0, -8] | x, y, z coordinate array | Minimal position of the bounds of the collision box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 24, 8), inclusive. | 
| size | [16, 24, 16] | x, y, z coordinate array | Size of each side of the collision box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 24, 8), inclusive. | 

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

#### Block Fabricator


```json
"minecraft:collision_box": true
```

#### Block Leaf Pile


```json
"minecraft:collision_box": {
  "origin": [
    -8,
    2,
    -8
  ],
  "size": [
    16,
    4,
    16
  ]
}
```

#### [Block Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json)


```json
"minecraft:collision_box": false
```
