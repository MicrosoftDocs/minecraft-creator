---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Tutorial
description: "A step-by-step guide for using Minecraft Editor"
ms.service: minecraft-bedrock-edition
ms.date: 05/05/2025
---

# Editor Tutorial

This tutorial is intended to guide you through using Minecraft Bedrock Editor to accomplish a variety of tasks. Before you begin, you should know how to launch Editor, create a project, move around, and switch between the two modes.

> [!IMPORTANT]
> The Editor is in preview and we're working to add more capabilities.
> It will change significantly as we get feedback from creators like you.
> Also, the images of Editor in this document might vary a little from what you have on your screen.

## Requirements

To get started, you need the following:

- A Windows 10 (or higher) computer with Minecraft Bedrock Editor
- Keyboard and mouse

> [!IMPORTANT]
> Editor is not available on mobile.

It's recommended that the following be completed before beginning this tutorial.

- [How to Get Minecraft Bedrock Editor](EditorInstallation.md)

- [Bedrock Editor Overview](EditorOverview.md)

In this tutorial, you're going to learn how to build the Arc de Triomphe and instantly duplicate the structure to edit a world at massive scale. You'll only need two types of quartz block and a block of your choice to use as a visual guide.

> [!VIDEO https://www.youtube.com/embed/LyumuBINeCc]

## Make the monument
1. Launch Minecraft Editor and find a relatively flat spot in the world.

2. Use the Selection tool to delete a large rectangle of terrain where you want to put the Arc de Triomphe. Make sure you delete an area of at least 99 x 99 to provide enough space for the final structure you'll build.
![Excavate some space for the monument](media/ArcScreenshots/EditorClearingSpace.png)

3. Use the Selection tool to create a 23 x 30 x 23 rectangular prism.
![Rectangular prism selection](media/ArcScreenshots/RectangularPrism.png)

4. Double-click a block on the block picker and choose a quartz block, then press **CTRL**+**F** to fill the selection.

5. Change your target to Adjacent if it's not already, then select the top of one of the corner blocks of the monolith.
![Select a corner block](media/ArcScreenshots/CornerSelect.png)

6. **CTRL** + click the corner block diagonal from the one you selected in the last step, then expand the selection one block along the X and Z axes on both corners. Fill the selection.
![Expanding x / z axes](media/ArcScreenshots/ExpandCornersTop.png)

7. Select the top of the monument's corner block and use the Repeater to create a grid that repeats 12 times along the X and Z axes only.
![Grid repeat on top of monument](media/ArcScreenshots/GridRepeatTop.png)

8. Change the X and Z axis spacing to 2, then place the selection.

9. Use the Selection tool to delete all but the outermost repeated blocks, creating a border around the top of the monument.
![Finishing the border](media/ArcScreenshots/CompleteTop.png)

10. (Optional) Select a line of 12 blocks from the bottom corner towards the center with a different block type of your choosing. Repeat the process vertically from the horizontal center point of the monument to mark the center block.
![Create a visual guide](media/ArcScreenshots/VisualAid.png)

11. (Optional) Select and copy the blocks that make up the guides and use Paste Preview to rotate and copy the selection on all four faces of the monument.

12. Use the Block Picker to choose quartz stairs.

13. Use the Selection tool and change your target to Adjacent to select the corner block beneath the overhang at the top of the monument.

14. Double-click the selected block and drag the blue slider horizontally to the opposite corner, then press **CTRL**+**F** to fill the selection.
![Place the row of stairs](media/ArcScreenshots/PlaceStairs.png)

15. Use the Workbench to hover over the stairs and **SHIFT**+**CTRL**+**CLICK** to properly orient them.

16. Copy the stairs and use Paste Preview to place a row of stairs at the bottom and near the center of the monument face.

17. Use the Workbench to hover over the bottom row of stairs and **SHIFT**+**CTRL**+**CLICK** to properly orient them.

18. Use the Selection tool and change your target to Block to select and copy the three rows of stairs you just placed.

19. Use Paste Preview to copy the selection to the opposite face, then rotate the selection 90 degrees to repeat the process on the remaining two faces.

## Carve the arc
1. Choose the Brush and select a uniform cylinder brush with a height of 12.
![Cylinder brush tool](media/ArcScreenshots/ExtrudeCylinder.png)

2. Use the Extrude tool to select Decrease Extrusion, then **CTRL**+ **CLICK** a monument face. Align the top of the preview with where you want the arc's apex to be.
![Extrude Preview](media/ArcScreenshots/ExtrudePreview.png)

3. Use the Selection tool to make a rectangle that extends to the bottom of the monument, then drag the slider through the monument to the opposite face.
 
4. Press **DELETE** to clear the rest of the blocks and complete the arc.
![Complete the arc](media/ArcScreenshots/CompleteArc.png)

5. Repeat steps 2-4 on the other faces. You'll need to change the axis of extrusion.

## Add some detail
1. Use the Block Picker to select quartz blocks, then use the Selection tool with your target set to Adjacent and place a rectangle that fills the space above the arc.

2. Switch your target to Block, then select and delete the interior quartz blocks of your new rectangle to create a border.
![Detail border above arc](media/ArcScreenshots/SideDetail1.png)

3. Set your target back to Adjacent, then place a border in one of the spaces on either side of the arc. 
![Detail border beside arc](media/ArcScreenshots/SideDetail2.png)

4. Copy the smaller border and use Paste Preview to paste it on the other side of the monument.

5. Set your target to block and select all three borders, then use Paste Preview to place the selection on the remaining three faces.
![Three borders selected](media/ArcScreenshots/CopyDetail1.png)

6. Use the Brush to select Single Block and set your target to Adjacent, then add details inside the borders of your Arc De Triomphe.
![Final details with single block brush](media/ArcScreenshots/FinalArcDeTriomphe.png)

## What's Next?
Select the entire structure, then use the Repeater to build at a massive scale!

