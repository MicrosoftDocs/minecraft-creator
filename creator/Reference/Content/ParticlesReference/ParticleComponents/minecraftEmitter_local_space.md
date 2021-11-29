---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Local Space component
ms.prod: gaming
---

# Particle Documentation - Emitter Local Space component

This component specifies the frame of reference of the emitter.  Applies only when the emitter is attached to an entity.  When 'position' is true, the particles will simulate in entity space, otherwise they will simulate in world space.  Rotation works the same way for rotation. Default is false for both, which makes the particles emit relative to the emitter, then simulate independently from the emitter. Note that rotation = true and position = false is an invalid option.  Velocity will add the emitter's velocity to the initial particle velocity.

```json
"minecraft:emitter_local_space": {
    "position": <bool>
    "rotation": <bool>
    "velocity": <bool>
}
```
