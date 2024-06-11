---
author: mammerla
ms.author: mikeam
title: Features Documentation - minecraft:search_feature
description: "A reference document detailing the 'search_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:search_feature

`minecraft:search_feature` sweeps a volume searching for a valid placement location for its referenced feature. The `search_volume` field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the `search_axis` field, layer by layer. For example, if `search_axis` is set to `-x`, blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the `required_successes` field. If fewer than the required successes are found, no placement will occur.

**Succeeds if**
The number of valid positions is equal to the value specified by `required_successes`.

**Fails if**
The number of valid positions is less than the value specified by `required_successes`.

### Schema

```json
object "minecraft:search_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
    feature_reference "places_feature" // Named reference of feature to be placed
    object "search_volume" // Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position.
  {
    array "min"[3] // Minimum extent of the bounding volume expressed as [ x, y, z ]
    {
      int "[0..0]" // x_min
      int "[1..1]" // y_min
      int "[2..2]" // z_min
    }
    array "max"[3] // Maximum extent of the bounding volume expressed as [ x, y, z ]
    {
      int "[0..0]" // x_max
      int "[1..1]" // y_max
      int "[2..2]" // z_max
    }
  }
  enumerated_value "search_axis"<"-x", "+x", "-y", "+y", "-z", "+z"> // Axis that the search will sweep along through the 'search_volume'
  int "required_successes"<1-*> : opt // Number of valid positions the search must find in order to place the referenced feature
}
```

### Example

Attaching apples to a tree canopy

```json
{
  "format_version": "1.13.0",
  "minecraft:search_feature": {
    "description": {
      "identifier": "example:find_valid_apples_feature"
    },
    "places_feature": "example:apple_feature",
    "search_volume": {
      "min": [ -3, -3, -3 ],
      "max": [ 3, 3, 3 ]
    },
    "search_axis": "-y",
    "required_successes": 3
  }
}
```
