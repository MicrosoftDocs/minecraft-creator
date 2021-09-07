---
author: v-josjones
ms.author: v-josjones
title: Animation Documentation - Animation Controllers
ms.prod: gaming
---

# Animation Documentation - Animation Controllers

The Animation Controller format is written in JSON and formatted as shown below:

### Animation Controller Format

```JSON
{
  "format_version": "1.10.0",
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

## States

Each state has an optional variables section, listing any number of variables that referenced animations can use.  Each state also has one or more animations, using the name given in the entity's definition json.

### State Variables

Variables have their value set by a Molang Expression.  They can also have their value remapped via a linearly-interpolated curve.

#### Example

Here is the animation controller for a single frame.  It will take the value of `query.ground_speed`, then remap it to between 0.2 and 0.7 based on the value of `query.ground_speed` going from 0.0 to 1.0. It will play one animation walk that will blend from 0.0 to 1.0 as the ground speed increases from stopped to 2.3 m/s. The remap curve can have any number of entries. The animation controller will then play the entity-referenced `wiggle_nose` animations, followed by the `walk` animation, scaling the latter by the value of `variable.ground_speed_curve`

```JSON
{
  "format_version": "1.10.0",
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

> [!NOTE]
> "pre_animation" tells the script to figure out the values of those variables once a frame, before animation occurs, so that the animation can use those values in their own formulas. If a variable didn't exist, it will create a new variable and its default value will be 0.0

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

From 0 to -1 to 0 where only "base_pose" will play and then an equal amount of time where Walk will play on top of base_pose as foo goes from 0 to 1 back to 0. Base_pose will have a blend value of 1.0.

```JSON
"controller.animation.tiger.move": {
  "states": {
    "default": {
      "animations": [
        //animations are ADDITIVE unless otherwise specified
        //in this case, base_pose will always be playing in the default state
        //walk will play as well if Entity.foo is greater than 0.0
        "base_pose",
        { "walk": "variable.foo > 0.0" }
      ]
    }
  }
}
```

### State Transitions

Each transition has a target state to switch to, and a script for whether it should switch or not.  For each transition in order, evaluate the script, and if it returns non-zero, switch to the specified state immediately.  NOTE: Only one transition will be processed per frame.

```JSON
"<controller_name>": {
  "states": {
    "<state_name>": {
      "transitions": [
        // Evaluate the below expressions in order.
        // The first to return non-zero is the state to transition to.
        // If all are zero, then don't transition.
        {"<target_state_name_A>", "<expression>" },
        {"<target_state_name_B>", "<expression>" },
      ]
    }
  },
}
```

#### Example of a state transitions

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

### State Blending

to the time you would like the system to take in blending between the two states.  This is done as a simple lerp between the two states over the time specified.

#### Example of blending between two states

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

## Channels (Rotation, Position, Scale)

The engine tracks the animation of rotation, position, and scale separately.  Within a channel, one or more key frames are specified at arbitrary times, in seconds, from the start of the animation.  If no key frames are specified, a single key frame is created at t=0.0 and all channel data is stored within that key frame.

## Entity Animation Format Examples

Listed below are common examples of how the Animation format is written in JSON.  Note Matching the geometry format, units are in 1/16ths of meters.

```
<animation_name>": {
  // optional
  "loop": <bool>                                       // default = false.  Should the animation loop back to t=0.0 when it finishes?
  "blend_weight": <expression>                         // default = "1.0".  How much this animation is blended with the others.  0.0 = off.  1.0 = fully apply all transforms.  Can be an expression - see the Animation Controller section below
  "animation_length": <float>                          // default = time of last key frame.  At what time does the system consider this animation finished?
  "override_previous_animation": <bool>                // default = false.  Should the animation pose of the bone be set to the bind pose before applying this animation, thereby overriding any previous animations to this point?

  // required
  "bones": [
    {
    "<bone_name>": {                                   // must match the name of the bone specified in the geometry skeleton
      // various flavours of setting data
      // omitting a channel skips that channel for this animation of this bone
      // any number of floats below can be replaced by a string expression as described above; you don't have to replace all the floats on a line with expressions, only the ones you want to be expression-based
      "position": 1.0,                                 // set x, y, and z to 1
      "position": [1.0],                               // set x, y, and z to 1
      "position": [1.0, 2.0, 3.0],                     // set x=1 , y=2 , and z=3
      "rotation": 45.0,                                // set x, y, and z to 45 degrees
      "rotation": [45.0],                              // set x, y, and z to 45 degrees
      "rotation": [30.0, 0.0, 45.0],                   // set x, y, and z to the respective values (in degrees)
      // note: only uniform scaling is supported at this time
      "scale": 2.0,                                    // scales the bone by 2.0
      "scale": [2.0],                                  // scales the bone by 2.0
      // Key frame data is described below
      // Note that any of the above styles of values will work for "pre" and "post", and "pre" does not have to have the same format as "post"
      "rotation": {
        "0.0": [80.0, 0.0, 0.0],
        "0.1667": [-80.0, 0.0, 0.0],
        "0.333": [80.0, 0.0, 0.0]
      }
      // For discontinuous channel curve, you can specify a different value when interpolating to/from this key frame
      "rotation": {
        "0.3": {                                       // the key field is the time stamp for this key frame: the value can be any of the above examples
        "pre": [30.0, 0.0, 45.0],                      // when interpolating towards this key frame from the previous, use this value
        "post": "180.0 * Math.Sin(global.key_frame_lerp_time)"  // when at interpolating away from this key frame to the next, use this value
        }
      }
      // another example
      "rotation": {
        "0.0": [80.0, 0.0, 0.0],                       // start at an x rotation of 80 degrees
        "0.4": {
        "pre": [80.0, 0.0, 0.0],                       // stay at 80 until 0.4 seconds have elapsed
        "post": [0.0, 0.0, 0.0],                       // discontinuously pop the x rotation to 0.0 degrees
        },
        "0.8": [-80.0, 0.0, 0.0]                       // using the previous frame's lerp mode, lerp to a x rotation of -80 degrees by 0.8 seconds
      }
    }
  ]
}
```
