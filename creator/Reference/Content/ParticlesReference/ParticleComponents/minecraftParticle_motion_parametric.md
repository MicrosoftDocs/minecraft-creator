---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Motion Parametric component
ms.prod: gaming
---

# Particle Documentation - Particle Motion Parametric component

This component directly controls the particle.

>![NOTE]
> This component won't work for either manually-emitted particles, or entity-based particle emitters that aren't in local space.

```json
"minecraft:particle_motion_parametric": {
    // directly set the position relative to the emitter.
    // E.g. a spiral might be:
    // "relative_position": ["Math.cos(Params.LifeTime)", 1.0,
    //                       "Math.sin(Params.Lifetime)"]
    // defaults to [0, 0, 0]
    // evaluated every frame
    "relative_position": [<float/molang> <float/molang> <float/molang>]

    // directly set the 3d direction of the particle
    // doesn't affect direction if not specified
    // evaluated every frame
    "direction": [<float/molang> <float/molang> <float/molang]

    // directly set the rotation of the particle
    // evaluated every frame
    "rotation": <float/molang> <default:0>
}}
```
