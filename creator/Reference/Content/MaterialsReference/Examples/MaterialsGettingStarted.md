---
author: ryan.edgemon
ms.author: ryan.edgemon
title: Materials Documentation - Getting Started
ms.prod: gaming
---

# Materials Documentation - Getting Started

**Note:** This documentation page assumes the reader is familiar with and has read through creator documentation covering:

<TODO: make the following bullets to be links for appropriate sections>

- JSON Client Entity resources
- JSON Entity Texture ---- Molang texture relationship
- etc...

## Overview of Materials in Minecraft: Bedrock Edition

Materials are used to determine coloring, appearance, or look of an entity or item in Minecraft. Authored, or JSON defined, materials reside within render controllers. Render Controllers can be used to determine what renders on an entity, such as: geometry, materials, and textures.

When authoring a render controller resource JSON file, each render controller defined in the `"render_controllers"` object follows the format of `"controller.render.<name>"`. Materials and render controllers objects follow the current Minecraft JSON paradigm: should be lower-case and use underscores instead of spaces in the name.

### Example of render controller definition

```JSON
// "bat.render_controller.json" resource file containing the render controller definition.
{
  "format_version": "1.8.0",
  "render_controllers": {
    // 🔥🔥 Note: name for the render controller matches the reference below in the bat.entity.json example.
    "controller.render.bat": {
      // Friendly-names for geometry, materials, and textures that will be mapped to resources at load time.
      "geometry": "Geometry.default",
      "materials": [ { "*": "Material.default" } ],
      "textures": [ "Texture.default" ]
    }
  }
}
```

Entity resource JSON files then reference render controller JSON objects by their defined identifier. The entity's list of render controller references may contain 1 more entries. Each entry must exactly match the name defined in an authored render controller resource file.

### Example of client entity definition and render controller referencing

```JSON
// Simplified client entity defintion resource file "bat.entity.json".
//    [Simplified, meaning - no "animations", "animation_controllers", "scripts", or "spawn_egg" objects]
{
  "format_version": "1.8.0",
  "minecraft:client_entity": {
    "description": {
      // Specific client entity name.
      "identifier": "minecraft:bat",
      // Friendly-name to resource mapping for materials, texture, and geometry. 
      "materials": { "default": "bat" },
      "textures": {
        "default": "textures/entity/bat"
      },
      "geometry": {
        "default": "geometry.bat"
      },
      // 🔥🔥 Note: the first and only entry in the list of render controller references matches the
      //            render controller identifier/name in the render controller defintion in example above.
      "render_controllers": [ "controller.render.bat" ],
    }
  }
}
```

## Multiple Materials

In the above render controller example for the vanilla bat entity, the material friendly-name is a simple identifier. In addition to single identifiers, material arrays can be referenced and indexed, depending on an entity's state. The array holds a collection of friendly-names. The material then becomes more than a simple friendly-name. It becomes a reference to the array, which uses an index to the desired friendly-name in the array.

In the example below, a different material name is referenced depending on if the spider can be seen or is invisible. If the invisible state is `"true"`, then the index evaluates to `1` [ie, the `"Material.invisible"` name in the array]. If `"false"`, then the index evaluates to `0` (the `"Material.default"` name in the array) and the spider will appear as normal.

### Example Array for materials

```JSON
// "arrays" JSON object from the vanilla "spider.render_controller.json" resource file.
"arrays": {
  "materials": {
    "Array.materials": ["Material.default", "Material.invisible"]
  }
},
// Materials now references the array of friendly-names instead of a single friendly-name directly.
"materials": [{ "*": "Array.materials[query.is_invisible]" }]
```

## Upgraded Materials

### Overview

The previous examples presented materials using a format before version <TODO: list version when finalized>. The fundamentals and overview, described above, will still apply with <TODO: version> and going forward. However, leveraging <TODO: version>'s additional features makes for some cool effects. Examples of effects that can be achieved include, but aren't limited to:

- Change the color of enchantments, or use a complicated texture in place of a single color. Bows could use a shimmering, glowing orange instead of the default vanilla enchanment color, for example.
- Add multi-texturing to entities that previously used only one color or texture. So then, chickens could have spots like horses. Or, they could flash different colors when they get close to you--like an exploding creeper. ⚠️Disclaimer⚠️: the chickens do not need to blow up or be harmed in order to make them flash.
- Make armor translucent.

