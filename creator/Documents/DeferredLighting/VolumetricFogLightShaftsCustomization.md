---
author: iconicNurdle
ms.author: mikeam
title: Volumetric Fog and Light Shafts
ms.topic: tutorial
description: "Volumetric Fog and Light Shafts section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Volumetric Fog and Light Shafts 

Minecraft Bedrock Preview version `1.20.60.21` adds a visual effect to the Deferred Technical Preview: volumetric fog and light shafts! This effect relies on a terrain-aware volumetric representation of the world, allowing for complex fog that changes depending on the environment.

Rather than defining new JSON files, this effect takes advantage of existing resource pack capabilities for Fog and Volumes. You can define fog properties for specific biomes, discrete regions in your world, whether the player is under water or above water, and much more.

Please refer to the following articles to get started with these systems: 

>- [Fog in Resource Packs](../FogInResourcePacks.md)

Note that the Deferred Technical Preview does not fully support tinted absorption as described in the `"media_coefficients"` section of **Fog in Resource Packs**. The JSON format takes an RGB triplet for this value to describe how much light the fog will absorb on a per-channel granularity. This is the behavior for RTX Resource Packs, but volumes in the Deferred Technical Preview only operate at a single-channel of granularity. Therefore, our engine will calculate the standard luminance of the RGB triplet specified for absorption and use it instead of the RGB triplet itself when in "Deferred Technical Preview" mode.

Luminance is calculated as follows: 

`Luminance=RGB∙[0.2126, 0.7152, 0.0722]`

Another way to write that is:

`Luminance = 0.2126*R + 0.7152*G + 0.0722*B`

The following example is a good place to start: 

### fogs/default_fog_settings.json

```json
{
  "format_version": "1.16.100", 
  "minecraft:fog_settings": { 
    "description": { 
        "identifier": "pbr:fog_default" 
    },
    "volumetric": { 
        "density": { 
          "water": { 
            "max_density": 0.25, 
            "uniform": true 
          }, 
          "air": { 
            "max_density": 0.01, 
            "zero_density_height": 150.0, 
            "max_density_height": 50.0 
          }
        }, 
        "media_coefficients": { 
          "water": { 
            "scattering": [0.01811, 0.02126, 0.027953], 
            "absorption": [0.2, 0.07874, 0.083465] 
          }, 
          "air": { 
            "scattering": [0.02, 0.02, 0.02], 
            "absorption": [0.0, 0.0, 0.0] 
          }
        }
      }
  }
}
```
