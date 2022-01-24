---
author: v-josjones
ms.author: v-josjones
title: "Ray Tracing in Minecraft: Bedrock Edition"
ms.prod: gaming
ms.topic: tutorial
description: "An overview to the Ray Tracing features in Minecraft: Bedrock Edition"
---

# Ray Tracing in Minecraft: Bedrock Edition

In June of 2020, Minecraft released an update (1.16.200) for Windows that added exciting new features to the game. As apart of this update, Minecraft introduced the following features;

- The Render Dragon graphics engine.
- New ray tracing lighting technology.
- Physically-based rendering (PBR) system.
- NVIDIA DLSS for supported hardware.

With these new features, players can dramatically change the look and feel of the game. Immerse yourself in volumetric fog. Utilize a cutting-edge, dynamic lighting system to use for Ray Tracing. Players can also experience advanced kinds of block textures, including metallic surfaces, bump maps, normal maps, and light emission.

By the end of this guide, you will learn:

> [!div class="checklist"]
>
> - What is Render Dragon and how Ray Tracing works.
> - The different lighting features enabled by Render Dragon.
> - How to experience Ray Tracing in Minecraft.

### Requirements

In order to view Ray Tracing content, you will need the following;

- The Hardware requirements mentioned in [Getting Started - Ray Tracing](../RTX_GettingStarted.md)
- A resource pack with PBR materials.

You can download the following Resource Pack from NVIDIA located [here](https://images.nvidia.com/content/minecraft-with-rtx-beta-resource-packs/nvidia-pbr-example-texturesets-pixelart-feb-2-2021-final.mcpack). Double-click on the .mcpack file to install it to Minecraft.

## Render Dragon

Render Dragon is the new graphics engine for Minecraft Bedrock platforms. Render Dragon was developed by the Mojang Studios graphics team to give our game greater performance, stability, and flexibility. The new architecture of Render Dragon enables our developers to bring new graphics features such as physically based rendering (PBR) and ray tracing to the game.

Render Dragon has been available for Xbox and PlayStation hardware since 2019, and we are now bringing it to Windows. We plan to bring Render Dragon to all Minecraft Bedrock platforms, including mobile.

## What is Ray Tracing

Ray tracing is a series of computer rendering techniques that bring more realistic lighting to scenes. In traditional computer rendering (or “rasterization”), lighting information is provided by objects in the scene.

In contrast, ray tracing behaves more like lighting in the real world – rays of light are shone into a scene, and lighting information is collected as those rays bounce, absorb, and scatter around objects in the world. The result is a highly realistic depiction of the way light behaves, creating dramatic effects such as:

|Features  |Example  |
|:---------|:---------|
|**Sunbeams and atmospherics**  - Directional shafts of light typically occur at sunrise and sunset when sunlight passes through particles in the atmosphere or underwater.|:::image type="content" source="../Media/RT_Sunbeams.jpg" alt-text="Image showcasing sunbeams shining through a shadowy rocky cavern":::         |
|**Dynamic shadows** - More realistic shadows that change as lighting conditions change.   |:::image type="content" source="../Media/RT_blobid3.png" alt-text="Image showcasing a sunset and a series of structures casting long and dramatic shadows":::         |
|**Ambient Occlusion** - shadows cast in corners or crevices where light rays cannot escape |:::image type="content" source="../Media/RT_blobid4.png" alt-text="Image showcasing various metal blocks and how Ambient Occlusion allows for a more realistic lighting and shadow effect":::         |
|**Reflections**  - Light bounces off surfaces, both casting and picking up color as it travels. Bouncing light hits smooth surfaces and maintains a spread depending on the material. This can create diffuse reflections or very sharp ones.           |:::image type="content" source="../Media/RT_blobid5.png" alt-text="Image showcasing a tunnel made of gold blocks and how a single source of emitting light reflects upon the surface":::         |
|**Refraction**  - As light passes through translucent materials, it bends and bounces. The image you see may be distorted, refracted, and its color will be affected by the translucent material.  |:::image type="content" source="../Media/RT_blobid6.png" alt-text="Image showing light shining through a series of glass blocks, each with a different result due to light placement":::         |

## How to Experience Ray Tracing in Minecraft

If you meet the minimum requirements and you are on the Windows version of the game, you can experience ray tracing in Minecraft in one of two ways;

1. Download ray tracing enabled packs in the Minecraft Marketplace.
   1. Many free worlds featuring PBR and ray tracing are available in the Minecraft Marketplace, with more to come.
   1. You can find all the content supporting ray tracing in the Marketplace by selecting the blue icon.
   :::image type="content" source="../Media/RT_blobid14.png" alt-text="image showing the minecraft marketplace where an RTX world is enabled":::
   :::image type="content" source="../Media/RT_blobid15.png" alt-text="Image showcasing the blue icon on the marketplace downloads":::
1. Create your own PBR textures and sideload them into the game.
   1. The .mcpack located in the Requirements section is a PBR texture pack that will enable Ray Tracing when added to a world.
   1. Creating a PBR texture will be covered in the PBR guide listed below.

## What's Next

Now that you know how Ray Tracing can enhance your Minecraft experience, you can view a list of Ray Tracing Worlds provided by NVIDIA by visiting their website here. Alternatively, if you are ready to learn more about how to create your own Physically Based Rendered Texture Pack, click on the button below to learn more.

> [!div class="nextstepaction"]
> [Physically Based Texture Guide](RTX_PBRTexturingGuide_Intro.md)
