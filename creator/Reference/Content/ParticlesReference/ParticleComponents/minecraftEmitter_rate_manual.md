---
author: mammerla
ms.author: mikeam
title: Particle Documentation - Emitter Rate Manual component
description: "A reference document detailing the 'emitter rate manual' particle component"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Emitter Rate Manual component

Particle emission will occur only when the emitter is told to emit via the game itself.  This is mostly used by legacy particle effects.

```json
"minecraft:emitter_rate_manual": {
    // evaluated once per particle emitted
    "max_particles": <float/molang> <default:50>
}
```
