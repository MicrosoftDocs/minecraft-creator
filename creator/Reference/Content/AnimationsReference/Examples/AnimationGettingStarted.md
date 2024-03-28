---
author: mammerla
ms.author: mikeam
title: Animation Documentation - Getting Started
description: "A reference document detailing how to begin in the animation process with Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Animation Documentation - Getting Started

## Overview of Animations in Minecraft: Bedrock Edition

Animation follows the current Minecraft JSON paradigms:

- Fields should be lower-case and use underscores (no spaces).
- All JSON files in the definitions directory and subtree will be read into and interpreted by the animation system.

## Entity Definition

In order to define what animations an entity has, both an `animations` and a `scripts/animate` section must be added to the entity definition file.

Animations are specified as a short name, followed by their full resource name. The short name is used in animation controllers and the `scripts/animate` list, while the long name is used in the animations file.

In the `scripts/animate` section, list the animations to play and in which order. A blend expression may be specified, or an animation may be specified directly.

### Entity Definition Example

```json
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "minecraft:pig",
      "min_engine_version": "1.8.0",
      "materials": { "default": "pig" },
      "textures": {
        "default": "textures/entity/pig/pig",
        "saddled": "textures/entity/pig/pig_saddle"
      },
      "geometry": {
        "default": "geometry.pig.v1.8"
      },
      "animations": {
        "setup": "animation.pig.setup",
        "walk": "animation.quadruped.walk",
        "look_at_target": "animation.common.look_at_target",
        "baby_transform": "animation.pig.baby_transform"
      },
      "scripts": {
        "animate": [
          "setup",
          { "walk": "query.modified_move_speed" },
          "look_at_target",
          { "baby_transform": "query.is_baby" }
        ]
      },
      "render_controllers": [ "controller.render.pig" ],
      "spawn_egg": {
        "texture": "spawn_egg",
        "texture_index": 2
      }
    }
  }
}
```

## Animation Hierarchy

Animations are channel based (rotation, position, or scale), and within that are key-framed:

```
EntityAnimation: animation name
  BoneAnimation[]: bone name for this animation
    AnimationChannel[]: rotation, scale, or translation to animate
      KeyFrame[]: the value for the channel to have at a specific time
```

## Animation Controller

Controlling how and when animations are played, and how they interact with other animations, is incredibly important. While many items can be managed in the entity definition `scripts/animate` section, animation controllers provide the functionality of a state machine into states, and allow the user to control them as a block. Animations in an animation controller state can be animation controllers themselves, allowing for complex animation hierarchies.

### Example of Animation Controller

```json
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
```

To learn more about Animation Controllers, please visit the [Animation Controllers](AnimationController.md) reference page.

## Animations

At the beginning of each frame, the skeleton is reset to its default pose from its geometry definition and then animations are applied per-channel additively in order. Please note that the channels (x, y, and z) are added separately across animations **first!** They are then converted to a transform once all animations have been cumulatively applied.

Animation data can be either raw data:

```json
"rotation": [90.0, 0.0, 0.0]
```

or a run-time interpreted script:

```json
"rotation": ["cos(query.anim_pos * 38.17) * 80.0 * query.anim_speed", 0.0, 0.0]
```

> [!NOTE]
> By default, rotations are in degrees, in X-then-Y-then-Z format.

### Example from quadruped.animation.json in the vanilla resource pack's animation folder

```json
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
```

## Names

All names (animations, bones, states, so on) must begin with a letter and contain only alphanumerics, underscores, and periods. It is recommended to use all lower-caps for names.

In the key frame examples below, `"head"` is used as the name of the bone.

## Key Frames

A key frame defines two values for a channel-specific transform to a specific bone at a specified time, one as time approaches the key frame time, and the second from the key frame time onwards.
As such, when interpolating between two key frames, one can define the slope of the animation curve in either a continuous or discontinuous manner.

> [!NOTE]
> Interpolation, in an animation scenario, is used to calculate the movement between 2 key frames.
>
> If a key frame is set on the first frame at a value of 0, and a key frame is set on the tenth frame at a value of 1, then the frames in-between will be interpolated in order to smoothly move the value from 0 to 1 over each frame until it gets to frame 10.

### Continuous Example

```json
"head": {
  "rotation": {
    "0.0":[0, 0, 0],
    "0.5": [ 0, 180, 0],
    "1.0": [0, 360, 0]
  }
}
```

## Discontinuous Example

To scale the 'head' bone:

1. From 0 to 0.5 seconds (in the "pre" tag), the head bone is set to a scale of 1 in all dimensions [X, Y, Z]
1. At 0.5 seconds, the bone will instantly scale up to 2 times its normal size
1. From 0.5 to 1 second ("post"), the bone will re-scale back to the scale of 1 in all dimensions

> [!NOTE]
>"Pre" and "post" can also be defined by a Molang expression that calculates the value at runtime, allowing for a mathematically defined, as opposed to a purely linear, curve.

```json
"head": {
  "scale": {
    "0.5": {
      "pre": [1, 1, 1],
      "post": 2.0
    },
    "1.0": [ 1.0 ]
  }
}
```

## Transforms

Transformations in Animation are made up of three components - location in three dimensional space, rotation, and scale.

Some key concepts on how Transforms work within Minecraft:Bedrock Edition:

- Order of operations: vertices are translated, rotated, then scaled.
- Animation data is assumed to be hierarchical, and is applied to a bone by name matching the bone name in the animation data to the targeted geometry's skeleton.
- Not every bone needs to be animated.
- Bones that don't exist in the targeted geometry can be animated (missing bones are ignored).
- Scale, rotation, and position can be set individually or uniformly with a single value. For example, these values are equivalent:

```json
"scale": [2.0, 2.0, 2.0]
"scale": 2.0
"scale": [2.0]
```
