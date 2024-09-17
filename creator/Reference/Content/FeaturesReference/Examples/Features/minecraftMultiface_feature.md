---
author: JimSeaman42
ms.author: mikeam
title: Features Documentation - minecraft:multiface_feature
description: "A reference document detailing the 'multiface_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:multiface_feature

`minecraft:multiface_feature` places multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be applied to them based on the list in the `can_place_on` field. If no `can_replace_on` field is specified, the `place_block` block can be placed on any existing block.
This feature will also try to spread the `place_block` block around the location the feature is placed.

**Succeeds if:**
At least one block is successfully placed.

**Fails if:**
All block placements fail.

### Schema

```json
object "minecraft:multiface_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  "places_block" // Reference to the block to be placed.
  int "search_range"<1-64> // How far, in blocks, this feature can search for a valid position to place.
  bool "can_place_on_floor" // Can this feature be placed on the ground (top face of a block)?
  bool "can_place_on_ceiling" // Can this feature be placed on the ceiling (bottom face of a block)?
  bool "can_place_on_wall" // Can this feature be placed on the wall (side faces of a block)?
  float "chance_of_spreading"<0.000000-1.000000> // For each block placed by this feature, how likely will that block spread to another?
  array "can_place_on"[1,*] : opt
  {
    "<any array element>" : opt // A list of blocks that the block in this feature can be placed on. Omit this field to allow any block to be placed on.
  }
}
```

### Example

Blue vines in caves

```json
{
  "format_version": "1.13.0",
  "minecraft:multiface_feature": {
    "description": {
      "identifier": "example:blue_vines_feature"
    },
    "places_block": "example:blue_vine",
    "search_range": 64,
    "can_place_on_floor": true,
    "can_place_on_ceiling": true,
    "can_place_on_wall": true,
    "chance_of_spreading": 0.5,
    "can_place_on": [
      "minecraft:stone"
    ]
  }
}
```
