---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Shape Entity-AABB component
ms.prod: gaming
---

# Particle Documentation - Emitter Shape Entity-AABB component

All particles come out of the axis-aligned bounding box (AABB) for the entity the emitter is attached to, or the emitter point if no entity.


```json

"minecraft:emitter_shape_entity_aabb": {
    // emit only from the surface of the sphere
    "surface_only": <bool> <default:false>

    // evaluated once per particle emitted
    // defaults to outwards
    "direction": "inwards" // particle direction towards center of sphere
    "direction": "outwards" // particle direction away from center of sphere
    "direction": [<float/molang>, <float/molang>, <float/molang>] <default:[0, 0, 0]
}

```
