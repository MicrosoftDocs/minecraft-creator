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

### Schema

```json
object "minecraft:scatter_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  feature_reference "places_feature" // Named reference of feature to be placed
  bool "project_input_to_floor" : opt // If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
  molang "iterations" // Number of scattered positions to generate
  object "scatter_chance" : opt // Probability numerator / denominator that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
  {
    int "numerator"<1-*>
    int "denominator"<1-*>
  }
  molang "scatter_chance" : opt // Probability (0-100] that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
  enumerated_value "coordinate_eval_order"<"xyz", "xzy", "yxz", "yzx", "zxy", "zyx"> : opt // The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to "xzy".
  molang "x" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
  object "x" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
  {
    enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
    int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
    int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
    array "extent"[2]
    {
      molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
      molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
    }
  }
  molang "z" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
  object "z" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
  {
    enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
    int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
    int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
    array "extent"[2]
    {
      molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
      molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
    }
  }
    molang "y" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
    object "y" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
  {
    enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
    int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
    int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
    array "extent"[2]
    {
      molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
      molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
    }
  }
}
```

### Example

Scattering flowers at sea level across half the chunks in a biome.

**Version 1.13.0**

```json
{
  "format_version": "1.13.0",
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

**Version 1.21.10**

Uses "distribution" field to define the scattering settings.

```json
{
  "format_version": "1.21.10",
  "minecraft:scatter_feature": {
    "description": {
      "identifier": "example:scatter_flowers_feature"
    },
    "places_feature": "example:flower_feature",
    "distribution": {
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
}
```
