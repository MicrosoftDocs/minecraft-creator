---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Lifetime Kill-Plane component
ms.prod: gaming
---

# Particle Documentation - Particle Lifetime Kill-Plane component

Particles that cross this plane expire.  The plane is relative to the emitter, but oriented in world space.  The four parameters are the usual 4 elements of a plane equation.

```json
// A*x + B*y + C*z + D = 0
// with the parameters being [ A, B, C, D ]
"minecraft:particle_kill_plane": [ <float>, <float>, <float>, <float> ]

```
