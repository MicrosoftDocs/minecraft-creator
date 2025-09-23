---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Fill Tool
description: "An overview of the Fill Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/08/2025
---

# Fill Tool

Smart Fill quickly replaces a connected region of blocks with the block type currently selected in the Block Picker. Click a block to “seed” the fill; all contiguous blocks of the same type near that seed are replaced within the size limit you set.

> [!TIP]
> Selecting Air in the Block Picker lets you carve out regions by replacing matched blocks with air.

You can open the fill tool window by clicking the fill tool button on the left side of the Editor. 


## Using the fill tool
1. Select Fill from the tool rail on the left of the Editor.

2. Choose the **Area Limit** in the fill tool window and decide whether or not to Restrict to Selection.
    > [!NOTE]
    > Area Limit sets the maximum reach of Smart Fill in all directions around the clicked block. Range: 1–16. When Restrict to Selection is enabled, only blocks inside your current Selection are filled. Fills operate in 3D and dissimilar blocks or boundaries 
    halt the spread.

3. Use the Block Picker to choose the type of block you want to replace the terrain with.

4. Click a block to replace the blocks around it with your selected block type.

    > [!NOTE]
    > Only contiguous blocks of the same type will be replaced. For example, if you click a stone block to replace, all of the stone blocks within the area limit will be replaced with your selected block type. If there are any iron ore blocks within the area limit, they will **not** be replaced.

    ![Animation of the fill tool.](Media/editor_fill_tool.gif)


## Keyboard shortcuts

Some Action Bar items have default shortcuts. For the full list, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).

|Command |Shortcut |
|:-------|:-------|
|Quick Fill selection (without opening the tool)|Ctrl+F |

> [!NOTE]
> The action executed by **Ctrl**+**F**  depends on the active tool mode. The shortcut is also used in other modes (for example, to fill line in the Line tool or to paste at cursor in Paste Preview). 