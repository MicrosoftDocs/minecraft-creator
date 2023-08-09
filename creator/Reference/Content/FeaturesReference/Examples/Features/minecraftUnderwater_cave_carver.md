---
author: JimSeaman42
ms.author: mikeam
title: Features Documentation - minecraft:underwater_cave_carver_feature
ms.prod: gaming
description: "A reference document detailing the 'underwater_cave_carver_feature' feature"
---

# Features Documentation - minecraft:underwater_cave_carver_feature

`minecraft:underwater_cave_carver_feature` carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature specifically targets creating caves below sea level.

This feature will only work when placed specifically in the pass "pregeneration_pass".

## Example

### Carve caves normally

```json
{
"format_version": "1.16.100",
  "minecraft:underwater_cave_carver_feature": {
    "description": {
      "identifier": "minecraft:underground_cave_carver_feature"
    },
    "fill_with": "minecraft:water",
    "width_modifier": 0.0,
    "replace_air_with": "minecraft:flowing_water"
  }
}
```
