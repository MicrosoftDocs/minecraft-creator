---
author: chipotle
ms.author: mikeam
title: Animations Overview
description: "An overview of how to animate entities in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 08/08/2025
---

# Animations in Minecraft: Bedrock Edition

Animations give your entities life as they move through your Minecraft world! Bedrock Edition's animation system is comprised of two parts with two very different functions:

- **Animations** define the raw animation data for an entity, with keyframe data that tells the game how to manipulate components of the entity's model to make them walk, attack, or perform other actions.
- **Animation controllers** add logic to the entity's animations, triggering them at certain times or in response to events.

> [!TIP]
> The [Animations vs. Animation Controllers](../AnimationsVsControllers.md) article goes over the difference between animations and animation controllers in much greater depth.

## Entity definition

In order to define what animations an entity has, both an `animations` and a `scripts/animate` section must be added to the entity definition file.

Animations are specified as a short name followed by their full resource name. The short name is used in animation controllers and the `scripts/animate` list, while the long name is used in the animations file.

In the `scripts/animate` section, you list the animations to play and in which order. A blend expression may be specified, or an animation may be specified directly.

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

## Animation hierarchy

Animations are channel based (rotation, position, or scale), and within that are key-framed:

```text
EntityAnimation: animation name
  BoneAnimation[]: bone name for this animation
    AnimationChannel[]: rotation, scale, or translation to animate
      KeyFrame[]: the value for the channel to have at a specific time
```

## Animation controllers

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

At the beginning of each frame, the skeleton is reset to its default pose from its geometry definition, then animations are applied per-channel in order.

> [!NOTE]
> The channels (x, y, and z) are added separately across animations first. Then, they're converted to a transform once all animations have been cumulatively applied.

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

Here's an example from **quadruped.animation.json** in the Vanilla Resource Pack's animation folder:

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

## Key frames

A key frame defines two values for a channel-specific transform to a specific bone at a specified time, one as time approaches the key frame time, and the second from the key frame time onwards.
As such, when interpolating between two key frames, one can define the slope of the animation curve in either a continuous or discontinuous manner.

> [!NOTE]
> Interpolation, in an animation scenario, is used to calculate the movement between 2 key frames.
>
> If a key frame is set on the first frame at a value of 0, and a key frame is set on the tenth frame at a value of 1, then the frames in-between will be linearly interpolated in order to smoothly move the value from 0 to 1 over each frame until it gets to frame 10.

### Continuous example

```json
"head": {
  "rotation": {
    "0.0":[0, 0, 0],
    "0.5": [ 0, 180, 0],
    "1.0": [0, 360, 0]
  }
}
```

### Discontinuous example

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

Transformations in animation are made up of three components: location in three dimensional space, rotation, and scale.

Here are a few key concepts on how transforms work within Minecraft: Bedrock Edition:

- Vertices are first translated, then rotated, then scaled.
- Animation data is assumed to be hierarchical, and is applied to a bone by name matching the bone name in the animation data to the targeted geometry's skeleton.
- Not every bone needs to be animated.
- Bones that don't exist in the targeted geometry can be animated (missing bones are ignored).
- Scale, rotation, and position can be set individually or uniformly with a single value. For example, these values are equivalent:

```json
"scale": [2.0, 2.0, 2.0]
"scale": 2.0
"scale": [2.0]
```
