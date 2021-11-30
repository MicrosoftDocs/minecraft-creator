---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Smoke particle
ms.prod: gaming
---

# Smoke particle

This particle is the general-purpose smoke puff.  It appears on torches, furnaces, Blazes, etc.  It is a simple particle with an upward motion consisting of an upwards acceleration tempered by drag.

The main feature of this particle different from the flame particle is the flipbook texture animation.  See the details in the particle below, but the effect uses a flipbook subpart of the billboard appearance component to drive uv coordinates from frame to frame over time.

In addition, the use of texturewidth/height in the UV section of the billboard component allows referencing of UVs via texels for the flipbook:

```json
{
  "format_version": "1.10.0",
  "particle_effect": {
    "description": {
      "identifier": "minecraft:basic_smoke_particle",
      "basic_render_parameters": {
        "material": "particles_alpha",
        "texture": "textures/particle/particles"
      }
    },
    "components": {
      "minecraft:emitter_rate_instant": {
        "num_particles": 1
      },
      "minecraft:emitter_lifetime_expression": {
        "activation_expression": 1,
        "expiration_expression": 0
      },
      "minecraft:emitter_shape_custom": {
        "offset": [ 0, 0, 0 ],
        "direction": [ "Math.random(-0.1, 0.1)", 1.0, "Math.random(-0.1, 0.1)" ]
      },
      "minecraft:particle_initial_speed": 1.0,
      "minecraft:particle_lifetime_expression": {
        "max_lifetime": "Math.random(0.4, 1.4)"
      },
      "minecraft:particle_motion_dynamic": {
        "linear_acceleration": [ 0, 0.4, 0 ]
      },
      "minecraft:particle_appearance_billboard": {
        "size": [ 0.1, 0.1 ],
        "facing_camera_mode": "lookat_xyz",
        "uv": {
          "texture_width": 128,
          "texture_height": 128,
          "flipbook": {
            "base_UV": [ 56, 0 ],
            "size_UV": [ 8, 8 ],
            "step_UV": [ -8, 0 ],
            "frames_per_second": 8,
            "max_frame": 8,
            "stretch_to_lifetime": true,
            "loop": false
          }
        }
      },
      "minecraft:particle_appearance_tinting": {
        "color": [ "variable.ParticleRandom1*0.5", "variable.ParticleRandom1*0.5", "variable.ParticleRandom1*0.5", 1.0 ]
      },
      "minecraft:particle_appearance_lighting": {}
    }
  }
}

```
