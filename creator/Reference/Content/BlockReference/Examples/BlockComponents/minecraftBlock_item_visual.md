---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:item_visual"
description: "Describes the minecraft:item_visual block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:item_visual

The description identifier of the geometry and material used to render the item of this block.

> [!Note]
> This item requires a format version of at least 1.21.60.


## Item Visual Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| geometry | *not set* | Array of objects | [Required] The "minecraft:geometry" component that will be used for the item. |  | 
| material_instances | *not set* | Array of objects | [Required] The "minecraft:material_instances" component that will be used for the item. |  | 

## Samples


```json
"minecraft:item_visual": {
  "geometry": {
    "identifier": "minecraft:geometry.full_block"
  },
  "material_instances": {
    "*": {
      "texture": "dirt",
      "render_method": "opaque"
    }
  }
}
```
