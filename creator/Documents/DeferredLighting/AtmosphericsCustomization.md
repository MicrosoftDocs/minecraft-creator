---
author: iconicNurdle
ms.author: mikeam
title: Atmospherics Customization
ms.topic: tutorial
description: "Atmospherics Customization section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Atmospherics Customization

This page describes how to customize atmospherics effects.

## Atmospherics JSON Schema

> [!NOTE]
> As of version `1.21.40.22`, the JSON files for atmospheric scattering have been relocated to the `atmospherics` directory.

File location: atmospherics/atmospherics.json

```json
{
  string "format_version", // The 3-part schema version for parsing these atmosphere settings.
  object "minecraft:atmosphere_settings"
  {
    object "description"
    {
      string "identifier" // The identifier for these atmosphere settings. The identifier must include a namespace.
    },
    object "horizon_blend_stops" // How the atmosphere is divided up
    {
      float "min" : optkeyframe, // The minimum horizon height
      float "start" : optkeyframe, // The height relative to the horizon where the zenith contribution will take over
      float "mie_start" : optkeyframe, // The height relative to the horizon where mie scattering begins
      float "max" : optkeyframe // The maximum horizon height
    }
    float "rayleigh_strength" : optkeyframe, // How strong the atmosphere's rayleigh scattering term is
    float "sun_mie_strength" : optkeyframe, // How strong the sun's mie scattering term is
    float "moon_mie_strength" : optkeyframe, // How strong the moon's mie scattering term is
    float "sun_glare_shape" : optkeyframe, // How the lobe of the mie scattering is shaped
    color "sky_zenith_color" : optkeyframe, // The RGB color of the zenith region of the atmosphere; supports RGB array or HEX string
    color "sky_horizon_color" : optkeyframe // The RGB color of the horizon region of the atmosphere; supports RGB array or HEX string
  }
}
```

Any of these values can be individually key framed (see Key Frame Syntax section for more details).

Note that the colors defined for the sun and moon directional lights in lighting/global.json will also be used in the calculation of the atmosphere and thus will have a significant impact on the final sky color. This is especially true with both the Rayleigh and Mie scattering terms.

### lighting/atmospherics.json

```json
{
    "format_version": "1.21.40",
    "minecraft:atmosphere_settings": {
        "description": {
            "identifier": "my_pack:default_atmospherics"
        },
        "horizon_blend_stops":{
            "min": { 
                "0.0": 0.0, 
                "0.1962499916553497": 0.008, 
                "0.25": 0.0, 
                "0.34": 0.11, 
                "0.6": 0.027, 
                "0.6750000119209290": 0.01332983374595642, 
                "0.7487499713897705": 0.0, 
                "0.8174999952316284": 0.0 
            }, 
            "start": { 
                "0.0": 0.25, 
                "0.1962499916553497": 0.4179066121578217, 
                "0.25": 0.213, 
                "0.34": 0.401, 
                "0.6": 0.23, 
                "0.6750000119209290": 0.2143078744411469, 
                "0.7487499713897705": 0.1990064233541489, 
                "0.8174999952316284": 0.6179999709129333 
            }, 
            "mie_start": {
                "0.0": 0.5,
                "0.1962499916553497": 1.172000050544739,
                "0.25": 0.5,
                "0.34": 0.5009999871253967,
                "0.6": 0.167,
                "0.6750000119209290": 0.15,
                "0.7487499713897705": 0.55,
                "0.8174999952316284": 0.79
            }, 
            "max": { 
                "0.0": 0.25, 
                "0.1962499916553497": 0.137, 
                "0.25": 0.0, 
                "0.34": 0.467, 
                "0.6": 0.2,
                "0.6750000119209290": 0.1919008344411850, 
                "0.7487499713897705": 0.214, 
                "0.8174999952316284": 0.0 
            }
        },
        "rayleigh_strength": { 
            "0.0": 1.026124954, 
            "0.25": 0.1624998152, 
            "0.3": 0.1624998152, 
            "0.3037499785423279": 0.1624998152, 
            "0.3249999880790710": 0.1624998152, 
            "0.6": 0.5, 
            "0.7074999809265137": 0.1982535422, 
            "0.75": 0.125
        }, 
        "sun_mie_strength": { 
            "0.0": 1.0, 
            "0.25": 3.0, 
            "0.3": 3.0, 
            "0.3037499785423279": 2.878501892089844, 
            "0.3249999880790710": 1.0, 
            "0.6": 1.0, 
            "0.7074999809265137": 1.0, 
            "0.75": 1.0 
        }, 
        "moon_mie_strength": { 
            "0.0": 0.0, 
            "0.25": 0.0, 
            "0.3": 0.0, 
            "0.3037499785423279": 0.114, 
            "0.3249999880790710": 1.0, 
            "0.6": 1.0, 
            "0.7074999809265137": 0.0, 
            "0.75": 0.0 
        }, 
        "sun_glare_shape": { 
            "0.0": 15.89900016784668, 
            "0.25": 15.89900016784668, 
            "0.3": 15.89900016784668, 
            "0.3037499785423279": 15.84438705444336, 
            "0.3249999880790710": 15.0, 
            "0.6": 4.0, 
            "0.7074999809265137": 4.0, 
            "0.75": 4.0 
        }, 
        "sky_zenith_color": { 
            "0.0": [0, 125, 164], 
            "0.25": [11, 55, 97], 
            "0.5": [7, 10, 36], 
            "0.75": [50, 88, 170] 
        }, 
        "sky_horizon_color": { 
            "0.0": [255, 255, 254],
            "0.171875": [196, 133, 102], 
            "0.25": [255, 85, 85], 
            "0.305": [173, 60, 67], 
            "0.35": [168, 76, 140], 
            "0.4174999892711639": [130, 99, 169], 
            "0.47": [66, 98, 238], 
            "0.6030000448226929": [66, 98, 238], 
            "0.6474999785423279": [168, 99, 162], 
            "0.75": [238, 144, 124], 
            "0.84": [242, 168, 152] 
        }
    }
}
```

