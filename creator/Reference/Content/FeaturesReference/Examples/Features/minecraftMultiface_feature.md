---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:multiface_feature
ms.prod: gaming
---

# Features Documentation - minecraft:multiface_feature

`minecraft:multiface_feature` places one or a few multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be placed on them based on the list provided in the `can_place_on` field. If no `can_replace_on` field is specified, the `place_block` block can be placed on any existing block.
This feature will also try to spread the `place_block` block around the location in world the feature is placed.

**Succeeds if:**
At least one block is successfully placed.

**Fails if:**
All block placements fail.

## Example

### Blue vines in caves

```json
{
  "format_version": 1.13.0,
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
