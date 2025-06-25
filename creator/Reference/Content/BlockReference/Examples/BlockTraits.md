---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - Block Traits
description: "A reference document detailing block traits"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block Traits

Block traits are designed to be a shortcut for creators to use Vanilla block states without needing to define and manage a series of events or triggers on custom blocks. While custom states and permutations can be used to set multiple variations of the same block (whether it's on/off, is flammable, etc.), states that are exposed through traits allow you to access the inherent data certain Vanilla blocks hold.

For example:

- By using the `minecraft:placement_direction` trait to set the `minecraft:cardinal_direction` state, you can create a custom furnace block that will orient so the front is facing the player.
- By using the `minecraft:placement_position` trait to set the `minecraft:block_face` (the face the block was placed on) and  `minecraft:vertical_half` (if a block was placed on the top or bottom) states, you can easily create blocks that behave like slabs or trapdoors.

The values for states associated with block traits can still be set using events and commands, if an event and a trait are using the same trigger, however the event and trait setters may conflict with each other if the event and trait are using the same trigger, e.g. `on_place`.

## Block Trait List

The following block traits are currently available for use:

**placement_direction:** placement_direction can add states containing information about the player's rotation when the block is placed. For example, if a block using placement_direction is placed while the player is facing south, the state value will be "south". This will allow a data-driven block to replicate the rotation behavior of a furnace, pumpkin, or terracotta block. Note that while the block contains information, permutations will need to be configured to determine how the block is placed/looks/acts.

There are two states that can be included with this trait:

- `minecraft:cardinal_direction` is a 4-value state containing the cardinal-facing direction of the player when the block was placed. The values for this state are 'north', 'south', 'east', and 'west'.
- `minecraft:facing_direction` is a 6-value state containing the overall direction of the player when the block was placed. The values for this state are 'down', 'up', 'north', 'south', 'east', and 'west'.

This trait can also be configured with a 'y_rotation_offset' where an axis-aligned angle may be specified via degree (e.g. 90.0). This causes the state within the trait to store a rotated value. In other words, with a rotation offset of 90.0, a block placed when the player is facing south would have a state of 'east'. This rotation offset only applies to the horizontal state values (north, south, east, west).

## placement_direction Example

```json
"traits": {
 "minecraft:placement_direction": {
  "enabled_states": ["minecraft:cardinal_direction",
   "minecraft:facing_direction"],
  "y_rotation_offset": 90.0
 }
}
```

**placement_position:** placement_position contains information about where the player placed the block. This allows a block to replicate the upside-down placement of slabs and stairs, as well as the attachment behavior of torches and vines.

There are two states that can be included with this trait:

- `minecraft:block_face` is a 6-value state representing the face on which the block was placed. Values for this state are 'up', 'down', 'north', 'south', 'east', and 'west'. For example, if a block using the `minecraft:block_face` is placed on the south face of a neighboring block, the state value will be 'south'.
- `minecraft:vertical_half` is a 2-value state specifying whether a block was placed in the top or bottom half of a block. The values for this state are 'bottom' and 'top'. For blocks using `minecraft:vertical_half`, if the block is placed on the 'down' face of a block or above the midline of a horizontal face, the state value will be 'top'.

## placement_position Example

```json
"traits": {
    "minecraft:placement_position": {
        "enabled_states": ["minecraft:block_face", "minecraft:vertical_half"]
    }
}
```

## Custom Block Code Example

Now that you understand the concept of block traits and the traits available, let's take a look at how everything works together:

```json
{
 "format_version": "1.20.0",
 "minecraft:block": {
  "description": {
   "identifier": "test:rotatable_block",
   "menu_category": {
    "category": "construction"
   },
    "traits": {
     "minecraft:placement_direction": {
      "enabled_states": ["minecraft:cardinal_direction"]
     }
    }
   },
   "components": {
    ...
   },
   "permutations": {
    "condition": "query.block_state('minecraft:cardinal_direction')== 'south'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 180, 0]
       }
      }
     }
    }
   }
```

## Block Trait Example Blocks

Now that you are a block trait expert (you ARE an expert at this point, correct?) we are going to teach provide you with four sample blocks you can add to you world thanks to the wonder of block traits: a smiley block, a slab block, a torch block, and an arrow block!

## Sample Smiley Block

The smiley block uses the `minecraft:cardinal_direction` to act in a similar manner to the Vanilla carved pumpkin block. The 'face' of the block will rotate to face the player based upon their cardinal direction when the block is placed. The smiley block will then rotate on the y-axis, like the carved pumpkin, to face the cardinal directions.

```json
{
 "format_version": "1.20.20",
 "minecraft:block": {
  "description": {
   "identifier": "testpack:smiley_block",
   "menu_category": {
    "category": "construction"
   },
   "traits": {
    "minecraft:placement_direction": {
     "enabled_states": ["minecraft:cardinal_direction"]
    }
   }
  }, 
  "components": {
   "minecraft:collision_box": {
    "origin": [-6, 0, -6],
    "size": [12, 12, 12]
   },
   "minecraft:selection_box": {
    "origin": [-6, 0, -6],
    "size": [12, 12, 12]
   },
   "minecraft:geometry": "geometry.small_cube",
   "minecraft:material_instances": {
    "*": {
     "texture": "smiley",
     "render_method": "opaque"
    }
   }
  },
  "permutations": [
   { // north
    "condition": "query.block_state ('minecraft:cardinal_direction') == 'north'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 0, 0]
     }
    }
   },
   { // south
    "condition": "query.block_state ('minecraft:cardinal_direction') == 'south'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 180, 0]
     }
    }
   },
   { // west
    "condition": "query.block_state ('minecraft:cardinal_direction') == 'west'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 90, 0]
     }
    }
   },
   { // east
    "condition": "query.block_state ('minecraft:cardinal_direction') == 'east'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, -90, 0]
     }
    }
   }
  ]
 }
}
```

## Sample Slab Block

The sample slab block behaves similarly to a Vanilla slab, thanks to the `minecraft:vertical_half` state. If a player clicks the bottom face of the block, or the side face of a block in the upper half (click position y-value > 0.5), the `minecraft:vertical_half` state will be "top"; otherwise, it will be set to "bottom".

> [!NOTE] Sample slab blocks will not combine into a double slab; the block only replicates the Vanilla slab top/bottom placement behavior.

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

## Sample Torch Block

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

## Sample Arrow Block

Last, but not least, we have the sample arrow block. This block uses both the `minecraft:cardinal_direction` and `minecraft:facing_direction` states. The result is a block that rotates in place overall, as well as the cardinal direction of the player, similarly to the Vanilla Observer block.

```json
{
 "format_version": "1.20.20",
 "minecraft:block": {
  "description": {
   "identifier": "testpack:arrow_block",
   "menu_category": {
    "category": "construction"
   },
   "traits" : {
    "minecraft:placement_direction": {
     "enabled_states": ["minecraft:cardinal_direction", "minecraft:facing_direction"],
     "y_rotation_offset": 180.0
    }
   }
  },
  "components": {
   "minecraft:collision_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
   },
   "minecraft:geometry": "geometry.cube",
   "minecraft:material_instances": {
    "*": {
     "texture": "arrow",
     "render_method": "opaque"
    }
   }
  },
  "permutations": [
   { // north
    "condition": "query.block_state('minecraft:facing_direction') == 'north'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 180, 0]
     }
    }
   },
   { // south
    "condition": "query.block_state('minecraft:facing_direction') == 'south'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 0, 0]
     }
    }
   },
   { // west
    "condition": "query.block_state('minecraft:facing_direction') == 'west'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, -90, 0]
     }
    }
   },
   { // east
    "condition": "query.block_state('minecraft:facing_direction') == 'east'",
    "components": {
     "minecraft:transformation": {
      "rotation": [0, 90, 0]
     }
    }
   },
   { // up and north
    "condition": "query.block_state('minecraft:facing_direction') == 'up' && query.block_state('minecraft:cardinal_direction') == 'north'",
    "components": {
     "minecraft:transformation": {
      "rotation": [90, 180, 0]
     }
    }
   },
   { // up and south
    "condition": "query.block_state('minecraft:facing_direction') == 'up' && query.block_state('minecraft:cardinal_direction') == 'south'",
    "components": {
     "minecraft:transformation": {
      "rotation": [90, 0, 0]
     }
    }
   },
   { // up and west
    "condition": "query.block_state('minecraft:facing_direction') == 'up' && query.block_state('minecraft:cardinal_direction') == 'west'",
    "components": {
     "minecraft:transformation": {
      "rotation": [90, -90, 0]
     }
    }
   },
   { // up and east
    "condition": "query.block_state('minecraft:facing_direction') == 'up' && query.block_state('minecraft:cardinal_direction') == 'east'",
    "components": {
     "minecraft:transformation": {
      "rotation": [90, 90, 0]
     }
    }
   },
   { // down and north
    "condition": "query.block_state('minecraft:facing_direction') == 'down' && query.block_state('minecraft:cardinal_direction') == 'north'",
    "components": {
     "minecraft:transformation": {
      "rotation": [-90, 180, 0]
     }
    }
   },
   { // down and south
    "condition": "query.block_state('minecraft:facing_direction') == 'down' && query.block_state('minecraft:cardinal_direction') == 'south'",
    "components": {
     "minecraft:transformation": {
      "rotation": [-90, 0, 0]
     }
    }
   },
   { // down and west
    "condition": "query.block_state('minecraft:facing_direction') == 'down' && query.block_state('minecraft:cardinal_direction') == 'west'",
    "components": {
     "minecraft:transformation": {
      "rotation": [-90, -90, 0]
     }
    }
   },
   { // down and east
    "condition": "query.block_state('minecraft:facing_direction') == 'down' && query.block_state('minecraft:cardinal_direction') == 'east'",
    "components": {
     "minecraft:transformation": {
      "rotation": [-90, 90, 0]
     }
    }
   }
  ]
 }
}
```
