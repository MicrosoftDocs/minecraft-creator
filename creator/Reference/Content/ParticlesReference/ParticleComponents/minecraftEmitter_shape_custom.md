---
author: mammerla
ms.author: mikeam
title: Particle Documentation - Emitter Shape Custom component
description: "A reference document detailing the 'emitter shape custom' particle component"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Emitter Shape Custom component

All particles are emitted  based on a specified set of Molang expressions.

```json
"minecraft:emitter_shape_custom": {
    // specifies the offset from the emitter to emit the particles
    // evaluated once per particle emitted
    "offset": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]>

    // specifies the direction for the particle
    // evaluated once per particle emitted
    "direction": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]
}
```
