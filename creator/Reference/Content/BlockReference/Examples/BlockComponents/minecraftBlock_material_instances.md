---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:material_instances
description: "A reference document detailing the 'material_instances' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:material_instances

`minecraft:material_instances` is a `JSON Object` component that specifies the material instances for a block. The object contains a map that maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: `up`, `down`, `north`, `south`, `east`, `west`, or `*`. You can also give an instance the name of your choosing such as `my_instance`, and then assign it to a face by doing `"north": "my_instance"`.

## Default Value of the Component

This component is specified as a `JSON Object`, so it does not have a default value. You must provide at least the `*` material instance with a valid texture in order to use this component.

### Material Instance

The `minecraft:material_instances` component contains a map of material instance names/face names to material instance definitions (JSON Objects). The material instance `*` is required and will be used for any materials that don't have a match.

## Material Instance Parameters

The following are parameters of EACH material instance you provide:

| Name |Default Value |Type |Description |
|:----|:----|:----|:----|
| ambient_occlusion | true | Boolean| Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block. |
| face_dimming | true | Boolean | This material should be dimmed by the direction it's facing. |
| render_method | opaque | String | The render method to use. Must be one of the options listed in the table below. See this page to understand the relationship between render method and render distance.  |
| texture | *none* | String | Texture name for the material. |

### render_method Table

For more information about custom block render distance, see the [Custom Block Render Distance](../../../../../../creator/Documents/CustomBlockRenderDistance.md).

| Render Method | Description |
|:----|:----|
| opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency |
| double_sided | Used for completely disabling backface culling |
| blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures) |
| alpha_test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling |
| alpha_test_single_sided | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling |

## Example (using * and all parameters of a material instance)

```json
"minecraft:material_instances": {
    "*": {
        "texture":"custom_texture",
        "ambient_occlusion": false,
        "face_dimming": false,
        "render_method": "alpha_test"
    }
}
```

## Example (using faces and a custom named material instance)

```json
"minecraft:material_instances": {
    "*": {
        "texture":"backupTexture"
    },
    "custom_sides": {
        "texture": "side_texture"
    },
    "up": {
        "texture": "top_texture"
    },
    "down": {
        "texture": "bottom_texture"
    },
    "north": "custom_sides",
    "south": "custom_sides",
    "east": "custom_sides",
    "west": "custom_sides"
}
```
