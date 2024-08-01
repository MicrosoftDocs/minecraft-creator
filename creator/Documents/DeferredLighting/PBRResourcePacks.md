---
author: iconicNurdle
ms.author: mikeam
title: PBR Resource Packs
ms.topic: tutorial
description: "PBR Resource Packs section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# PBR Resource Packs

The Deferred Lighting Pipeline uses the same rules for PBR texture sets used for RTX. If you are not familiar with Physically Based Rendering or building texture sets, there is an overview available on our documentation website in [Introduction to Physically Based Rendering](../RTXPBRIntro.md) and more detail on creating the texture sets in [Introduction to Texture Sets](../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md)

For Height Map values, the new pipeline supports both Height Map and Normal inputs. In the Deferred Lighting mode, however, you are now able to set PBR textures for entities and mobs in addition to blocks. They follow the exact same Texture Set rules and can be added similarly to the textures/entity folder within your resource pack. In the Deferred Lighting mode, PBR textures via Texture Sets are supported for blocks, entities, particles and items! They follow the exact same Texture Set rules as blocks and can be added similarly to either the "textures/entity" or "textures/particle" or "textures/items" folder within your resource pack.

Deferred Lighting also supports a new Texture Set property that describes a surface's Sub Surface Scattering properties in addition to Metalness, Emissive and Roughness. See the dedicated [Sub Surface Scattering](SubSurfaceScatteringCustomization.md
) page or the updated [Texture Sets documentation](../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md) for more details.

The key thing that communicates to the game client that a resource pack is capable of Deferred Lighting is the presence of a certain string(s) in the capabilities array in your pack's **manifest.json**.

Because the assets required for RTX are a subset of the assets needed for Deferred Lighting, a pack that broadcasts the "raytraced" capability will also be capable of activating Deferred Lighting.

However, it is recommended that a new capability string be used going forward for Deferred/PBR Lighting packs as these packs should be expected to run cross-platform, unlike "raytraced" packs which are restricted to RTX-only devices.

The new capability string is "pbr":

```json
{ 
  "format_version": 1,
  "header": {
    ...
  }, 
  "modules": [
    ...
  ], 
  "capabilities": [
    "pbr"
  ]
}
```

## Deferred Lighting JSON Files

Texture Sets are good for defining the surface properties of individual blocks or mobs, but for more global lighting properties, JSON files provide a simple way to data-drive the renderer. The JSONs described here should be located inside of a "lighting" directory in the root of a given resource pack.

![Image of the file structure for a resource pack with a manifest file, a lighting folder containing global.json and atmospherics.json files, and a textures file containing a "blocks" folder, an "entities" folder, and a textures_list.json file.](Media/RP_file_structure.png)

## Global Lighting JSON Schema

File location: lighting/global.json

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
            color "global_metalness_emissive_roughness" // The default MER value to use for blocks when not defined via textureset; supports RGB array or HEX string
        },
        object "actors"
        {
            color "global_metalness_emissive_roughness" // The default MER value to use for actors/mobs when not defined via textureset; supports RGB array or HEX string
        },
        object "particles"
        {
            color "global_metalness_emissive_roughness" // The default MER value to use for particles when not defined via textureset; supports RGB array or HEX string
        },
        object "items"
        {
            color "global_metalness_emissive_roughness" // The default MER value to use for items when not defined via textureset; supports RGB array or HEX string
        }
    }
}
```

## Continue Reading about Deferred Lighting:

- [Deferred Lighting](GettingStartedDeferredLighting.md)
- [Enabling Deferred Technical Preview in Your World](EnablingDeferredTechnicalPreview.md)
- [Lighting Customization](LightingCustomization.md)
- [Atmospherics Customization](AtmosphericsCustomization.md)
- [Volumetric Fog and Light Shafts Customization](VolumetricFogLightShaftsCustomization.md)
- [Reflections Customization](ReflectionsCustomization.md)
- [Color Grading and Tone Mapping Customization](ColorGradingToneMappingCustomization.md)
- [Key Frame JSON Syntax](KeyFrameJSONSyntax.md)
