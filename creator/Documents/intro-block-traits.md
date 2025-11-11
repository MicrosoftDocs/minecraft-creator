---
author: chipotle
ms.author: mikeam
title: Using Block Traits
description: "An introduction to using block traits with your custom blocks to inherit functionality from Vanilla blocks."
ms.service: minecraft-bedrock-edition
ms.date: 11/04/2025
---

# Using Block Traits

You've made a custom block, and now you'd like to give it some triggers or events, similar to existing Vanilla blocks. But how do you do that without having to set up your own custom triggers and events? That's where **block traits** come in! These traits let your custom blocks share certain Vanilla block states, so they can use the same functionality. For example:

- By using the `minecraft:placement_direction` trait to set the `minecraft:cardinal_direction` state, you can create a custom furnace block that orients itself so the front faces the player.

- By using the `minecraft:placement_position` trait to set the `minecraft:block_face` (the face the block was placed on) and q`minecraft:vertical_half` (if a block was placed on the top or bottom) states, you can easily create blocks that behave like slabs or trapdoors.

- By using the `minecraft:connection` trait to set the `minecraft:cardinal_connections` state, you can create fence-like blocks.

## Kinds of block traits

Currently, there are three block traits you can use:

- [`placement_direction`](../Reference/Content/BlockReference/Examples/traits/placement_direction.md) contains information about the direction the player is facing when the block is placed.
- [`placement_position`](../Reference/Content/BlockReference/Examples/traits/placement_position.md) contains information about where the player placed the block in relation to other blocks.
- [`connection`](../Reference/Content/BlockReference/Examples/traits/connection.md) contains information about whether the block is connected to other blocks, and if so, on what faces.

> [!IMPORTANT]
> The `connection` trait requires Bedrock Edition 1.21.130 or higher, and currently requires that the "Upcoming Creator Features" experimental toggle is set on.

## JSON syntax

Traits are added to the block description files in the **blocks** directory of Behavior Packs, under the `traits` key:

```json
{
  "format_version": "1.21.130",
  "minecraft:block": {
    "description": {
      "identifier": "demo:my_block",
      "traits": {
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:cardinal_direction"]
        }
      }
    }
  }
}
```

The value for `traits` specifies one or more traits (e.g., `minecraft:placement_direction`); each trait must specify an `enabled_states` property, containing an array with at least one state that matches that trait (e.g., `minecraft:cardinal_direction`). Depending on the trait and enabled states, there might be other properties you can specify here as well, such as `blocks_to_corner_with`.

## Examples

### The smiley block

Here's a complete example of a block that uses a trait: a block with a smiley face that always faces the player when it's placed, and keeps rotating on its Y-axis to face cardinal directions. If this sounds like the Vanilla carved pumpkin block, the pumpkin uses the same technique!

```j
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

There's only one Smiley Block model, a small cube which has a smiley face on its north face. (We haven't actually created the model and texture for this example, although you're welcome to do so!) The block is given the `placement_direction` trait, enabling the `cardinal_direction` state to record the direction the player was facing when the block was placed. Then, we define four [permutations](../Reference/Content/BlockReference/Examples/BlockStatesAndPermutations.md#block-permutations). They each use a [Molang query function](../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions.md) to read the `cardinal_direction` state, and use the [`transformation` block component](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_transformation.md) to rotate the block to match the player's facing.

### The arrow block

This block uses both the `minecraft:cardinal_direction` and `minecraft:facing_direction` states. The result is a block that rotates in place overall, as well as the cardinal direction of the player, similarly to the Vanilla Observer block.

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

## Next steps

- [`placement_direction`](../Reference/Content/BlockReference/Examples/traits/placement_direction.md) reference with example
- [`placement_position`](../Reference/Content/BlockReference/Examples/traits/placement_position.md) reference with example
- [`connection`](../Reference/Content/BlockReference/Examples/traits/connection.md) reference with example
- [Default Block States and Traits](../Reference/Content/BlockReference/Examples/BlockStateAndTraitListings.md)
