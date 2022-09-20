---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:display_name
ms.prod: gaming
---

# Block Documentation - minecraft:display_name

`minecraft:display_name` specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this component is omitted, the name of the block will be used as the display name.

>[!IMPORTANT]
> `minecraft:display_name` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| Localization string|

## Extra Parameters

`minecraft:display_name` does not use any extra parameters.

## Example

```json
"minecraft:display_name": "customBlock"
```
