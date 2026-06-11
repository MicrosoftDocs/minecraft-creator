---
author: VassilAnguelov
ms.author: VassilAnguelov
title: "Block Traits: multi-block"
description: "Reference for the multi-block trait."
ms.service: minecraft-bedrock-edition
ms.date: 06/02/2026
---

# Block Traits: multi-block

The `minecraft:multi_block` block trait contains information about whether the block is composed of multiple block parts that act as a single block.

> [!IMPORTANT]
>
> The `minecraft:multi_block` trait requires Bedrock Edition 1.26.10 or higher, and before version 1.26.40 requires that the "Upcoming Creator Features" experimental toggle is set on.

There is only one valid state for `enabled_states` in this trait: `minecraft:multi_block_part`. This integer state indicates which part of the multi-block the block permutation is. Block permutations with state `minecraft:multi_block_part` set to `0` are considered the starting block part.

## Properties

The `minecraft:multi_block` block trait contains two properties to define the multi-block:

- `parts:` This integer property indicates how many block parts compose the multi-block. For example, if `parts` is set to `4`, then the multi-block is composed of 4 block parts. This property is optional and defaults to 2, however, if defined the value is clamped between 2 and at most 4 parts.
- `direction`: This **required** string property defines what direction axis the block parts are placed in from part 0 to part N. If the direction is horizontal, the block also defines the trait `minecraft:placement_direction`, and that trait enables the state `minecraft:cardinal_direction`, then the direction of placement is overridden by the [`placement_direction`](./placement_direction.md) trait. Valid values for this property are:
  - `up`
  - `down`
  - `north` (currently requires that the "Upcoming Creator Features" experimental toggle is set)
  - `south` (currently requires that the "Upcoming Creator Features" experimental toggle is set)
  - `east` (currently requires that the "Upcoming Creator Features" experimental toggle is set)
  - `west` (currently requires that the "Upcoming Creator Features" experimental toggle is set)

## Requirements and restrictions

A block with the `minecraft:multi_block` trait has a number of requirements and restrictions for other parts of the block definition.

### Traits

A block with the `minecraft:multi_block` trait cannot define any other trait, except the `minecraft:placement_direction` trait that sets only the `minecraft:cardinal_direction` state.

### Components

A block with the `minecraft:multi_block` trait has the following requirements and restrictions for block components:

- It must define the [`minecraft:movable`](../BlockComponents/minecraftBlock_movable.md) component in the base components and the `movement_type` property must either be `popped` or `immovable`. Cannot be defined in the permutations array.
- It cannot define the [`minecraft:placement_filter`](../BlockComponents/minecraftBlock_placement_filter.md) component in the permutations array.
- It cannot define the [`minecraft:replaceable`](../BlockComponents/minecraftBlock_replaceable.md) component in the permutations array.
- It cannot define the [`minecraft:random_offset`](../BlockComponents/minecraftBlock_random_offset.md) component in the permutations array.
- If the direction is `up` or `down`, it cannot define the [`minecraft:precipitation_interactions`](../BlockComponents/minecraftBlock_precipitation_interactions.md) component in the permutations array, to prevent partial vertical snow accumulation.
- It cannot define the [`minecraft:block_entity`](../BlockComponents/minecraftBlock_block_entity.md) component.

## Example

The example light post block below is a vertical multi-block composed of 3 block parts. The block parts are placed in the `up` direction, meaning that part 0 is the bottom part of the light post, part 1 is the middle, and part 2 is the top. See the [Create a Multi-Block](../../../../../Documents/multi-blocks.md) page for a complete implementation of this block.

```json
{
  "format_version": "1.26.10",
  "minecraft:block": {
    "description": {
      "identifier": "multiblock:light",
      "traits": {
        "minecraft:multi_block": {
          "enabled_states": [
            "minecraft:multi_block_part"
          ],
          "parts": 4,
          "direction": "up"
        }
      }
    },
    "components": {
    }
  }
}
```
