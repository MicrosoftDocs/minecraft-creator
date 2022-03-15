---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:icon
ms.prod: gaming
---

# Item Documentation - minecraft:icon

`minecraft:icon` sets the icon item component. Determines the icon to represent the item in the UI and elsewhere.

>[!IMPORTANT]
> `minecraft:icon` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|legacy_id| *not set*| Integer| Legacy texture id for older item icons|
|texture| *not set*| String| The key from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file|

## Example

```json
"minecraft:icon":{
    "legacy_id": 1,
    "texture": "oak_slab"
}
```
