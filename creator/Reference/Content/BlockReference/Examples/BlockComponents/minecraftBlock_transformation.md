---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:transformation
ms.prod: gaming
description: "A reference document detailing the 'transformation' block component"
---

# Block Documentation - minecraft:transformation

`minecraft:transformation` supports rotation, scaling, and translation. The component can be added to the whole block and/or to individual block permutations. Transformed geometries still have the same restrictions that non-transformed geometries have such as a maximum size of 30/16 units.

## Example

```json
"minecraft:transformation": {
  "translation": [0.0, 0.1, -0.1],
  "scale": [0.5, 1, 1.5],
  "rotation": [90, 180, 0]
}
```
