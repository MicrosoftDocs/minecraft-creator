---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:icon
description: "A reference document detailing the 'icon' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:icon

`minecraft:icon` sets the icon item component. Determines the icon to represent the item in the UI and elsewhere.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|textures| *not set*| JSON Object| This map contains the different textures that can be used for the item's icon. Default will contain the actual icon texture. Armor trim textures and palettes can be specified here as well. The icon textures are the keys from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file. |

## Example

```json
"minecraft:icon":{
    "textures": "oak_slab"
}
```
