---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Flame particle
ms.prod: gaming
---

# Flame particle

This particle is the little flame that appears on torches and furnaces to indicate fire.  It is a simple particle, consisting of a non-moving flame, with some variations.  Note the use of Molang to create variations in the particle behavior.

In addition, the use of texturewidth/height in the UV section of the billboard component allows referencing of UVs via texels:

```json

{
  "format_version": "1.10.0",
  "particle_effect": {
    "description": {
      "identifier": "minecraft:basic_flame_particle",
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
      "minecraft:emitter_shape_sphere": {
        "radius": 0.025,
        "direction": [ 0, 0, 0 ]
      },
      "minecraft:particle_lifetime_expression": {
        "max_lifetime": "Math.random(0.6, 2.0)"
      },
      "minecraft:particle_appearance_billboard": {
        "size": [
          "(0.1 + variable.ParticleRandom1*0.1) - (0.1 * variable.ParticleAge)",
          "(0.1 + variable.ParticleRandom1*0.1) - (0.1 * variable.ParticleAge)"
        ],
        "facing_camera_mode": "lookat_xyz",
        "uv": {
          "texture_width": 128,
          "texture_height": 128,
          "uv": [ 0, 24 ],
          "uv_size": [ 8, 8 ]
        }
      }
    }
  }
}

```
