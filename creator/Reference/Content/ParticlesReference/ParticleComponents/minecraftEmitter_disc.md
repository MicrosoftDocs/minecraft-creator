---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Disc component
ms.prod: gaming
---

# Particle Documentation - Emitter Disc component

This component spawns particles using a disc shape, particles can be spawned inside the shape or on its outer perimeter.

```json
"minecraft:emitter_shape_disc": {
    // specifies the normal of the disc plane, the disc will be perpendicular to this direction
    // defaults to [ 0, 1, 0 ]
    "plane_normal": "x", // this variant has the normal in the x axis
    "plane_normal": "y", // this variant has the normal in the y axis
    "plane_normal": "z", // this variant has the normal in the z axis
    "plane_normal": [ <float/molang>, <float/molang>, <float/molang> ], // custom direction for the normal

    // specifies the offset from the emitter to emit the particles
    // evaluated once per particle emitted
    "offset": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]>

    // disc radius
    // evaluated once per particle emitted
    "radius": <float/molang> <default:1>

    // emit only from the edge of the disc
    "surface_only": <bool> <default:false>

    // specifies the direction of particles.  Defaults to "outwards"
    "direction": "inwards" // particle direction towards center of disc
    "direction": "outwards" // particle direction away from center of disc
    // evaluated once per particle emitted
    "direction": [<float/molang>, <float/molang>, <float/molang>]
}
```
