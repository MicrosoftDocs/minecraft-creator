---
author: v-josjones
ms.author: v-josjones
title: Animation Documentation - Render Controllers
ms.prod: gaming
---

# Animation Documentation - Render Controllers

The Render Controller needs an identifier and needs to follow the format of `"controller.render.<name>"`.  This name needs to match the name set in the Client Entity Definitions JSON.

Render Controllers are a way for the player to determine what renders on the entity.  Players can set the geometry, materials, textures, and part visibility of the entity.  In addition to setting the keys directly, players can use arrays to have the entity choose between different options.

## Getting Started

To begin, create a new folder named "render_controllers" in the root of the Resource Pack you want to add the new Render Controller JSON inside.

### Example render controllers JSON for the ocelot entity

```JSONC
"format_version": "1.8.0",
"render_controllers": {
  "controller.render.ocelot": {
    //Declarations of arrays
    "arrays": {
      //Declarations of texture arrays
      "textures": {
        //Property name is the array identifier, followed by a list of textures references (see entity/textures)
        "Array.skins": ["Texture.wild", "Texture.black", "Texture.red", "Texture.siamese"]
      }
    },
    //Tells the rendering to using geometries references (see entity/geometries)
    "geometry": "Geometry.default",
    //Tells the rendering what material to use on which bones, * is used for wildcards, using material references (see entity/material)
    "materials": [{ "*": "Material.default" }],
    //Tells the rendering what textures to use on and in which layer, using textures references (see entity/textures) or in this case a reference to the declared array of textures
    "textures": ["Array.skins[query.variant]"]
  }
}

```

## Examples

In the following examples, you will see how Render Controllers can be used to drive geometry, materials and textures for different entities. Each example shows a use case that is being used by a vanilla entity.

### Example Array for geometry from the sheep JSON

```JSON
"arrays": {
  "geometries": {
    "Array.geos": ["Geometry.default", "Geometry.sheared"]
  }
},
"geometry": "Array.geos[query.is_sheared]",

```

### Example Array for materials from the spider JSON

```JSON
"arrays": {
  "materials": {
    "Array.materials": ["Material.default", "Material.invisible"]
  }
},
"materials": [{ "*": "Array.materials[query.is_invisible]" }],

```

### Example Array for textures from the villager JSON

```JSON
"arrays": {
  "textures": {
    "Array.skins": ["Texture.farmer", "Texture.librarian", "Texture.priest", "Texture.smith", "Texture.butcher"]
  }
},
"textures": ["Array.skins[query.variant]"]

```

### Example with color for tinting of parts from Armor 1.0 render controller JSON

```JSON
"format_version": "1.8.0",
"render_controllers": {
    "controller.render.armor.chest.v1.0": {
        "arrays": {
            "materials": {
                "array.armor_material": [
                    "material.armor",
                    "material.armor_enchanted",
                    "material.armor_leather",
                    "material.armor_leather_enchanted"
                    ]
                },
            "textures": {
                "array.armor_texture": [
                    "texture.leather",
                    "texture.chain",
                    "texture.iron",
                    "texture.diamond",
                    "texture.gold"
                    ]
                }
            },
        "geometry": "geometry.armor",
        "materials" : [
            { "body": "array.armor_material[query.armor_material_slot(1)]" },
            { "leftarm": "array.armor_material[query.armor_material_slot(1)]" },
            { "rightarm": "array.armor_material[query.armor_material_slot(1)]" }
            ],
        "part_visibility" : [
            { "*": 0 },
            { "body": "query.has_armor_slot(1)" },
            { "leftarm": "query.has_armor_slot(1)" },
            { "rightarm": "query.has_armor_slot(1)" }
            ],
        "color": {
            "r": "query.armor_color_slot(1, 0)",
            "g": "query.armor_color_slot(1, 1)",
            "b": "query.armor_color_slot(1, 2)",
            "a": "query.armor_color_slot(1, 3)"
            },
        "textures": ["array.armor_texture[query.armor_texture_slot(1)]", "texture.enchanted"]
    }
}

```

### Example with is_hurt_color from Creeper render controller JSON

```JSON
"format_version": "1.8.0",
"render_controllers": {
    "controller.render.creeper": {
    "geometry" : "Geometry.default",
    "materials" : [{ "*": "Material.default" }],
    "textures" : "Texture.default",
    "is_hurt_color" : {
        "r": 0.0,
        "g": 0.0,
        "b": 1.0,
        "a": 0.5,
    }
}

```

### Example with on_fire_color from Fireball render controller JSON

```JSON
"format_version": "1.8.0",
"render_controllers": {
    "controller.render.fireball": {
    "geometry" : "Geometry.default",
    "materials" : [{ "*": "Material.default" }],
    "textures" : "Texture.default",
    "on_fire_color" : {
        "r": 0.0,
        "g": 0.0,
        "b": 0.0,
        "a": 0.0,
        }
    }
}

```

### Example with overlay_color from Wither Boss render controller JSON

```JSON
"format_version": "1.8.0",
"render_controllers": {
    "controller.render.wither_boss": {
    "arrays": {
        "textures": {
            "Array.wither_state": ["Texture.invulnerable", "Texture.default"]
        }
    },
    "geometry" : "Geometry.default",
    "materials" : [{ "*": "Material.default" }],
    "textures" : ["Array.wither_state[variable.display_normal_skin]"],
    "overlay_color" : {
        "r": "variable.is_invulnerable ? 1.0 : this",
        "g": "variable.is_invulnerable ? 1.0 : this",
        "b": "variable.is_invulnerable ? 1.0 : this",
        "a": "variable.is_invulnerable ? query.overlay_alpha : this"
        }
    }
}

```

### Example with part_visibility for turning on and off visibility of parts from Llama JSON

```JSON
"format_version": "1.8.0",
"render_controllers": {
  "controller.render.llama": {
    "arrays": {
      "textures": {
        "Array.base": [
            "Texture.creamy",
            "Texture.white",
            "Texture.brown",
            "Texture.gray"
        ],
        "Array.decor": [
            "Texture.decor_none",
            "Texture.decor_white",
            "Texture.decor_orange",
            "Texture.decor_magenta",
            "Texture.decor_light_blue",
            "Texture.decor_yellow",
            "Texture.decor_lime",
            "Texture.decor_pink",
            "Texture.decor_gray",
            "Texture.decor_silver",
            "Texture.decor_cyan",
            "Texture.decor_purple",
            "Texture.decor_blue",
            "Texture.decor_brown",
            "Texture.decor_green",
            "Texture.decor_red",
            "Texture.decor_black"
            ]
        }
    },
    "geometry": "Geometry.default",
    "part_visibility": [{ "chest*": "query.is_chested" }],
    "materials": [{ "*": "Material.default" }],
    "textures": [
      "Array.base[query.variant]",
      "Array.decor[variable.decor_texture_index]",
      "Texture.decor_none"
    ]
  }
}

```

### Material array example from Horse render controllers

Saddle will override Mane, which will override TailA, etc.

```JSON
"materials": [
  { "*": "Material.default" },
  { "TailA": "Material.horse_hair" },
  { "Mane": "Material.horse_hair" },
  { "*Saddle*": "Material.horse_saddle" }
],

```
