---
author: mammerla
ms.author: v-jillheaden
title: Introduction to Particles
ms.prod: gaming
---

# Introduction to Particles

Particle effects consist of basic render parameters and a set of components. Components can be placed in any order.

## Example

```JSON
{
  "format_version": "1.10.0",
  "particle_effect": {
    "description": {
      "identifier": <string>, // e.g. "minecraft:test_effect", this is the name the particle emitter is referred to as
      "basic_render_parameters": {
          "material": <string> // Minecraft material to use for emitter
          "texture": <string> // Minecraft texture to use for emitter
      }
    },
    "curves": {
      // curve details
    },
    "events": {
      // events details
    },
    "components":
      // emission rate components

      // emission lifetime components

      // emission shape components, or the shape of the effect as defined
      // by particle emission position and directions

      // emitter local space components

      // components that control initial state of particles

      // components that control/direct motion of particles

      // components that affect how the particle is drawn

      // components that affect particle lifetime
    }
  }
}
```

## Component Concept

The particle system is component-based. This means that particle effects are composed of a set of components. For an effect to do something, it needs a component that handles that aspect of the effect.

For example, an emitter usually needs to have rules for its lifetime, so the effect should have one or more lifetime components that handle lifetime duties for the emitter and emitted particles.

The idea is that new components can be added later and you can combine components (where it makes sense) to get different behaviors. For exam[le, a particle might have a Dynamic component for moving around, and a Collision component for handling interaction with the terrain.

Think of components as telling the particle system what you want the emitter or particle to do rather than exposing a list of particle parameters and having to wrangle those parameters to get the desired behavior.

## Curves

**Curves** are interpolation values with inputs from 0 to 1, and outputs based on the curve. The result of the curve is a Molang variable of the same name that can be referenced in Molang in components.

For each rendering frame of each particle, the curves are evaluated and the result is placed in a Molang variable with the same name as the curve.

```json

"curves": {
  "Molangvar": {
    "type": type,

    "nodes": [<float/Molang>, <float/Molang>, <float/Molang>, <float/Molang>],

    "nodes": {
        // the key values map to the "input" field
        "0.3": {
            "value": "5", // the output of the curve
            "left_value": "2", // when curve comes from the left of the node, what point does it use?
            "right_value": "3", // when curve comes from the right side of the node, what point does it use?
            "slope": "3", // the slope of the node, both sides
            "left_slope: "0.4", // the left slope of the node
            "right_slope": "2", // the right slope of the node
        },
        ... // more nodes
    },

    "input": <float/Molang>

    "horizontal_range": <float/Molang>
  }
}

```

**Molangvar** is the Molang variable to be used later in Molang expressions. For example `variable.mycurve` here would make the result of the curve available in Molang as `variable.mycurve`.  All variables must begin with `variable.`

The type can be "linear", "bezier", "bezier_chain", or "catmull_rom".
    - "linear" is a series of nodes, equally spaced between 0 and 1 (after applying input/horizontal_range)
    - "bezier" is a 4-node bezier spline, with the first and last point being the values at 0 and 1 and the middle two points forming the slope lines at 0.33 for the first point and 0.66 for the second
    - "catmull_rom" is a series of curves which pass through all but the last/first node. The first/last nodes are used to form the slope of the second/second-last points respectively.  All points are evenly spaced.
    - "bezier_chain" is a chain of bezier splines.  See below for the node configuration. A series of points are specified, along with their corresponding slopes, and each segment will use its pair of points and slopes to form a bezier spline.  Each point other than first/last is shared between its pair of spline segments.

**nodes** are the control nodes for the curve. These are assumed to be equally spaced, meaning that the first node is at input value 0 and the second node is at 0.25, and so on and so forth. This notation works only for `linear`, `bezier`, and `catmull_rom`.

**nodes for bezier chain**     // control nodes for bezier_chain
    // the nodes will be sorted prior to parsing, so if you declare nodes 0.3, 0.6, 0.5, they will be
    // re-ordered to 0.3, 0.5, 0.6

 **input** <float/Molang> This is the input value to use. For example, `variable.particle_age/variable.particle_lifetime` would result in an input from 0 to 1 over the lifetime of the particle, while `variable.particle_age` would have input of how old the particle is in seconds.

**horizontal range**  (default: 1.0) This is the range that the input is mapped onto between 0 and this value. This field is deprecated and optional. This field is ignored for `bezier_chain`

## Events

Events can be triggered elsewhere in the **.json** file and fire off new particle and sound effects.

Particle effects have different types. If the type is "emitter", this will create an emitter of "effect" type at the event's world position, in a fire-and-forget way.

"emitter_bound" works similarly, except if the spawning emitter is bound to an actor/locator, the new emitter will be bound to the same actor/locator.

If the type is "particle", then the event will manually emit a particle on an emitter of "effect" type at the event location, creating the emitter if it doesn't already exist (be sure to use `minecraft:emitter_rate_manual` for the spawned emitter effect). 

`particle_with_velocity` will do the same as **particle** except the new particle will inherit the spawning particle's velocity.

Sound effects specify the specific "level sound event" to be played when the event fires.

The events themselves consist of an optional node tree and/or an actual event.

When **sequence** is specified, that array will execute in order, with every element executing when that event fires.

When using **random**, one element will be picked from the array based on the weight.

```json
// events block:
"events": {
  "event_name1",
  "event_name2",
  ...
}

// structure of an event, note that nesting can be any combination of "sequence", or "randomize"
"event_name": {
  "sequence": [
    { /*this node executes first*/ },
    { /*this node executes second*/ },
    { /* etc */},
    {
      "sequence": [
        {
          // nested nodes
        },
        ...
      ]
    },
    {
      "randomize": [
        {
          "weight": <float>
          /* data for this option, including other sequences/randoms */
        },
        ...
      ]
    }
  ]
},

// Fields for a particlar event. Note that any of the above nodes can have events inserted into their blocks.
"event_subpart": {
    "particle_effect": {
      // identifier of the effect
      "effect": <string>,
      // "emitter", "emitter_bound", "particle" or "particle_with_velocity"
      "type": <string>,
      // this Molang is run on the emitter for this event once this
      // event fires
      // NOTE: this will not have access to the event
      // triggering emitter's Molang data
      "pre_effect_expression": <string>,
    },
    "sound_effect": {
      // name of the level sound event
      "event_name": <string>
    },
    // Runs this Molang expression on the event-firing emitter
    "expression": <string>,
    // for debugging, this will log a message, along with the firing effect's name and event position
    // the log message will show up in the content logger
    "log": <string>
}

// simple example:
"events": {
    "event_name1": {
        "particle_effect": {
            "effect": "a_particle_effect",
            "type": "emitter"
        }
    }
}

```

### Examples

- [Flame particle](Examples\Flame_particle.md)
- [Smoke particle](Examples\Smoke_particle.md)
- [Mob Flame effect](Examples\Mob_flame_effect.md)
- [Bouncing Bubbles](Examples\Bouncing_bubbles.md)

## Molang integration

Where it makes sense, any field can use a Molang expression. Molang expressions are strings, and are defined in the Molang documentation. The particle system uses some special Molang variables that particle Molang expressions can use. 

Additionally, custom Molang parameters can be set in various ways and used in Molang expressions in effects.

| Name| Description |
|:-----------|:-----------|
| variable.emitter_age| Age since the current loop started for the emitter |
| variable.emitter_lifetime| How long the current loop lasts for the emitter |
| variable.emitter_random_1| A random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.emitter_random_2| Another random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.emitter_random_3| A third random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.emitter_random_4| A fourth random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.entity_scale| When the effect is attached to an entity, this value is the scale of the entity |
| variable.particle_age| How long the particle has lived |
| variable.particle_lifetime| How long the particle lives for |
| variable.particle_random_1| A random from 0.0 to 1.0 that is constant for the lifetime of the particle |
| variable.particle_random_2| Another random from 0.0 to 1.0 that is constant for the lifetime of the particle |
| variable.particle_random_3| A third random from 0.0 to 1.0 that is constant for the lifetime of the particle |
| variable.particle_random_4| A fourth random from 0.0 to 1.0 that is constant for the lifetime of the particle |

## Namespacing

All particle effects should be namespaced (in their name).

Namespacing involves adding a 'name:' prefix on the effect tag.

Regular Minecraft will use the 'minecraft: prefix. See the examples for example names.

## Particles Entity Integration

One of the primary uses for emitting particles in the Bedrock engine is particles associated with entities, such as mobs. Examples can be when the Blaze flames-up during its attack sequence, or the Evoker's spell effect while summoning Vexes. The goal is to allow binding and management of particle effects attached to entities.

The following concepts are important for managing particles with entities via .json:

- Effect lists.  These live in the resource definition of the entity's .json, along with textures, etc. These list the effects available to the entity, with an internal entity name for the effect, and the associated effect to play.
- Locators.  These live in the geometry files, and specify a location in the geometry. These locators can be associated with bones, and thus follow the bone as it animates.
- Animation controller-based particle management. Using the Animation Controller state machine concept, one can trigger both fire-and-forget and sustained particle effects
- Animation timeline particle management. As part of an animation .json for the entity, one can set up a timeline that triggers particle effects at specified times while the animation is playing. Note that an actual physical animation is not needed, just the animation .json structure.

Particles that are attached to entities are intrinsically tied to those entities. If the entity ceases to exist, the particle effects cease as well. Emitters follow either the entity, or a locator on the entity.

time1/time2/etc are numerical time points, e.g. "0.0"

In this example, when the cat sits down, after 3 seconds a smoke puff is generated:

```JSON

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
}

```

### Animation Controller effects

Animation controllers can specify effect events for their states. This allows for a list of particle effects to be started upon state entry, and for those particle effects to be automatically ended when leaving the state. For particles that don't terminate (or don't terminate prior to state transition), they will be terminated at state exit.

