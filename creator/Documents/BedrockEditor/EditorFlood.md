---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Flood
description: "An overview of the Flood Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2026
---

# Flood Tool

The Flood Tool fills areas of your world with water or lava. Click a surface block to place a water level indicator, then raise or lower it to control the fluid height. The tool uses a breadth-first search to calculate which blocks the fluid will reach, respecting terrain boundaries and block-level waterlogging.

## Using Flood

1. Select Flood by clicking the button in the tool rail on the left side of the Editor.
    > [!TIP]
    > Pressing **Ctrl+Shift+F** also switches to the Flood Tool.

2. Choose a **Fluid Type** (Water or Lava) in the tool settings pane.
    ![Flood selected](../BedrockEditor/Media/flood/flood1.png)

3. Click a surface block in the world. An air block above a solid block is required to place the water level indicator. A gizmo widget appears at the clicked location showing the current flood level.
    ![Flood widgit](../BedrockEditor/Media/flood/floodwidgit.gif)

4. Use **Page Up** and **Page Down** to raise or lower the water level indicator. The tool recalculates the flood area each time you adjust the level.
    ![Flood size adjusted](../BedrockEditor/Media/flood/floodpgs.gif)

    > [!NOTE]
    > A bounding box visualization shows the calculated flood extent. If the boundary turns yellow, the 120,000-block limit has been reached and some area may be excluded. Enable **Ignore Block Limit** to override this restriction.

5. Press **Ctrl+F** or click **Apply Flood** to commit the flood. A progress dialog shows the operation status.
    ![Flooded with lava](../BedrockEditor/Media/flood/floodlava.gif)

    > [!NOTE]
    > The flood operation supports undo. If you need to revert, use the standard undo command.

## Limits

|Limit|Value|
|:------|:------|
|Maximum flood size|120,000 blocks|
|Flood region extent|1,024 blocks in each direction from the origin|

## Keyboard shortcuts

For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).

> [!NOTE]
> The following commands only work while the Flood Tool is active.

| Command | Shortcut |
| :-------- | :--------- |
| Activate Flood Tool | **Ctrl+Shift+F** |
| Raise water level | **Page Up** |
| Lower water level | **Page Down** |
| Delete water level indicator | **Ctrl+D** |
| Apply flood | **Ctrl+F** |
