---
author: chipotle
ms.author: v-wamartin
title: Vibrant Visuals Resource Packs
ms.topic: tutorial
description: "An overview of Vibrant Visuals Resource Packs for Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 05/23/2025
---

# Vibrant Visuals Resource Packs

Vibrant Visuals use the same rules for Physically Based Rendering (PBR) texture sets that are used for ray tracing (RTX). If you're not familiar with PBR texture sets, read the [overview](./PBROverview.md); there's more detail on creating texture sets in the reference section [Introduction to Texture Sets](../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md).

The new pipeline supports both Height Map and Normal Map inputs for bump mapping. In addition, you can now set PBR textures for not just blocks but entities, mobs, particles, and items! They follow the same texture set rules as blocks; you just need to add them to the correct folder in your resource pack: **textures/entity**, **textures/particle**, or **textures/items**.

Vibrant Visuals also supports a new texture set property that describes a material's [subsurface scattering](https://en.wikipedia.org/wiki/Subsurface_scattering) properties in addition to its metallic, emissive, and roughness (MER) properties. For more details, read about [Subsurface Scattering](./SubSurfaceScatteringCustomization.md) customization, or consult the [Texture Sets documentation](../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md).

To let Minecraft know your resource pack includes Vibrant Visuals assets, you need to add the `"pbr"` capability to the `capabilities` array of your pack's **manifest.json** file:

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

Because the assets required for RTX raytracing are a subset of the assets needed for Vibrant Visuals, a pack with the `"raytraced"` capability also activates Vibrant Visuals. However, it's recommended that you use the `"pbr"` string for your Vibrant Visuals packs; Vibrant Visuals is cross-platform, while RTX raytracing is restricted to RTX-only devices.

## Vibrant Visuals JSON files

Texture Sets define the surface properties of individual blocks or entities, but global lighting properties are defined with [Keyframe JSON files](./KeyFrameJSONSyntax.md). The folder structure for a Vibrant Visuals resource pack with all possible PBR and lighting JSON files looks like this:

![Image of the file structure for a resource pack with a manifest file, an atmospherics folder containing an atmospherics.json file, a color_grading folder containing a color_grading.json, a lighting folder containing a global.json file, a pbr folder containing a global.json file, a point_lights folder containing a global.json, a textures folder containing a "blocks" folder, an "entities" folder, an "items" folder, a "particles" folder and a textures_list.json file, and a water folder containing a water.json.](Media/RP_file_structure2.png)
