---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Shape Sphere component
ms.prod: gaming
---

# Particle Documentation - Emitter Shape Sphere component

All particles come out of a sphere offset from the emitter.

```json
"minecraft:emitter_shape_sphere": {
    // specifies the offset from the emitter to emit the particles
    // evaluated once per particle emitted
    "offset": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]>

    // sphere radius
    // evaluated once per particle emitted
    "radius": <float/molang> <default:1>

    // emit only from the surface of the sphere
    "surface_only": <bool> <default:false>

    // specifies the direction of particles.  Defaults to "outwards"
    "direction": "inwards" // particle direction towards center of sphere
    "direction": "outwards" // particle direction away from center of sphere
    // evaluated once per particle emitted
    "direction": [<float/molang>, <float/molang>, <float/molang>]
}
```
