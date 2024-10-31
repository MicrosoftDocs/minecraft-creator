---
author: iconicNurdle
ms.author: mikeam
title: Exploring Custom Block Render Distance
description: "An Advanced Tutorial Detailing the Use of Render Distance for Custom Blocks in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Custom Blocks: Render and Distance

When creating a Custom Block you have a lot of things to consider about how it is displayed in the world. One of the important ones for making it feel like a seamless integration with existing blocks is getting the right render distance. 

If you're making a new crop you want it to stay visible as long as the existing vanilla crops do. To be able to control the render distance we first need to understand the relationship between render method and render distance. 

## Render Method

For a full walkthrough of the functionality of the different render methods, see the [Custom Block Render Lighting](CustomBlockRenderLighting.md) step. 

There are 5 render methods to choose from for custom blocks:

- opaque 
- double_sided 
- blend 
- alpha_test 
- alpha_test_single_sided

Each has its special functionality that could make it the right choice based on the level of transparency and translucency that you are trying to achieve for your block. 

The render method is also what determines the render distance where a block will be displayed. 

Use this table to find see the values for each of these under "perfect" conditions. We call it perfect because these values can skew if we are looking through something that could effect how ideal the scenario is, such as water or fog, that can effect the render distance of blocks independently. 

| Groups | Render Methods | Render Distance Start (from player) | Render Distance End (from player) |
|:----|:----|:----|:----|
| Far | opaque | Render Distance / 2  | Render Distance |
| Near | double_sided, blend, alpha_test, alpha_test_single_sided | 0 | Render Distance – Far Render Distance Start |

Far blocks are also rendered in the near group, so there isn't a gap where far blocks aren't visible. 

### Blend Exceptions 

For Vanilla blocks, water is a special case. It can be inserted into the far group even though it uses a blend texture. This can't be currently replicated through Custom Blocks. 
