---
author: iconicNurdle
ms.author: mikeam
title: Biome Customization
ms.topic: tutorial
description: "Biome Customization with Vibrant Visuals in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 05/23/2025
---

# Biome Customization

There are a lot of ways you can customize Vibrant Visuals effects for different biomes! This document goes over them, linking to more detailed documentation around the Minecraft Learning Portal.

## Vibrant Visuals JSONs

Vibrant Visuals Resource packs support a variety of JSON files that allow Creators to customize things like the sun and moon color, the atmospheric properties of the sky, color grading, and more. Each grouping is documented on the following pages:

- [Atmospherics](AtmosphericsCustomization.md)
- [Color Grading](ColorGradingToneMappingCustomization.md)
- [Lighting](LightingCustomization.md)
- [Water](WaterCustomization.md)

Packs can provide multiple instances for each type of JSON as long as they have unique filenames and unique `identifier` fields in their JSON schema. Those identifiers can then be specified in [Client Biome JSONs](../../Reference/Content/ClientBiomesReference/Examples/ClientBiomesOverview.md) to customize the look and feel of a given biome(s).

## Transitions between biomes

In order to smoothly transition between different visual settings for different biomes, the game will automatically blend any customized settings in one of two ways:

### Spatial blend based on viewer location

The following settings will smoothly transition as the player's camera moves through the world:

- [Atmospherics](AtmosphericsCustomization.md)
- [Color Grading](ColorGradingToneMappingCustomization.md)
- [Lighting](LightingCustomization.md)

For instance, imagine a player is located in a Plains biome configured with a yellow sun and blue sky. Next to this biome is a Forest biome, which is configured with a less intense sun, a blue-gray sky and a bit more saturation. As the player approaches the Forest biome, their lighting, atmospherics and color grading settings will interpolate between the Plains biome settings and the forest biome settings. So the sun will become slightly more dim, the color of the sky will slowly adjust and the overall scene will gradually saturate. Once the player has fully transitioned past the biome boundary and into the Forest, then they will see only the Forest biome settings. If the player were to reverse course, the visuals would smoothly return to those of the Plains configuration. If the player were to stop midway between the two biomes, the visuals would hold at the halfway interpolated point for all settings in question.

### Spatial blend based on geometry location

The following settings will be calculated on a per-geometry basis and its location in the world as opposed to where the player is located:

- [Water](WaterCustomization.md)

This type of blending allows for differences in biomes to be observed from afar, without the need for the player to be located in the actual biome.

For example, imagine a player standing on a cliff in a Stony Shore biome looking out at an Ocean biome. The player pulls out their trusty spyglass where they can observe a Guardian swimming around in a Deep Ocean biome. Looking up and down the Stony Shore, the player sees the jagged rocks eventually turn into a tranquil Beach biome on both sides. The particular body of water in this example stretches across 4 biomes, possibly more. If a pack were to provide 4 different water configurations with slightly different properties and assign them to said biomes, then the player would be able to observe all 4 types of water from their vantage point on the cliff. As water blocks cross from one biome to another, their properties, and thus appearance, will smoothly interpolate from one style to another.

## Limitations

There are some parameters that cannot be blended today:

- [Tone mapping operators](ColorGradingToneMappingCustomization.md#tone-mapping) cannot be blended. All color grading and tone mapping schemas in a given pack should use the same tone mapping operator.
- [Orbital offset degrees](LightingCustomization.md#directional-lights) cannot be blended. All lighting schemas in a given pack should use the same orbital offset degree value.
- [Caustics](WaterCustomization.md#caustics) cannot be blended. All water schemas in a given pack should use the same caustics parameters.
- [Waves enabled/disabled](WaterCustomization.md#waves) cannot be blended. All water schemas in a given pack should use the same wave simulation boolean.

## Example

Assume a resource pack contains the following files that all contain valid schemas and unique identifiers:

| File                             | Identifier                      |
|----------------------------------|---------------------------------|
| atmospherics/atmospherics.json   | `my_pack:default_atmospherics`  |
| atmospherics/end.json            | `my_pack:end_atmospherics`      |
| atmospherics/nether.json         | `my_pack:nether_atmospherics`   |
| color_grading/color_grading.json | `my_pack:default_color_grading` |
| color_grading/end.json           | `my_pack:end_color_grading`     |
| color_grading/nether.json        | `my_pack:nether_color_grading`  |
| lighting/global.json             | `my_pack:default_lighting`      |
| lighting/end.json                | `my_pack:end_lighting`          |
| lighting/nether.json             | `my_pack:nether_lighting`       |
| water/water.json                 | `my_pack:default_water`         |
| water/ocean.json                 | `my_pack:ocean_water`           |
| water/deep_ocean.json            | `my_pack:deep_ocean_water`      |

Because the filenames are reserved to act as global/default values, the identifiers found in **atmospherics/atmospherics.json**, **color_grading/color_grading.json**, **lighting/global.json** and **water/water.json** will automatically be assigned to the `minecraft:atmosphere_identifier`, `minecraft:color_grading_identifier`, `minecraft:lighting_identifier` and `minecraft:water_identifier` biome components respectively unless a particular biome JSON specifies differently.

Let's customize the End and Nether biomes to use their own sets of visual parameters.

Filename: **biomes/the_end.client_biome.json**

```json
{
  "format_version": "1.21.70",
  "minecraft:client_biome": {
    "description": {
      "identifier": "the_end"
    },
    "components": {
      ...,
      "minecraft:atmosphere_identifier": {
        "atmosphere_identifier": "my_pack:end_atmospherics"
      },
      "minecraft:color_grading_identifier": {
        "color_grading_identifier": "my_pack:end_color_grading"
      },
      "minecraft:lighting_identifier": {
        "lighting_identifier": "my_pack:end_lighting"
      }
    }
  }
}

```

Filename: **biomes/hell.client_biome.json**

```json
{
  "format_version": "1.21.70",
  "minecraft:client_biome": {
    "description": {
      "identifier": "hell"
    },
    "components": {
      ...,
      "minecraft:atmosphere_identifier": {
        "atmosphere_identifier": "my_pack:nether_atmospherics"
      },
      "minecraft:color_grading_identifier": {
        "color_grading_identifier": "my_pack:nether_color_grading"
      },
      "minecraft:lighting_identifier": {
        "lighting_identifier": "my_pack:nether_lighting"
      }
    }
  }
}
```

To be complete, one would also want to specify the other biomes in the Nether, such as the Crimson Forest, the Nether Wastes, the Warped Forest, and so on, where you could further customize the look and feel to match the distinct mood of each biome. But we'll leave that as an exercise for the Creator.

Next, let's assign unique water configurations to the Ocean and Deep Ocean biomes.

Filename: **biomes/ocean.client_biome.json**

```json
{
  "format_version": "1.21.70",
  "minecraft:client_biome": {
    "description": {
      "identifier": "ocean"
    },
    "components": {
      ...,
      "minecraft:water_identifier": {
        "water_identifier": "my_pack:ocean_water"
      }
    }
  }
}

```

Filename: **biomes/deep_ocean.client_biome.json**

```json
{
  "format_version": "1.21.70",
  "minecraft:client_biome": {
    "description": {
      "identifier": "deep_ocean"
    },
    "components": {
      ...,
      "minecraft:water_identifier": {
        "water_identifier": "my_pack:deep_ocean_water"
      }
    }
  }
}
```

And that's all there is to it! Use these identifier components to customize all of your biomes in your Deferred enabled resource pack!
