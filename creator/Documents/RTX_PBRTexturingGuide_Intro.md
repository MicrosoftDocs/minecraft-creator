---
author: docsbryce
ms.author: v-bbortree
title: Physically Based Texturing Guide - Introduction
ms.prod: gaming
description: An introduction to the Physically Based Rendering solutions
---

# Physically Based Texturing Guide - Introduction

Physically Based Rendering, or PBR, simulates how materials would react to realistic light behavior. Certain metallic properties will cast reflections and light will bend and refract through different types of glass.

In this guide, you will learn some of the basic workflows when designing PBR textures in Minecraft: Bedrock Edition. You will create a series of textures that showcases each new Texture Map type.

By the end of this guide, you will learn:

> [!div class="checklist"]
>
> What are the new Texture Maps available for textures in Minecraft.
> How to create a Mirror Texture Set using roughness and metallic maps.

## Requirements

You will need to complete the following tutorials:

- [Introduction to Resource Packs](./ResourcePack.md)
- A Resource Pack with a `textures/blocks` folder structure setup.

While textures will be provided, you will need to have a digital painting software that has layers to create your own textures.

## What makes a PBR Texture?

Textures  use a common method of rendering called **Texture Mapping**. Texture maps allow creators to layer multiple images to create highly-detailed 3D objects. Vanilla Minecraft textures use a single map called **color**. Color maps are made up of four color channels: Red, Blue, Green, and Alpha (collectively known as RGBA). The first three channels control how the texture will render, while alpha controls the transparency of the texture.

With the introduction of PBR to Minecraft, textures can now use five additional maps to help creators create realistic materials.

