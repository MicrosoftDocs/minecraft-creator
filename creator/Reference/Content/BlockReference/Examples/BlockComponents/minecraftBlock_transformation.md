---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:transformation"
description: "Describes the minecraft:transformation block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:transformation

The block's translation, rotation and scale with respect to the center of its world position.

> [!Note]
> Added in 1.19.80 as a replacement for the previous block rotation component, adding support for scaling and translation in addition to rotation. May be added to the whole block and/or to individual block permutations.

> [!Note]
> Added rotation_pivot and scale_pivot attributes in 1.21.0 to support pivoted rotation and scale operations.

> [!Note]
> This item requires a format version of at least 1.19.80.


## Block Transformation Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| rotation | [0, 0, 0] | Array of numbers | The block's rotation in increments of 90 degrees | 
| rotation (Rotation) | *not set* | [Rotation (Rotation)](#rotation-rotation) item |  | 
| rotation_pivot | [0, 0, 0] | x, y, z coordinate array | The point to apply rotation around. This item requires a format version of at least 1.21.0. | 
| rotation_pivot (Rotation Pivot) | *not set* | [Rotation Pivot (Rotation Pivot)](#rotation-pivot-rotation-pivot) item |  | 
| scale | [1, 1, 1] | Array of numbers | The block's scale | 
| scale (Scale) | *not set* | [Scale (Scale)](#scale-scale) item |  | 
| scale_pivot | [0, 0, 0] | x, y, z coordinate array | The point to apply scale around. This item requires a format version of at least 1.21.0. | 
| scale_pivot (Scale Pivot) | *not set* | [Scale Pivot (Scale Pivot)](#scale-pivot-scale-pivot) item |  | 
| translation | [0, 0, 0] | Array of numbers | The block's translation | 
| translation (Translation) | *not set* | [Translation (Translation)](#translation-translation) item |  | 

### Rotation (Rotation)

#### Rotation Properties

**JSON path:** `rotation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Rotation Pivot (Rotation Pivot)

Same structure as [Rotation (Rotation)](#rotation-rotation).


### Scale (Scale)

Same structure as [Rotation (Rotation)](#rotation-rotation).


### Scale Pivot (Scale Pivot)

Same structure as [Rotation (Rotation)](#rotation-rotation).


### Translation (Translation)

Same structure as [Rotation (Rotation)](#rotation-rotation).
