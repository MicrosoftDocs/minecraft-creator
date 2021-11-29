---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Rate Manual component
ms.prod: gaming
---

# Particle Documentation - Emitter Rate Manual component

Particle emission will occur only when the emitter is told to emit via the game itself.  This is mostly used by legacy particle effects.

```json
"minecraft:emitter_rate_manual": {
    // evaluated once per particle emitted
    "max_particles": <float/molang> <default:50>
}
```
