---
author: chipotle
ms.author: mikeam
title: "Block Traits: placement_direction"
description: "Reference for the placement_direction block trait."
ms.service: minecraft-bedrock-edition
ms.date: 11/05/2025
---

# Block Traits: placement_direction

The `minecraft:placement_direction` block trait records information about the direction the player was facing when the block was placed. You can use one of three states in the `enabled_states` block:

- `minecraft:cardinal_direction` allows the cardinal placement direction of the block to be read by querying this trait. The value will be one four strings:
  - `north`
  - `south`
  - `east`
  - `west`
- `minecraft:facing_direction` is similar to the `cardinal_direction` state, but records one of six string values:
  - `north`
  - `south`
  - `east`
  - `west`
  - `up`
  - `down`
- `minecraft:corner_and_cardinal_direction` allows _two_ pieces of information to be queried: in addition to querying `minecraft:cardinal_direction`, you can query `minecraft:corner` to get a value for the corner shape of a block. There are five values `minecraft:corner` may return:
  - `inner_left`
  - `inner_right`
  - `outer_left`
  - `outer_right`
  - `none`

> [!NOTE]
> The `corner_and_cardinal_direction` trait requires Minecraft version 1.21.130 or higher, requires you to enable the `use_beta_features` flag in your block JSON, and requires the Beta APIs experimental toggle in the world using this block to be on.

## Rotation offset

This trait supports an additional property: `y_rotation_offset` lets you specify a value to rotate the stored cardinal direction counter-clockwise from the direction the player had been facing. A value of `90.0`, for example, would cause a block placed when the player faced south to store the state of `east`, a 90-degree rotation from south.

The valid values for `y_rotation_offset` are `0.0` (the default, no rotation), `90.0`, `180.0`, and `270.0`. The offset only applies to horizontal (Y-axis) directions.

## Examples

### Using a rotation offset

```json
{
  "format_version": "1.21.130",
  "minecraft:block": {
    "description": {
      "identifier": "custom:custom_block",
      "menu_category": {
        "category": "construction"
      },
      "traits": {
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:cardinal_direction"],
          "y_rotation_offset": 90.0
        }
      },
      // ...
    }
  }
}
```

### Using corner states

```json
{
  "format_version": "1.21.130",
  // Required to use minecraft:corner_and_cardinal_direction, along with Beta APIs toggle in Minecraft 1.21.130 or later
  "use_beta_features": true,
  "minecraft:block": {
    "description": {
      "identifier": "custom:custom_stairs_traits",
      "menu_category": {
        "category": "construction"
      },
      "traits": {
        "minecraft:placement_position": {
          "enabled_states": ["minecraft:vertical_half"]
        },
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:corner_and_cardinal_direction"],
          // Default is to corner with same block name
          "blocks_to_corner_with": [{"tags": "q.any_tag('minecraft:cornerable_stairs')"}]
        }
      }
    },
    "permutations": [
       {
          "condition": "query.block_state('minecraft:cardinal_direction') == 'west' && query.block_state('minecraft:corner') == 'inner_left'",
          "components": {
              // ... 
          }
        }
    ]
  }
}
```
