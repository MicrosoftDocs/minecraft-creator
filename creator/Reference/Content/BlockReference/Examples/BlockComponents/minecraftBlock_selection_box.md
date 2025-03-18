---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:selection_box"
description: "Describes the minecraft:selection_box block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:selection_box

Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Selection Box Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| origin | [-8, 0, -8] | x, y, z coordinate array | Minimal position of the bounds of the selection box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |  | 
| size | [16, 16, 16] | x, y, z coordinate array | Size of each side of the selection box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |  | 

## Samples

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:selection_box": true
```
