---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:icon
ms.prod: gaming
description: "A reference document detailing the 'icon' item component"
---

# Item Documentation - minecraft:icon

`minecraft:icon` sets the icon item component. Determines the icon to represent the item in the UI and elsewhere.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|texture| *not set*| String| The key from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file|

## Example

```json
"minecraft:icon":{
    "texture": "oak_slab"
}
```
