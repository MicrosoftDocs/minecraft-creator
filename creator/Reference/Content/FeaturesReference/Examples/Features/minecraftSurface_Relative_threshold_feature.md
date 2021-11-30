---
author: v-josjones
ms.author: v-josjones
title: Features Documentation - minecraft:surface_relative_threshold_feature
ms.prod: gaming
---

# Features Documentation - minecraft:surface_relative_threshold_feature

`minecraft:surface_relative_threshold_feature` determines whether the provided position is below the estimated surface level of the world, and places a feature if so.If the provided position is above configured surface or the surface is not available, placement will fail. This feature only works for Overworld generators using world generation 1.18 or later.

## Example

### Define a feature that places the 'underwater_magma_snap_to_surface_feature', if the given position is at least two blocks below estimated surface level.**

```JSON
{
    "format_version": "1.16.0",
    "minecraft:surface_relative_threshold_feature": {
    "description": {
      "identifier": "minecraft:underwater_magma_underground_feature"
    },
    "feature_to_snap": "minecraft:underwater_magma_snap_to_surface_feature",
    "minimum_distance_below_surface": 2
  }
}
```
