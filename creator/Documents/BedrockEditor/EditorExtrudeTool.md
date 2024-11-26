---
author: v-kimjeff
ms.author: mikeam
title: Minecraft Bedrock Editor Extrude Tool
description: "An overview of the Extrude Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
---

# Editor Extrude Tool

The extrude tool is used to add or subract blocks of the same type around the cursor.

You can open the flatten tool window by pressing `Ctrl + Shift + E` or clicking the extrude tool button on the left side. 

- **Face Size**: The number of blocks around the cursor that will be extruded. This value acts as a radius based on the block face that you click - if you click the top face of a block, it will add or subtract blocks using the top face as the center of the radius. This value can range from 1 to 32.
- **Layer Count**: The number of layers that will be added or subtracted from the block that you click. This value can range from 1 to 16.
- **Contiguous Selection Type**: You can use this drop-down to set which types of blocks are added or subtracted.

To use the flatten tool to adjust the elevation of the terrain:

1. Set the **Height Threshold** and the **Layer Count** in the extrude tool window.

1. Click the block you want to add to or subtract from.

![Animation of the extrude tool.](Media/editor_extrude_tool.gif)
