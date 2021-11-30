---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Motion Collision component
ms.prod: gaming
---

# Particle Documentation - Particle Motion Collision component

This component enables collisions between the terrain and the particle. Collision detection in Minecraft consists of detecting an intersection, moving to a nearby non-intersecting point for the particle (if possible), and setting its direction to not be aimed towards the collision (usually perpendicular to the collision surface).

> [!IMPORTANT]
> If this component doesn't exist, there will be no collision.

```json

"minecraft:particle_motion_collision": {
    // enables collision when true/non-zero.
    // evaluated every frame
    "enabled": <bool/molang> <default:true>

    // alters the speed of the particle when it has collided
    // useful for emulating friction/drag when colliding, e.g a particle
    // that hits the ground would slow to a stop.
    // This drag slows down the particle by this amount in blocks/sec
    // when in contact
    "collision_drag": <float>

    // used for bouncing/not-bouncing
    // Set to 0.0 to not bounce, 1.0 to bounce back up to original hight
    // and in-between to lose speed after bouncing.  Set to >1.0 to gain energy on each bounce
    "coefficient_of_restitution": <float>

    // used to minimize interpenetration of particles with the environment
    // note that this must be less than or equal to 1/2 block
    "collision_radius": <float>

    // triggers expiration on contact if true
    "expire_on_contact": <bool>

    // triggers an event
    // array of individual events
    "events": [
        {
          // triggers the specified event if the conditions are met
          "event": <string>
          // optional minimum speed for event triggering
          "min_speed": <float> // default/minimum is 2 blocks/sec
        },
    ],
    "events": { // can be an individual event as well
        // triggers the specified event if the conditions are met
        "event": <string>
        // optional minimum speed for event triggering
        "min_speed": <float> // default/minimum is 2 blocks/sec
    }
}

```
