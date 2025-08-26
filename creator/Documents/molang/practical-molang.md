---
author: chipotle
ms.author: mikeam
title: Practical Molang
description: "A reference document detailing a variety of ways in which Molang can be used"
ms.service: minecraft-bedrock-edition
ms.date: 08/25/2025
---

# Practical Molang

Now that you've [learned Molang basics](./introduction.md) and dug more deeply into the [syntax and functions](./syntax-guide.md), how can you put Molang into practice? Here's a few examples of places where Molang gives your add-ons new capabilities.

## Entity definition scripts

### Pre-computing values

In entity definition files, there's a `"pre_animation"` section that gets processed immediately before animation and render controllers are processed. You can use this to pre-compute values that your entity will need in later sections and store them in Molang variables, to initialized long-living index variable updates, or generally perform any one-off computation per render tick that needs to be referenced more than once. This way, your script runs faster.

Here's an example from the [Chill Dreams Add-On](../../Casual/ChillDreamsPart1TheDreamTurkey.md) article in the Casual Creator series, defining a `pre_animation` for the Dream Turkey in the Resource Pack file **entity/dream_turkey.entity.json**:

```json
"scripts": {
  "pre_animation": [
    "variable.wing_flap = ((math.sin(query.wing_flap_position * 57.3) + 1) * query.wing_flap_speed);"
  ]
},
```

This uses the `math.sin()` function to make the turkey's wing flapping motion follow a sine wave, giving it a more natural look by slowing down at the top and bottom of each flap. Now that it's defined here, the `wing_flap` variable can be referenced in the turkey's animation definition file in its Resource Pack, **animations/dream_turkey.animation.json**:

```json
"animation.dream_turkey.general": {
  "loop": true,
  "bones": {
    "body": {
      "rotation": ["-this", 0.0, 0.0]
    },
    "wing0": {
      "rotation": [0.0, 0.0, "variable.wing_flap - this"]
    },
    "wing1": {
      "rotation": [0.0, 0.0, "-variable.wing_flap - this"]
    }
  }
}
```

### Passing parameters to animations

In the same **dream_turkey.entity.json** file's `"scripts"` block, there's an `"animate"` section for the turkey which lists the different animations available. Two of them, `move` and `baby_transform`, take parameters supplied by Molang.

```json
"animate": [
  "general",
  { "move": "query.modified_move_speed" },
  "look_at_target",
  { "baby_transform": "query.is_baby" }
],
```

## Animation

> [!IMPORTANT]
> You can access almost everything in Molang in both animation definitions and animation controllers **except** these types:
>
> - `material`
> - `texture`
> - `geometry`

As we'll see, most of what you'll need for animation is covered by queries and math functions, but trying to access variables or other language features that refer to the above types will cause an error!

### Animation files

The previous section touched on this with its two examples. You'll see Molang used a lot within animation files, often using [query functions](../../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions.md) to set values or triggers for animations.

Molang math functions are often used in conjunction with queries to define rotations. Sticking with the same **dream_turkey.animation.json** file, we can see this being used in the definition of the `move` animation that the entity refers to:

```json
"animation.dream_turkey.move": {
  "anim_time_update": "query.modified_distance_moved",
  "loop": true,
  "bones": {
    "leg0": {
      "rotation": ["math.cos(query.anim_time * 38.17) *  80.0", 0.0, 0.0]
    },
    "leg1": {
      "rotation": ["math.cos(query.anim_time * 38.17) * -80.0", 0.0, 0.0]
    }
  }
}
```

In this example, the cosine function is being used in animating the bones. A more complicated example comes from the zombie's animation file (at the [Bedrock Add-On Sample Files repository](https://github.com/Mojang/bedrock-samples)), which takes into account the time the attack started (`variable.attack_time`), the time since the current animation began (`query.life_time`), and whether the zombie is armed with a spear (`variable.is_brandishing_spear`):

