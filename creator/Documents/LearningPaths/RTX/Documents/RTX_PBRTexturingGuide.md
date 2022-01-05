---
author: v-jillheaden
ms.author: v-jillheaden
title: Physically Based Texturing Guide
ms.prod: gaming
description: A guide to creating textures using RTX Physically-Based Rendering
---

# Physically Based Texturing Guide

Physically Based Rendering, also known as PBR, is a type of render solution that simulates how materials would react to realistic light behavior. Examples of this includes how certain metallic properties will cast reflections or how light bends and refracts through different types of glass.

In this guide, you will learn some of the basic workflows when designing PBR textures in Minecraft:Bedrock Edition and create a series of textures that showcases each new Texture Map type.

By the end of this guide, you will learn:

> [!div class="checklist"]
>
> What are the new Texture Maps available for textures in Minecraft.
> How to create a Mirror Texture Set using roughness and metallic maps.
> How to create a PBR Texture Set for an existing vanilla block.

### Requirements

You will need to complete the following tutorials;

- [Introduction to Resource Packs](../../../ResourcePack.md)

While textures will be provided, you will also need to have a digital painting software in order to create your own textures.

- Adobe Photoshop
- Paint.net

## What makes a PBR Texture?

Textures within Minecraft a common method of rendering called Texture Mapping. Texture maps allows for creators to layer multiple images to create highly detailed 3D objects. Vanilla Minecraft textures uses a single map called **color**. Color maps are made up of four color channels; Red, Blue, Green, Alpha, (collectively known as RGBA). The first three channels will control how the texture will render, while alpha will control transparency of the texture.

An example of this is shown in the water lily plant texture (need to scale up)

:::image type="content" source="../../../../Reference/Source/VanillaResourcePack/textures/blocks/waterlily.png" alt-text="Texture used in minecraft to drive the appearance of a water lily":::

With the introduction of PBR to Minecraft, Textures can now use five additonal maps in order to help creators create realistic materials.

- [Metallic Map](#metallic-map)
- [Emissive Map](#emissive-map)
- [Roughness Map](#roughness-map)
- [Normal Map](#normal-map)
- [Height Map](#height-map)

Each map will be apart of the texture set for the block, each one layered one on top of the other to drive different values in the texture. This process allows a creator to have a strong control over how a block will render when placed in the world.

> [!TIP]
> To learn more about texture sets, please visit [Texture Set Documentation - Introduction to Texture Sets](../../../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md)

> [!IMPORTANT]
> Not all PBR texture sets require all six maps. Leaving empty maps will cause the Texture set to use the default value that is used by the Vanilla texture set information.

### Metallic Map

A Metallic map is a greyscale texture that will drive how metallic the texture will look.

- A pixel that is set to black is considered a value of `0` and will treat the pixel as non-metallic. Examples of non-metallic objects would be grass, dirt, tree bark.
- A pixel that is set to white is considered a value of `1` and will treat the pixel as 100% metal. Examples of metallic objects would be iron, gold, copper.
- Since the map is in greyscale, you can set values in-between `0` and `1`.

### Emissive Map

An Emissive map is a greyscale texture that will drive how much the texture will glow.

- A pixel that is set to black is considered a value of `0` and will treat the pixel not glowing.
- A pixel that is set to white is considered a value of `1` and will treat the pixel glowing at it's brightest.
- Since the map is in greyscale, you can set values in-between `0` and `1`.

### Roughness Map

A Roughness map is a greyscale texture that will drive the 'roughness' look and feel of the texture.

- A pixel that is set to black is considered a value of `0` and will treat the pixel as very smooth. Examples of this would be objects like smooth marble, glass, smooth plastic.
- A pixel that is set to white is considered a value of `1` and will treat the pixel as very rough. Examples of this would include brick, tree bark, stones.
- Since the map is in greyscale, you can set values in-between `0` and `1`.

### Normal Map

A Normal map is a RGB texture that controls depth and how light will behave when a light ray hits the texture.

- Since Normal maps use RGB, you can create surface details that gives the texture the appearence of a sculpted 3D object.

### Height Map

## Making a Mirror

