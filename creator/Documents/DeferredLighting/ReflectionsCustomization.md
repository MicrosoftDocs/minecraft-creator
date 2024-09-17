---
author: iconicNurdle
ms.author: mikeam
title: Reflections Customization
ms.topic: tutorial
description: "Reflections Customization section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Reflections Customization

Minecraft Bedrock **1.21.20.22+** Previews further enhance the reflections available in Deferred Technical Preview worlds by adding Screen-Space Reflections (SSR). Between IBL-based Sky Reflections and SSR, the majority of surfaces will be able to convey convincing reflections, whether under ground, above ground, in the Nether, etc... Note that certain scenarios, such as reflecting off-screen objects or first-person mirrors are still not possible. Furthermore, with the exception of water, transparent geometry, such as glass, will not receive SSR.

SSR currently provides only mirror-like reflections. In order to preserve the look of rougher materials, the application of SSR begins to fade at roughness values greater than 0.3 (i.e., ~76/255), and SSR is not applied at all for roughness values greater than or equal to 0.4 (i.e., 102/255).

Creators can make use of the Roughness and Metalness parameters in Texture Sets to control how different materials elicit reflections. Default PBR values for blocks, actors and particles defined in the global lighting JSON will also impact this property for blocks/actors/particles with no Texture Set.
