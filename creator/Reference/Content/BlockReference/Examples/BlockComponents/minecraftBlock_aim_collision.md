---
author: JDHeaden
ms.author: v-jillheaden
title: Block Documentation - minecraft:aim_collision
ms.prod: gaming
---

# Block Documentation - minecraft:aim_collision

`minecraft:aim_collision` is a `boolean` or `JSON Object` that describes the collision of the block for raycast and its outline. If set to false, the collision of the block with entities is disabled. An origin of [-8.0, 0.0, -8.0] with a size of [16, 16, 16] is a unit cube.

>[!IMPORTANT]
> `minecraft:aim_collision` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Default Parameter

|Default Value|Type | Description |
|:----|:----|
|true| Boolean|  Describes the collision of the block for raycast and its outline. If set to false, the collision of the block with entities is disabled. An origin of [-8.0, 0.0, -8.0] with a size of [16, 16, 16] is a unit cube. |

## Extra Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------|:-----------:|:-----------|
| origin| [-8.0, 0.0, -8.0]| Vector [a, b, c]|  Origin is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |
| size| [16.0, 16.0, 16.0]| Vector [a, b, c]| Size of each side of the collision box. Size is specified as [x, y, z]. Origin + size must be in the range (-8, 0, -8) to (8, 16, 8), inclusive. |

## Example

```json
"minecraft:aim_collision": false
```
