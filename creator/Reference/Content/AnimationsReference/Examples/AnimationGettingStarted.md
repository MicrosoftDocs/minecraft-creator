---
author: v-josjones
ms.author: v-josjones
title: Animation Reference - Getting Started
ms.prod: gaming
---

# Animation Reference - Getting Started

## Upgrade from v1.7 Beta to v1.8

To upgrade previous scripts, you'll want to do the following steps to all of your Molang scripts in the order listed:

1. entity.flags.foo --> query.foo
1. entity.member.foo --> query.foo
1. entity.foo --> variable.foo
1. params.foo --> global.foo
1. The general rule is that 'query' represents read-only values from the entity the script is running on, and 'variable' represents read-write data created by the user.
1. We've adopted snake_case for all names of things.  You are welcome to use upper-case letters if you wish as we are case-insensitive, however we recommend snake_case in general.
1. Several variables previously set on mobs have been changed to use the query.foo format.  Look through the updated list below to see what has been added and changed.

## Upgrade from v1.8 Beta to v1.10

- The ability to have animations reference other animations in an arbitrarily deep hierarchy.
- The parameters section of animation controllers has been replaced with the `variables` section.
- In the entity definition file, animation controllers are now listed in the `animations` section, and a `scriptsnimate` section has been added to define which root animations to play.
The v1.8 file format is backwards-compatible with v1.10 so you don't _need_ to change anything (although we recommend refactoring your files in the spirit of v1.10 as there is a slight performance win with the new format, as well as it being simpler to understand.

## Adding Animations

Before diving into

**Entity Definition**

****
```
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "minecraft:pig",
      "min_engine_version": "1.8.0",
      "materials": { "default": "pig" },
      "textures": {
        "default": "textures/entity/pig/pig",
        "saddled": "textures/entity/pig/pig_saddle"
      },
      "geometry": {
        "default": "geometry.pig.v1.8"
      },
      "animations": {
        "setup": "animation.pig.setup",
        "walk": "animation.quadruped.walk",
        "look_at_target": "animation.common.look_at_target",
        "baby_transform": "animation.pig.baby_transform"
      },
      "scripts": {
        "animate": [
          "setup",
          { "walk": "query.modified_move_speed" },
          "look_at_target",
          { "baby_transform": "query.is_baby" }
        ]
      },
      "render_controllers": [ "controller.render.pig" ],
      "spawn_egg": {
        "texture": "spawn_egg",
        "texture_index": 2
      }
    }
  }
}
```



This means you will not see the move animation in the pig.json animation file either.  If you would like to make a custom pig walk you can change this line to point to your custom animation.

Animations are specified as a short name, followed by their full resource name.  The short name is used in animation controllers and the `scripts/animate` list, while the long name is used in the animations file.

In the `scripts/animate` section, you list the animations to play and in which order.  You can either specify an animation directly, or specify a blend expression.



**Animation Controller**

While a lot of this can be managed in the entity definition `scripts/animate` section, animation controllers give you the functionality of a state machine into states and control them as a block.  Animations in an animation controller state can be animation controllers themselves, allowing for arbitrarily complex animation hierarchies.

**Here's a sample animation controller**
```
{
  "format_version": "1.10.0",
  "animation_controllers": {
    "controller.animation.my_mob.move": {
      "initial_state": "moving",
      "states": {
        "moving": {
          "animations": [
            "wag_tail",
            "wiggle_ears",
            { "walk": "query.modified_move_speed" }
          ],
          "transitions": [
            { "grazing": "query.is_grazing" }
          ]
        },
        "grazing": {
          "animations": [ "grazing" ],
          "transitions": [
            { "moving": "query.all_animations_finished" }
          ]
        }
      }
    }
  }
}
```



**Animations**

Note that the channels (x, y, and z) are added separately across animations first, then converted to a transform once all animations have been cumulatively applied.



Animation data can be either raw data:

**By default, rotations are in degrees, in euler X-then-Y-then-Z format**
```
"rotation": [90.0, 0.0, 0.0]
```



or a run-time interpreted script:

****
```
"rotation": ["cos(query.anim_pos * 38.17) * 80.0 * query.anim_speed", 0.0, 0.0]
```

**Here is an example from quadruped.animation.json in the vanilla resource pack's animation folder:**
```
{
  "format_version": "1.8.0",
  "animations": {
    "animation.quadruped.walk": {
      "anim_time_update": "query.modified_distance_moved",
      "loop": true,
      "bones": {
        "leg0": { "rotation": [ "Math.cos(query.anim_time * 38.17) *  80.0", 0.0, 0.0 ] },
        "leg1": { "rotation": [ "Math.cos(query.anim_time * 38.17) * -80.0", 0.0, 0.0 ] },
        "leg2": { "rotation": [ "Math.cos(query.anim_time * 38.17) * -80.0", 0.0, 0.0 ] },
        "leg3": { "rotation": [ "Math.cos(query.anim_time * 38.17) *  80.0", 0.0, 0.0 ] }
      }
    }
  }
}
```



## Animation Hierarchy



# Key Frames

