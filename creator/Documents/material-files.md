---
author: chipotle
ms.author: mikeam
title: Materials and Material Files
description: "A technical overview of material files, as used for entities and particles in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 11/25/2025
---

# Materials and Material Files

> [!CAUTION]
> It's useful to know how materials work, but experimenting with custom materials may cause unexpected and potentially unstable behavior. The behavior of materials may change between versions of Minecraft, and the ability to use custom materials might be deprecated or removed in a future release. Sticking to the built-in Vanilla materials is safest!

As you create your own entities and particles, you'll come across the `materials` key in definitions. For instance, in the [Creating New Entity Types](./IntroductionToAddEntity.md) tutorial, the **robot.entity.json** file contains:

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "sample:robot",
            "materials": {
                "default": "entity"
            },
            "textures": {
                "default": "textures/entity/robot"
            },
            "geometry": {
                "default": "geometry.robot"
            },
            "render_controllers": [
                "controller.render.default"
            ],
            "spawn_egg": {
                "base_color": "#505152",
                "overlay_color": "#3b9dff"
            }
        }
    }
}
```

We can see it specifies a `default` material of `entity`, which is the built-in default material for entities. There are other default entity materials mentioned in that article, including `entity_alphatest` for transparency and `entity_alphablend` for translucency. But, on a technical level, what _is_ a material in this sense?

A **material** is actually a set of directives to the rendering engine, indicating not _what_ will be rendered, but _how_ it will be rendered: color blending modes, transparency levels, the shaders to use, and so on.

## Using materials

The best way to use materials with your own entities and particles isn't to try to create a material from scratch, but rather to build on existing Vanilla materials. You can learn more about `defines` and `states` in the [Technical Details](#technical-details) section below, but the quick explanation is that `defines` are options for shaders, and `states` are options for renderers. While it's possible to make custom material files that select and deselect specific options, often you'll find you can use an existing Vanilla material without any modifications to achieve the effects you want.

### Vanilla materials

This is not a comprehensive list, but it covers some of the most useful materials for creators.

#### Entity materials

- `entity` is the base entity material, with no special effects. All other Vanilla entity materials are descendants of this material, with `defines` or `states` added.
- `entity_nocull` adds the `DisableCulling` state to the base material.
- `entity_alphatest` adds the `ALPHA_TEST` define to the base material, giving the texture transparency based on the alpha channel.
- `entity_change_color` adds the `USE_COLOR_MASK` define to `entity_nocull`.
- `entity_emissive` uses a texture's alpha channel for determining emissiveness. The texture must be a **.tga** file in order to use this material.
- `entity_emissive_alpha` is a transparent version of the `entity_emissive` material, with culling disabled.
- `entity_emissive_alpha_one_sided` is the same as `entity_emissive_alpha`, but with culling _enabled._
- `entity_emissive_layer` makes the top layer of a material emissive. This requires a **.png** texture file, saved with two layers.
- `entity_alphablend` adds the `Blending` state to the base material.
- `entity_glint` adds the `GLINT` define to the base material.
- `entity_alphatest_glint` adds the `GLINT` define to the `entity_alphatest` material.

#### Particle materials

- `particles_base` is the base particle material.
- `particles_opaque` defines a material for opaque particles.
- `particles_alpha` allows transparent particles, using the alpha channel for transparency, where `0` is fully transparent. Colored pixels will remain opaque using this method.
- `particles_blend` disables culling (which `particles_opaque` does not) and adds the `Blending` state, allowing for transparency with color.
- `particles_add` is similar to `particles_blend` but uses an additive blending mode, which adds a glow to particles.

### Specifying a material

Materials can be specified for entities and particles in the `description` block of their definition files, as described in [Creating New Entity Types](./IntroductionToAddEntity.md#visuals) and [Introduction to Particles](../Reference/Content/ParticlesReference/ParticlesIntroduction.md).

#### Specifying an entity material

This is the same example given at the start of this article: `robot.entity.json` from the Creating New Entity Types article.

```json
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "sample:robot",
      "materials": {
        "default": "entity"
      },
      "textures": {
        "default": "textures/entity/robot"
      },
      "geometry": {
        "default": "geometry.robot"
      },
      "render_controllers": [
        "controller.render.default"
      ],
      "spawn_egg": {
        "base_color": "#505152",
        "overlay_color": "#3b9dff"
      }
    }
  }
}
```

This example specifies only one material: `entity`, which is assigned to the default (named with the key `default`). This can be referenced later by the [render controller](./Animations/AnimationRenderController.md):

```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.robot": {
      "geometry": "Geometry.default",
      "materials": [ { "*": "Material.default" }],
      "textures": [ "Texture.default" ]
    }
  }
}
```

The render controller specifies a list of materials to use with an entity's bones, using the format of `{ "bone": "material" }`. In this case, the wildcard, `*`, is used to indicate all bones are given the default material&mdash;previously defined in `robot.entity.json` as `entity`, the base material.

#### Specifying a particle material

This example, a flame particle, comes from the Introduction to Particles article:

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
      // ... components for the flame particle ...
    }
  }
}
```

