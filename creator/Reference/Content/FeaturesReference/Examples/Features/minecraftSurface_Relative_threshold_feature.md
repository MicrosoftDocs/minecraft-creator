---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:surface_relative_threshold_feature
description: "A reference document detailing the 'surface_relative_threshold' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:surface_relative_threshold_feature

`minecraft:surface_relative_threshold_feature` determines whether the provided position is below the estimated surface level of the world, and places a feature if so.If the provided position is above configured surface or the surface is not available, placement will fail. This feature only works for Overworld generators using world generation 1.18 or later.

### Schema

```json
object "minecraft:surface_relative_threshold_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  feature_reference "feature_to_place" // Named reference of feature to be placed
  int "minimum_distance_below_surface" : opt // The minimum number of blocks required to be between the estimated surface level and a valid place for this feature. Defaults to zero.
}
```

### Example

Define a feature that places the `underwater_magma_snap_to_surface_feature`, if the given position is at least two blocks below estimated surface level.**

```json
{
    "format_version": "1.13.0",
    "minecraft:surface_relative_threshold_feature": {
    "description": {
      "identifier": "example:underwater_magma_underground_feature"
    },
    "feature_to_snap": "example:underwater_magma_snap_to_surface_feature",
    "minimum_distance_below_surface": 2
  }
}
```
