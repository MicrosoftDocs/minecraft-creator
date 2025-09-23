---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Line Tool
description: "An overview of the Line Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/02/2025
---

# Line Tool
Use the Line tool to quickly draw borders, outlines, and other line-based shapes in your world.

![Line Tool in Action](media/GIFs/LineTool.gif)


## Algorithms

![Direct algorithm options](media/LineScreenshots/LineTool.png)

-	### Direct
    Draws a straight line from your Start to End point.

-	### StaggeredCountour
    Draws a zig-zag line from your Start to End point.
    > [!NOTE]
    > Surface Contour is always enabled when using a Staggered Algorithm.


## Line Weight: 

The Line Weight sliders let you adjust line thickness vertically and horizontally from 1 to 5. When you select Uniform Line Weight, the Editor compresses the sliders into a single option and applies the same value to both horizontal and vertical thickness.

Line Weight sliders can be adjusted by dragging them with the mouse or pressing Shift+Up/Down/Left/Right keys.  Up/Down increases/decreases the Vertical Thickness, while Left/Right increases/decreases the Horizontal Thickness.

> [!NOTE]
> The line grows in the positive axis direction when the weight is an even number, and in the negative axis direction when the weight is an odd number.


## Quick Actions

-	### Fill 
    Fills the selection with the block selected in the Block Picker.

-	### Delete
    Deletes the blocks within the line selected.

-	### Add to Selection
    Adds the current line preview to your selection.


-	### Clear Selected
    Removes the selected line, resetting the cursor.


-	### Clear All
    Removes all items from the curent selection, resetting the cursor.


## Cursor Settings

![Cursor Settings](media/SelectionScreenshots/CursorSettings.png)

### Input Modes

- **Keyboard Only**

    Uses the directional keys to move the cursor around the world. The mouse and W, A, S, and D keys are still used to move and look around the world, but they're not involved in selecting a block.

- **Mouse & Keys**

    Selects blocks based on the location of the cursor. You can click and drag the mouse to create an initial selection larger than one block, and you can use either Gizmos or the Keyboard to adjust your initial selection.

- **Fixed Distance**

    Selects blocks, air, or a combination of both, based on your Selection Settings, at a fixed location at the center of the Editor screen. You can use the scroll wheel on the mouse to increase or decrease the distance between you and the selection cube.
    
    > [!TIP]
    > Fixed distance is the easiest mode to use if you want to select only air blocks.

### Target

- **Block**

    Selects the block you highlight with the cursor.

- **Adjacent**

    Selects the air next to, above, or below solid blocks that you highlight with the cursor.


## Integrated mouse functionality

You can add new line segments by simply clicking where you'd like to place them. Holding **Ctrl** while you click around the world lets you create detatched points that have gizmos you can use to create new lines.

When multiple points are selected, you can click and drag with the mouse or use the hotkeys (**Ctrl+Shift+Up/Down/Left/Right/PgUp/PgDown**) to move the entire selection.

  > [!NOTE]
  > You can place up to 80 points at one time. Line segments between any two points must be under 100 blocks long.


 
## Hotkeys

|Command  |Shortcut  |
|:-------|:---------|
| Toggle line tool | **Ctrl+L** |
| Clear all points | **Ctrl+Backspace** |
| Clear selected | **Ctrl+Shift+Backspace** |
| Fill selected |  **Ctrl+F**|
| Delete selected | **Delete** |
| Add to selection | **Alt+S** |
| Adjust line thickness | **Shift+Up/Down/Left/Right**
| Select all points | **Ctrl+A** |
| Undo | **Ctrl+Z**|
| Redo | **Ctrl+Y** |

Check out [Keyboard Inputs](EditorKeyboardInputs.md) for a complete list of Editor keyboard shortcuts.
