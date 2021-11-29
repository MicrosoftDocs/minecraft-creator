---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Mob Flame effect
ms.prod: gaming
---

# Mob Flame effect

The mob flame effect is used by the Blaze when it's charging up to hurl fireballs.  This is a flipbook flame effect that rises over time.

Unlike the earlier particles, this is a regular emitter.  It is tied to an entity, thus uses the entity_aabb shape, as we want the flames to appear all over the blaze.  As the effect is tied to the charged state, the activation expression is used, tied to the `EntityFlag::CHARGED` entity variable.  This causes the flames to appear when the Blaze is charging, then to disappear when it isn't.

In this case, we use the texturewidth/height to make the texel "resolution" be one frame of animation, thus allowing advancement of the frames to be just 1:

```json

{
  "format_version": "1.10.0",
  "particle_effect": {
    "description": {
      "identifier": "minecraft:mobflame_emitter",
      "basic_render_parameters": {
        "material": "particles_alpha",
        "texture": "textures/flame_atlas"
      }
    },
    "components": {
      "minecraft:emitter_local_space": {
        "position": true,
        "rotation": true
      },
      "minecraft:emitter_rate_steady": {
        "spawn_rate": "Math.random(15, 25)",
        "max_particles": 50
      },
      "minecraft:emitter_lifetime_expression": {
        "activation_expression": 1,
        "expiration_expression": 0
      },
      "minecraft:emitter_shape_entity_aabb": {
        "direction": [ 0, 1, 0 ]
      },
      "minecraft:particle_initial_speed": "Math.random(0, 1)",
      "minecraft:particle_lifetime_expression": {
        "max_lifetime": 1.25
      },
      "minecraft:particle_motion_dynamic": {
        "linear_acceleration": [ 0, 1.0, 0 ],
        "linear_drag_coefficient": 0.0
      },
      "minecraft:particle_appearance_billboard": {
        "size": [ 0.5, 0.5 ],
        "facing_camera_mode": "lookat_xyz",
        "uv": {
          "texture_width": 1,
          "texture_height": 32,
          "flipbook": {
            "base_UV": [ 0, 0 ],
            "size_UV": [ 1, 1 ],
            "step_UV": [ 0, 1 ],
            "frames_per_second": 32,
            "max_frame": 32,
            "stretch_to_lifetime": true,
            "loop": false
          }
        }
      }
    }
  }
}
```
