---
author: mammerla
ms.author: mikeam
title: Volume Documentation - minecraft:bounds
ms.prod: gaming
description: "A reference document detailing the 'bounds' volume component"
---

# Volume Documentation - minecraft:bounds

>[!IMPORTANT]
> `minecraft:bounds` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

`minecraft:bounds` is a Volume Component defined by three parameters. Each item has the following properties:

## Default Parameter

|Default Value|Type |
|:----|:----|
|0.0| Decimal|

## Extra Parameters

`minecraft:bounds` does not use any extra parameters.

## Example

```json
"minecraft:bounds": {
  "dimension": "overworld",
  "min": [-50, -64, -50],
  "max": [50, 320, 50],
},
```
