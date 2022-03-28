---
author: docsbryce
ms.author: v-bbortree
title: Physically Based Rendering Tutorial
ms.prod: gaming
description: A guide to creating textures using RTX Physically Based Rendering with Adobe Photoshop
---

# Physically Based Rendering Tutorial

Physically Based Rendering (PBR) is a type of render solution that simulates how materials react to realistic light behavior. For example, certain metallic properties will cast reflections or change the way light bends and refracts through different types of glass.

In this guide, you will learn some of the basic workflows when designing PBR textures in Minecraft: Bedrock Edition and create a custom texture set for the emerald ore block.

We're going to use emerald ore for this tutorial. When we're done with it, the stone part will look rougher and the emerald chunks will look more metallic in the light, and glow faintly in the dark.

:::image type="content" source="./Media/RTX/emerald_ore_tutorial.png" alt-text="image of the emerald ore block texture glowing faintly at night":::

By the end of this guide, you will learn:

> [!div class="checklist"]
>
> - How to create a custom Texture Set using Adobe Photoshop.
> - How to utilize color channels to assign multiple maps in a single file.

## Requirements

You will need to complete the following tutorials:

- [Introduction to Resource Packs](./ResourcePack.md)
- [Introduction to Physically Based Rendering](./RTXPBRIntro.md)

While textures will be provided, you will need to have digital painting software to create your textures. This tutorial will be using Adobe Photoshop.

## Set up the Texture_Set.JSON file

First, you will need to create a Texture Set .JSON file that will load your new textures into the game.

> [!NOTE]
> This tutorial is a continuation of the [Introduction to Physically Based Rendering](RTXPBRIntro.md) and will assume that all setup steps have been completed as mentioned in the previous guide.

1. In your behavior pack, navigate to the `textures/blocks` folder.
1. Create a file called `emerald_ore.texture_set.json` and add the following code to it.

### emerald_ore.texture_set.json

```JSON
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": "emerald_ore",
    "metalness_emissive_roughness": "emerald_ore_mer"
  }
}
```
5. Save and close the file.

## Create the Textures

With the JSON file set up, let's take a look at how to set up Adobe Photoshop for working with Minecraft Textures. For your `"color"` value, we will be using the existing vanilla texture that is included in the Vanilla Resource Pack.

:::image type="content" source="./Media/RTX/Texture/emerald_ore.png" alt-text="image of the emerald ore default block texture":::

1. Right-click on the image above and download it.
1. Right-click on the file, select **Open with**, and select **Adobe Photoshop**.
1. When Photoshop opens, select **File... Save As...** and save the file as a **.PSD** file type.

### Create the 'mer' texture

In the previous guide, when you set up the Texture Set JSON for the emerald ore block, you may have noticed that there is a file called emerald_ore_mer that is set as the "metalness_emissive_roughness" value. `mer` in this case is an abbreviation for **m**etalness_**e**missive_**r**oughness because it's a single texture file that contains all three maps.

#### `emerald_ore_mer.png` Overview

Because each texture map functions as a grayscale value, each map can be assigned a color channel:

- **Red channel:** Metallic map. Value set in a range of `0.0` to `1.0`.
- **Green channel:** Emissive map. Value set in a range of `0.0` to `1.0`.
- **Blue channel:** Roughness map. Value set in a range of `0.0` to `1.0`.


### Roughness

Because emerald ore is depicted as pieces of emeralds embedded in gray stone, it's perfect for showing how we can use the Roughness Map to make the emerald portions look smoother and the stone look rougher.

1. Create a new layer group by selecting the folder icon at the bottom of the **Layers** tab.
1. Name the layer group **Roughness**.
1. In Photoshop, create a new layer and name it **Rough Map**.
1. Paint over the portions of the block with emeralds in black to make them smooth.
1. Paint over the stone with white to make the stones rough.
1. Right-click the **Roughness** layer group and select **Blending Options**.
1. Under **Advanced Blending**, un-check the Red and Green channels so that Blue is the only one with a checkbox.
1. Select **OK** to close the **Blending Options** window.

Here is the output of the painting. It shows as blue and black since we turned off the red and green channels.

:::image type="content" source="./Media/RTX/Texture/rough_emerald_ore_mer.png" alt-text="The rougness mer for the emerald ore":::

With the maps being grouped in a single layer group called Roughness, you can combine multiple layers to paint multiple values without having to worry about any overlapping or interrupting work.

### Emissive

While the emerald ore block does not natively emit any light, we are going to add a low level of glow to the emeralds to showcase emission.

1. Create a new layer group by selecting the folder icon at the bottom of the **Layers** tab.
1. Name the layer group **Emissive**.
1. In Photoshop, create a new layer and name it **Emissive Map**.
1. Paint over the portions of the block with emeralds with white to make them emit light.
1. Paint over the stone with black.
1. Right-click the **Emissive** layer group and select **Blending Options**.
1. Under **Advanced Blending**, un-check the Red and Blue channels so that Green is the only one with a checkbox.
1. Select **OK** to close the **Blending Options** window.

Here is the output of the emissiveness layer only.

:::image type="content" source="./Media/RTX/Texture/emissive_emerald_ore_mer.png" alt-text="The emissive mer for the emerald ore":::

### Metallic

Finally, we will make the emerald chunks look more metallic.

1. Create a new layer group by selecting the folder icon at the bottom of the **Layers** tab.
1. Name the layer group **Metallic**.
1. In Photoshop, create a new layer and name it **Metallic Map**.
1. Paint over the portions of the block with emeralds with white.
1. Paint over the stone with black.
1. Right-click the **Metallic** layer group and select **Blending Options**.
1. Under **Advanced Blending**, un-check the Red and Blue channels so that Green is the only one with a checkbox.
1. Select **OK** to close the **Blending Options** window.

Here is the output of the metallic layer only.

:::image type="content" source="./Media/RTX/Texture/metallic_emerald_ore_mer.png" alt-text="The metallic mer for the emerald ore":::

### Export the File

With all three texture maps set up and assigned correctly, you can now export the file.

1. Select **File...Save As...** and save the file as `emerald_ore_mer.png`.

Or, you can download the file below.

:::image type="content" source="./Media/RTX/Texture/emerald_ore_mer.png" alt-text="full emerald_ore_mer png file":::

2. Place the mer file in the `textures/blocks` folder along with the Texture Set JSON file and the block texture.

:::image type="content" source="./Media/RTX/emerald_ore_night.png" alt-text="an emerald ore block glowing at night in Minecraft":::


## What's Next?

### Fog in Resources

Now that you have learned how to create your custom physically based rendering texture packs, you can take a look at how fog has been adjusted in the Render Dragon engine and customize the settings to your liking.

> [!div class="nextstepaction"]
> [Fog in Resource Packs](./FogInResourcePacks.md)