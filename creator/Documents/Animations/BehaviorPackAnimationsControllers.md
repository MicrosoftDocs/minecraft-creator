---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Animation Documentation - Behavior Pack Animatons and Animation Controllers
description: "A reference document focused on animations and animation controllers in behavior packs"
ms.service: minecraft-bedrock-edition
ms.date: 06/15/2026
---

# Behavior Pack Animations and Animation Controllers

Animations and Animation Controllers that live in your Behavior Pack are identical in syntax to their Resoure Pack counterparts, but their function is a bit different. In Behavior Packs, animations control the physical things that change about the world through interactions with the entity. The animation_controller controls the entity's current state and sets the contidtions that trigger changes between the states you define.

## Animations

Behavior Pack animations are used to call scripts and trigger the events referenced in the entity.behavior file. To get a better understanding, let's walk through this file from the animation folder in the Behavior Pack for the sheepomelon sample entity, which you can find on our public sample repository.

```json
{
  "format_version": "1.10.0",
  "animations": {
    "animation.sheepomelon.spawn": { 
      "loop": false, 
      "animation_length": 0.5, 
      "timeline": { 
        "0.2": ["/say Bahhhh melon"] 
      } 
    }, 
    "animation.sheepomelon.sheared": { 
      "loop": false, 
      "timeline": { 
        "0.0": ["/summon salmon ^ ^1 ^"] 
      }, 
      "animation_length": 1.0 
    } 
  }
}
```

If you're familiar with animation files in Resource Packs, this should seem familiar since the syntax is the same. The file contains two different animations, each defining the events that occur when the sheepomelon exists in each state. The first (**animation.sheepomelon.spawn**) defines what will change in the world whenever the entity is spawned.  

- loop: This object is set to `false`, so we know the actions defined in the rest of the component will only occur one time when the entity meets the conditions.  

- animation_length: This object defines the total length of time the animation will take to complete once it’s triggered – half a second in this case.

- timeline: This object represents specific actions that take place at the defined point. In this case, a slash command returns the value “Bahhhh melon” 0.2 seconds after the entity spawns into the world.

The second animation (**animation.sheepomelon.sheared**) defines the events that occur when the sheepomelon entity is sheared.

- loop: Like the previous entity, this object is set to `false`, so we know the actions defined in the rest of the component will only occur one time when the entity meets the conditions.

- timeline: Since the value is set to 0.0s, this object causes a salmon to spawn the moment the sheepomelon is sheared.

- animation_length: This object defines the total length of time the animation will take to complete once it’s triggered – one second in this case.

You may have noticed that the last two objects are flipped in this animation. That's because we wanted to show that, as long as they're properly nested under animations, the object order doesn't matter.

## Animation Controllers

Behavior Pack animation controllers function as state controllers that define the animations and triggers associated with an entity's physical state in the world. This file from the sheepomelon sample entity Behavior Pack's **animation_controllers** folder is like a sibling to the animation file we just walked through, in that it defines how the entity transitions between the states the other one defines.  

```json
{ 
  "format_version": "1.10.0", 
  "animation_controllers": { 
    "controller.animation.sheepomelon_commands": { 
      "states": { 
        "default": { 
          "animations": ["spawn"], 
          "transitions": [{ "sheared": "query.is_sheared" }] 
        }, 
        "sheared": { 
          "animations": ["sheared"], 
          "transitions": [{ "default": "!query.is_sheared" }] 
        } 
      } 
    } 
  }
}
```

This animation controller defines the two states the sheepomelon can exist in: default and sheared. In both cases, the heavy lifting is done with animations and transitions objects.

- Animations: The animations object houses the animation events associated with the state in a given component.

- Transitions: This object uses molang to define the conditions that trigger the entity to transition out of its current state. It also determines the state the entity transitions into when those conditions are met.

Since they reference each other as the state to transition to, the two states in this controller function as a loop. When the game registers that the sheepomelon is sheared, it transitions from the default state to the sheared state until the game detects that the sheepomelon's wool has regrown and it registers as unsheared again.
