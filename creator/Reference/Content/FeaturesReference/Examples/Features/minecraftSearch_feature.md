---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:search_feature
ms.prod: gaming
---

# Features Documentation - minecraft:search_feature

`minecraft:search_feature` sweeps a volume searching for a valid placement location for its referenced feature. The `search_volume` field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the `search_axis` field, layer by layer. For example, if `search_axis` is set to `-x`, blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the `required_successes` field. If fewer than the required successes are found, no placement will occur.

**Succeeds if**
The number of valid positions is equal to the value specified by `required_successes`.

**Fails if**
The number of valid positions is less than the value specified by `required_successes`.

## Example

### Attaching apples to a tree canopy

```json
{
  "format_version": 1.13.0,
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
```
