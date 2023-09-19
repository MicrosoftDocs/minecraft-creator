---
author: JimSeaman42
ms.author: mikeam
title: Features Documentation - minecraft:scatter_feature
description: "A reference document detailing the 'scatter_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:scatter_feature

`minecraft:scatter_feature` scatters a feature throughout a chunk. The `x`, `y`, and `z` fields are per-coordinate parameters. Coordinates represent an offset from the input position instead of an absolute position, and may be a single value, random distribution, or molang expression that resolves to a numeric value. The `coordinate_eval_order` field is provided for finer control of coordinate resolution (particularly when using the `grid` distribution). `iterations` controls how many individual placements should occur if the `scatter_chance` check succeeds. The `scatter_chance` check happens once, so either all placements will run or none will.

**Succeeds if**
At least one feature placement succeeds.

**Fails if**
All feature placements fail.

## Example

### Scattering flowers at sea level across half the chunks in a biome

```json
{
  "format_version": 1.13.0,
  "minecraft:scatter_feature": {
    "description": {
      "identifier": "example:scatter_flowers_feature"
    },
    "places_feature": "example:flower_feature",
    "iterations": 10,
    "scatter_chance": 50.0,
    "x": {
      "distribution": "uniform",
      "extent": [ 0, 15 ]
    },
    "y": 64,
    "z": {
      "distribution": "uniform",
      "extent": [ 0, 15 ]
    }
  }
}
```
