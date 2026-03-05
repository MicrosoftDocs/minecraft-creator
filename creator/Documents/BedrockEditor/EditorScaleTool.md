---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Scale Tool
description: "An overview of the Scale Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2026
---

# Scale

Scale resizes your current selection in the world. It uses nearest-neighbor sampling to enlarge or shrink builds, preserving block types while adjusting proportions. A green bounding box preview shows the scaled result before you apply it.

## How scaling works

The Scale Tool uses fractional (nearest-neighbor) sampling in which each block position in the scaled volume maps back to a source position in the original selection. The block type at the nearest source position is used for each scaled block, and the scaled result is centered on the original selection's center point. The selection volume updates to match the scaled result after applying.

> [!TIP]
> Scaling supports undo/redo.

## Using Scale

1. Make a selection using the Selection Tool.

2. Select Scale by clicking the button in the tool rail on the left side of the Editor.

3. Toggle which axes you want to scale (X, Y, or Z).
    > [!NOTE]
    > All three axes are enabled by default. Disabling an axis locks it for that dimension.

4. Adjust the **Scale Factor** using the slider or input field. Values less than 1.0 shrink the selection; values greater than 1.0 enlarge it. A green bounding box preview appears showing the resulting size.

5. Click **Apply** to commit the scaling operation.

    > [!NOTE]
    > The scaled result replaces the original blocks. The original selection area is cleared to air first, then the scaled blocks are placed centered on the original selection's center.

### Scale limits

| Limit | Value |
| :------ | :------ |
| Minimum scale factor | 0.1 |
| Maximum scale factor | 5.0 |
| Maximum block volume | 200,000 blocks |

> [!NOTE]
> The **Apply** button is disabled and a warning is displayed if either the original selection or the scaled result exceeds 200,000 blocks. Reduce the selection size or scale factor to proceed.

## Keyboard shortcuts

For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).
