---
author: brian-schwartz
ms.author: brisch
title: Minecraft Bedrock Editor Primitives Tool
description: "An overview of the Primitives Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/04/2026
---

# Primitives Tool

Use the Primitives tool to preview and place large geometric shapes made from blocks. You can create cuboids, ellipsoids, cylinders, cones, and pyramids, and then adjust their dimensions, rotation, fill, and placement before adding them to the world.

## Place a primitive

1. Select the block you want to use from the hotbar or Block Picker.
1. Select **Primitives** from the tool rail.
1. Choose a **Shape** and configure its dimensions.
1. Optional: Configure rotation, a hollow shell and its thickness, or block filters.
1. Move the preview with the cursor. Left-click to anchor it, and then use the move gizmo or keyboard nudges to position it precisely.
1. Select **Place Blocks** or press **Enter**.

Large shapes are generated and placed over time. A progress dialog appears while the operation is running, and you can cancel the operation from the dialog.

> [!TIP]
> Press **Esc** or **Delete** to release an anchored preview without placing it.

## Shape limits

Primitives can contain up to 5,000,000 blocks. Dimension controls also have these limits:

| Shape | Maximum dimensions |
| :--- | :--- |
| Cuboid | 256 blocks per side |
| Ellipsoid | 256-block radius |
| Cylinder | 256-block radius and 128-block height |
| Cone | 256-block radius and 128-block height |
| Pyramid | 256-block base sides and 128-block height |

If the configured shape exceeds the total block limit, reduce one or more dimensions before placing it.

## Keyboard shortcuts

These shortcuts work while the Primitives tool is active:

| Command | Shortcut |
| :--- | :--- |
| Place primitive | **Enter** |
| Cancel anchored placement | **Esc** or **Delete** |
| Nudge forward, back, left, or right | **Arrow keys** |
| Nudge up or down | **Page Up** or **Page Down** |

For the full list of Editor shortcuts, see [Editor Hotkeys](EditorKeyboardInputs.md).
