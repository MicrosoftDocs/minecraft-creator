---
author: v-kimjeff
ms.author: mikeam
title: 'Animations vs. Animation Controllers'
description: "A guide explaining the differences between animations and animation controllers."
ms.service: minecraft-bedrock-edition
ms.date: 08/08/2025
---

# Animations vs. Animation Controllers

In Minecraft: Bedrock Edition, animations and animation controllers are two parts of the system that helps entities display movement and interact with the world. Though they sound very similar and are both part of a resource pack and behavior pack, they serve very different functions and it's essential to understand how they interact.

First, let's start by describing each part of the entity animation system.

## Major differences

Animations in Minecraft define the raw animation data for an entity. Animation files contain keyframe data that shows how the game should manipulate the bones, properties, or other components of an entity's model over a specific period of time (in frames). You can use animations to define specific sequences, such as walking, attacking, or idle poses that the entity should repeat when performing certain actions. For more specific information on animations, check out [Animation Documentation - Getting Started](../Reference/Content/AnimationsReference/Examples/AnimationGettingStarted.md).

> [!NOTE]
> Animations can also use Molang expressions to determine changes to an entity model (e.g., a rotating bone) over time. Sometimes Molang expressions can even be used instead of explicit keyframes. To learn more about Molang expressions, see [An Introduction to Molang](./molang/introduction.md).

Animation controllers add logic to an entity to manage and trigger animations at the appropriate time or in response to an appropriate event. Animation controllers define when different animations play based on an entity's condition and current state. To learn more about animation controllers, see [Introduction to Animation Controllers](IntroductionToAnimationControllers.md).

Here's a table that helps to illustrate the differences between animations and animation controllers:

| Feature | Animations | Animation Controllers |
|----------------------------------------|-------------------------------------------------------------------|------------------------------------------|
| Primary use                            | Defines the visual movement of entity parts, bone rotations, etc. | Executes animations based on game events |
| Contains logic                         | No | Yes |
| Handles transitions                    | No | Yes |
| Tied to entity state and/or conditions | No | Yes |
| Moves an entity's body                 | Yes | No |

## Example use case

Let's take a look at the wolf entity for an example to see how this works. When you tame a wolf in Minecraft, you can command it to sit by pressing the use button on them, then command it to stand by pressing the use button on them again. Whether the wolf is sitting or standing is managed by the wolf's `state`. In the vanilla resource pack, the wolf entity has animations (`wolf.animations.json`) and an animation controller (`wolf.animation_controllers.json`) that work together to make this behavior work.

In the animations file, we can see that the wolf has animations for sitting:

```json
"animation.wolf.sitting" : {
    "loop" : true,
    "bones" : {
        "body" : {
            "position" : [ "-this", "-18 - this", "-this" ],
            "rotation" : [ "45.0 - this", 0.0, 0.0 ]
        },
        "leg0" : {
            "position" : [ "-2.5 - this", "-22 - this", "2 - this" ],
            "rotation" : [ "270 - this", 0.0, 0.0 ]
        },
        "leg1" : {
            "position" : [ "0.5 - this", "-22 - this", "2 - this" ],
            "rotation" : [ "270 - this", 0.0, 0.0 ]
        },
        "leg2" : {
            "position" : [ "-2.49 - this", "-17 - this", "-4 - this" ],
            "rotation" : [ "333 - this", 0.0, 0.0 ]
        },
        "leg3" : {
            "position" : [ "0.51 - this", "-17 - this", "-4 - this" ],
            "rotation" : [ "333 - this", 0.0, 0.0 ]
        },
        "tail" : {
            "position" : [ "-1.0 - this", "-21 - this", "6.0 - this" ]
        },
        "upperbody" : {
            "position" : [ "-1.0 - this", "-16 - this", "-3.0 - this" ],
            "rotation" : [ "72 - this", "-this", 0.0 ]
        }
    }
},
```

This animation defines the movements of the wolf's body when it sits, telling the game how to move each part. This is essential in order to visually represent the wolf's sitting state in the game - without this code, the wolf's state will change to reflect that it is sitting, but you will not see any visual change for the wolf itself.

Now let's take a look at the animation controller file:

```json
"controller.animation.wolf.sitting" : {
    "initial_state" : "default",
    "states" : {
        "default" : {
            "animations" : [ "wolf_leg_default" ],
            "transitions" : [
                {
                    "sitting" : "query.is_sitting"
                }
            ]
        },
        "sitting" : {
            "animations" : [ "wolf_sitting" ],
            "transitions" : [
                {
                    "default" : "!query.is_sitting"
                }
            ]
        }
    }
},
```

We can see that the corresponding animation controller determines the `state` of the wolf, which `animations` to play, and how to `transition` the wolf from one animation to the next. In the `controller.animation.wolf.sitting` animation controller, we can see that:

1. The controller sets the initial state of the wolf to `default`.
1. In the `default` state, the controller plays the `wolf_leg_default` animation (also defined in the vanilla resource pack).
1. When the player commands the wolf to sit, the controller then `transitions` the wolf into the `sitting` state.
1. In the `sitting` state, the wolf plays the `wolf_sitting` animation.
1. The controller then transitions the wolf back to the default state if the query to check whether the wolf is still sitting returns `false`.

## Using animations and animation controllers

Now that you know the difference between these two essential parts of the entity movement system, you can start using them to create or enhance your resource packs in Minecraft. For more information on using animations and animation controllers, see our guides on each of these topics:

### Animation guides

- [Animation Overview](./Animations/AnimationsOverview.md)
- [Entity Modeling and Animation](EntityModelingAndAnimation.md)

### Animation controller guides

- [Introduction to Animation Controllers](IntroductionToAnimationControllers.md)
- [Animation Documentation - Animation Controllers](../Reference/Content/AnimationsReference/Examples/AnimationController.md)
