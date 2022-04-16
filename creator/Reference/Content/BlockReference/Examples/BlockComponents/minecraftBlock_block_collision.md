---
author: JDHeaden
ms.author: v-jillheaden
title: Block Documentation - minecraft:block_collision
description:
ms.prod: gaming
---

# Block Documentation - minecraft:block_collision

`minecraft:block_collision` describes the collision of the block with entities and actors. If set to false, it disables the collision of the block with entities. An origin of [-8.0, 0.0, -8.0] with a size of [16, 16, 16] is a unit cube.

>[!IMPORTANT]
> `minecraft:block_collision` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Extra Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------|:-----------:|:-----------|
| origin| [-8.0, 0.0, -8.0]| Vector [a, b, c]| Minimal position Bounds of the collision box |
| size| [16.0, 16.0, 16.0]| Vector [a, b, c]| Size of each side of the box of the component |

## Example

```json
"minecraft:block_collision": false
```
