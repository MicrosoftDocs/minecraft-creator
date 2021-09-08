---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:icon
ms.prod: gaming
---

# Item Documentation - minecraft:icon

`minecraft:icon` sets the icon item component.Determines the icon to represent the item in the UI and elsewhere

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|frame|0 |Decimal |An index or expression for which frame of the icon to display.|
|legacy_id| *not set*| Integer| Legacy texture id for older item icons|
|texture| *not set*| String| The key from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file|

## Example

```json
"minecraft:icon":{
    "frame": 0,
    "legacy_id": 1,
    "texture": "oak_slab"
}
```
