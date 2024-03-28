---
author: mammerla
ms.author: mikeam
title: Volume Documentation - minecraft:bounds
description: "A reference document detailing the 'bounds' volume component"
ms.service: minecraft-bedrock-edition
---

# Volume Documentation - minecraft:bounds

>[!IMPORTANT]
> `minecraft:bounds` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

`minecraft:bounds` is a Volume Component defined by three parameters.

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| dimension| *not set*| String| The name of the dimension the bounding box will exist in: one of 'overworld', 'nether' or 'the end'. |
| max| *not set*| Vector [a, b, c]| The maximum block position of the bounding box. |
| min| *not set*| Vector [a, b, c]| The minimum block position of the bounding box. |

## Example

```json
"minecraft:bounds": {
  "dimension": "overworld",
  "min": [-50, -64, -50],
  "max": [50, 320, 50],
},
```
