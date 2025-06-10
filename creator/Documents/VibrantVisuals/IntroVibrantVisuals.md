---
author: chipotle
ms.author: v-wamartin
title: Vibrant Visuals
ms.topic: tutorial
description: "An Introduction to Vibrant Visuals in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 05/23/2025
---

# Vibrant Visuals

Minecraft: Bedrock Edition's new [Vibrant Visuals](https://www.minecraft.net/en-us/article/minecraft-vibrant-visuals) feature is a sweeping new upgrade to Minecraft's rendering capabilities, offering directional lighting, volumetric fog, atmospheric effects, and more.

:::image type="content" source="Media/vibrant-visuals.png" alt-text="Minecraft: Bedrock Edition with Vibrant Visuals enabled.":::

Vibrant Visuals affects Minecraft's graphics, but makes no changes to gameplay, so the change is completely backwards-compatible. It runs entirely locally, so players can choose whether to enable it on their machine or not.

The Vibrant Visuals system is built around a Physically Based Rendering (PBR) pipeline used for deferred lighting and ray tracing. The pipeline combines modeling texture-mapped surface details as well as multiple illumination sources into a lighting model that accurately reflects light and shadows across all times of day. By taking advantage of Vibrant Visuals, you'll unlock new creative control over the mood and lighting conditions of your entire scene.

For example, you can control the intensity and color of the sun and moon, affecting how they contribute to the scene through aspects like direct lighting, bloom activation, exposure sensitivity, and shadow angle.

Additionally, new properties for describing the atmosphere of your world enable a new level of control over your skies! All these customization points coupled with the new [key frame JSON](./KeyFrameJSONSyntax.md) syntax allow you to change any detail of your lighting over the course of the in-game day-night cycle.

## Enabling Vibrant Visuals

Launch Minecraft and go to the Settings screen. Select Video settings, and select the Graphics Mode drop-down.

The UI element will change to a checklist with an option for Vibrant Visuals. Check this option, and your world will be rendered with the new Vibrant Visuals mode!

:::image type="content" source="Media/enable-vibrant-visuals.png" alt-text="The Vibrant Visuals setting under Minecraft's Video settings page.":::

## Adding Vibrant Visuals to your creations

To take advantage of physically-based rendering in your resource packs, they'll need to have the `"pbr"` capability string added to their **manifest.json** file. Resource packs built for RTX raytracing, with the `"raytracing"` capability, should also work with the new pipeline, but you'll likely want to add more features to make full use of PBR.

> [!NOTE]
> New capabilities are **NOT** backwards-compatible with the RTX pipeline.

All newly added lighting capabilities are opt-in, and appropriate defaults will be used if any parameters aren't supplied by a resource pack. These properties are also designed to complement and extend the existing Texture Set capabilities found in RTX resource packs. (Texture Sets are no longer restricted to RTX-only packs.)

> [!div class="nextstepaction"]
> [Overview of Physically Based Rendering](./PBROverview.md)
> [Vibrant Visuals Resource Packs](./VVResourcePacks.md)
