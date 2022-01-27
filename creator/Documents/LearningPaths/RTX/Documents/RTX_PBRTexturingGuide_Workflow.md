---
author: v-jillheaden
ms.author: v-jillheaden
title: Physically Based Texturing Guide - Workflow
ms.prod: gaming
description: A guide to creating textures using RTX Physically-Based Rendering with Adobe Photoshop
---

# Physically-Based Texturing Guide - Workflow

Physically-Based Rendering, also known as PBR, is a type of render solution that simulates how materials react to realistic light behavior. Examples of this include how certain metallic properties will cast reflections or how light bends and refracts through different types of glass.

In this guide, you will learn some of the basic workflows when designing PBR textures in Minecraft:Bedrock Edition and create a custom texture set for the redstone block.

By the end of this guide, you will learn:

> [!div class="checklist"]
>
> How to create a custom Texture Set using Adobe Photoshop.
> How to utilize color channels to assign multiple maps in a single file.

### Requirements

You will need to complete the following tutorials:

- [Introduction to Resource Packs](../../../ResourcePack.md)
- [Physically-Based Texturing Guide](RTX_PBRTexturingGuide_Intro.md)

While textures will be provided, you will also need to have a digital painting software in order to create your own textures. This tutorial will be using Adobe Photoshop, however there are alternatives such as:

- paint.net
- Adobe Substance Painter
- Quixel Mixer

## Setting up the Texture_Set.JSON file

Before diving into creating the texture, you will need to create a .JSON file to be able to load your new textures properly.

> [!NOTE]
> This tutorial is a continuation of the [Physically-Based Texturing Guide](RTX_PBRTexturingGuide_Intro.md) and will assume that all set up steps have been completed as mentioned in the previous guide.

1. In your behavior pack, navigate to the `textures/blocks` folder.
1. Create a file called `redstone_block.texture_set.json`.
1. Double-click on the newly created file to edit its contents.
1. Copy and paste the following code into the file:

### redstone_block.texture_set.json

```JSON
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": "redstone_block",
    "metalness_emissive_roughness": "redstone_block_mer"
  }
}
```

5. Save and close the file.

## Creating the Textures

With the JSON file set up, let's take a look at how to set up Adobe Photoshop for working with Minecraft Textures. For your `"color"` value, we will be using the existing vanilla texture that is included in the Vanilla Resource Pack.

:::image type="content" source="../../../../Reference/Source/VanillaResourcePack/textures/blocks/redstone_block.png" alt-text="image of the redstone block texture":::

1. Locate the `redstone_block.png` file in the Vanilla Resource Pack, or just right-click on the image above and download it.
1. Right-click on the file, select **Open with**, and select **Adobe Photoshop**.
1. When Photoshop opens, select **File... Save As...** and save the file as a **.PSD** file type.

### Creating the 'mer' texture

As shown in the previous guide and when setting up the Texture Set JSON for the redstone block, you may have noticed that there is a file called `redstone_block_mer` that is set as the `"metalness_emissive_roughness"` value. `mer` in this case is an abbreviation for **m**etalness_**e**missive_**r**oughness because it's a single texture file that contains all three maps.

#### redstone_block_mer.png breakdown

Because each texture map functions as a grayscale value, each map can be assigned a color channel as shown below:

- **Red channel:** Metallic map. Value set in a range of `0.0` to `1.0`.
- **Green channel:** Emissive map. Value set in a range of `0.0` to `1.0`.
- **Blue channel:** Roughness map. Value set in a range of `0.0` to `1.0`.

> [!NOTE]
> Please note, the following sections will cover a set workflow when creating the textures, but please feel free to paint and create your own texture maps and values.

### Roughness

The redstone block is a bit of a polished stone, so we are going to create a single gray texture to create a level of smoothness on the block.

1. In Photoshop, create a new layer and name it **Rough Map**.
1. Select the brush tool and set the key color value to `80%`.
1. Paint the entire canvas with the brush.
1. When you are done, create a new layer group by selecting the folder icon at the bottom of the **Layers** tab.
1. Name the layer group **Roughness**.
1. Right-click the **Roughness** layer group and select **Blending Options**.
1. Under **Advanced Blending**, un-check the Red and Green channels so that Blue is the only one with a checkbox.
1. Select **OK** to close the **Blending Options** window.

:::image type="content" source="../Media/RTX_Roughness.png" alt-text="Image showcase the final output for the roughness set up in photoshop":::

With the maps being grouped together in a single layer gGroup called Roughness, you can combine multiple layers to paint multiple values without having to worry about any overlapping or interrupting work.

### Emissive

While the redstone block does not natively emit any light, we are going to add a low level of glow to the block to showcase emission in-game.

1. Locate **Layer 0** or the original color texture for the redstone block.
1. Right-click on **Layer 0** and select **Duplicate Layer...**.
1. Name the new layer **Emissive Map**.
1. With **Emissive Map** selected, create a new layer group called **Emissive**.
1. Select **Emissive Map** to highlight the layer, navigate to **Image... Adjustments...**, and select **Black and white**.
1. In the **Properties** tab, select **Darker** from the *preset* dropdown menu.
1. Set the value of **Reds:** to `-5`.
1. Right-click on the **Emissive** layer group and select **Blending Options**.
1. Under **Advanced Blending**, un-check the Red and Blue channels so that Green is the only one with a checkbox.
1. Select **OK** to close the **Blending Options** window.

:::image type="content" source="../Media/RTX_Emissive.png" alt-text="Image showcase the final output for the emissive map set up in photoshop":::

### Metallic

Finally, for the metallic map, we are going to use an inverse of the emissive map so that the more emissive portions will have a more metallic look compared to the edges.

1. Select both the **Emissive Map** and **Black and White 1** layers, then right-click and select **Duplicate Layers...**.
1. With the copied layers selected, create a new layer group called **Metallic**.
1. Select the **black and white 1 copy** and adjust the **Reds:** Property to `64`.
1. Select both layers in the **Metallic** group, then right-click and select **Merge Layers**
1. With the new layer selected, navigate to **Image... Adjustments...** and select **Inverse**.
1. Right-click on the **Metallic** layer group and select **Blending Options**.
1. Under **Advanced Blending**, un-check the Green and Blue channels so that Red is the only one with a checkbox.
1. Select **OK** to close the **Blending Options** window.

:::image type="content" source="../Media/RTX_Metalness.png" alt-text="Image showcase the final output for the metallic map set up in photoshop":::

### Exporting the File

With all three texture maps set up and assigned correctly, you can now export the file.

1. Select **File...Save As...** and save the file as `redstone_block_mer.png`.

Alternatively, you can download the file below;

:::image type="content" source="../Media/Texture/redstone_block_mer.png" alt-text="full redstone_block_mer png file":::

## What's Next?

Now that you have learned how to create your own custom physically based rendering texture packs, you can take a look at how fog has been adjusted in the Render Dragon engine and customize the settings to your liking.

> [!div class="nextstepaction"]
> [Fog in Resource Packs](../../../FogInResourcePacks.md)