Unlike entities, the material name is given directly here: the flame particles use the `particles_alpha` material.

## Technical details

Like entities, items, and so many other parts of Minecraft: Bedrock Edition, materials are defined in JSON files&mdash;but they don't follow the same conventions. This starts immediately, with the filename: they use the extension **.material** rather than **.json**.

### Inheritance

In the [list of Vanilla materials](#vanilla-materials) above, you'll notice a lot of materials build on one another. These materials are using **inheritance**, taking a base material and adding features to it.

For an example, let's look at the sheepomelon, a sheep/melon hybrid from the [addon starter sample pack](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter). We'll just look at the sheep definition.

```json
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "minecraft:cow",
      "min_engine_version": "1.8.0",
      "materials": {
        "default": "sheep"
      },
      // ... texture, geometry, animations, etc.
    }
  }
}
```

The `"sheep"` material is defined in the **entity.material** file. (This is internal to Minecraft: Bedrock Edition, and not directly accessible to creators.) It begins by declaring its version and then defining a set of materials, in a way that looks something like this:

```json
{
  "materials": {
    "version": "1.0.0",
    "entity": { ... },
    "material_1:entity": { ... },
    "material_2:entity": { ... },
  }
}

```

The basic `entity` material is defined, then materials start _inheriting_ from it. In that made-up example, `material_1:entity` says that the material named `material_1` inherits from, or extends, the base `entity` material. So it gets all the properties of `entity`, and then can add (or possibly subtract) properties of its own.

> [!NOTE]
> The syntax of `name1:name2` looks like namespaces in other Minecraft JSON files, but it isn't in a material file. It always denotes inheritance: `material:parent_material`.

Let's look at the actual definition for the `sheep` entity in the **entity.material** file:

```json
"sheep:entity_change_color": {},
```

We see `sheep` inherits from the `entity_change_color` material, but _doesn't_ make any changes to it. It's basically an alias in this version. This way, it's possible to change the `sheep` material definition in a future version without having to change all the entities that use this material.

The `entity_change_color` material has this definition:

```json
"entity_change_color:entity_nocull": {
  "+defines": [
    "USE_OVERLAY",
    "USE_COLOR_MASK"
  ]
}
```

So, this inherits from `entity_nocull`, and adds the `USE_OVERLAY` and `USE_COLOR_MASK` defines to it. (We'll talk about those in [Syntax](#syntax), below.)

Lastly, `entity_nocull` is defined this way:

```json
"entity_nocull:entity": {
  "+states": [ "DisableCulling" ]
},
```

This adds the `DisableCulling` state to the base `entity` definition. So, the inheritance for the sheep material works this way:

**entity &rarr; entity\_nocull &rarr; entity\_change\_color &rarr; sheep**

(You can also see that the Vanilla materials alone offer you a lot of flexibility without delving into custom work!)

### Syntax

As mentioned above, the materials JSON file format is very simple: an object with the key `materials`, which begins with a version declaration and then a set of key/value pairs defining materials.

```json
{
  "materials": {
    "version": "1.0.0",

    "material_1:entity": {
      "+defines": [ "USE_OVERLAY" ],
      "+states": [ "DisableCulling" ]
    },

    "material_2:material1": {
      "+defines": [ "ALPHA_TEST" ]
    }
  }
}
```

#### Material keys

There's a variety of keys available in material files, but many of them are used only in specific builds of Bedrock Edition, or aren't used at all by current versions. (Also, see the [list of deprecations](#material-file-deprecations).)

The primary keys creators might want to use are `defines` and `states`.

Here's a list of keys you _may_ want to use.

- `defines`: This key specifies a list of macros that set options for this entity's shaders. Use `+defines` (prefix it with a `+`) to add options in a child material to the parent's options, or `-defines` (prefix it with a `-`) to remove options.
  - `USE_OVERLAY`: Changes the overlay color to use high precision. This improves rendering on some devices.
  - `GLINT`: Calculates a glint effect for textures rendered with this material, an effect that appears on enchanted items.
  - `COLOR_BASED`: A boolean value, either true (`1`) or false (`0`). When `COLOR_BASED` is true, it causes the albedo of a material to be multiplied with the vertex color.
  - `USE_COLOR_MASK`: Mix the entity's albedo RGB with a color-tinted version of the albedo, using the albedo's alpha value. `albedo.rgb = mix(albedo.rgb, albedo.rgb * changeColor.rgb, albedo.a)`
  - `MULTI_COLOR_TINT`: When used, the material's albedo red and green components will be used as masks to mix two different colors. The material's albedo will then be replced with a bledn between the two colors, using the albedo's green component as an interpolation factor. `albedo.rgb = mix(albedo.r * changeColor.rgb, albedo.g * multiplicativeTintColor.rgb, ceil(albedo.g))`
  - `USE_EMISSIVE`: Uses alpha channel for determining emissiveness. Requires `USE_SKINNING` to be enabled. (This will always be the case if you use Vanilla materials with emissiveness.)
  - `USE_SKINNING`: This is deprecated on its own, but is used with `USE_EMISSIVE`, above.
  - `ALPHA_TEST`: Uses the alpha channel for determining texture transparency level.
- `states`: Specifies options for the entity's renderers. As with `defines`, you may use `+states` to add options in a child material to the parent's options, or `-states` to remove them.
  - `Blending`: Enables a color-blending mode for translucent options. Materials may need to adjust the blending factor keys (`blendSrc`, `blendDst`, `alphaSrc`, `alphaDst`) to use this effectively. (If you're using Vanilla materials that include the `Blending` state, this is handled for you.)
  - `DisableAlphaWrite`: Removes the alpha (transparency) channel from color values.
  - `DisableRGBWrite`: Removes the RGB color channels from color values, leaving the alpha channel.
  - `DisableColorWrite`: Removes all RGBA color information from color values.
  - `DisableCulling`: Normally parts of an entity model that aren't visible to the camera&mdash;and parts of the scene that the entity would block from the camera's view&mdash;are eliminated (or "culled") from the rendering pipeline when the model is rendered. Transparent or translucent materials, however, need to disable culling, so objects behind them are still rendered.

#### Material file deprecations

As Minecraft: Bedrock Edition's rendering system has changed over successive versions, some keys and macro definitions have been deprecated. These keys are ignored by current versions, and you should avoid using them in your own material files.

##### Deprecated keys

- `depthBias`
- `slopeScaledDepthBias`
- `depthBiasOGL`
- `slopeScaledDepthBiasOGL`
- `msaaSupport`
- `vertexShader`
- `geometryShader`
- `depthStencilFaceName` or anything underneath
- `stencilRefOverride`
- `stencilRef`
- `stencilReadMask`
- `stencilWriteMask`
- `vertexFields` or anything underneath
- `isAnimatedTexture`
- `renderTargetFormats`
- `primitiveMode`

##### Deprecated define macros

- `USE_COLOR_BLEND`
- `ENABLE_FOG`
- `EFFECTS_OFFSET`

### Custom materials

It's possible to create your own custom material files. For instance, you could add the `USE_EMISSIVE` definition and the `DisableCulling` state to `entity_alphablend` to make a semi-transparent, glowing material:

```json
{
  "materials": {
    "version": "1.0.0",
    "my_glowy_entity:entity_alphablend": {
      "+defines": [
        "USE_EMISSIVE"
      ],
      "+states": [
        "DisableCulling"
      ]
    }
  }
}
```

However, you don't actually _need_ to do that: the `my_glowy_entity` custom material described above recreates the already-existing `entity_emissive_alpha` material! In practice, the [Vanilla materials](#vanilla-materials) are diverse enough to likely let you achieve the material effects you want in your add-ons.

If you're determined to try your hand at custom materials, a topic that was mentioned in passing before needs to be expanded on: specifying blending factors. A real example is the `entity_beam_additive` material, which builds on `entity_alphablend`:

```json
"entity_beam_additive:entity_alphablend": {
  "+defines": [ "COLOR_BASED", "NO_TEXTURE" ],
  "-defines": [ "USE_OVERLAY" ],
  "+states": [ "Blending", "DisableDepthWrite" ],

  "blendSrc": "SourceAlpha",
  "blendDst": "One"
}
```

There are four factors that can be specified:

- `blendSrc`: the source blending factor
- `blendDst`: the destination blending factor
- `alphaSrc`: the source blending factor for calculating alpha transparency
- `alphaDst`: the destination blending factor for calculating alpha transparency

Any of these factors can be set to any of the following values:

- `DestColor`: The destination color value
- `SourceColor`: The source color value
- `Zero`: RGB(0.0, 0.0, 0.0)
- `One`: RGB(1.0, 1.0, 1.0)
- `OneMinusDestColor`: RGB(1,0, 1.0, 1.0) &minus; the destination color value, inverting it
- `OneMinusSourceColor`: RGB(1,0, 1.0, 1.0) &minus; the source color value, inverting it
- `SourceAlpha`: the alpha value of the source color
- `DestAlpha`: the alpha value of the destination color
- `OneMinusSrcAlpha`: 1 &minus; the alpha value of the source color, inverting it

In the example above, the beam's blending factors are set to the alpha value of the source color and opaque white.

## Next steps

For information on using materials with entities and particles, check out these articles:

- [Creating New Entity Types](./IntroductionToAddEntity.md#visuals)
- [Introduction to Particles](../Reference/Content/ParticlesReference/ParticlesIntroduction.md)
