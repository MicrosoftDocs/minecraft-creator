---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Shape Box component
ms.prod: gaming
---

# Particle Documentation - Emitter Shape Box component

All particles come out of a box of the specified size from the emitter.

```json

"minecraft:emitter_shape_box": {
    // specifies the offset from the emitter to emit the particles
    // evaluated once per particle emitted
    "offset": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]>

    // box dimensions
    // these are the half dimensions, the box is formed centered on the emitter
    // with the box extending in the 3 principal x/y/z axes by these values
    "half_dimensions": [ <float/molang>, <float/molang> <float/molang ],

    // emit only from the surface of the sphere
    "surface_only": <bool> <default:false>

    // specifies the direction of particles.  Defaults to "outwards"
    // evaluated once per particle emitted
    "direction": "inwards" // particle direction towards center of sphere
    "direction": "outwards" // particle direction away from center of sphere
    "direction": [<float/molang>, <float/molang>, <float/molang>]
}

```
