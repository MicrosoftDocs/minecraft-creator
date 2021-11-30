---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Lifetime Expression component
ms.prod: gaming
---

# Particle Documentation - Particle Lifetime Expression component

Standard lifetime component.  These expressions control the lifetime of the particle.

```json
"minecraft:particle_lifetime_expression": {
    // this expression makes the particle expire when true (non-zero)
    // The float/expr is evaluated once per particle
    // evaluated every frame
    "expiration_expression": <float/molang> <default:0>

    // alternate way to express lifetime
    // particle will expire after this much time
    // evaluated once
    "max_lifetime": <float/molang>
}
```
