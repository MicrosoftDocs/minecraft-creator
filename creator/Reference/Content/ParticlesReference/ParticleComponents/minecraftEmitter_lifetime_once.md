---
author: mammerla
ms.author: mikeam
title: Particle Documentation - Emitter Lifetime Once component
description: "A reference document detailing the 'emitter lifetime once' particle component"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Emitter Lifetime Once component

Emitter will execute once, and once the lifetime ends or the number of particles allowed to emit have emitted, the emitter expires.

```json
"minecraft:emitter_lifetime_once": {
    // how long the particles emit for
    // evaluated once
    "active_time": <float/molang> <default:10>
}
```
