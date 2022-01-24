---
author: v-jillheaden
ms.author: v-jillheaden
title: Physically Based Texturing Guide - Introduction
ms.prod: gaming
description: An introduction to the Physically Based Rendering solutions
---

# Physically Based Texturing Guide - Introduction

Physically Based Rendering, also known as PBR, is a type of render solution that simulates how materials would react to realistic light behavior. Examples of this includes how certain metallic properties will cast reflections or how light bends and refracts through different types of glass.

In this guide, you will learn some of the basic workflows when designing PBR textures in Minecraft:Bedrock Edition and create a series of textures that showcases each new Texture Map type.

By the end of this guide, you will learn:

> [!div class="checklist"]
>
> What are the new Texture Maps available for textures in Minecraft.
> How to create a Mirror Texture Set using roughness and metallic maps.

### Requirements

You will need to complete the following tutorials;

- [Introduction to Resource Packs](../../../ResourcePack.md)
- A Resource Pack with a `textures/blocks` folder structure setup.

While textures will be provided, you will also need to have a digital painting software in order to create your own textures.

## What makes a PBR Texture?

Textures within Minecraft use a common method of rendering called **Texture Mapping**. Texture maps allow creators to layer multiple images to create highly-detailed 3D objects. Vanilla Minecraft textures use a single map called **color**. Color maps are made up of four color channels: Red, Blue, Green, and Alpha, (collectively known as RGBA). The first three channels control how the texture will render, while alpha controls the transparency of the texture.

An example of this is shown in the water lily plant texture (need to scale up)

:::image type="content" source="../../../../Reference/Source/VanillaResourcePack/textures/blocks/waterlily.png" alt-text="Texture used in minecraft to drive the appearance of a water lily":::

With the introduction of PBR to Minecraft, textures can now use five additional maps to help creators create realistic materials.

- [Metallic Map](#metallic-map)
- [Emissive Map](#emissive-map)
- [Roughness Map](#roughness-map)
- [Normal Map](#normal-map)
- [Height Map](#height-map)

Each map will be part of the texture set for the block, with each one layered on top of the other to drive different values in the texture. This process allows a creator to have strong control over how a block will render when placed in the world.

> [!IMPORTANT]
> Not all PBR texture sets require all maps. Leaving empty maps will cause the texture set to use the default value used by the Vanilla texture set information.

### Metallic Map

A Metallic map is a grayscale texture that will drive how metallic the texture will look.

- A pixel that is set to black is considered a value of `0` and the pixel is non-metallic. Examples of non-metallic objects would be grass, dirt, or tree bark.
- A pixel that is set to white is considered a value of `1` and will treat the pixel as 100% metal. Examples of metallic objects would be iron, gold, or copper.
- Because the map is in grayscale, you can set values between `0` and `1`.

### Emissive Map

An Emissive map is a grayscale texture that will drive how much the texture will glow, or emit light.

- A pixel that is set to black is considered a value of `0` and is not glowing.
- A pixel that is set to white is considered a value of `1` and is glowing at its brightest.
- Because the map is in grayscale, you can set values between `0` and `1`.

### Roughness Map

A Roughness map is a grayscale texture that will drive the 'roughness' look of the texture.

- A pixel that is set to black is considered a value of `0` and will treat the pixel as very smooth. Examples of this would be objects like smooth marble, glass, or smooth plastic.
- A pixel that is set to white is considered a value of `1` and will treat the pixel as very rough. Examples of this would include brick, tree bark, or stones.
- Because the map is in grayscale, you can set values between `0` and `1`.

### Normal Map

A Normal map is a RGB texture that controls depth and how light behaves when a light ray hits the texture.

- Because Normal maps use RGB, you can create surface details that give the texture the appearance of a sculpted 3D object.
- Setting the RGB values to `128`,`128`,`255` respectively will result in a flat appearance of the the pixel.

> [!CAUTION]
> Unless you have had previous experience with creating Normal maps, it is recommended that you do not create Normal maps by hand. Third party software is available to assist with creating Normal maps.

### Height Map

A Height map is a grayscale texture that controls depth. Height maps act as an alternative to Normal maps, but have limitations.

- A pixel that is set to black is considered a value of `0` and will cause the pixel to extrude inward.
- A pixel that is set to white is considered a value of `1` and will cause the pixel to extrude outward.
- A pixel that is set to `0.5` will be considered as the default height and will not extrude in or out.

## Making a Mirror

Now that you know about each of the different types of texture maps that are supported with the new PBR workflow, you will learn how to create a mirror texture for an existing vanilla glass block by creating a Texture Set JSON file and using a provided texture file.

### Texture Set JSON

For the Texture Set to work properly, you will need to define a JSON file to load the textures. The example below showcases the mirror example working with the **glass_black** block.

> [!TIP]
> To learn more about texture sets, please visit [Texture Set Documentation - Introduction to Texture Sets](../../../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md)

1. In your behavior pack, navigate to the `textures/blocks` folder.
1. Create a new .JSON file and name it `glass_black.texture_set.json.
1. Double-click on `glass_black.texture_set.json` to edit the contents.
1. Copy the following example.

#### glass_black.texture_set.json

```JSON
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": "glass_black",
    "metalness_emissive_roughness": "glass_black_mer",
}
```

5. Save and close the file.

With the JSON file set up, you can now configure the textures for the `color` value and the `metalness_emissive_roughness` value.

### Adding the Textures

To create a mirror in a PBR workflow, you require two maps; a roughness map and a metalness map. When you set a roughness map to a value of `0.0`, or solid black, you will create a smooth surface for light to bounce directly off of. With a metalness map set to a value of `1.0`, or solid white, the object will be rendered like reflective metal. With this mirror set up, the Render Dragon engine will be able to ray trace with less time handling calculations for these objects.

<insert file>

1. Click and download the `glass_black_mer.png` file.
1. Click and download the `glass_black.png` file.
1. Copy and paste both .png files into the `textures/blocks` folder.

## Running the Texture Pack

With the JSON file properly set up and both textures in place, you can now load in your texture pack to test in Minecraft.

> [!IMPORTANT]
> Before packaging up your texture pack, there is an additional step that will need to be done in order to properly load the textures and ray tracing features.
>
> - The `manifest.json` file for the pack requires the value `"raytraced"` to be added in the `capabilities` section.

## What's Next?

Now that you have created a Mirror utilizing the roughness and metalness maps, you can take a look at the next part of this guide that covers how to create custom textures in Adobe Photoshop and create your own texture set.

> [!div class="nextstepaction"]
> [Physically Based Texturing Guide - Workflow](Documents/RTX_PBRTexturingGuide_Workflow.md)
