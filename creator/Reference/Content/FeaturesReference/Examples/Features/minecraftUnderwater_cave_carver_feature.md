---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:underwater_cave_carver_feature
description: "A reference document detailing the 'underwater_cave_carver_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:underwater_cave_carver_feature

`minecraft:underwater_cave_carver_feature` carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8-block radial pattern. This feature will specifically target creating caves only below sea level.

This feature will only work when placed specifically in the pass "pregeneration_pass".

### Schema

```json
object "minecraft:underwater_cave_carver_feature" : opt
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
  block_reference "replace_air_with" : opt // Reference to the block to replace air blocks with.
 }
```

### Example

Carve caves normally

```json
{
"format_version": "1.13.0",
  "minecraft:underwater_cave_carver_feature": {
    "description": {
      "identifier": "example:underground_cave_carver_feature"
    },
    "fill_with": "minecraft:water",
    "width_modifier": 0.0,
    "replace_air_with": "minecraft:flowing_water"
  }
}
```
