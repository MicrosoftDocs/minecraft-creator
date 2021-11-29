---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Shape Custom component
ms.prod: gaming
---

# Particle Documentation - Emitter Shape Custom component

All particles are emitted  based on a specified set of Molang expressions.

```json
"minecraft:emitter_shape_custom": {
    // specifies the offset from the emitter to emit the particles
    // evaluated once per particle emitted
    "offset": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]>

    // specifies the direciton for the particle
    // evaluated once per particle emitted
    "direction": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]
}
```
