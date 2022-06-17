---
author: docsbryce
ms.author: v-bbortree
title: Animation Documentation - Animation Controllers
ms.prod: gaming
---

# Animation Documentation - Animation Controllers

Animation controllers decide which animations to play and when.  Each controller contains a list of states that play one or more animations, each of which can be blended by a Molang expression if so desired.  Controller files are stored as JSON in the `animation_controllers` folder.

## Animation Controller Format

```JSON
{
  "format_version": "1.17.30",
  "animation_controllers": {
    "controller.animation.sheep.move": {
      "states": {
        "default": {
          "animations": [
            { "walk": "query.modified_move_speed" }
          ],
          "transitions": [
            { "grazing": "query.is_grazing" }
          ]
        },
        "grazing": {
          "animations": [ "grazing" ],
          "transitions": [
            { "default": "query.all_animations_finished" }
          ]
        }
      }
    }
  }
}
```

## Animation Controller Parameters

|Name|Type|Optional or Required| Default |Description|
|:----|:----|:----|:----|:----|
|loop|Boolean|Optional|False |Should the animation loop back to t=0.0 when it finishes?|
|blend_weight|Value or expression|Optional| 1.0 | How much this animation is blended with the others.  0.0 = off.  1.0 = fully apply all transforms.  Can be an expression |
|animation_length|Float|Optional|Time of last key frame.| At what time does the system consider this animation finished?|
|override_previous_animation|Boolean|Optional|false|  Should the animation pose of the bone be set to the bind pose before applying this animation, thereby overriding any previous animations to this point? |
|bones|Array of objects.|Required|*not set*|The bone in the geometry section and various settings. Omitting a channel skips that channel for this animation of this bone. Any of these values can be expressions or values.|
|position|Float or array of three floats representing x, y, and z values |Required|*not set*|The position of a bone in space.|
|scale|Float or array of one float|Required|*not set*|The scale of the bones.|
|rotation|Object with float values representing key frames|Required|*not set*|The set of key frames that might be specified during an animation to create greater granularity.|
|states |Object|Optional|*not set*|The group of animations to process. May include variables to create more dynamic states. May include a transitions value to allow state blending between animations, such as querying the current state. Variables may be set by the game or user defined in a custom entity file.|

## States

A state defines a group of animations to process (each of which can have its blend value). Each state has an optional variables section, listing any number of variables that referenced animations can use.  Each state also has one or more animations, using the name given in the entity's definition JSON.

### State Blending

If you would like there to be a cross-fade between states when transitioning, simply set `blend_transition` to the time you would like the system to take in blending between the two states.  This is done as a simple lerp between the two states over the time specified.

#### Example of State Blending

```JSON
"controller.animation.tiger.move": {
  "states": {
    "default": {
      "animations": [ "base_pose", "walk" ],
      "transitions": [
        { "angry": "query.is_angry" } // transition to angry state if query.is_angry returns true
      ],
      "blend_transition": 0.2          // when transitioning away from this state, cross-fade over 0.2 seconds
    },
    "angry": {
      "animations": [ "roar", "extend_claws" ],
      "transitions": [
        { "default": "query.any_animation_finished" } // transition back to default state when either the roar animation or extend_claws animation finishes
      ]
    }
  }
}
```

### State Transitions

A state can specify any number of transition scripts, listed in order.  Each transition has a target state to switch to, and a script for whether it should switch or not.  For each transition in order, evaluate the script, and if it returns non-zero, switch to the specified state immediately.  

Below, we use the `crouch` and `stuck` portions of the fox animation controller as an example that uses complex queries to define the animation state transitions.

> [!NOTE]
> Only one transition will be processed per frame.

```JSON
"animation_controllers" : {
  "controller.animation.fox.move" : {
   "initial_state" : "default",
   "states" : {
    "crouch" : {
     "animations" : [
      "look_at_target",
      "crouch",
      {
       "walk" : "query.modified_move_speed"
      }
     ],
     "blend_transition" : 0.4,
     "transitions" : [
      {
       "default" : "!query.is_stalking && !query.is_interested"
      },
      {
       "wiggle" : "query.is_interested"
      }
     ]
    },
    "stuck" : {
     "animations" : [
      "stuck",
      {
       "walk" : "math.cos(query.life_time * 20.0 * 53.7)"
      }
     ],
     "blend_transition" : 0.2,
     "transitions" : [
      {
       "default" : "!query.is_stunned"
      }
     ]
    },
   }
  }
 }
```

#### Example of State Transitions

