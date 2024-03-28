---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:collision_box
description: "A reference document detailing the 'collision_box' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:collision_box

`minecraft:collision_box` is a `boolean` or `JSON Object` that defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.

## Default Value of the Component

This component can be specified as a `Boolean`. If this component is omitted, the default value for this component is `true`, which will give your block the default values for its parameters (a collision box the size/shape of a regular block).

## Parameters

| Name| Default Value | Type|  Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| `origin`| [-8.0, 0.0, -8.0]| Vector [a, b, c]| Minimal position of the bounds of the collision box. `origin` is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |
| `size`| [16.0, 16.0, 16.0]| Vector [a, b, c]| Size of each side of the collision box. Size is specified as [x, y, z]. `origin` + `size` must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |

## Example (Boolean)

```json
"minecraft:collision_box": false
```

## Example (JSON Object)

```json
"minecraft:collision_box": {
    "origin": [-8.0, 0.0, -8.0],
     "size": [16.0, 16.0, 16.0]
}
```
