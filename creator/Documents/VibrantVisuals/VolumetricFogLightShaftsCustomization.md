---
author: chipotle
ms.author: mikeam
title: Volumetric Fog and Light Shafts
ms.topic: tutorial
description: "Customizing volumetric fog and light shafts with Vibrant Visuals in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 05/14/2025
show_latex: true
---

# Volumetric Fog and Light Shafts

Minecraft already supports [fog effects in resource packs](../FogInResourcePacks.md). Vibrant Visuals extends that with volumetric fog and light shafts. These effects rely on a terrain-aware volumetric representation of the world, allowing for complex fog that changes depending on the environment.

Rather than defining new JSON files, volumetric fog takes advantage of existing resource pack capabilities for Fog and Volumes. You can define fog properties for specific biomes, discrete regions in your world, whether the player is under water or above water, and much more!

## Differences with Vibrant Visuals enabled

### Tinted absorption

Vibrant Visuals does not fully support tinted absorption in media coefficients. While the `"absorption"` property takes an RGB value to describe how much light the fog will absorb with per-channel granularity, in Vibrant Visuals, volumes only operate at a single channel of granularity, and the engine calculates the standard luminance of the specified RGB value and uses that for absorption. Luminance is calculated as follows:

$Luminance = 0.2126 \times Red + 0.7152 \times Green + 0.0722 \times Blue$

The following example is a good place to start:  **fogs/default_fog_settings.json**

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

### Support for Henyey-Greenstein phase function

Vibrant Visuals can use the [Henyey-Greenstein phase function](https://glossary.ametsoc.org/wiki/Henyey-greenstein_phase_function) for calculating light scattering in air and water. See [Henyey-Greenstein G](../FogInResourcePacks.md#henyey-greenstein-g) for more specifics.
