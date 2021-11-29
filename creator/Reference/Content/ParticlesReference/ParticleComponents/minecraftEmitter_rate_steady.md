---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Rate Steady component
ms.prod: gaming
---

# Particle Documentation - Emitter Rate Steady component

Particles come out at a steady or Molang rate over time.

```json
"minecraft:emitter_rate_steady": {
    // how often a particle is emitted, in particles/sec
    // evaluated once per particle emitted
    "spawn_rate": <float/molang> <default:1>

    // maximum number of particles that can be active at once for this emitter
    // evaluated once per particle emitter loop
    "max_particles": <float/molang> <default:50>
}
```