```JSON
"controller.animation.tiger.move": {
  "states": {
    "default": {
      "animations": [ "base_pose", "walk" ],
      "transitions": [
        { "angry": "query.is_angry" }, // transition to angry state if query.is_angry returns true
        { "tired": "variable.is_tired" } // transition to tired state if variable.is_tired returns true
      ]
    },
    "angry": {
      "animations": [ "roar", "extend_claws" ],
      "transitions": [
        { "default": "query.any_animation_finished" } // transition back to default state when either the roar animation or extend_claws animation finishes
      ]
    },
    "tired": {
      "animations": [ "yawn", "stretch" ],
      "transitions": [
        { "default": "query.all_animation_finished" } // transition back to default state when the yawn and stretch animations have both finished
      ]
    }
  }
}
```

### State Variables

Variables are either set by the game or by a user-defined script that can be found in the entity definition JSON found in `definitions/entity/<entity_name>.json`. Variables have their value set by a Molang Expression.  They can also have their value remapped via a linearly-interpolated curve.

#### State Variables Example

This defines a controller with a single state.  It will create a variable `variable.ground_speed_curve` that lives on the entity only while processing the animation controller for that frame.  It will take the value of `query.ground_speed`, then remap it to between 0.2 and 0.7 based on the value of `query.ground_speed` going from 0.0 to 1.0It will play one animation walk that will blend from 0.0 to 1.0 as the ground speed increases from stopped to 2.3 m/s.  The remap curve can have any number of entries.  The animation controller will then play the entity-referenced `wiggle_nose` animations, followed by the `walk` animation, scaling the latter by the value of `variable.ground_speed_curve`.

```JSON
{
  "format_version": "1.17.30",
  "animation_controllers": {
    "controller.animation.sheep.move": {
      "states": {
        "default": {
          "variables": {
            "ground_speed_curve": {
              "input": "query.ground_speed",
              "remap_curve": {
                "0.0": 0.2,
                "1.0": 0.7
              }
            }
          },
          "animations": [
            "wiggle_nose",
            { "walk": "variable.ground_speed_curve" }
          ]
        }
      }
    }
  }
}
```

#### User-Defined Script Example

This script will set foo to the result of the sine of `query.life_time` to later be used in the animation or animation controller.

> [!NOTE]
> `pre_animation` tells the script to figure out the values of those variables once a frame before animation occurs so that the animation can use those values in its formulas. If a variable didn't exist, it will create a new variable and its default value will be 0.0.

In definitions\entity\tiger.json:

```JSON
{
  "custom:tiger":{
    "scripts":{
      "pre_animation": {
        "variable.foo = math.sin(query.life_time);"
      }
    }
  }
}
```

Because foo is equal to a sin wave, its values will range from -1 to 1.  This means that you will have a period from 0 to -1 to 0 where only `base_pose` will play and then an equal amount of time where `walk` will play on top of base_pose as foo goes from 0 to 1 back to 0.  `base_pose` will have a blend value of 1.0.

```JSON
"controller.animation.tiger.move": {
  "states": {
    "default": {
      "animations": [
        "base_pose",
        { "walk": "variable.foo > 0.0" }
      ]
    }
  }
}
```

## Channels (Rotation, Position, Scale)

The engine tracks the animation of rotation, position, and scale separately.  Within a channel, one or more keyframes are specified at arbitrary times, in seconds, from the start of the animation.  If no keyframes are specified, a single keyframe is created at t=0.0 and all channel data is stored within that keyframe.

### Channels sample

Listed below are common examples of how the Animation format is written in JSON. In the geometry format, units are in 1/16ths of meters.

This sample shows using integers for the `leftarm` rotation. The `root` bone uses a more complex Molang expression with calculations which allows a more complex and refined animation.

```json
"animation.player.swim" : {
   "animation_length" : 1.3,
   "loop" : true,
   "override_previous_animation" : true,
   "bones" : {
    "leftarm" : {
     "rotation" : {
      "0" : [ 0.0, 180.0, 180.0 ],
      "0.7" : [ 0.0, 180.0, 287.2 ],
      "1.1" : [ 90.0, 180.0, 180.0 ],
      "1.3" : [ 0.0, 180.0, 180.0 ]
     }
    },
    "rightarm" : {
     "rotation" : {
      "0" : [ 0.0, 180.0, -180.0 ],
      "0.7" : [ 0.0, 180.0, -287.2 ],
      "1.1" : [ 90.0, 180.0, -180.0 ],
      "1.3" : [ 0.0, 180.0, -180.0 ]
     }
    },
    "root" : {
     "position" : [ 0.0, "(math.sin(query.target_x_rotation) * 24.0 + 3.0) * variable.swim_amount", "(math.cos(query.target_x_rotation) * 24.0 + 9.0) * variable.swim_amount" ],
     "rotation" : [ "variable.swim_amount * (90 + query.target_x_rotation)", 0.0, 0.0 ]
    }
   }
}
```