The schema is:

```JSON
"particle_effects": [
    // array of effect events
]
```

The array syntax allows for more than one effect to be triggered on state entry.

An example is the Blaze's flame-up effect in it's animation controller. This animation controller has two states, "default" and "flaming". It transitions between the two via the "query.is_charged" entity flag check. When in the "flaming" state, the "charged_flames" effect is started (with no locator or initialization Molang expression), and is terminated when the state exits.

```JSON

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

### Animation Timeline effects

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

The effect list is a list of internal effect names to actual particle effects bindings. This is the general form for adding particle effects to an entity. The effect list consists of a list of shorthand names to actual effects. All references to effects will use the shorthand name in animations and animation controllers. Note that this by itself will not cause the particle effect to appear.

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

## Particles Examples Pack

> [!div class="nextstepaction"]
> [Particle Examples Pack](https://aka.ms/MCParticlesPack)

Examples of various particles can be found in the link above. These are examples of various stand-alone particle effects. The particle effects provided as part of the Minecraft installation are tuned to be used with the Minecraft game, and thus do not serve as good examples. Please refer to the examples in the pack to see various ways to utilize the particle system.

To invoke an example particle with the examples particles pack enabled, bring up the console, type "/particle name x y z" where "name" is the name of the particle effect, and x/y/z are the coordinates the particle appears at.

For example, `/particle minecraft:example_smoke_puff ~ ~1 ~5` will create that smoke puff about 5 blocks away from the player.

`/particle minecraft:example_smoke_puff 0 5 0` will spawn a smoke puff at the origin of the world, 5 blocks up from the bottom of the world.

### Example Effects

| Name| Description |
|:-----------|:-----------|
| minecraft:example_bezier_chaincurve| Demonstrates the use of a bezier chain curve in an effect |
| minecraft:example_beziercurve| Demonstrates the use of a bezier curve in an effect |
| minecraft:example_bounce| Demonstrates collision detection and bouncing for particles |
| minecraft:example_catmullromcurve| Demonstrates the use of a catmull-rom curve in an effect |
| minecraft:example_colorcurve| Demonstrates the use of a color-gradient approach to color variation in an effect |
| minecraft:example_colorcurve2| Demonstrates the use of a color-gradient approach with variable spacing in an effect |
| minecraft:example_combocurve| Demonstrates the use of a variety of curves in an effect |
| minecraft:example_directional_sphere| Demonstrates the use of directional billboard facing in an effect |
| minecraft:example_entity_sparkle_aabb| When attached to an entity, this effect creates a sparkle effect with the rough axis-aligned bounding box around the entity |
| minecraft:example_entity_sparkle_box| When attached to an entity, this effect creates a sparkle effect in a box around the entity |
| minecraft:example_expire_on_contact| Demonstrates particles disappearing when colliding with the terrain |
| minecraft:example_flipbook| Demonstrates texture uv flipbook technique, of applying successive frames of a texture for visual animation |
| minecraft:example_highrestitution| Demonstrates particle collision with particles gaining energy on each bounce |
| minecraft:example_linearcurve| Demonstrates a piecewise linear curve in an effect |
| minecraft:example_particle_event_system| Demonstrates various particle events executing |
| minecraft:example_smoke_puff| Demonstrates a general smoke puff effect |
| minecraft:example_spiral| Demonstrates a parametric motion spiral effect |
| minecraft:example_watertest| Demonstrates excluding particles from various block types, in this case, particles only survive in water |
| minecraft:fireworks_events_demo| Demonstrates sequencing various particle effects together via events to create a fireworks effect |

## Structure In Detail

### Outline

```json
{
  // specifies the format version of the particle. Only particles of a particular set of versions
  // will work with the game
  "format_version": "1.10.0",

  "particle_effect": {
    // general data for the particle effect
    "description": {
      // e.g. "minecraft:test_mule", this is the name the particle emitter is referred to as
      "identifier": <string>,

      // Basic render parameters are basic rendering
      // properties like the texture used, or the material used.
      // All particles require a material to render, and a
      // texture to draw.
      "basic_render_parameters": {
          "material": <string>
          "texture": <string>
      },
    },

    "curves": {
    // curves are described elsewhere in the document
    },

    "events": {
      // events are described elsewhere in the document
    },

    "components: {
        /////////////////////////////////////////////////////////////////////
        // Emitter related components
        // these components primarily affect the emitter bevahior

        // emitter initial state components set up the emitter with
        // particular properties

        // emitter rate components control when particles get emitted
        // these will be run every frame for the emitter to determine if any
        // particles need to be spawned

        // emitter lifetime components control the lifetime of the emitter
        // and the "enabled/disabled" state of the emitter.
        // Emitters can only spawn particles if enabled.

        // emitter shapecomponents control where a particle gets emitted
        // and initial shape-driven state such as particle direction

        // emitter local space components
        // this component specifies whether entity-based emitters
        // simulate in local or global space

        /////////////////////////////////////////////////////////////////////
        // Particle related components
        // these components primarily affect the particle behavior

        // particle initial condition components control what the initial state
        // of the particles is, such as initial speed, rotation, etc.
        // These are run once at particle creation

        // particle motion components control what happens to the particle
        // on frames after creation, such as it's position (for
        // a parametric particle), drag/acceleration (for a dynamic
        // particle), etc.
        // These are run once per frame per particle

        // particle appearance components control how the particle is rendered
        // such as what UV coordinates to use, size of the particle,
        // billboard orientation, color tinting, etc.
        // These are run once per frame for visible particles

        // these components handle when the particle expires
    }
  }
}
```
