---
author: iconicNurdle
ms.author: mikeam
title: Exploring Custom Block Render Distance
description: "An Advanced Tutorial Detailing the Use of Render Distance for Custom Blocks in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
ms.date: 09/09/2025
---

# Custom Blocks: Render and Distance

When creating a custom block, you have a lot of things to consider about how it is displayed in the world. One of the important ones for making it feel like a seamless integration with existing blocks is understanding how its rendering method affects render distance.

> [!TIP]
> For more about render distance, read the [Simulation Distance, Render Distance, and Ticking Areas](./SimulationRenderDistanceGuide.md) guide.

## Render method

For a full walkthrough of the functionality of the different render methods, see the [Custom Block Render Lighting](CustomBlockRenderLighting.md) step.

There are 5 render methods to choose from for custom blocks:

- `opaque`
- `double_sided`
- `blend`
- `alpha_test`
- `alpha_test_single_sided`

These methods affect the block's transparency and translucency; depending on what effect your block needs, some methods will be more appropriate than others. The render method also determines the maximum render distance that your custom block will be displayed at:

- A block using the `opaque` method is considered a "far block"; it will be rendered all the way up to the maximum render distance in ideal conditions.
- A block using any other method is considered a "near" block; it will be rendered up to _half_ the maximum render distance in ideal conditions.

By "ideal conditions," we mean not looking through an effect such as water or fog that reduces the render distance.

> [!NOTE]
> Water blocks are a special case: they use the `blend` rendering method, but are still considered a "far" block. This functionality currently can't be replicated by custom blocks.
