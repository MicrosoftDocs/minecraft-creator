---
author: JimSeaman42
ms.author: mikeam
title: Features Documentation - minecraft:nether_cave_carver_feature
ms.prod: gaming
description: "A reference document detailing the 'nether_cave_carver_feature' feature"
---

# Features Documentation - minecraft:nether_cave_carver_feature

`minecraft:nether_cave_carver_feature` carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature will also only work when placed specifically in the pass "pregeneration_pass".

## Example

### Carve nether caves normally

```json
{
"format_version": "1.16.100",
  "minecraft:nether_cave_carver_feature": {
    "description": {
      "identifier": "minecraft:nether_cave_carver_feature"
    },
    "fill_with": "minecraft:air"
    "width_modifier": 0.0
  }
}
```