The idea behind the new enhanced materials with <TODO: version> is to allow the imagination to run wild with how entities appear during Minecraft playtime. However, to use the new enhanced materials system: the version of game being played **must** use the Render Dragon
graphics system.

### New Materials Example

In <TODO: version> there is a new JSON object `"material_input_mapping"` available for authoring and editing. Sticking with the spider's render controller, it would look like this in <TODO: version>

```JSON
// "spider.render_controller.json" definition file.
"format_version" : "<TODO: version>"
"render_controllers" : {
  "controller.render.spider": {
      "arrays" : {
        // List of friendly-names, just as before.
        "materials" : {
            "array.materials" : [ "material.default", "material.invisible" ]
        }
      },
      // "*" is Bedrock Edition's standard alias reference to use an entity's default render-pass.
      "materials" : [ { "*" : "array.materials[query.is_invisible]" } ],
      "geometry" : "geometry.default",
      // 🔥🔥 New object.
      "material_input_mapping" : {
        // Friendly-names now have their own object with a list of 1 or more inputs.
        "default" : {
            // Specific Render Dragon shader identifier.
            "entity_emissive_alpha" : {
              // A friendly-name reference to a texture which will be passed to the parent shader this input belongs to.
              "texture.base" : "texture.default"
            }
        },
        // 2nd friendly-name
        "invisible" : {
            // Another shader identifier.
            "spider_invisible" : {
              "texture.base" : "texture.default"
            }
        }
      }
    
      // 🔥🔥 Note: the "textures" object is gone, and has been consumed by the new material input mapping.
  }
}
```

## Render Dragon Shaders and Shader Input Mapping

Render Dragon shaders (dragonfx) can be thought of as little programs which determine the way objects or entities are rendered to appear on screen in Minecraft. Players are not allowed to author new dragonfx files themselves. However, through defining a "material_input_mapping" object in an entity's associated render controller--players may define which Render Dragon shader they want an entity to be rendered with. Previous to <TODO: version>, Bedrock Edition entities were hard-coded to always use the same specific shader without the ability to change that shader.

