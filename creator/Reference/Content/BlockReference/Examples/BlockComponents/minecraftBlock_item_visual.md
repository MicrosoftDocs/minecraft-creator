---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:item_visual
description: "A reference document detailing the 'item_visual' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:item_visual

`minecraft:item_visual` is a `JSON Object` component that specifies the block's item representation. The object contains `geometry` and `material_instances` parameters which map to the existing `minecraft:geometry` and `minecraft:material_instances` block components respectively. 

Both `minecraft:geometry` and `minecraft:material_instances` components are required when using the `minecraft:item_visual` component.

Experimental toggles required: Upcoming Creator Features

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| geometry| *not set* | JSON Object | The `minecraft:geometry` component used to represent the item's geometry. See [geometry](minecraftBlock_geometry.md) for more information on component use. |
| material_instances | *not set*  | JSON Object| The `minecraft:material_instances` component used to represent the item's materials. See [material_instances](minecraftBlock_material_instances.md) for more information on component use. |

## Example

```json
"minecraft:item_visual":{
    "geometry": {
        "identifier": "minecraft:geometry.full_block"
    },
    "material_instances": {
        "*": {
            "texture": "dirt",
            "render_method": "opaque"
        }
    }
},
"minecraft:geometry": {
    "identifier": "minecraft:geometry.full_block"
},
"minecraft:material_instances": {
    "*": {
        "texture": "stone",
        "render_method": "opaque"
    }
}
```

