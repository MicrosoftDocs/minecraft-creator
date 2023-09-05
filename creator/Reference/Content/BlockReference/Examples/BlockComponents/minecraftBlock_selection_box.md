---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:selection_box
description: "A reference document detailing the 'selection_box' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:selection_box

`minecraft:selection_box` is a `Boolean` or `JSON Object` component that defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.

## Default Value of the Component

This component can be specified as a Boolean. If this component is omitted, the default value for this component is true, which will give your block the default values for its parameters (a selection box the size/shape of a regular block).
Parameters

## Parameters

| Name| Type |Default Value| Description
:-----------:|:-----------:|:-----------:|:-----------:
| origin| Vector [a, b, c] | [-8.0, 0.0, -8.0]| Minimal position of the bounds of the selection box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.|
| size| Vector [a, b, c] | [16.0, 16.0, 16.0]| Size of each side of the selection box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.|

## Example (Boolean)

```json
"minecraft:selection_box": true
```

## Example (JSON Object)

```json
"minecraft:selection_box": {
     "origin": [-8.0, 0.0, -8.0],
     "size": [16.0, 16.0, 16.0]
}
```
