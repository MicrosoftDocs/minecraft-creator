---
author: chipotle
ms.author: mikeam
title: "Block Traits: connection"
description: "Reference for the connection block trait."
ms.service: minecraft-bedrock-edition
ms.date: 11/06/2025
---

# Block Traits: connection

The `minecraft:connection` block trait contains information about whether the block connects to other blocks, and if so, on what faces. The values of the states will change when the block or neighboring blocks change or move.

> [!IMPORTANT]
> The `connection` trait requires Bedrock Edition 1.21.130 or higher, and currently requires that the "Upcoming Creator Features" experimental toggle is set on.

There is only one valid state for `enabled_states` in this trait: `minecraft:cardinal_connections`.

## Queryable block states

When the `cardinal_connections` state is enabled, you can read one of four block states for connections.

- `minecraft:connection_north` is `true` if the block is connected to another block to the north, `false` if it is not.
- `minecraft:connection_south` is `true` if the block is connected to another block to the south, `false` if it is not.
- `minecraft:connection_east` is `true` if the block is connected to another block to the east, `false` if it is not.
- `minecraft:connection_west` is `true` if the block is connected to another block to the west, `false` if it is not.

## Example

```json
{
  "format_version": "1.21.130",
  "minecraft:block": {
    "description": {
        "identifier": "test:connection_trait_block",
        "traits": {
            "minecraft:connection": {
                "enabled_states": [
                    "minecraft:cardinal_connections"
                ]
            }
        }
    },
    "permutations": [
      {
        "condition": "q.block_state('minecraft:connection_north') && !q.block_state('minecraft:connection_south')",
        "components": {
            // ...
        }
      }
    ]
  }
}
```
