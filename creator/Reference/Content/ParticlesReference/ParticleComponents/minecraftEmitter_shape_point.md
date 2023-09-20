---
author: mammerla
ms.author: mikeam
title: Particle Documentation - Emitter Shape Point component
description: "A reference document detailing the 'emitter shape point' particle component"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Emitter Shape Point component

All particles come out of a point offset from the emitter.

```json
"minecraft:emitter_shape_point": {
    // specifies the offset from the emitter to emit the particles
    // evaluated once per particle emitted
    "offset": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]>

    // specifies the direction of particles.
    // evaluated once per particle emitted
    "direction": [<float/molang>, <float/molang>, <float/molang>]
}
```
