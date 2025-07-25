---
author: chipotle
ms.author: mikeam
title: Light Sources
ms.topic: tutorial
description: "Customizing light sources with Vibrant Visuals in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 05/23/2025
---

# Light Sources

The flip side of customizing materials in Minecraft: Bedrock Edition with [texture maps](./UseBlockbenchToCreateModelsWithTextures.md) is customizing the lighting in your world. You can use [lighting JSON schemas](#lighting-json-schemas) to define the light from directional lights (celestial bodies), point lights (torches, lamps, and other light-emitting blocks), and various kinds of ambient light, for full control over your scenes.

Three JSON files define lighting in Vibrant Visuals:

- **lighting/global.json** defines directional lights, a global desaturation value for emissive lights, ambient lighting, and sky lighting.
- **point_lights/global.json** assigns light colors to specific block types such as torches.
- **pbr/global.json** sets default fallback values when texture set details isn't provided for a block, entity, particle, or item.

## Global lighting

This covers the `"directional lights"`, `"emissive"`, `"ambient"`, and `"sky"` objects in **lighting/global.json**.

### Directional lights

The `"directional_lights"` object is split into the `"orbital"` section, which contains properties for the sun and moon, and the `"flash"` section, which contains properties for the End light flash. These properties affect how strong their respective light contributions are, what colors they cast on surfaces they illuminate, and the angle at which they cast shadows. (They also influence the color of the sky by way of atmospheric scattering calculations; see [Atmospheric Effects](./AtmosphericsCustomization.md) for more.)

The sun and the moon are assumed to be at opposite points in their orbit in the sky at all times. When both celestial bodies are visible, they both contribute light to the scene. The End flash is a celestial light that's exclusive to the End dimension, and has no real-world counterpart. It disappears and reappears at random locations, and the illuminance it contributes to the scene scales accordingly, appearing as a flash of light.

The Vibrant Visuals pipeline handles illuminance values that correspond to real world values. For instance, the sun at noon on a clear day measures upwards of 100,000 lux, while the moon registers less than one. In the case of the End light flash, the value provided determines the maximum illuminance of the flashes it produces. Tone mapping and auto-exposure will appropriately rebalance drastic differences in light intensities.

Color values can be expressed either as an array of three numerical values in the range of 0&ndash;255, or as a six-digit hexadecimal string like an HTML/CSS color specifier. These values can be individually key-framed when providing values for the sun and the moon; see [Key Frame JSON Syntax](KeyFrameJSONSyntax.md) for details.

### Emissive light sources

The `"emissive"` property allows for some control over how emissive light sources behave. This can be especially useful for fine-tuning emissive light sources for certain types of tone mapping.

Currently, emissive light sources have only one property, `"desaturation"`. This is a factor from 0.0 to 1.0 that controls how much the albedo of a given pixel is desaturated when computing the color of emissive light. A value of 0.0 results in no desaturation, while a value of 1.0 results in full desaturation of the albedo color.

### Ambient light

The `"ambient"` object controls how surfaces are lit when there are no other sensible light sources available. Imagine a scene with no direct or indirect light sources, like a dark cavern with no torches or lava. Absent any light source, the player would be left in complete darkness. Another common case is when no indirect specular contribution is available. This often happens in underground scenes, where there is no exposure to the sky and when SSR can't be calculated for one reason or another. The ambient object allows packs to specify a minimum, fallback light source to provide for both cases.

As with orbital lights, the `"color"` value can be expressed either as an array of three numerical values in the range of 0&ndash;255, or as a six-digit hexadecimal string.

The `"illuminance"` value corresponds to the strength, in lux (lx), of the ambient light, and should be kept quite low in general. The allowed range for this value is 0.0 - 5.0.

If not provided, a default color of `#FFFFFF` and illuminance of `0.02` will be used.

### Sky

The `"sky"` object controls some properties of the sky in terms of its contribution as a light source. The sky contributes significantly to indirect lighting, both diffuse (bouncing light from the sky) and specular (reflections of the sky and clouds).

The sky's `"intensity"` value is a factor from 0.1 to 1.0 that controls how much sky light is factored into the indirect term for both diffuse and specular. A value of 1.0 causes the sky to contribute more to indirect light, and will result in shadows being less dark; a value of 0.1 will result in darker shadows, because less indirect light is contributed from the sky. The default value, if not provided, is 1.0.

## Point lights

The `"point_lights"` object allows you to specify which blocks should be considered point lights and what color they should emit.

The difference between a traditional light-emitting block and a point light block is that point lights emit light from a single point at the center of the block, thus the name "point" light. Like directional lights, they produce sophisticated lighting effects such as diffuse and specular highlights. This modeling works well for blocks such as torches, but isn't as good for conveying blocks with larger, discrete shapes, such as lava blocks or campfires. Blocks that emit light from a surface "area" rather than a single "point" should use the Emissive properties of Texture Sets and [lightEmission block components](../../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_light_emission.md) to control their light levels. You can always combine point lights and Emissive texture data in the same block to achieve your desired look.

Feel free to experiment, but beware that point lights are considerably more resource-intensive than light produced by other means, so employ them with care. For instance, while you technically can turn lava blocks into point lights, it's not recommended simply because of the sheer amount of point lights that could be generated in common scenes.

By default, the game will treat the following blocks as point lights. This functionality can't be changed. However, you can override their default color if you include an entry for that block in your pack's **point_lights/global.json** file:

- `minecraft:torch` as `#EFE39D`
- `minecraft:redstone_torch` as `#FF0000`
- `minecraft:end_rod` as `#FFFFFF`
- `minecraft:lantern` as `#CE8133`
- `minecraft:soul_lantern` as `#00FFFF`
- `minecraft:soul_torch` as `#00FFFF`

To change the strength of a point light, refer to the [documentation for lightEmission block components](../../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_light_emission.md). Note that this lightEmission value is a separate concept from the "Emissive" value described in PBR or Texture Set documentation.

The `"color"` value can be expressed either as an array of three numerical values in the range of 0&ndash;255, or as a six-digit hexadecimal string.

## PBR uniforms

The `"pbr"` object complements the larger Texture Set functionality by acting as a default or fallback value when texture set detail isn't provided for particular blocks, entities, particles, or items. For example, if you provide texture sets for pigs and creepers, but no other entities, then when a cow is rendered in game, the `"global_metalness_emissive_roughness_subsurface"` value defined in **pbr/global.json** will be applied uniformly across the entire surface of the cow. This allows you to quickly provide a general art direction without having to author textures for every single game object initially, and iteratively add more detail to the blocks/entities as you see fit.

Values can be expressed either as an array of three numerical values in the range of 0&ndash;255, or as a six-digit hexadecimal string.

## Reflections

Vibrant Visuals calculates reflections using image-based lighting (IBL) and screen-space reflections (SSR). The majority of surfaces will be able to convey convincing reflections, whether underground, above ground, or even in the Nether. Certain scenarios, such as reflecting off-screen objects or first-person mirrors, are still not possible. Also, with the exception of water, transparent geometry such as glass will not receive SSR.

While you can't control reflection properties directly, you can make use of [roughness](./PBROverview.md#roughness-map) and [metalness](./PBROverview.md#metalness-map) parameters in texture sets to control how different materials elicit reflections. Default PBR values for blocks, actors, particles, and items defined in **pbr/global.json** will also impact this property for objects with no texture set.

## Lighting JSON schemas

File location: **lighting/global.json**

| Schema Version | Updates                                                        |
|----------------|----------------------------------------------------------------|
| `1.21.80`      | Added support for controlling the End light flash              |
| `1.21.70`      | Added a new object for controlling the sky intensity           |
| `1.21.60`      | Changed the data type for sun and moon colors from RGBA to RGB |
| `1.21.40`      | N/A                                                            |

```json
{
    string "format_version", // The 3-part schema version for parsing these lighting settings.
    object "minecraft:lighting_settings"
    {
        object "description"
        {
            string "identifier" // The identifier for these lighting settings. The identifier must include a namespace.
        },
        object "directional_lights"
        {
            object "orbital" {
                object "sun"
                {
                    float "illuminance" : optkeyframe, // How bright the sun is, measured in lux (lx)
                    color "color" : optkeyframe // The RGB color that the sun contributes to direct surface lighting; supports RGB array or HEX string
                },
                object "moon"
                {
                    float "illuminance" : optkeyframe,  // How bright the moon is; measured in lux (lx)
                    color "color" : optkeyframe // The RGB color that the moon contributes to direct surface lighting; supports RGB array or HEX string
                },
                float "orbital_offset_degrees" : optkeyframe // The rotational offset of the sun and moon from their standard orbital axis; measured in degrees
            },
            object "flash" {
                float "illuminance", // The peak brightness of the End flash, measured in lux (lx)
                color "color" // The RGB color that the End flash contributes to surface lighting; supports RGB array or HEX string
            }
        },
        object "emissive"
        {
            float "desaturation" // The amount of desaturation to apply to albedo color values during emissive light calculation; values range from [0.0, 1.0]
        },
        object "ambient"
        {
            float "illuminance",  // How bright the ambient light is; measured in lux (lx)
            color "color" // The RGB color that the ambient light contributes to surface lighting; supports RGB array or HEX string
        },
        object "sky"
        {
            float "intensity" // Scales how much energy the sky contributes to lighting; values range from [0.1, 1.0]
        }
    }
}
```

File location: **point_lights/global.json**

```json
{
    string "format_version", // The 3-part schema version for parsing these point light settings.
    object "minecraft:point_light_settings"
    {
        object "colors" // List of key-value pairs where the key is a namespace-qualified block name and the value is a color (supports RGB array or HEX string)
        {
            string: color, 
            ...
            string: color 
        } 
    }
}
```

File location: **pbr/global.json**

```json
{
    string "format_version", // The 3-part schema version for parsing these pbr fallback settings.
    object "minecraft:pbr_fallback_settings"
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
    }
}
```

### lighting/global.json

```json
{
    "format_version": "1.21.80",
    "minecraft:lighting_settings": {
        "description": {
            "identifier": "my_pack:default_lighting"
        },
        "directional_lights": {
            "orbital": {
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
                    "color": [ 255.0, 255.0, 255.0 ]
                },
                "moon": { 
                    "illuminance": 0.27,
                    "color": "#ffffff"
                }, 
                "orbital_offset_degrees": 3.0
            },
            "flash": {
                "illuminance": 5.0,
                "color": [ 255.0, 255.0, 255.0 ]
            }
        },
        "emissive": {
            "desaturation": 0.1
        },
        "ambient": {
            "illuminance": 0.02,
            "color": "#ffffff"
        },
        "sky": {
            "intensity": 1.0
        }
    }
}
```

### point_lights/global.json

```json
{
    "format_version": "1.21.40",
    "minecraft:minecraft:point_light_settings": {
        "colors": { 
           "minecraft:soul_torch": "#FFFFFF"
        }
    }
}
```

### pbr/global.json

```json
{
    "format_version": "1.21.40",
    "minecraft:pbr_fallback_settings": {
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
}
```
