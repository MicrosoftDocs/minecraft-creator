---
author: mammerla
ms.author: v-jimseaman
title: Block Documentation - Block Traits
ms.prod: gaming
---

# Block Documentation - Block Traits

Block traits are designed to be a shortcut for creators to use Vanilla block states without needing to define and manage a series of events or triggers on custom blocks. While custom states and permutations can be used to set multiple variations of the same block (whether it's on/off, is flammable, etc.), states that are exposed through traits allow you to access the inherent data certain Vanilla blocks hold.

For example:

- By using the `minecraft:placement_direction` trait to set the `minecraft:cardinal_direction` state, you can create a custom furnace block that will orient so the front is facing the player.
- By using the `minecraft:placement_position` trait to set the `minecraft:block_face` (the face the block was placed on) and  `minecraft:vertical_half` (if a block was placed on the top or bottom) states, you can easily create blocks that behave like slabs or trapdoors.

The values for states associated with block traits can still be set using events and commands, if an event and a trait are using the same trigger, however the event and trait setters may conflict with each other if the event and trait are using the same trigger, e.g. `on_place`.

>[!IMPORTANT]
Block traits are currently in development and will be available incrementally.

## Block Trait List

The following block traits are currently available for use:

**placement_direction:** placement_direction can add states containing information about the player's rotation when the block is placed. For example, if a block using placement_direction is placed while the player is facing south, the state value will be "south". This will allow a data-driven block to replicate the rotation behavior of a furnace, pumpkin, or terracotta block. Note that while the block contains information, permutations will need to be configured to determine how the block is placed/looks/acts.

There are two states that can be included with this trait:

- `minecraft:cardinal_direction` is a 4-value state containing the cardinal-facing direction of the player when the block was placed. THe values for this state are 'north', 'south', 'east', and 'west'.
- `minecraft:facing_direction` is a 6-value state containing the overall direction of the player when the block was placed. The values for this state are 'down', 'up', 'north', 'south', 'east', and 'west'.

This trait can also be configured with a 'y_rotation_offset' where an axis-aligned angle may be specified via degree (e.g. 90.0). This causes the state within the trait to store a rotated value. In other words, with a rotation offset of 90.0, a block placed when the player is facing south would have a state of 'east'. This rotation offset only applies to the horizontal state values (north, south, east, west).

## Example

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

## Example

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
                "condition": "query.block_property('minecraft:cardinal_direction')== 'south'",
                "components": {
                    "minecraft:transformation": {
                        "rotation": [0, 180, 0]
                            }
                        }
                    }
                }
            }
```
