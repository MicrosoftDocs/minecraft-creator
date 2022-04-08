---
author: docsbryce
ms.author: v-bbortree
title: Getting Started with Ray Tracing
ms.prod: gaming
ms.topic: tutorial
description: "An introduction to the Ray Tracing features in Minecraft: Bedrock Edition."
---

# Getting Started with Ray Tracing

Minecraft: Bedrock Edition has cutting-edge path-traced ray tracing, enabling gamers and world builders to craft incredible new sights and immersive environments. Physically-based textures have been introduced for creating more complex and realistic (or fabulously unrealistic!) block textures. To further enhance the visual experience of RTX, creators can also define their own settings for fog via resource packs.

With these new features, creators can dramatically change the look and feel of the game. Immerse players in volumetric fog or use a cutting-edge, dynamic lighting system to make a world more vibrant.

:::row:::
    :::column:::
        :::image type="content" source="././Media/RTX/Not_Emissive.jpg" alt-text="A standard Minecraft world with no ray tracing enabled":::
        **Ray Tracing Off with Physically-Based Textures**
    :::column-end:::
    :::column:::
        :::image type="content" source="./Media/RTX/Emissive.jpg" alt-text="A standard Minecraft world with Ray Tracing enabled":::
        **Ray Tracing On with Physically-Based Textures**
    :::column-end:::
:::row-end:::

By the end of this series, you will learn:

> [!div class="checklist"]
>
> - How ray tracing can be used Minecraft.
> - How to enable ray tracing in Minecraft.
> - How to create a physically-based texture resource pack.

### Requirements

It’s recommended that you have the following when working with ray tracing in Minecraft: Bedrock Edition:

- Operating System (OS): Windows 64-bit
- GPU: DirectX hardware ray tracing capable GPU like NVIDIA GeForce® RTX 20 Series and higher, and AMD Radeon RX 6000 Series and higher
- Hardware: PC
- CPU: Intel Core i5 or equivalent
- RAM: At least 8 GB of RAM
- Minecraft: version 1.16.200 or higher

> [!IMPORTANT]
> Virtual Reality (VR) headsets and Mixed Reality (MR) headsets are not supported.


## Ray Tracing Examples in Minecraft

Ray tracing makes Minecraft look more like the real world. Rays of light shine from different sources onto block textures that can reflect, absorb, and scatter light in different ways. The result is a highly realistic depiction of the way light behaves, creating dramatic effects.

|Features  |Example  |
|:---------|:---------|
|**Sunbeams and atmospherics**  - Directional shafts of light typically occur at sunrise and sunset when sunlight passes through particles in the atmosphere or underwater.|:::image type="content" source="././Media/RTX/RT_Sunbeams.jpg" alt-text="Sunbeams shining through a shadowy rocky cavern":::         |
|**Dynamic shadows** - More realistic shadows that change as lighting conditions change.   |:::image type="content" source="././Media/RTX/RT_blobid3.png" alt-text="A sunset and a series of structures casting long and dramatic shadows":::         |
|**Ambient Occlusion** - shadows cast in corners or crevices where light rays cannot escape |:::image type="content" source="././Media/RTX/RT_blobid4.png" alt-text="Various metal blocks and how Ambient Occlusion allows for a more realistic lighting and shadow effect":::         |
|**Reflections**  - Light bounces off surfaces, both casting and picking up color as it travels. Bouncing light hits smooth surfaces and maintains a spread depending on the material. This can create diffuse reflections or very sharp ones.           |:::image type="content" source="././Media/RTX/RT_blobid5.png" alt-text="A tunnel made of gold blocks and how a single source of emitting light reflects upon the surface":::         |
|**Refraction**  - As light passes through translucent materials, it bends and bounces. The image you see may be distorted, refracted, and its color will be affected by the translucent material.  |:::image type="content" source="././Media/RTX/RT_blobid6.png" alt-text="Light shining through a series of glass blocks, each with a different result due to light placement":::         |

## Explore a Ray Tracing World in Minecraft

If you meet the minimum requirements and you are on the Windows version of the game, you can check out a ray tracing world now. Many free worlds featuring PBR and ray tracing are available in the Minecraft Marketplace, with more to come. You can find all the content supporting ray tracing in the Marketplace by selecting the blue icon.

:::image type="content" source="././Media/RTX/RT_blobid14.png" alt-text="The Minecraft marketplace where an RTX world is enabled":::

:::image type="content" source="././Media/RTX/RT_blobid15.png" alt-text="The blue icon on the marketplace downloads":::

Next, we will create  PBR textures as a resource pack and you can enable it in the downloaded ray tracing world.

## What's Next?

### Introduction to Physically Based Rendering

You will learn about each new texture map Creators can use to build and design photorealistic materials and lighting effects, and you will learn how to use texture maps to create a mirror in-game.

> [!div class="nextstepaction"]
> [Introduction to Physically Based Rendering](./RTXPBRIntro.md)

### Physically Based Rendering Tutorial

In this part, you will learn how to create physically-based textures by creating a series of texture maps for your own texture set for use on the Redstone block.

> [!div class="nextstepaction"]
> [Physically Based Rendering Tutorial](./RTXPBRTutorial.md)

### Fog in Resources

Along with ray tracing, fog in Minecraft has been updated to use a similar JSON structure that allows you to create and control its in-game appearance.

> [!div class="nextstepaction"]
> [Fog in Resource Packs](./FogInResourcePacks.md)
