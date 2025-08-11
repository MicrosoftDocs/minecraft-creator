---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:item_visual"
description: "Describes the minecraft:item_visual block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:item_visual

The description identifier of the geometry and material used to render the item of this block.
Experimental toggles required: Upcoming Creator Features (in format versions before 1.21.50).


## Item Visual Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| geometry | *not set* | Array of objects | [Required] The "minecraft:geometry" component that will be used for the item. | Block Fabricator: `"geometry.mikeamm_gwve_fabricator_in_hand"` | 
| material_instances | *not set* | Array of objects | [Required] The "minecraft:material_instances" component that will be used for the item. | Block Fabricator: `{"*":{"texture":"mikeamm_gwve_fabricator_in_hand","render_method":"alpha_test"}}` | 

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

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:item_visual": {
  "geometry": "geometry.mikeamm_gwve_fabricator_in_hand",
  "material_instances": {
    "*": {
      "texture": "mikeamm_gwve_fabricator_in_hand",
      "render_method": "alpha_test"
    }
  }
}
```
