---
author: JDHeaden
ms.author: v-jillheaden
title: Block Documentation - minecraft:collision_box
ms.prod: gaming
---

# Block Documentation - minecraft:collision_box

`minecraft:collision_box` is a `boolean` or `JSON Object` that defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.

>[!IMPORTANT]
> `minecraft:collision_box` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Parameters

| Name| Default Value | Type|  Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| `origin`| [-8.0, 0.0, -8.0]| Vector [a, b, c]| Minimal position of the bounds of the collision box. `origin` is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |
| `size`| [16.0, 16.0, 16.0]| Vector [a, b, c]| Size of each side of the collision box. Size is specified as [x, y, z]. `origin` + `size` must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |

git ## Example

```json
"minecraft:collision_box": false
```
