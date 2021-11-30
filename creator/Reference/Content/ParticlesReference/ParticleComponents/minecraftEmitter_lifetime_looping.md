---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Lifetime Looping component
ms.prod: gaming
---

# Particle Documentation - Emitter Lifetime Looping component

Emitter will loop until it is removed.

```json
"minecraft:emitter_lifetime_looping": {

    // emitter will emit particles for this time per loop
    // evaluated once per particle emitter loop
    "active_time": <float/molang> <default:10>

    // emitter will pause emitting particles for this time per loop
    // evaluated once per particle emitter loop
    "sleep_time": <float/molang> <default:0>
}
```
