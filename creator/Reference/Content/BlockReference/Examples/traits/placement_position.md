---
author: chipotle
ms.author: mikeam
title: "Block Traits: placement_position"
description: "Reference for the placement_position block trait."
ms.service: minecraft-bedrock-edition
ms.date: 11/06/2025
---

# Block Traits: placement_position

The `minecraft:placement_position` block trait records information about where the player placed the block in relation to other blocks. This allows a block to replicate the upside-down placement of slabs and stairs, as well as the attachment behavior of torches and vines.

You can use one of two states in the `enabled_states` block:

- `minecraft:block_face` represents the face of _another_ block on which this block was placed. For example, if the block is placed against the south face of a neighboring block, the state value will be `south`. It can be one of six string values:
  - `north`
  - `south`
  - `east`
  - `west`
  - `up`
  - `down`
- `minecraft:vertical_half` specifies whether a block was placed against the top half or bottom half of a neighboring block. For example, if the block is placed on the `down` face of a block, or sits above the midline of another block's horizontal face, the state value will be `top`. It can be one of two values:
  - `bottom`
  - `top`

## Examples

### Using block_face

The sample torch block is an excellent representation of the `minecraft:block_face` state; torches can be placed on the sides and upward faces of blocks. Additionally, torches placed on the side of a block have a different geometry than torches places on top of a block.

```json
{
 "format_version": "1.20.20",
 "minecraft:block": {
  "description": {
   "identifier": "testpack:torch_block",
   "menu_category": {
    "category": "construction"
   },
   "traits" : {
    "minecraft:placement_position": {
     "enabled_states": ["minecraft:block_face"]
    }
   }
  },
  "components": {
   "minecraft:collision_box": {
    "origin": [-0.5, 0, -0.5],
    "size": [1, 10, 1]
   },
   "minecraft:selection_box": {
    "origin": [-1, 0, -1],
    "size": [2, 10, 2]
   },
   "minecraft:geometry": "geometry.torch",
   "minecraft:material_instances": {
    "*": {
     "texture": "torch",
     "render_method": "opaque"
    }
   },
   "minecraft:placement_filter":{
    "conditions": [
     {
      "allowed_faces": ["up", "side"]
     }
    ]
   },
   "minecraft:light_emission": 14
  },
  "permutations": [
   { // north
    "condition": "query.block_state('minecraft:block_face') == 'north'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 0, 0]
     }
    }
   },
   { // south
    "condition": "query.block_state('minecraft:block_face') == 'south'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 180, 0]
     }
    }
   },
   { // west
    "condition": "query.block_state('minecraft:block_face') == 'west'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 90, 0]
     }
    }
   },
   { // east
    "condition": "query.block_state('minecraft:block_face') == 'east'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, -90, 0]
     }
    }
   },
   { // all side faces
    "condition": "query.block_state('minecraft:block_face') != 'up' && query.block_state('minecraft:block_face') != 'down'",
    "components": {
     "minecraft:collision_box": {
      "origin": [-2, 3, 4],
      "size": [4, 10, 4]
     },
     "minecraft:selection_box": {
      "origin": [-2, 3, 4],
      "size": [4, 10, 4]
     },
     "minecraft:geometry": "geometry.wall_torch"
    }
   }
  ]
 }
}
```

### Using vertical_half

This slab block behaves similarly to a Vanilla slab, thanks to the `minecraft:vertical_half` state. If a player clicks the bottom face of the block, or the side face of a block in the upper half (click position y-value > 0.5), the `minecraft:vertical_half` state will be "top"; otherwise, it will be set to "bottom".

> [!NOTE]
> Slab blocks will not combine into a double slab; the block only replicates the Vanilla slab top/bottom placement behavior.

```json
​
{
 "format_version": "1.20.20",
 "minecraft:block": {
  "description": {
   "identifier": "testpack:slab_block",
   "menu_category": {
    "category": "construction"
   },
   "traits" : {
    "minecraft:placement_position": {
     "enabled_states": ["minecraft:vertical_half"]
    }
   }
  },
  "components": {
   "minecraft:geometry": "geometry.slab",
   "minecraft:material_instances": {
    "*": {
     "texture": "slab",
     "render_method": "opaque"
    }
   },
   "minecraft:selection_box": {
    "origin": [-8, 0, -8],
    "size": [16, 8, 16]
   },
   "minecraft:collision_box": {
    "origin": [-8, 0, -8],
    "size": [16, 8, 16]
   }
  },
  "permutations": [
   { // upper_slab
    "condition": "query.block_state('minecraft:vertical_half') == 'top'",
    "components": {
     "minecraft:transformation": {
      "translation": [0, 0.5, 0]
     }
    }
   }
  ]
 }
}
```
