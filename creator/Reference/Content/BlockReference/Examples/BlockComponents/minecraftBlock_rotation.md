---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:rotation
ms.prod: gaming
---

# Block Documentation - minecraft:rotation

`minecraft:rotation` is a `Vector` component that sets the block's rotation around the center of the cube in degrees. The rotation is specified as [x, y, z]. Angles need to be in factors of 90.


>[!IMPORTANT]
> `minecraft:rotation` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Default Value of the Component

This component is specified as a `Vector` with 3 elements. If this component is omitted, the default value for this component is `[0.0, 0.0, 0.0]` (no rotation applied).

## Example

```json
"minecraft:rotation": [90.0, 0.0, 0.0]
```