```json
"animation.zombie.attack_bare_hand" : {
  "loop" : true,
  "bones" : {
    "leftarm" : {
      "rotation" : [ "-90.0 - ((math.sin(variable.attack_time * 180.0) * 57.3) * 1.2 - (math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0) * 57.3) * 0.4) - (math.sin(query.life_time * 76.776372) * 2.865) - this", "5.73 - ((math.sin(variable.attack_time * 180.0) * 57.3) * 0.6) - this", "math.cos(query.life_time * 103.13244) * -2.865 - 2.865 - this" ]
    },
    "rightarm" : {
      "rotation" : [ "90.0 * (variable.is_brandishing_spear - 1.0) - ((math.sin(variable.attack_time * 180.0) * 57.3) * 1.2 - (math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0) * 57.3) * 0.4) + (math.sin(query.life_time * 76.776372) * 2.865) - this", "(math.sin(variable.attack_time * 180.0) * 57.3) * 0.6 - 5.73 - this", "math.cos(query.life_time * 103.13244) * 2.865 + 2.865 - this" ]
    }
  }
}
```

### Animation controllers

As we learned in [Animations vs. Animation Controllers](../../Documents/AnimationsVsControllers.md), animation _controllers_ define logic for when specific animations are played, responding to trigger events in the environment. Here's an example of a wolf animation from that document, showing a common case for Molang in an animation controller: testing those conditions.

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
}
```

In this case, there are two states defined, `default` and `sitting`, and the wolf starts (`initial_state`) in the `default` state. The little bit of Molang, `query.is_sitting`, is used to determine when to transition between states.

## Render controllers

[Render controllers](../Animations/AnimationRenderController.md) define the geometry, materials, textures, and part visibility of entities when they're rendered in Minecraft. Molang comes into play in two places:

- Array declarations, which are optional
- Resource references, which are required

Let's look at the complete render controller file for our friend the fox. This is a simple render controller, but it demonstrates both array declarations and resource references:

```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.fox": {
      "arrays": {
        "textures": {
          "Array.skins": [
            "Texture.red",
            "Texture.arctic"
          ]
        }
      },
      "geometry": "Geometry.default",
      "part_visibility": [
        { "leg*": "!query.is_sleeping" },
        { "head": "!query.is_sleeping" },
        { "head_sleeping": "query.is_sleeping" }
      ],
      "materials": [ { "*": "Material.default" } ],
      "textures": [ "Array.skins[query.variant]" ]
    }
  }
}
```

### Array declarations

In the fox's render controller, there's one array declared for `textures` named `Array.skins`, which has a two-element array with one texture for red foxes and another texture for arctic foxes. Since these are JavaScript arrays, their elements are numbered starting with `0`:

```javascript
Array.skins[0] = "Texture.red";
Array.skins[1] = "Texutre.arctic";
```

A render controller's array declarations can include keys for any resource type. In each case, the declaration should be the name of the array (such as `Array.skins`) and then a list of array elements in brackets. A materials array declaration could look something like this:

```json
"arrays": {
  "materials": {
    "array.my_array_1": ["material.a", "material.b", "material.c"],
    "array.my_array_2" : ["material.d", "material.e"],
    "array.my_array_3" : ["array.my_array_1", "material.my_array_2"],
    "array.my_array_4" : ["array.my_array_2", "material.my_array_3"],
    "array.my_array_5" : ["array.my_array_1", "material.my_array_1", "material.my_array_4"],
    "array.my_array_6" : ["array.my_array_1", "material.f"],
  }
}
```

> [!NOTE]
> All elements of an array must be of the same type. For example, a texture array must contain only textures.

In this example, you can see that arrays can be any length, and elements don't have to be unique.  Also, the elements in an array can be arrays themselves!

One last thing about referring to declared arrays: going out of bounds&mdash;that is, referring to an element by a number lower than `0` or higher than the last element in the array&mdash;doesn't cause an error! Any negative reference will just return the element in position `0`; a positive number that's higher than the end of the array will _wrap around._ In other words, if the array has 10 elements, numbered `0` through `9`, and you try to access element `10`, you'll get element `0`. If you try to access element `15`, you'll get element `4`.

### Resource references

The expressions you use in the resource blocks must return a _single_ resource of the appropriate type. For instance, in the `geometry` section, you need to return a `geometry` type. In the `textures` section, you need to return a string that refers to a valid `texture` by the short name in its entity definition (such as `Texture.red`).

Let's look back at the fox's resource references:

```json
"geometry": "Geometry.default",
"part_visibility": [
  { "leg*": "!query.is_sleeping" },
  { "head": "!query.is_sleeping" },
  { "head_sleeping": "query.is_sleeping" }
],
"materials": [ { "*": "Material.default" } ],
"textures": [ "Array.skins[query.variant]" ]
```

The `part_visibility` reference uses a boolean `query` to choose different parts of the model to be visible depending on whether the fox is sleeping or not. The `textures` reference chooses one of the two skins depending on the value of `query.variant`.

> [!TIP]
> In Molang, boolean values are stored as `1.0` for true or `0.0` for false, so they can be used in this context to choose between array elements `0` and `1`.

Expressions in references can be a lot more complicated than just a simple boolean, though. Let's look at a few other practical examples:

#### Cycle animation

This expression cycles through the `my_geometries` array at a rate of one per second. Remember that when it exceeds the array bounds, it just wraps around rather than causing an error!

```json
"geometry": "array.my_geometries[query.anim_time]"
```

#### Choose a geometry based on a boolean

This uses a ternary conditional operator to choose a different geometry based on whether our sheep has been sheared or not.

```json
"geometry": "query.is_sheared ? geometry.sheared : geometry.woolly"
```

#### Cycle animation through a curve

This expression mixes in math and the ternary conditional operator we saw above: if the entity is sleeping, it returns a specific geometry; otherwise, it cycles through an array based on a cosine curve. When the cosine is negative, that chooses the `my_geometries[0]` element.

```json
"geometry": "query.is_sleeping ? geometry.sleeping_geo : array.my_geometries[math.cos(query.anim_time * 12.3 + 41.9) * 10 + 0.6]"
```

### Materials

The materials section maps defined materials to different model parts (bones) in a geometry; a single material is mapped to a specific bone.

Material resources are defined one at a time as key-value pairs, with the key being the name of the bone to apply the material to, an the second part being a material or, of course, a Molang expression that _returns_ a material. Each element is applied in order. We can use `*` as a wildcard for matching bone names: `foo*` matches all names that start with `foo`, while `*foo` matches all names that end with it and `*foo*` matches all names that _contain_ `foo`.  A name of `*` (and nothing else) matches all bones for the model, which is a good way to set a default. Here's an example for a horse.

```json
  "materials": [
      { "*": "Material.default" },
      { "Tail": "array.hair_colors[variable.hair_color]" },
      { "Mane": "array.hair_colors[variable.hair_color]" },
      { "*Saddle*": "variable.is_leather_saddle ? material.leather_saddle : material.iron_saddle" }
    ],
