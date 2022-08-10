---
author: v-josjones
ms.author: v-josjones
title: Animation Documentation - Getting Started
ms.prod: gaming
---

# Animation Documentation - Getting Started

## Overview of Animations in Minecraft: Bedrock Edition

Animation follows the current Minecraft JSON paradigms:

- Fields should be lower-case and use underscores (no spaces).
- All JSON files in the definitions directory and subtree will be read into and interpreted by the animation system.

## Adding Animations

Before diving into how animation is defined in addons, let's take a look at an example of an Entity definition file that showcases how animations are assigned to an entity.

## Entity Definition

In order to define what animations an entity has, you must add both an `animations` and a `scripts/animate` section to an entity's entity definition file.

This means you will not see the move animation in the pig.json animation file.  If you would like to make a custom pig walk, you can change this line to point to your custom animation.

Animations are specified as a short name, followed by their full resource name.  The short name is used in animation controllers and the `scripts/animate` list, while the long name is used in the animations file.

In the `scripts/animate` section, you list the animations to play and in which order.  You can either specify an animation directly, or specify a blend expression.

This means you will not see the move animation in the pig.json animation file either.  If you would like to make a custom pig walk you can change this line to point to your custom animation.

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

Animations are channel based (rotation, position, or scale), and within that, they are key-framed:

EntityAnimation: animation name
__BoneAnimation[]: bone name to animation for this animation
____AnimationChannel[]: rotation, scale, or translation to animate
______KeyFrame[]: the value for the channel to be at, at a specific time

All of the above concepts are described in a detailed, bottom-up approach below

## Animation Controller

One needs to be able to control how animations are played, when, and how they interact with other animations.  While a lot of this can be managed in the entity definition `scripts/animate` section, animation controllers give you the functionality of a state machine into states and control them as a block.  Animations in an animation controller state can be animation controllers themselves, allowing for arbitrarily complex animation hierarchies.

### Example of Animation Controller

```JSON
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

At the beginning of each frame, the skeleton is reset to its default pose from its geometry definition and then animations are applied per-channel-additively in order. Please note that the channels (x, y, and z) are added separately across animations **first!** After, they are then converted to a transform once all animations have been cumulatively applied.

Animation data can be either raw data:

```JSON
"rotation": [90.0, 0.0, 0.0]
```

or a run-time interpreted script:

```JSON
"rotation": ["cos(query.anim_pos * 38.17) * 80.0 * query.anim_speed", 0.0, 0.0]
```

> [!NOTE]
> By default, rotations are in degrees, in euler X-then-Y-then-Z format.

### Example from quadruped.animation.json in the vanilla resource pack's animation folder

```JSON
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

All names: animations, bones, states, etc, must all start with a letter and contain only alphanumerics, underscore, or period.  It is recommended to use names in all lower-case.

In the key frame examples below, `"head"` and is used as the name of the bone.

## Key Frames

A key frame defines two values for a channel-specific transform to a specific bone at a specified time, one as time approaches the key frame time, and the second from that key frame time onwards.
As such, when interpolating between two key frames, one can define the slope of the animation curve in either a continuous or discontinuous manner.

> [!NOTE]
> Interpolation, in an animation scenario, is used to calculate the movement between 2 key frames.
>
> If a key frame is set on the first frame at a value of 0, and a key frame is set on the tenth frame at a value of 1, then the frames in-between will be interpolated in order to smoothly move the value from 0 to 1 over each frame until it gets to frame 10.

### Continuous Example

```JSON
"head": {
  "rotation": {
    "0.0":[0, 0, 0],
    "0.5": [ 0, 180, 0],
    "1.0": [0, 360, 0]
  }
}
```

## Discontinuous Example

This example scales the bone "head":

1. From 0 to 0.5 seconds (in the "pre" tag), the head bone is set to its normal scale of 1 in all dimensions [X, Y, Z]
1. At 0.5 seconds, the bone will instantly scale up to 2 times its normal size
1. From 0.5 to 1 second ("post"), the bone will re-scale back to its normal size of scale of 1 in all dimensions

> [!NOTE]
> In the larger example above of the file format, "pre" and "post" can also be defined by a Molang expression that calculates that value at runtime, allowing you to have a mathematically defined curve instead of being purely linear.

```JSON
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

Transformations in Animation are made up of three components; location in three dimensional space, rotation, and scale.

Some key things to keep in mind on how Transforms work within Bedrock:

- Order of operations: vertices are translated, rotated, then scaled.
- Animation data is assumed to be hierarchical, and is applied to a bone by name matching the bone name in the animation data to the targeted geometry's skeleton.
- Not every bone needs to be animated.
- You can animate bones that don't exist in the targeted geometry (missing bones are ignored).
- For each of scale, rotation, position, one can set the fields individually or uniformly with a single value.  For example, these are equivalent:

```JSON
"scale": [2.0, 2.0, 2.0]
"scale": 2.0
"scale": [2.0]
```
