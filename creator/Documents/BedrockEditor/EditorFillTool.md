---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Fill Tool
description: "An overview of the Fill Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 05/16/2025
---

# Fill Tool

Use Fill to replace a selection with the block type selected in the Block Picker.

You can open the fill tool window by clicking the fill tool button on the left side of the Editor. 

- **Area Limit**: The number of blocks around the cursor that will be replaced in all directions. This value can range from 1 to 16.

To use the fill tool to replace blocks with another block type:

1. Select the Fill tool from the toolbar on the left of the Editor.

2. Choose the **Area Limit** in the fill tool window.

3. Use the Block Picker to choose the type of block you want to replace the terrain with.

4. Click a block to replace the blocks around it with your selected block type.

    > [!Note]
    > Only contiguous blocks of the same type will be replaced. For example, if you click a stone block to replace, all of the stone blocks within the area limit will be replaced with your selected block type. If there are any iron ore blocks within the area limit, they will **not** be replaced.

    ![Animation of the fill tool.](Media/editor_fill_tool.gif)