A key frame defines two values for a channel-specific transform to a specific bone at a specified time, one as time approaches the key frame time, and the second from that key frame time onwards.
As such, when interpolating between two key frames, one can define the slope of the animation curve in either a continuous or discontinuous manner.



## Interpolation



**Continuous Example**

****
```
"head": {
  "rotation": {
    "0.0":[0, 0, 0],
    "0.5": [ 0, 180, 0],
    "1.0": [0, 360, 0]
  }
}
```



**Discontinuous Example**

This example scales the bone "head":
1. From 0 to 0.5 seconds (in the "pre" tag), the head bone is set to its normal scale of 1 in all dimensions [X, Y, Z]
2. At 0.5 seconds, the bone will instantly scale up to 2 times its normal size
3. From 0.5 to 1 second ("post"), the bone will re-scale back to its normal size of scale of 1 in all dimensions

Note In the larger example above of the file format, "pre" and "post" can also be defined by a Molang expression that calculates that value at runtime, allowing you to have a mathematically defined curve instead of being purely linear.

****
```
"head": {
  "scale": {
    "0.5": {
      "pre": [1, 1, 1],
      "post": 2.0
    }
    "1.0": [ 1.0 ]
  }
}
```



# Names

All names: animations, bones, states, etc, must all start with a letter and contain only alphanumerics, underscore, or period.  It is recommended to use names in all lower-case



# Overview

The follows the current Minecraft JSON paradigms:
- Fields should be lower-case and use underscores (no spaces)
- All JSON files in the definitions directory and subtree will be read into and interpreted by the animation system




# Render Controllers

The Render Controller needs an identifier and needs to follow the format of "controller.render.<name>".  This name needs to match the name set in the Client Entity Definitions JSON.

Render Controllers are a way for the player to determine what renders on the entity.  Players can set the geometry, materials, textures, and part visibility of the entity.  In addition to setting the keys directly, players can use arrays to have the entity choose between different options.



## Getting Started

To begin create a new folder named "render_controllers" in the root of the Resource Pack you want to add the new Render Controller JSON inside.

**Example render controllers JSON for the ocelot**
```
"format_version": "1.8.0",
"render_controllers": {
  "controller.render.ocelot": {
    "arrays": {
      "textures": {
        "Array.skins": ["Texture.wild", "Texture.black", "Texture.red", "Texture.siamese"]
      }
    },
    "geometry": "Geometry.default",
    "materials": [{ "*": "Material.default" }],
    "textures": ["Array.skins[query.variant]"]
  }
}

```



## Examples

**Example Array for geometry from the sheep JSON**
```
"arrays": {
  "geometries": {
    "Array.geos": ["Geometry.default", "Geometry.sheared"]
  }
},
"geometry": "Array.geos[query.is_sheared]",

```

**Example Array for materials from the spider JSON**
```
"arrays": {
  "materials": {
    "Array.materials": ["Material.default", "Material.invisible"]
  }
},
"materials": [{ "*": "Array.materials[query.is_invisible]" }],

```

**Example Array for textures from the villager JSON**
```
"arrays": {
  "textures": {
    "Array.skins": ["Texture.farmer", "Texture.librarian", "Texture.priest", "Texture.smith", "Texture.butcher"]
  }
},
"textures": ["Array.skins[query.variant]"]

```

**Example with color for tinting of parts from Armor 1.0 render controller JSON:**
```
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

**Example with is_hurt_color from Creeper render controller JSON:**
```
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
}

```

**Example with on_fire_color from Fireball render controller JSON:**
```
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

**Example with overlay_color from Wither Boss render controller JSON:**
```
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

**Example with part_visibility for turning on and off visibility of parts from Llama JSON:**
```
"format_version": "1.8.0",
"render_controllers": {
  "controller.render.llama": {
    "arrays": {
      "textures": {
        "Array.base": ["Texture.creamy", "Texture.white", "Texture.brown", "Texture.gray"],
        "Array.decor": ["Texture.decor_none", "Texture.decor_white", "Texture.decor_orange", "Texture.decor_magenta", "Texture.decor_light_blue", "Texture.decor_yellow", "Texture.decor_lime", "Texture.decor_pink", "Texture.decor_gray", "Texture.decor_silver", "Texture.decor_cyan", "Texture.decor_purple", "Texture.decor_blue", "Texture.decor_brown", "Texture.decor_green", "Texture.decor_red", "Texture.decor_black"]
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

**Material array example from Horse render controllers.  Saddle will override Mane, which will override TailA, etc.:**
```
"materials": [
  { "*": "Material.default" },
  { "TailA": "Material.horse_hair" },
  { "Mane": "Material.horse_hair" },
  { "*Saddle*": "Material.horse_saddle" }
],

```



# Transforms

- Order of operations: vertices are translated, rotated, then scaled.
- Animation data is assumed to be hierarchical, and is applied to a bone by name matching the bone name in the animation data to the targeted geometry's skeleton.
- Not every bone needs to be animated
- You can animate bones that don't exist in the targeted geometry (missing bones are ignored).
- For each of scale, rotation, position, one can set the fields individually or uniformly with a single value.  For example, these are equivalent.


****
```
"scale": [2.0, 2.0, 2.0]
"scale": 2.0
"scale": [2.0]
```

