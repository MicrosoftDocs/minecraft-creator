---
author: mammerla
ms.author: mikeam
title: Features Documentation - minecraft:single_block_feature
description: "A reference document detailing the 'single_block_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:single_block_feature

`minecraft:single_block_feature` places a single block in the world. The `places_block` field supports a single block or a list of weighted blocks, where the weight defines how likely it is for that block to be selected. The `may_attach_to` and `may_replace` fields are allowlists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The `may_not_attach_to` field is a denylist that specifies what blocks can't be close to the placement location. The `randomize_rotation` field will randomize the block's cardinal orientation. The block's internal survivability and placement rules can optionally be enforced with the `enforce_survivability_rules` and `enforce_placement_rules` fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.

Succeeds if: The block is successfully placed in the world.

Fails if: The block fails to be placed.

Example use: Placing a single pumpkin or carved pumpkin block where carved pumpkins are less likely to appear.

### Schema

```json
 object "minecraft:single_block_feature" : opt 
  { 
    object "description" 
    { 
      string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. 
    } 
    "places_block" // Reference to the block to be placed. 
    bool "enforce_placement_rules" // If true, enforce the block's canPlace check. 
    bool "enforce_survivability_rules" // If true, enforce the block's canSurvive check. 
    object "may_attach_to" : opt 
    { 
      int "min_sides_must_attach"<1-4> : opt 
      bool "auto_rotate" : opt // Automatically rotate the block to attach sensibly. 
      "top" : opt 
      array "top" : opt 
      { 
        "<any array element>" 
      } 
      "bottom" : opt 
      array "bottom" : opt 
      { 
                   "<any array element>" 
      } 
      "north" : opt 
      array "north" : opt 
      { 
        "<any array element>" 
      } 
      "east" : opt 
      array "east" : opt 
      { 
        "<any array element>" 
      } 
      "south" : opt 
      array "south" : opt 
      { 
        "<any array element>" 
      } 
      "west" : opt 
      array "west" : opt 
      { 
        "<any array element>" 
      } 
      "all" : opt 
      array "all" : opt 
      { 
        "<any array element>" 
      } 
        "sides" : opt 
        array "sides" : opt 
      { 
        "<any array element>" 
      } 
    } 
      array "may_replace" : opt 
    { 
      "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced. 
    } 
  } 
```


### Example - Placing a single pumpkin block

```json
{
  "format_version": "1.21.40",
  "minecraft:single_block_feature": {
    "description": {
      "identifier": "example:single_pumpkin_feature"
    },
    "places_block": [
      {
        "block": "minecraft:pumpkin",
        "weight": 5
      },
      {
        "block": "minecraft:carved_pumpkin",
        "weight": 1
      }
    ],
    "randomize_rotation": true,
    "enforce_survivability_rules": true,
    "enforce_placement_rules": true,
    "may_attach_to": {
      "auto_rotate": false,
      "min_sides_must_attach": 1,
      "south": [
        "minecraft:grass",
        "minecraft:dirt"
      ]
    },
    "may_not_attach_to": {
      "south": {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      }
    }
  }
}
```

### Example - Placing a single carved pumpkin

Feature that places a randomly rotated single pumpkin or carved pumpkin block where carved pumpkins are less likely to appear.

```json
{ 
  "format_version": "1.21.40", 
  "minecraft:single_block_feature": { 
    "description": { 
      "identifier": "example:single_pumpkin_feature" 
    }, 
    "places_block": [ 
      { 
        "block": "minecraft:pumpkin", 
        "weight": 5 
      }, 
      { 
        "block": "minecraft:carved_pumpkin", 
        "weight": 1 
      } 
    ], 
    "randomize_rotation": true, 
    "enforce_survivability_rules": true, 
    "enforce_placement_rules": true, 
    "may_attach_to": { 
      "auto_rotate": false, 
      "min_sides_must_attach": 1, 
      "south": [ 
        "minecraft:grass", 
        "minecraft:dirt" 
      ] 
    }, 
    "may_not_attach_to": { 
      "south": { 
        "name": "minecraft:dirt", 
        "states": { 
          "dirt_type": "coarse" 
        } 
      }, 
      "diagonal": [ 
        "minecraft:stone", 
        "minecraft:gravel" 
      ] 
    } 
  } 
} 
```

### Example

Feature that supports either a single block or an array of weighted block descriptors.

```json
{ 
  "format_version": "1.21.30", 
  "minecraft:single_block_feature": { 
    "description": { 
      "identifier": "test:my_block_feature" 
    }, 
    "places_block": [ 
      { 
        "block": "minecraft:bee_nest", 
        "weight": 2 
      }, 
      { 
        "block": { 
          "name": "minecraft:beehive", 
          "states": { 
            "honey_level": 5 
          } 
        }, 
        "weight" :  1.5 
      }, 
      { 
        "block": { 
          "name": "minecraft:beehive", 
          "states": { 
            "honey_level": 0 
          } 
        }, 
        "weight" : 5 
      } 
    ], 
    "may_attach_to": { 
      "bottom": { 
        "name": "minecraft:grass" 
      } 
    } 
  } 
} 
```

