---
author: mammerla
ms.author: mikeam
title: "Animation Getting Started Documentation - Animation Getting Started"
description: "A reference document describing all current Animation Getting Started"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025
---

# Animation Getting Started

## Adding Animations

One needs to be able to control how animations are played, when, and how they interact with other animations.  to group animations While a lot of this can be managed in the entity definition `scripts/animate` section, animation controllers give you the functionality of a state machine into states and control them as a block.  Animations in an animation controller state can be animation controllers themselves, allowing for arbitrarily complex animation hierarchies.

### Here's a sample animation controller
{
  "format_version": "1.17.30",
  "animation_controllers": {
    "controller.animation.my_mob.move": {
      "initial_state": "moving",
      "states": {
        "moving": {
          "animations": [
            "wag_tail",
            "wiggle_ears",
            { "walk": "query.modified_move_speed" }
          ],
          "transitions": [
            { "grazing": "query.is_grazing" }
          ]
        },
        "grazing": {
          "animations": [ "grazing" ],
          "transitions": [
            { "moving": "query.all_animations_finished" }
          ]
        }
      }
    }
  }
}

At the beginning of each frame, the skeleton is reset to its default pose from its geometry definition and then animations are applied per-channel-additively in order.  Note that the channels (x, y, and z) are added separately across animations first, then converted to a transform once all animations have been cumulatively applied.

### Here is an example from quadruped.animation.json in the vanilla resource pack's animation folder:
{
  "format_version": "1.8.0",
  "animations": {
    "animation.quadruped.walk": {
      "anim_time_update": "query.modified_distance_moved",
      "loop": true,
      "bones": {
        "leg0": { "rotation": [ "Math.cos(query.anim_time * 38.17) *  80.0", 0.0, 0.0 ] },
        "leg1": { "rotation": [ "Math.cos(query.anim_time * 38.17) * -80.0", 0.0, 0.0 ] },
        "leg2": { "rotation": [ "Math.cos(query.anim_time * 38.17) * -80.0", 0.0, 0.0 ] },
        "leg3": { "rotation": [ "Math.cos(query.anim_time * 38.17) *  80.0", 0.0, 0.0 ] }
      }
    }
  }
}

In order to define what animations an entity has, you must add both an `animations` and a `scripts/animate` section to an entity's entity definition file.
## Key Frames

Currently only linear interpolation is supported.  Key frame "pre" and "post" settings allow control of the interpolation curve at any key frame.