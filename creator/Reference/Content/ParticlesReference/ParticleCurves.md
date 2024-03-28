---
author: JimSeaman42
ms.author: mikeam
title: Particle Documentation - Curves in Particle Effects
description: "A reference document detailing how curves work in regards to particle effects"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Curves in Particle Effects

**Curves** are interpolation values with inputs from 0 to 1, and outputs based on the curve. For each rendering frame of each particle, the curves are evaluated and the result is placed in a Molang variable with the same name as the curve.

**Molangvar** is the Molang variable to be used in Molang expressions. For example, `variable.mycurve` in the example below would make the result of the curve available in Molang as `variable.mycurve`.  All variables must begin with `variable.`

The type can be "linear", "bezier", "bezier_chain", or "catmull_rom".

- `linear` is a series of nodes, equally spaced between 0 and 1 after applying input/horizontal_range.

- `bezier` is a 4-node bezier spline, with the first and last point being the values at 0 and 1 and the middle two points forming the slope lines at 0.33 for the first point and 0.66 for the second.

- `catmull_rom` is a series of curves which pass through all but the last/first node. The first/last nodes are used to form the slope of the second/second-last points respectively. All points are evenly spaced.

- `bezier_chain` is a chain of bezier splines. A series of points are specified along with their corresponding slopes, and each segment uses its pair of points and slopes to form a bezier spline.  Each point aside from the first/last is shared between its pair of spline segments.

**nodes** are the control nodes for the curve. These are assumed to be equally spaced; this notation only works for `linear`, `bezier`, and `catmull_rom`.

**nodes for bezier chain** are the control nodes for `bezier_chain`. The nodes will be sorted prior to parsing, so if you declare nodes 0.3, 0.6, 0.5, they will be re-ordered to 0.3, 0.5, 0.6.

 **input** <float/Molang> This is the input value to use. For example, `variable.particle_age/variable.particle_lifetime` results in an input from 0 to 1 over the lifetime of the particle, while `variable.particle_age` would provide input of how old the particle is in seconds.

**horizontal range**  (default: 1.0) This is the range that the input is mapped onto between 0 and this value. This field is deprecated and optional. This field is ignored for `bezier_chain`

## Example

```json
"curves": {
  "Molangvar": {
    "type": type,

    "nodes": [<float/Molang>, <float/Molang>, <float/Molang>, <float/Molang>],

    "nodes": {
        // the key values map to the "input" field
        "0.3": {
            "value": "5", // the output of the curve
            "left_value": "2", // when curve comes from the left of the node, what point does it use?
            "right_value": "3", // when curve comes from the right side of the node, what point does it use?
            "slope": "3", // the slope of the node, both sides
            "left_slope: "0.4", // the left slope of the node
            "right_slope": "2", // the right slope of the node
        },
        ... // more nodes
    },
    "input": <float/Molang>
    "horizontal_range": <float/Molang>
  }
}
```
