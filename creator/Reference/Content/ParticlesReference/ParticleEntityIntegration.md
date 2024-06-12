---
author: JimSeaman42
ms.author: mikeam
title: Particle Documentation - Particle Entity Integration
description: "A reference document discussing the ways in which creators can integrate particle effects with entities"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Particle Entity Integration

One of the primary uses for emitting particles in the Bedrock engine is to associate particles with entities, such as mobs. Like when the Blaze flames-up during its attack sequence or the Evoker's spell effect when summoning Vexes. The goal is to allow binding and management of particle effects attached to entities.

The following concepts are important for managing particles with entities via .json:

- **Effect lists** live in the resource definition of the entity's .json, along with textures. These list the effects available to the entity, with an internal entity name for the effect, and the associated effect to play.

- **Locators** live in the geometry files and specify a location in the geometry. These locators can be associated with bones so they follow the bone as it is animated.

- **Animation controller-based particle management** uses the Animation Controller state machine concept and can trigger both fire-and-forget as well as sustained particle effects.

- **Animation timeline particle management** is part of an animation .json for the entity and can be used to set up a timeline that triggers particle effects at specified times while the animation is playing. Note that an actual physical animation is not needed, just the animation .json structure.

Particles that are attached to entities are intrinsically tied to those entities. If the entity ceases to exist, the particle effects cease as well. Emitters follow either the entity or a locator on the entity.

`time1/time2/...` are numerical time points, such as `0.0`.

```json
{
  "format_version": "1.8.0",
  "animation_controllers": {

    ...

    "controller.animation.blaze.flame": {
      "states": {
        "default": {
          "transitions": [
            { "flaming": "query.is_charged" }
          ]
        },
        "flaming": {
          "particle_effects": [
            {
              "effect": "charged_flames"
            }
          ],
          "transitions": [
            { "default": "!query.is_charged" }
          ]
        }
      }
    },

    ...

  }
}
```

## Animation Controller Effects

Animation controllers can specify effect events for their states. This allows for a list of particle effects to be started upon state entry, and for those particle effects to be automatically ended when leaving the state.  For particles that don't terminate (or don't terminate prior to state transition), they will be terminated at state exit.

The array syntax allows for more than one effect to be triggered on state entry.

The schema is:

```json
"particle_effects": [
    // array of effect events
]
```

The array syntax allows for more than one effect to be triggered on state entry.

An example is the Blaze's flame-up effect in its animation controller. This animation controller has two states, "default" and "flaming". It transitions between the two via the "query.is_charged" entity flag check. When in the "flaming" state, the "charged_flames" effect is started (with no locator or initialization Molang expression), and is terminated when the state exits.

**Blaze Example**

```json
{
  "format_version": "1.8.0",
  "animation_controllers": {
    ...
    "controller.animation.blaze.flame": {
      "states": {
        "default": {
          "transitions": [
            { "flaming": "query.is_charged" }
          ]
        },
        "flaming": {
          "particle_effects": [
            {
              "effect": "charged_flames"
            }
          ],
          "transitions": [
            { "default": "!query.is_charged" }
          ]
        }
      }
    },
    ...
  }
}
```

**Evoker Example**

Another example is the Evoker's spell effect, which is actually implemented as two spell effects, using the locator for the left and right hands. The spell effects themselves are continuous, so the emitters will emit particles until the evoker is no longer casting a spell.

```json
{
  "format_version": "1.8.0",
  "animation_controllers": {
    "controller.animation.evoker.general": {
      "states": {
        "default": {
            ...
          "transitions": [
            { "casting": "query.is_casting" }
          ]
        },
        "casting": {
            ...
          "particle_effects": [
            {
              "effect": "spell",
              "locator": "left_hand"
            },
            {
              "effect": "spell",
              "locator": "right_hand"
          }
          ],
          "transitions": [
            { "default": "!query.is_casting" }
          ]
        }
      }
    }
  }
}
```

### Animation Timeline Effects

Animations can also trigger particle effects. These are fire-and-forget effects that are tied to a timeline, when the animation hits that time point, the effect(s) are fired.

```json
"particle_effects": {
    "time1" : [
        // array of effect events
    ],
    "time2" : [
        // array of effect events
    ],
    "time3" : {
      // single effect
    }
}
```

`time1`, `time2`, and `time3` are numerical time points, such as "0.0".


**Sitting Cat Example**

In this example, when the cat sits down, after 3 seconds a smoke puff is generated

```json
{
  "format_version": "1.8.0",
  "animations": {
    ...
    "animation.cat.sit": {
      "loop": true,
      "animation_length": 5.0,
      "bones": {
          // bone animation stuff
       },
      "particle_effects": {
        "3.0": [
          {
            "effect": "smoke_puff"
          }
        ]
      }
    },
    ...
    }
  }
```

### Effect Event

Particle events in the entity have the following properties:

- "effect" is the effect name specified in the entity's resource definition .json (the particle effect list), this specifies what particle effect to start/play
- "locator" is an optional parameter that maps to a locator of the same name in the resource definition. By specifying a locator, the emitter will follow that locator around as the entity animates, including orientation. If this is not specified, the effect will occur at the origin of the entity.
- "pre_effect_script" is an optional parameter that is a Molang expression run at emitter startup time. This can set up Molang variables, (for example 'particle color'), which can be then referred to inside the particle effect .json itself.

```json
{
    "effect": "internal_name",
    "locator": "locator_name", // optional
    "pre_effect_script" // optional
}
```

### Effect List

The effect list is a list of internal effect names to actual particle effects bindings. This is the general form for adding particle effects to an entity. The effect list consists of a list of shorthand names for actual effects. All references to effects will use the shorthand name in animations and animation controllers. Note that this by itself will not cause the particle effect to appear.

```json
{
  "format_version": "1.8.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "minecraft:entity_name",
      ...
       "particle_effects": {
            "shorthand_name1": "effect_name1",
            "shorthand_name2": "effect_name2",
        },
        ...
    }
  }
}
```

This is an example of the flame-up effect for the Blaze. Inside the `"description"` section of an entity's resource definition we can add a `"particle_effects"` section that has a name/value pair. The **name** is the name that other .json in the entity will refer to, while the **value** is the name of the particle effect, as specified in the particle effect's .json file.

```json
{
  "format_version": "1.8.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "minecraft:blaze",

      ...

       "particle_effects": {
            "charged_flames": "minecraft:mobflame_emitter"
        },

        ...

    }
  }
}
```

