---
author: mammerla
ms.author: mikeam
title: Volume Documentation - minecraft:fog
description: "A reference document detailing the 'fog' volume component"
ms.service: minecraft-bedrock-edition
---

# Volume Documentation -  minecraft:fog

>[!IMPORTANT]
> `minecraft:fog` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

`minecraft:fog` is a Volume Component that is defined by two parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:----------|:----------|:----------|:----------|
| fog_identifier| *not set*| String| The identifier of a fog definition. Note that you will not receive any feedback if the definition does not exist. |
| priority| INT_MAX| Integer| The priority for this fog definition setting. Smaller numbers have higher priority. Fogs with equal priority will be combined together. |

## Extra Parameters

`minecraft:fog` does not use any extra parameters.

## Example

```json
"minecraft:fog": {
  "fog_identifier": "minecraft:fog_savanna",
  "priority": 1
}
```
