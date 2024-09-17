---
author: iconicNurdle
ms.author: mikeam
title: Lighting Customization
ms.topic: tutorial
description: "Lighting Customization section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Lighting Customization

This page describes how to customize lighting with Directional Lights, Point Lights, PBR Uniforms, and JSON lighting schemas.

### Directional Lights

The `"directional_lights"` object is where you can configure properties of the sun and the moon. These properties will affect how strong their respective light contributions are, what colors they contribute to various surfaces they illuminate and the angle at which they cast shadows. It will also greatly influence the color of the sky by way of atmospheric scattering calculations (see lighting/atmospherics.json for more details).

The celestial bodies that are the sun and moon are assumed to be opposite of each other in the sky at all times. When both celestial bodies are visible in the sky, both will contribute opposing light to the scene.

Illuminance values that correspond to "real world" values are suitable for use in our pipeline. For instance, the sun at noon on a clear day measures upwards of 100,000 lux, while the moon only registers < 1 lux. Tone mapping and auto-exposure will appropriately rebalance drastic differences in light intensities.

Color values can either be described as an array of 3 or 4 numerical values from the range 0-255 or as a 6 or 8 hexadecimal digit string.
Any of these values can be individually key framed (see Key Frame Syntax section for more details).

### Point Lights

The `"point_lights"` object allows you to specify which blocks should be considered point lights and what color a given point light should emit.

The difference between a traditional light-emitting block and a point light block is that point lights emit light from a single point at the center of the block, thus the name "point" light. 

Like directional lights, they produce sophisticated lighting effects such as diffuse and specular highlights. This modeling works well for blocks such as torches, but isn't as good for conveying blocks with larger, discrete shapes, such as lava blocks or campfires. Blocks that emit light from a surface "area" rather than a single "point" should use the Emissive properties of Texture Sets and [lightEmission block components](../../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_light_emission.md) to control their light levels. You can always combine point lights and Emissive texture data in the same block to achieve your desired look.

Feel free to experiment, but beware that point lights are considerably more resource-intensive than light produced by other means, so it is recommended that they be employed with care. For instance, while you technically can turn lava blocks into point lights, this is not recommended simply because of the sheer amount of point lights that could be generated in common scenes. 

By default, the game will treat the following blocks as point lights. This functionality can't be changed. However, you can override their default color if you include an entry for that block in your pack's **lighting/global.json** file:

>- `minecraft:torch` as `#EFE39D`
>- `minecraft:redstone_torch` as `#FF0000`
>- `minecraft:end_rod` as `#FFFFFF`
>- `minecraft:lantern` as `#CE8133`
>- `minecraft:soul_lantern` as `#00FFFF`
>- `minecraft:soul_torch` as `#00FFFF`

To change the strength of a point light, refer to the [documentation for lightEmission block](../../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_light_emission.md) components. Be aware that this lightEmission value is a separate concept from the "Emissive" value described in PBR or Texture Set documentation.

Color values can be described either as an array of 3 numerical values from the range 0-255 or as a 6-digit hexadecimal string.

### PBR Uniforms

The `"pbr"` object is meant to complement the larger Texture Set functionality by acting as a default or fallback value when texture set detail isn't provided for particular blocks, entities, particles, or items. For example, if you provide texture sets for pigs and creepers, but no other entities, then, when a cow is rendered in game, the `"global_metalness_emissive_roughness_subsurface"` value defined in **global.json** will be applied uniformly across the entire surface of the cow. This allows you to quickly provide a general art direction without having to author textures for every single game object initially, and iteratively add more detail to the blocks/entities as you see fit.

Values can be described either as an array of 4 numerical values from the range 0-1, or as a 4 hexadecimal digit string.

### Emissive

The `"emissive"` object allows for some control over how emissive light sources behave. These parameters can be especially useful for fine-tuning emissive light sources for certain types of tone mapping.
>- `"desaturation"` a factor from [0-1] that controls how much the albedo of a given pixel is desaturated when computing the color of emissive light. A value of 0 results in no desaturation, while a value of 1 results in full desaturation of the albedo color.

### Global Lighting JSON Schema

File location: **lighting/global.json**

```json
{
    version "format_version",
    object "directional_lights"
    {
        object "sun"
        {
            float "illuminance" : optkeyframe, // How bright the sun is, measured in lux (lx)
            color "color" : optkeyframe // The RGB color that the sun contributes to direct surface lighting; supports RGB array or HEX string
        },
        object "moon"
        {
            float "illuminance" : optkeyframe,  // How bright the moon is; measured in lux (lx)
            color "color" : optkeyframe // The RGB color that the moon contributes to direct surface lighting; supports RGB array or HEX string
        }
        float "orbital_offset_degrees" : optkeyframe // The rotational offset of the sun and moon from their standard orbital axis; measured in degrees
    },
    object "point_lights"
    { 
        "colors": { // List of key-value pairs where the key is a namespace-qualified block name and the value is a color (supports RGB array or HEX string) 
          string: color, 
           ... 
          string: color 
        } 
    },
    object "pbr"
    {
        object "blocks"
        {
            color "global_metalness_emissive_roughness_subsurface" // The default MERS value to use for blocks when not defined via textureset; supports RGBA array or HEX string
        },
        object "actors"
        {
            color "global_metalness_emissive_roughness_subsurface" // The default MERS value to use for actors/mobs when not defined via textureset; supports RGBA array or HEX string
        },
        object "particles"
        {
            color "global_metalness_emissive_roughness_subsurface" // The default MERS value to use for particles when not defined via textureset; supports RGBA array or HEX string
        },
        object "items"
        {
            color "global_metalness_emissive_roughness_subsurface" // The default MERS value to use for items when not defined via textureset; supports RGBA array or HEX string
        }
    },
    "emissive": {
        float "desaturation" // The amount of desaturation to apply to albedo color values during emissive light calculation; values range from [0, 1]
    }
}
```

### lighting/global.json

```json
{
    "format_version": [1, 0, 0], 
    "directional_lights": {
        "sun": {
            "illuminance": {
                "0.0": 109880.0,
                "0.25": 20000.0,
                "0.35": 400.0,
                "0.5": 1.0,
                "0.65": 400.0,
                "0.75": 20000.0,
                "1.0": 109880.0
            },
            "color": [ 255.0, 255.0, 255.0, 255.0 ]
        },
        "moon": { 
            "illuminance": 0.27,
            "color": "#ffffffff"
        }, 
        "orbital_offset_degrees": 3.0
    },
    "point_lights": { 
        "colors": { 
           "minecraft:soul_torch": "#FFFFFF"
        } 
    },
    "pbr": { 
        "blocks": { 
            "global_metalness_emissive_roughness_subsurface": [0.0, 0.0, 255.0, 0.0]  
        }, 
        "actors": { 
            "global_metalness_emissive_roughness_subsurface": [0.0, 0.0, 255.0, 0.0]  
        },
        "particles": { 
            "global_metalness_emissive_roughness_subsurface": [0.0, 0.0, 255.0, 0.0]  
        },
        "items": { 
            "global_metalness_emissive_roughness_subsurface": [0.0, 0.0, 255.0, 0.0]  
        }
    },
    "emissive": {
        "desaturation": 0.1
    }
}
```