A list of dragonfx shaders available to players with <TODO: version> can be found [here](https://docs.microsoft.com/en-us/Minecraft/creator/reference/content/materialsreference/examples/renderdragonshaderlist). Each shader contains a list of specific inputs. Each input can be thought of as data to pass to a specific blend or tint operation within its associated shader. Of course,there are exceptions to the blend or tint rule, but most inputs can be thought of as belonging to a blend or tint.

In the above ["spider.render_controller.json"](https://docs.microsoft.com/en-us/Minecraft/creator/reference/content/materialsreference/examples/materialsgettingstarted#new-materials-example) example, the spider's `"default"` shader has been defined to use the `"entity_emissive_alpha"` Render Dragon shader. Looking at the [shader list](https://docs.microsoft.com/en-us/Minecraft/creator/reference/content/materialsreference/examples/renderdragonshaderlist), `"entity_emissive_alpha"` contains 3 inputs. If an input is not defined under its associated shader's JSON identifier, then a vanilla default-value is used for the input.

## Authoring new render controllers

In the root folder of the Resource Pack being added to a Minecraft: Bedrock Edition world, a folder named "render_controllers" should exist. If it does not already exist then a new one can be created. Newly authored render controller json files should be placed in this "render_controllers" folder. The render controller files in this folder are inteded to override vanilla render controllers.

## Putting it all together

In the [Upgrade Materials - Overview](#overview) section, an example was given that a chicken could be made to flash like a creeper. How can this be achieved? To begin, add a "material_input_mapping" object to a newly authored render controller resource file (see [Authoring new render controllers](https://docs.microsoft.com/en-us/Minecraft/creator/reference/content/materialsreference/examples/renderdragonshaderlist/materialsgettingstarted#authoring-new-render-controllers)). The render controller JSON object should appear as follows:

```JSON
"render_controllers": {
  "format_version": "<TODO: version>",
  "controller.render.chicken": {
    "geometry": "geometry.default",
    "materials": [
      { "*": "Material.default" },
      { "leg*": "Material.legs" }
    ],
    "material_input_mapping" : {
    },
    "textures": [ "texture.default" ]
  }
}
```

From the documentation in the [shader list](https://docs.microsoft.com/en-us/Minecraft/creator/reference/content/materialsreference/examples/renderdragonshaderlist/renderdragonshaderlist), the `"entity_alphatest"` shader cites that vanilla chicken legs use this shader. Naming that shader under a reference object to the `"legs"` material, should produce:

```JSON
"render_controllers": {
  // ...
  // ... portion unaltered from above ...
  // ...

  "materials": [
    { "*": "Material.default" },
    // Referenced below.
    { "leg*": "Material.legs" }
  ],
  "material_input_mapping" : {
    // Reference to "Material.legs" material, "legs" matches that friendly-name.
    "legs" : {
      // Vanilla chicke legs uses "entity_alphatest" shader.
      "entity_alphatest" : {
        // Modify base texture using a texture from the "textures" object (only 1 available).
        "texture.base" : "texture.default"

        // ... leave other inputs unmodified for simplicity. Make the body flash, only.
      }
    }
  }
  
  // 🔥🔥 Remove "textures" object (roll into new material input mapping).
}
```

How can the chicken body be made to flash? The documentation for the `"overlay_color"` input, under `"entity"`, in the [shader list](https://docs.microsoft.com/en-us/Minecraft/creator/reference/content/materialsreference/examples/renderdragonshaderlist/renderdragonshaderlist) provides some insight. In the case of the creeper, it's swelling behavior is leveraged to determine when to flash. However, it would be complicated to add swelling behavior to a chicken along with altering the scope of the swelling molang [variables](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction#variables) driving it. Doing so would dilute the focus of this example. There're many, and much more simple conditions to achieve the effect.

So assuming the player has some familiarity with molang [math](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction#math-functions) and [query](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/queryfunctions#list-of-entity-queries) functions:

```JSON
"render_controllers": {
  // ...
  // ... portion unaltered ...
  // ...

  "materials": [
    // Newly referenced below.
    { "*": "Material.default" },
    { "leg*": "Material.legs" }
  ],
  "material_input_mapping" : {
  // Reference to "Material.default" material, "default" matches that friendly-name.
  "default" : {
    // Flashing chicken body can still use vanilla chicken body "entity" shader.
    "entity" : {
        // Modify base texture using a texture from the "textures" object (only 1 available).
        "texture.base" : "texture.default",
        // Leveraging Molang to apply a changing color shade to the base texture.
        "overlay_color": [
            "((query.is_moving == 1.0) && (math.mod(query.modified_distance_moved, 4.0) < 2.0)) ? 0.0 : this" // r
            "((query.is_moving == 1.0) && (math.mod(query.modified_distance_moved, 4.0) < 2.0)) ? 0.0 : this" // g
            "((query.is_moving == 1.0) && (math.mod(query.modified_distance_moved, 4.0) < 2.0)) ? 1.0 : this" // b
            "((query.is_moving == 1.0) && (math.mod(query.modified_distance_moved, 4.0) < 2.0)) ? 0.5 : this" // a
        ]
      }
    },
    // Unaltered from above.
    "legs" : {
      "entity_alphatest" : {
        "texture.base" : "texture.default"
      }
    }
  }
}
```

Now the flashing effect should kick-in when the chicken is moving, and for every other 2 units of distance moved [ie, overlay the base texture coloring with a half-strength (alpha = 0.5) blue tint every now and then]. When those conditions aren't met, then `"this"` is essentially a molang short-hand way of saying: "use the defaults." So, `[ "this", "this", "this", "this" ]` is the same as `[ 1.0, 1.0, 1.0, 0,0f ]` for the `"overlay_color"` input. Of course, any of the conditions could be different or the flashing rate could be based on a shorter or longer distance. Using the above example's parameters, the effect looks pretty good: [video link?]!

## JSON Content Errors

- If there're any errors or issues with the player's authored JSON for the new `"material_input_mapping"` or `"render_controllers"`, it'll be noted in the content log.
- If an entity's material doesn't get associated with a Render Dragon shader, due to JSON errors or otherwise, then a "best fit" attempt will be made to render the material with an appropriate shader. The entity material name and best-fit shader name will be noted in the content log.
- If a best-fit can't be made due to too many errors, then the entity's material won't render and will be noted as such in the content log.
