---
author: ajfairfieldmsft
ms.author: adfairfi
ms.reviewer: v-wamartin
title: Cubemaps
ms.topic: tutorial
description: "Cubemaps with Vibrant Visuals in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 10/9/2025
---

# Cubemaps

Vibrant Visuals gives you new data-driven capabilities for customizing the lighting of your custom cubemap! With these tools, resource packs can ensure that their skyboxes look as good as possible in Vibrant Visuals mode.

## Cubemap customization options

Cubemaps, also referred to as skyboxes, are six 2D textures that surround the player and provide a backdrop for the game world. In Vibrant Visuals, it is important to be able to customize various parameters of the lighting of a cubemap depending on the contents of it and what it is trying to convey. For instance, if a resource pack has a cubemap that is meant to represent space and very distant celestial bodies, then it wouldn't make sense to apply atmospheric scattering to it. On the other hand, if a resource pack has a cubemap that is meant to represent additional clouds, then it could make sense to apply atmospheric scattering to it to give it a more realistic appearance.

Cubemap customization is only possible in the Overworld dimension. The End will continue to use its built-in cubemap.

The following parameters can be customized for cubemaps in Vibrant Visuals:

- **Ambient Light Illuminance**: Determines the amount of fixed ambient light applied to the cubemap. This value can be keyframed to change with the time of day progression. Ambient light values should be in the range 0.0 and 100000.0 (lux). A default value of 5.625 will be used for all times of day if not provided. Higher values will make the cubemap appear brighter even if no other light sources are used.

- **Sky Light Contribution**: Controls how much the sky light affects the cubemap. This value should be between 0.0 and 1.0, where 0.0 means no contribution from the sky light and 1.0 means full contribution from the sky light. Sky lighting itself is controlled via parameters found in the [lighting section](LightingCustomization.md) under `sky`. The default value is 1.0.

- **Directional Light Contribution**: Controls how much the directional light (sun and moon) affects the cubemap. This value should be between 0.0 and 1.0, where 0.0 means no contribution from the directional light and 1.0 means full contribution from the directional light. Directional lighting itself is controlled via parameters found in the [lighting section](LightingCustomization.md) under `directional_lights`. The default value is 0.0.

- **Affected by Atmospheric Scattering**: Determines if the cubemap is affected by [atmospheric scattering](AtmosphericsCustomization.md). Use this if the contents of your cubemap contains objects that are somewhat close to the surface of the world. For instance, cubemaps that convey clouds or airships or other objects in the "sky" should set this value to true. However, if your pack's cubemap is conveying an outer space backdrop and there is no clear horizon in the context of your world, then you would likely want to set this value to false. The default value is false.

- **Affected by Volumetric Scattering**: Determines if the cubemap is affected by [volumetric scattering](VolumetricFogLightShaftsCustomization.md). This value is similar to atmospheric scattering, but it is more focused on the interaction of light with fog and light shafts. If your cubemap contains objects that are close to the surface of the world and you want them to interact with fog and light shafts, then you should set this value to true. The default value is true.

## Schema

Cubemap configurations are JSON files located in the **cubemaps** directory in a resource pack. They follow this format:

```json
{
  string "format_version", // The 3-part schema version for parsing these cubemap settings.
  object "minecraft:cubemap_settings"
  {
    object "description"
    {
      string "identifier" // The identifier for these cubemap settings. The identifier must include a namespace.
    }
    object "lighting" : opt
    {
      float "ambient_light_illuminance" : optkeyframe, // Contains pairs of numbers, where the first number should be between 0.0 and 1.0 (time of day) and the second number should be between 0.0 and 100000.0 (ambient light). Default value is 5.625 for all times of day.
      float "sky_light_contribution" : opt, // Contribution of the sky light. It should be between 0.0 and 1.0. Default value is 1.0.
      float "directional_light_contribution" : opt, // Contribution of the directional light. It should be between 0.0 and 1.0. Default value is 0.0.
      bool "affected_by_atmospheric_scattering" : opt, // If true, the cubemap will be affected by atmospheric scattering. Default value is false.
      bool "affected_by_volumetric_scattering" : opt // If true, the cubemap will be affected by volumetric scattering. Default value is true.
    }
  }
}
```

Learn more about customizing and applying cubemap settings in your pack across different biomes in [Per-Biome Customization](BiomeCustomization.md).

This sample **cubemaps/mycubemap.json** file can be used as a starting point.

```json
{
  "format_version": "1.21.130",
  "minecraft:cubemap_settings": {
    "description": {
      "identifier": "my_pack:mycubemap"
    },
    "lighting": {
      "ambient_light_illuminance": {
        "0.00000": 4.0,
        "1.000000": 4.0 
      },
      "sky_light_contribution": 1.0,
      "directional_light_contribution": 1.0,
      "affected_by_atmospheric_scattering": true,
      "affected_by_volumetric_scattering": true
    }
  }
}
```
