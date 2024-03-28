---
author: JimSeaman42
ms.author: mikeam
title: Introduction to Particles
description: "A reference document detailing the basic concepts behind particles"
ms.service: minecraft-bedrock-edition
---

# Introduction to Particles

Particle effects are one of the unsung heroes of Minecraft. From smoke effects to magic spells, from falling leaves to bubbles coming out of a fish's mouth... all of these effects are possible thanks to the magic of particles.

At their most base level, particle effects consist of basic render parameters detailing the material and texture of the particle, followed by a set of components which can be placed in any order. A full list of particle components can be found [here](ParticleComponentList.md).

## Naming and Location

Minecraft: Bedrock Edition uses a custom JSON format for particle effects. Files are stored in the 'particles' folder of a resource pack. Similarly to models and entities, particles are referenced by their identifier, so the file can be saved in any subfolder of the 'particles' folder without having to reference it.

The particle identifier is specified at the top of the JSON file, and consists of a namespace and name, such as 'sample:colored_smoke'. As with all files that utilize namespacing, 'minecraft' as a namespace is reserved for Vanilla files.

## Units

All values in particle effects use meters (blocks) and seconds as units. Velocity is stated as meters per second (m/s) and acceleration is meters per second squared (m/s2). Rotations use degrees for both rotations and trigonometric functions.

Now that we have some context, let's take a look at an actual particle. This is a flame particle, like you would find on a lit torch:

```json

{
  "format_version": "1.10.0",
  "particle_effect": {
    "description": {
      "identifier": "minecraft:basic_flame_particle",
      "basic_render_parameters": {
        "material": "particles_alpha",
        "texture": "textures/particle/particles"
      }
    },
    "components": {
      "minecraft:emitter_rate_instant": {
        "num_particles": 1
      },
      "minecraft:emitter_lifetime_expression": {
        "activation_expression": 1,
        "expiration_expression": 0
      },
      "minecraft:emitter_shape_sphere": {
        "radius": 0.025,
        "direction": [ 0, 0, 0 ]
      },
      "minecraft:particle_lifetime_expression": {
        "max_lifetime": "Math.random(0.6, 2.0)"
      },
      "minecraft:particle_appearance_billboard": {
        "size": [
          "(0.1 + variable.ParticleRandom1*0.1) - (0.1 * variable.ParticleAge)",
          "(0.1 + variable.ParticleRandom1*0.1) - (0.1 * variable.ParticleAge)"
        ],
        "facing_camera_mode": "lookat_xyz",
        "uv": {
          "texture_width": 128,
          "texture_height": 128,
          "uv": [ 0, 24 ],
          "uv_size": [ 8, 8 ]
        }
      }
    }
  }
}

```
In this example we can see the individual aspects that make up the effect, such as the 'particles_alpha' material and the 'texture/particle/particles' texture, and the five individual components. Put all of this together, and you've got a flame particle!

Next, let's discuss some of these items in a little more detail.

## Materials

There are several material options available to determine how a particle effect handles transparency and color blending.

| Name| Description |
|:-----------|:-----------|
|particles_alpha | Pixels with an alpha of 0 will be fully transparent, colored pixels will always be opaque. |
|particles_blend | Enables color blending and transparency in colored pixels, uses a normal blend mode. |
|particles_add | Enables color blending and transparency in colored pixels, uses an additive blend mode. This mode is useful for effects that need to 'glow' in some manner. |

## Components

Particle effects are made up of a set of components. For an effect to do something, it needs a component that handles that aspect of the effect.

For example, emitters usually need to have rules for their lifetime, so the effect should have at least one lifetime component to handle lifetime duties for the emitter and its emitted particles.

A bonus benefit to this system is that new components can be added later and combined (where it makes sense, of course) to get different behaviors. For example, a particle might have a dynamic component for moving around, and after testing a collision component can be added to handle interacting with the terrain.

## Particle Example Pack

Examples of various particles can be found here:

> [!div class="nextstepaction"]
> [Particle Example Pack](https://github.com/microsoft/minecraft-samples/tree/main/particles_examples_1.19)

These are examples of various stand-alone particle effects.  Please refer to the examples in the pack to see various ways to use the particle system.

To invoke an example particle with the examples particles pack enabled, bring up the console, type:

`/particle name x y z`

where "name" is the name of the particle effect, and `x y z` are the coordinates the particle should appear.

`/particle minecraft:example_smoke_puff ~ ~1 ~5` will create a smoke puff about 5 blocks away from the player.

`/particle minecraft:example_smoke_puff 0 5 0` will spawn a smoke puff at the origin of the world, 5 blocks up from the bottom of the world.

### Example effects

| Name| Description |
|:-----------|:-----------|
| minecraft:example_bezier_chaincurve| Demonstrates the use of a bezier chain curve in an effect |
| minecraft:example_beziercurve| Demonstrates the use of a bezier curve in an effect |
| minecraft:example_blendmode_add| Demonstrates `particles_add` material with texture of varying opacity |
| minecraft:example_blendmode_alpha| Demonstrates `particles_alpha` material with texture of varying opacity  |
| minecraft:example_blendmode_blend | Demonstrates `particles_blend` material with texture of varying opacity |
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

## Structure in Detail

### Outline

```json
{
  // specifies the format version of the particle. Only particles of a particular set of versions will work with the game
  "format_version": "1.10.0",

  "particle_effect": {
    // general data for the particle effect
    "description": {
      // Example: "minecraft:test_mule", this is the name the particle emitter is referred to as
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
        // these components primarily affect the emitter behavior

        // emitter initial state components set up the emitter with
        // particular properties

        // emitter rate components control when particles get emitted
        // these will be run every frame for the emitter to determine if any
        // particles need to be spawned

        // emitter lifetime components control the lifetime of the emitter
        // and the "enabled/disabled" state of the emitter.
        // Emitters can only spawn particles if enabled.

        // emitter shape components control where a particle gets emitted
        // and initial shape-driven state such as particle direction

        // emitter local space components
        // this component specifies whether entity-based emitters
        // simulate in local or global space

        /////////////////////////////////////////////////////////////////////
        // Particle related components
        // These components primarily affect the particle behavior

        // particle initial condition components control what the initial state
        // of the particles is, such as initial speed or rotation.
        // These are run once at particle creation

        // particle motion components control what happens to the particle
        // on frames after creation, such as its position (for
        // a parametric particle), drag/acceleration (for a dynamic
        // particle).
        // These are run once per frame per particle

        // particle appearance components control how the particle is rendered such as what UV coordinates to use, size of the particle,
        // billboard orientation, color tinting.
        // These are run once per frame for visible particles

        // these components handle when the particle expires
    }
  }
}
```