```

- First, we apply `Material.default` to all model parts.
- Next,  we set the material on a model part named `Tail` to the result of the expression `Array.hairColors[variable.hair_color]`. This looks up a variable for the hair color defined on the entity, and uses it as an index for a `hair_colors` array that we've declared in the array declarations for this render controller. This overrides the default material set on the first line, just for the tail.
- Next, we do the same thing for the `Mane` as we did for the `Tail`.
- Last, we look for _any_ model part that contains `Saddle`. (Note the capital letter: this is case-sensitive!). We change those to either a leather or an iron saddle, depending on the value of `is_leather_saddle`.

## Particle effects

Particle effects in Minecraft frequently make use of Molang, especially math functions: they help you define particle positions, lifetime, sizes, and more.

Here's a short example from the [Introduction to Particles](../../Reference/Content/ParticlesReference/ParticlesIntroduction.md) article for a flame particle:

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

In this example, the `math.random` function is used to determine [the particle's lifetime](../../Reference/Content/ParticlesReference/ParticleComponents/minecraftParticle_lifetime_expression.md), and a Molang expression is used to compute the [size of the particle](../../Reference/Content/ParticlesReference/ParticleComponents/minecraftParticle_appearance_billboard.md). That expression uses two variables set before the component is called:`ParticleAge` and `ParticleRandom1`, used as a randomness factor.
