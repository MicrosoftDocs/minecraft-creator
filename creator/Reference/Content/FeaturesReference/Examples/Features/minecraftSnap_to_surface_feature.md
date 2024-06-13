---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:snap_to_surface_feature
description: "A reference document detailing the 'snap_to_surface_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:snap_to_surface_feature

`minecraft:snap_to_surface_feature` snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`. The placement biome is preserved. If the snap position goes outside of the placement biome, placement will fail.

### Schema

```json
object "minecraft:snap_to_surface_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  feature_reference "feature_to_snap" // Named reference of feature to be snapped
  int "vertical_search_range" // Range to search for a floor or ceiling for snapping the feature.
  string "surface" : opt // Defines the surface that the y-value of the placement position will be snapped to. Valid values: 'ceiling', 'floor' and 'random_horizontal'
  bool "allow_air_placement" : opt // Determines whether the feature can snap through air blocks. Defaults to true.
  bool "allow_underwater_placement" : opt // Determines whether the feature can snap through water blocks. Defaults to false.
}
```

### Example

Define a feature that snaps the `cave_vine_feature` to the ceiling

```json
{
  "format_version": "1.13.0",
  "minecraft:snap_to_surface_feature": {
    "description": {
      "identifier": "example:cave_vine_snapped_to_ceiling_feature"
    },
    "feature_to_snap":  "example:cave_vine_feature",
    "vertical_search_range":  12,
    "surface": "ceiling"
  }
}
```
