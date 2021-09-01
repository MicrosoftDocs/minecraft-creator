---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:hell_cave_carver_feature
ms.prod: gaming
---

# Features Documentation - minecraft:hell_cave_carver_feature

`minecraft:hell_cave_carver_feature` carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature will also only work when placed specifically in the pass "pregeneration_pass".

## Example

### Carve nether caves normally

```json
{
"format_version": "1.16.100",
  "minecraft:cave_feature": {
    "description": {
      "identifier": "minecraft:hell_cave_carver_feature"
    },
    "fill_with": "minecraft:air"
    "width_modifier": 0.0
  }
}
```
