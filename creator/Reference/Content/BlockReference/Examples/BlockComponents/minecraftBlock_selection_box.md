---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:selection_box
ms.prod: gaming
---

# Block Documentation - minecraft:selection_box

`minecraft:selection_box` is a `Boolean` or `JSON Object` component that defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.


>[!IMPORTANT]
> `minecraft:selection_box` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Default Parameter

|Default Value|Type |
|:----|:----|
|true| Boolean/JSON Object|

## Extra Parameters

| Name| Type |Default Value| Description
:-----------:|:-----------:|:-----------:|:-----------:
| origin| Vector [a, b, c] | [-8.0, 0.0, -8.0]| Minimal position of the bounds of the selection box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.|
| size| Vector [a, b, c] | [16.0, 16.0, 16.0]| Size of each side of the selection box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.|


## Example

```json
"minecraft:selection_box": true
```
