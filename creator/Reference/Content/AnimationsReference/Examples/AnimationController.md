---
author: mammerla
ms.author: mikeam
title: "Animation Controllers Documentation - Animation Controllers"
description: "A reference document describing all current Animation Controllers"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025
---

# Animation Controllers

## Animation Controllers

Animation controllers decide which animations to play when.  Each controller contains a list of states that play one or more animations, each of which can be blended by a Molang expression if so desired.  Controller files are stored as JSON in the animation_controllers folder

### Animation Controller Format:
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

If you would like there to be a cross-fade between states when transitioning, simply set "blend_transition" to the time you would like the system to take in blending between the two states.  This is done as a simple lerp between the two states over the time specified.

### For example: 
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

A state can specify any number of transition scripts, listed in order.  Each transition has a target state to switch to, and a script for whether it should switch or not.  For each transition in order, evaluate the script, and if it returns non-zero, switch to the specified state immediately.  NOTE: Only one transition will be processed per frame.

### For example: 
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
        { "default": "query.all_animations_finished" } // transition back to default state when the yawn and stretch animations have both finished
      ]
    }
  }
}

A state defines a group of animations to process (each of which can have it's own blend value). Each state has an optional variables section, listing any number of variables that referenced animations can use.  Each state also has one or more animations, using the name given in the entity's definition json.