- [Metallic Map](#metallic-map)
- [Emissive Map](#emissive-map)
- [Roughness Map](#roughness-map)
- [Normal Map](#normal-map)
- [Height Map](#height-map)

Each map will be part of the texture set for the block, with each one layered on top of the other to set different values in the texture. This process allows a creator to have strong control over how a block will render when placed in the world.

> [!IMPORTANT]
> Not all PBR texture sets require all maps. Leaving empty maps will cause the texture set to use the default value.

### Metallic Map

A Metallic map is a grayscale texture that determines which areas of a texture map look like a metal.

- A pixel that is set to black is considered a value of `0` and the pixel is non-metallic.  Grass, dirt, or tree bark are examples of non-metallic objects.
- A pixel that is set to white is considered a value of `1` and will treat the pixel as 100% metal. Iron, gold, or copper are examples of metallic objects.

:::image type="content" source="./Media/RTX/concrete_metallic_example.png" alt-text="concrete white block with metallic edges and a matte center":::

The above image uses the following mer: 

:::image type="content" source="./Media/RTX/Texture/metallic_mer.png" alt-text="concrete white block metallic mer texture":::

### Emissive Map

An Emissive map is a grayscale texture that determines which areas of a texture map emit light.

- A pixel that is set to black is considered a value of `0` and is not glowing.
- A pixel that is set to white is considered a value of `1` and is glowing at its brightest.
- Because the map is in grayscale, you can set values between `0` and `1`.

:::image type="content" source="./Media/RTX/concrete_emissive_example.png" alt-text="concrete white block with vertical glowing stripes":::

The above image uses the following mer: 

:::image type="content" source="./Media/RTX/Texture/emissive_mer.png" alt-text="concrete white block emissive mer texture":::

### Roughness Map

A Roughness map is a grayscale texture that determines which areas of a texture map emit light.

- A pixel that is set to black is considered a value of `0` and will treat the pixel as very smooth. Objects like smooth marble, glass, or smooth plastic are very smooth.
- A pixel that is set to white is considered a value of `1` and will treat the pixel as very rough. Brick, tree bark, or stones are very rough.
- Because the map is in grayscale, you can set values between `0` and `1`.

:::image type="content" source="./Media/RTX/concrete_rough_example.png" alt-text="concrete white block with horizontal rough and smooth stripes":::

The above image uses the following mer: 

:::image type="content" source="./Media/RTX/Texture/rough_mer.png" alt-text="concrete white block roughness mer texture":::

### Normal Map

A Normal map is a RGB texture that controls depth and how light behaves when a light ray hits the texture.

- Because Normal maps use RGB, you can create surface details that give the texture the appearance of a sculpted 3D object.
- Setting the RGB values to `128`,`128`,`255` respectively will result in a flat appearance of the pixel.

> [!CAUTION]
> Unless you have had previous experience with creating Normal maps, it is recommended that you do not create Normal maps by hand. Third party software is available to assist with creating Normal maps.

### Height Map

A Height map is a grayscale texture that controls depth. Height maps act as an alternative to Normal maps, but are not as efficient and cannot represent as many textures.

- A pixel that is set to black is considered a value of `0` and will cause the pixel to extrude inward.
- A pixel that is set to white is considered a value of `1` and will cause the pixel to extrude outward.
- A pixel that is set to `0.5` is considered the default height and will not extrude in or out.
- 
- :::image type="content" source="./Media/RTX/height_example.png" alt-text="concrete white block that has ridges in a square pattern":::

The above image uses the following height map: 

:::image type="content" source="./Media/RTX/Texture/height_map.png" alt-text="concrete white block height mer texture":::

## Make a Mirror

Let's create a mirror texture for an existing vanilla glass block by creating a Texture Set JSON file and using a provided texture file.

### Make a Texture Set JSON

For the Texture Set to work properly, you will need to define a JSON file to load the textures. This tutorial is a  mirror example working with the **iron_block** block.

> [!TIP]
> To learn more about texture sets, please visit [Texture Set Documentation - Introduction to Texture Sets](../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md).

1. In your behavior pack, navigate to the `textures/blocks` folder.
1. Create a new .JSON file and name it `iron_block.texture_set.json.
1. Double-click on `iron_block.texture_set.json` to edit the contents.
1. Copy the following example.

#### iron_block.texture_set.json

```JSON
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": "iron_block",
    "metalness_emissive_roughness": "iron_block_mer",
}
```

5. Save and close the file.

With the JSON file set up, you can now configure the textures for the `color` value and the `metalness_emissive_roughness` value.

### Add the Raytraced Capability

The `manifest.json` file for the pack requires the value `"raytraced"` to be added in the `capabilities` section.

```json
    "capabilities" : [
        "raytraced"
    ]
```

### Add the Textures

To create a mirror in a PBR workflow, you need a Roughness map and a Metalness map.

A Roughness map with a value of `0.0`, or solid black, will create a smooth surface for light to reflect off.

A Metalness map set to a value of `1.0`, or solid white, will render the block like reflective metal.

With this mirror set up, the Render Dragon engine will be able to ray trace with less time handling calculations for these objects.

:::row:::
    :::column:::
        **Main Color Texture: iron_block.png**
        :::image type="content" source="./Media/RTX/Texture/iron_block.png" alt-text="iron block default Minecraft texture":::
    :::column-end:::
    :::column:::
        **PBR Texture: iron_block_mer.png**
        :::image type="content" source="./Media/RTX/Texture/iron_block_mer.png" alt-text="iron block mer texture for mirror effect":::
    :::column-end:::
:::row-end:::

1. Download the `iron_block.png` file and the `iron_block_mer.png` file.
i. You can right-click on the image and select **Save As...** to download.
3. Copy and paste both .png files into the `textures/blocks` folder.

## Running the Texture Pack

With the JSON file properly set up and both textures in place, you can now load in your texture pack to test in Minecraft.

:::image type="content" source="./Media/RTX/mirror.png" alt-text="iron block reflecting flowers from the environment":::

## What's Next?

You created a mirror with roughness and metalness maps. Now you can take a look at the next part of this guide that covers how to create custom textures to create your own texture set.

> [!div class="nextstepaction"]
> [Physically Based Texturing Guide - Workflow](RTX_PBRTexturingGuide_Workflow.md)
