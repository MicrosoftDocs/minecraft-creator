---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:transformation
ms.prod: gaming
---

# Block Documentation - minecraft:transformation

`minecraft:translation` supports rotation, scaling, and translation. The component can be added to the whole block and/or to individual block permutations. Transformed geometries still have the same restrictions that non-transformed geometries have such as a maximum size of 30/16 units.

>[!IMPORTANT]
> `minecraft:transformation` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Example

```json
"minecraft:transformation": {
  "translation": [0.0, 0.1, -0.1],
  "scale": [0.5, 1, 1.5],
  "rotation": [90, 180, 0]
}
```
