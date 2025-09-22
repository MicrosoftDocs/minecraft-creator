---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Ruler Tool
description: "An overview of the Ruler Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/08/2025
---
# Ruler Tool

The Ruler is a quick way to measure the distance, in blocks, between two points in the world. You can place a start and end point, see their coordinates, view a line between them with a midpoint label, and read the length in blocks. Points can be edited by dragging or by typing precise coordinates.

![Ruler tool used to measure the distance between two points](media/GIFs/Ruler.gif)


## Placing and editing points

1.	Select the Ruler by clicking the button on the left side of the Editor.

    > [!Tip]
    > Pressing **Ctrl+Shift+R** also switches to Ruler.

2.	Use the cursor to select the starting point of the distance you want to measure.

3.	Navigate to the end point you want to measure and click it to reveal the distance. The Ruler’s measurement field will display the coordinates of the Start (S) and End (E) points, the line's Depth (D), and the total Length (L) of the line.
    > [!NOTE]
    > Length is reported in blocks using inclusive counting along axes (suitable for build measurements).

4.	Click anywhere to deselect the measurement.

You can also manage more than one measurement line at a time. Simply select all the points you wish to manage to act on them together or delete the selected line(s) without clearing everything.


## Keyboard shortcuts

These shortcuts are available when working in the Editor. For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).
> [!NOTE]
> Actions that operate on the Ruler are most useful when the Ruler tool is the active tool. 

|Command |Shortcut |
|:-------|:-------|
|**Global and common**:|
| Toggle Ruler|**Ctrl** + **Shift** + **R**|
|Select/Deselect all|**Ctrl** + **A**|
|Delete selected lines|**Delete**|
|**Mouse and selection**:||
|Set start or end point|Left‑click|
|Move the measuring mark|Drag selected point|


## Tips
- Use typed coordinates in Start/End fields for exact placement (values snap to whole blocks).
- Use the Clear Ruler button in the pane to reset all measurements at once.
- To reselect and move a point click a point, select it and drag the gizmo to reposition it; the line and distance update in real-time.
- To deselect a point, click in empty space or use the corresponding selection commands.


