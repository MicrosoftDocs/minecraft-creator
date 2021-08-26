---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:snap_to_surface_feature
ms.prod: gaming
---

# Features Documentation - minecraft:snap_to_surface_feature

`minecraft:snap_to_surface_feature` snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`. The placement biome is preserved. If the snap position goes outside of the placement biome, placement will fail.

## Example

### Define a feature that snaps the `cave_vine_feature` to the ceiling

```json
{
  "format_version": "1.16.0",
  "minecraft:snap_to_surface_feature": {
    "description": {
      "identifier": "minecraft:cave_vine_snapped_to_ceiling_feature"
    },
    "feature_to_snap":  "minecraft:cave_vine_feature",
    "vertical_search_range":  12,
    "surface": "ceiling"
  }
}
```
