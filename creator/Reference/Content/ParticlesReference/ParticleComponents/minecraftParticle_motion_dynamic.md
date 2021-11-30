---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Motion Dynamic component
ms.prod: gaming
---

# Particle Documentation - Particle Motion Dynamic component

This component specifies the dynamic properties of the particle, from a simulation standpoint what forces act upon the particle? These dynamics alter the velocity of the particle, which is a combination of the direction of the particle and the speed. Particle direction will always be in the direction of the velocity of the particle.

```json
"minecraft:particle_motion_dynamic": {
    // the linear acceleration applied to the particle, defaults to [0, 0, 0].
    // Units are blocks/sec/sec
    // An example would be gravity which is [0, -9.8, 0]
    // evaluated every frame
    "linear_acceleration": [<float/molang>, <float/molang>, <float/molang>],

    // using the equation:
    // acceleration = -linear_drag_coefficient*velocity
    // where velocity is the current direction times speed
    // Think of this as air-drag.  The higher the value, the more drag
    // evaluated every frame
    "linear_drag_coefficient": <float/molang> <default:0>

    // acceleration applies to the rotation speed of the particle
    // think of a disc spinning up or a smoke puff that starts rotating
    // but slows down over time
    // evaluated every frame
    // acceleration is in degrees/sec/sec
    "rotation_acceleration" <float/molang> <default:0>

    // drag applied to slow down rotation
    // equation is rotation_acceleration += -rotation_rate*rotation_drag_coefficient
    // useful to slow a rotation, or to limit the rotation acceleration
    // Think of a disc that speeds up (acceleration)
    // but reaches a terminal speed (drag)
    // Another use is if you have a particle growing in size, having
    // the rotation slow down due to drag can add "weight" to the particle's
    // motion
    "rotation_drag_coefficient" <float/molang> <default:0>
}
```
