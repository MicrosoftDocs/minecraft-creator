---
author: iconicNurdle
ms.author: mikeam
title: Getting Started with Deferred Lighting
ms.topic: tutorial
description: "An Introduction to Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Getting Started with Deferred Lighting

Minecraft supports a Physically Based Rendering (PBR) pipeline that can be used for Deferred Lighting and Ray Tracing. This involves accurately modeling surface details as well as scene illuminators to achieve a lighting model that is coherent across all times of day. By taking advantage of PBR and the new Deferred Lighting pipeline, you unlock new creative control over the mood and lighting conditions of your entire scene.

For example, you can control the intensity and color of the sun and moon, affecting how they contribute to the scene through aspects like direct lighting, bloom activation, exposure sensitivity, and shadow angle.

Additionally, new properties for describing the atmosphere of your world enable a new level of control over your skies! All these customization points coupled with the new "key frame" syntax allow you to change any detail of your lighting over the course of the in-game day-night cycle.

> [!NOTE]
> Deferred lighting features are experimental. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning. Check the Minecraft Changelog for details on any changes.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../ExperimentalFeaturesToggle.md).

All newly added lighting capabilities are opt-in, and appropriate defaults will be used if any parameters aren't supplied by a resource pack. These properties are also designed to complement and extend the existing Texture Set capabilities found in RTX resource packs (Texture Sets are no longer restricted to RTX-only packs).

> [!NOTE]
> New capabilities are **NOT** backwards-compatible with the RTX pipeline.

## Opting Into the Deferred Lighting Pipeline

To opt into the Deferred Lighting Pipeline, you will need to provide a PBR-enabled resource pack and join a world with the "Render Dragon Features for Creators" Experiment enabled. Resource packs built for RTX should work with the new pipeline, but you will likely want to add some JSON files to make full use of the pipeline, as explained in the following sections.
