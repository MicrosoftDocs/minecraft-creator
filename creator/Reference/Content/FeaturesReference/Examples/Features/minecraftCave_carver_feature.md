---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:cave_carver_feature
description: "A reference document detailing the 'cave_carver_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:cave_carver_feature

`minecraft:cave_carver_feature` carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. This feature only works when placed in the pass "pregeneration_pass".

### Schema

```json
object "minecraft:cave_carver_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  block_reference "fill_with" : opt // Reference to the block to fill the cave with.
  molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
  int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
  int "height_limit" : opt // The height limit where we attempt to carve.
  float_range "y_scale" : opt // The scaling in y.
  float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
  float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
  float_range "floor_level" : opt // Floor Level.
}
```

### Example

Carve caves normally.

```json
{
  "format_version": "1.13.0",
    "minecraft:cave_carver_feature": {
      "description": {
        "identifier": "example:underground_cave_carver_feature"
      },
      "fill_with": "minecraft:air",
      "width_modifier": 0.0,
      "skip_carve_chance": 15
    }
}
```
