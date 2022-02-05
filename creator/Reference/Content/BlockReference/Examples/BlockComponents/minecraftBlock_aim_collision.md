---
author: v-jillheaden
ms.author: v-jillheaden
title: Block Documentation - minecraft:aim_collision
ms.prod: gaming
---

# Block Documentation - minecraft:aim_collision

`minecraft:aim_collision` is a `boolean` that, if it is set to false, it disables the collision of the block with entities.

>[!IMPORTANT]
> `minecraft:aim_collision` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Default Parameter

|Default Value|Type |
|:----|:----|
|true| Boolean|

## Extra Parameters

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------|:-----------|
| Array| origin| [-8.0, 0.0, -8.0]| Minimal position Bounds of the collision box. Origin can't be smaller than (-8, 0, -8) and can't be more than (8, 16, 8). |
| Array| size| [16.0, 16.0, 16.0]| Size of each side of the box of the component. When added to origin it can't make origin smaller than (-8, 0, -8) or more than (0, 16, 8). |

## Example

```json
"minecraft:aim_collision": false
```
