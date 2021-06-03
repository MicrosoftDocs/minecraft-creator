---
author: v-josjones
ms.author: v-josjones
title: Client Entity Documentation Introduction
ms.prod: gaming
---

# Client Entity Documenation

Client entity definitions are contained within a Resource Pack.

> [!TIP]
> If this is your first time learning about Entities within Minecraft: Bedrock Edition, please feel free to check out our tutorial [Introduction to Behavior Packs](../../../../../Documents/BehaviorPack.md) to learn about all the files that go into how an Entity functions within Minecraft.

To start, create a new folder and name it "entity" inside the root of the Resource Pack. In the entity folder create a JSON file and give it a name.The JSON file needs a format version and minecraft:client_entity information.

The minecraft:client_entity section contains the description for the entity. Under description there are a number of things that you can set for an entity. Generally, this file is defining what resources a mob requires and gives a friendly name to each, that the other definition files can use.

### Example client entity definitions JSON for the pig

```json
"format_version": "1.8.0",
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
       "animation_controllers": [
         { "setup": "controller.animation.pig.setup" },
         { "move": "controller.animation.pig.move" },
         { "baby": "controller.animation.pig.baby" }
       ],
       "render_controllers": [ "controller.render.pig" ],
       "locators": {
         "lead": { "head": [ 0.0, 14.0, -6.0 ] }
       },
       "spawn_egg": {
         "texture": "spawn_egg",
         "texture_index": 2
       }
     }
   }

```

## Identifier

The `identifier` value of the entity(materials, textures, geometry, etc.) The matching identifier in the Entity Behavior JSON in the Behavior Pack is what gives the entity its behaviors.

## Min_engine_version

The `min_engine_version` value is for which the top resource pack was built.If a definition's `min_engine_version` is newer than that pack's engine version then the definition is not parsed.
Multiple definition files may use the same identifier, in which case only one of those definitions will be loaded. The definition with the same or closest and not greater `min_engine_version`, as compared to the top resource pack's engine version, will be parsed; all other definitions with the same identifier will not be parsed.
This can be useful for continuing to support an older version of an entity, when an older resource pack is used at the top of the resource pack stack, while also supporting a newer version of the entity in all other cases.

## Materials, Textures, Animations

Players must set user defined names for them. These names are used in the Render Controllers JSON. Players can reference materials, textures, and geometry from the vanilla Minecraft Resource Pack or create their own.  Custom materials, textures, and geometry should be in the corresponding folder at the root of the Resource Pack.

## Scripts

This value than can be used over and over again without the need to constantly recompute the calculations. Scripts currently support pre - animation and scale.More script types will be added later.
-Pre-animation scripts are evaluated immediately before animations are processed.
-Scale sets the scale of the mob's geometry.

### Example `pre-animation` script for cod

```json
"scripts": {
  "pre_animation": [
    "variable.ZRot = !query.is_in_water ? Math.cos((query.time_stamp + global.frame_alpha) * 14.32) * 90 : 0.0;",
    "variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, global.frame_alpha);"
  ]
},
```

### Example `scale` script for the bat

```json
"scripts": {
  "scale": "0.35"
},
```

## Animations

These names are used by the animation controller JSON. Players can reference animations from the vanilla Minecraft Resource Pack or create their own. Custom animations should be in the animation folder at the root of the Resource Pack.

## Animation_controllers

Each Animation Controller contains a list of states that play one or more animations. Allows the player to assign names to reference the long names for animation controllers. Names are required and need to be unique from all other names in the animation controllers for that mob. Players can reference animation controllers from the vanilla Minecraft Resource Pack or create their own. Custom animation controllers should be in the animation_controllers folder at the root of the Resource Pack.

## Particle

Keys are required and need to be unique from all other keys in the animation controllers. Players can reference particles from the vanilla Minecraft Resource Pack or create their own. Custom particles should be in the particle folder at the root of the Resource Pack.

## Render_controllers

Players can reference Render Controllers from the vanilla Minecraft Resource Pack or create their own. Custom Render Controllers should be in the textures folder at the root of the Resource Pack.

## locators

```json
"locators": {
  "lead": { "head": [ 0.0, 14.0, -6.0 ] }
}
```

## enable_attachables

****
```json
"enable_attachables": true
```

## Spawn Egg

### Example Spawn Egg using `hex value`
```
"spawn_egg": {
  "base_color": "#53443E",
  "overlay_color": "#2E6854"
}
```

When there are more than one texture associated with a texture name you can use an index to pick the one that you want. If no index is specified than it is assumed to be 0 and the first texture in the list is used.

## Example Spawn Egg specifying a texture

```json
"spawn_egg": {
  "texture": "spawn_egg", 
  "texture_index": 2
}
```
