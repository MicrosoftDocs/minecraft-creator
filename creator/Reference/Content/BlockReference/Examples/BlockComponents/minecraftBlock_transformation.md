---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - minecraft:transformation
description: "A reference document detailing the 'transformation' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:transformation

`minecraft:transformation` supports rotation, scaling, and translation. Rotation and scaling around a pivot is also supported. The component can be added to a whole block and/or to individual block permutations. Transformed geometries retain the same restrictions that non-transformed geometries have, such as a maximum size of 30/16 units.

## Parameters

| Name | Type | Default Value | Description |
|:----|:----|:----|:----|
| translation | Vector [a, b, c] | [0, 0, 0] | Amount the block should be translated along each axis. "Translation" is specified as [x, y, z] using floating point values. |
| scale | Vector [a, b, c] | [1, 1, 1] | Amount the block should be scaled along each axis. "Scale" is specified as [x, y, z] using floating point values. |
| scale_pivot | Vector [a, b, c] | [0, 0, 0] | Offset to the pivot point around which to apply the scale. "scale_pivot" is specified as [x, y, z] using floating point values. |
| rotation | Vector [a, b, c] | [0, 0, 0] | Amount in degrees the block should be rotated on each axis. "rotation" is specified as [x, y, z] using floating point values and must be axis aligned, otherwise the value will be rounded to the nearest axis-aligned value. |
| rotation_pivot | Vector [a, b, c] | [0, 0, 0] | Offset to the pivot point around which to apply the rotation. "rotation_pivot" is specified as [x, y, z] using floating point values. |

## Example

```json
"minecraft:transformation": {
  "translation": [0.0, 0.1, -0.1],
  "scale": [0.5, 1, 1.5],
  "rotation": [90, 180, 0]
}
```

## Example (Pivots)

```json
"minecraft:transformation": {
    "translation": [0.1, 0.1, 0.1],
    "scale": [0.5,0.5,0.5],
    "scale_pivot": [0.2,0.2,0.2],
    "rotation": [0, 0, 180],
    "rotation_pivot":[-0.25, -0.25, 0]
}
```

The operations to output the final transformation are always applied in the following order: rotation, scale, translation.
Pivots are applied before and after their respective operation to move to the desired pivot point and back.

In our example, the block geometry is:

1. Rotated 180 degrees around the rotation_pivot (offset from the block's origin, [0, 0, 0])
2. Scaled by 0.5 around the scale_pivot (offset from the block's origin, [0, 0, 0])
3. Translated by 0.1

> [!NOTE]
> Transformation affects the block in-world once placed, and also affects the visual representation in-hand. Custom blocks using the transformation component should be viewed in-hand (in both first and third-person views!) to ensure the visuals match expectations.
