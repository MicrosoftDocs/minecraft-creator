---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:tree_feature
ms.prod: gaming
---

# Features Documentation - minecraft:tree_feature

`minecraft:tree_feature` places a tree in the world. A tree consists of a column that is anchored to a base block with set parameters for what it can be placed on and canopy that extends from the column. The trunk height can be randomized with a min and max value, as well as the canopy offset. .

## Example

```json
{
  "format_version": "1.13.0",
  "minecraft:tree_feature": {
    "description": {
      "identifier": "example:custom_tree_feature"
    },
    "trunk": {
      "trunk_height": {
        "range_min": 8,
        "range_max": 15
      },
      "trunk_block": "minecraft:mangrove_log"
    },
    "canopy": {
      "canopy_offset": {
        "min": -3,
        "max": 0
      },
      "variation_chance": [
        {
          "numerator": 1,
          "denominator": 2
        },
        {
          "numerator": 1,
          "denominator": 2
        },
        {
          "numerator": 1,
          "denominator": 2
        },
        {
          "numerator": 1,
          "denominator": 1
        }
      ],
      "leaf_block": "minecraft:dirt"
    },
    "base_block": [
      "minecraft:dirt",
      {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      }
    ],
    "may_grow_on": [
      "minecraft:dirt",
      "minecraft:grass",
      "minecraft:podzol",
      "minecraft:dirt_with_roots",
      "minecraft:moss_block",
      "minecraft:mycelium",
      "minecraft:mud",
      "minecraft:muddy_mangrove_roots",
      "minecraft:crimson_nylium",
      "minecraft:nether_wart_block",
      "minecraft:nether_wart",
      "minecraft:end_stone",
      {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 0
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 1
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 2
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 3
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 4
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 5
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 6
        }
      },
      {
        "name": "minecraft:farmland",
        "states": {
          "moisturized_amount": 7
        }
      }
    ],
    "may_replace": [
      "minecraft:air",
      "minecraft:mangrove_leaves",
      "minecraft:azalea_leaves",
      "minecraft:azalea_leaves_flowered",
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "oak"
        }
      },
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "spruce"
        }
      },
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "birch"
        }
      },
      {
        "name": "minecraft:leaves",
        "states": {
          "old_leaf_type": "jungle"
        }
      },
      {
        "name": "minecraft:leaves2",
        "states": {
          "new_leaf_type": "acacia"
        }
      },
      {
        "name": "minecraft:leaves2",
        "states": {
          "new_leaf_type": "dark_oak"
        }
      }
    ],
    "may_grow_through": [
      "minecraft:dirt",
      "minecraft:grass",
      "minecraft:crimson_nylium",
      "minecraft:nether_wart_block",
      "minecraft:nether_wart",
      "minecraft:end_stone",
      {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      }
    ]
  }
}
```
