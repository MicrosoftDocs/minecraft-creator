---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Lifetime Expression component
ms.prod: gaming
---

# Particle Documentation - Emitter Lifetime Expression component

Emitter will turn 'on' when the activation expression is non-zero, and will turn 'off' when it's zero.  This is useful for situations like driving an entity-attached emitter from an entity variable.

```json
"minecraft:emitter_lifetime_expression": {
    // When the expression is non-zero, the emitter will emit particles.
    // Evaluated every frame
    "activation_expression": <float/molang> <default:1>

    // Emitter will expire if the expression is non-zero.
    // Evaluated every frame
    "expiration_expression": <float/molang> <default:0>
}
```
