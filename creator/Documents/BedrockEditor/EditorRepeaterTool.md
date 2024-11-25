---
author: v-kimjeff
ms.author: mikeam
title: Minecraft Bedrock Editor Repeater Tool
description: "An overview of the Repeater Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
---

# Editor Repeater Tool

The repeater tool is used to repeat a selection of blocks in a repeating pattern across a volume. You can use this tool to make repetetive block placement easier. 

You can open the repeater tool window by clicking the repeater tool button on the left side.

- **Spacing**: The size of the area between each repetition your block selection. If you leave the value for an axis at 0, the selection will not repeat along that axis. For example, if you set an X value, but leave the Y and Z axes at 0, the selection will repeat along the X axis for the number of repetitions that you specified, but it will not repeat along the Y or Z axes. The maximum value for each axis is the size of your world, but keep in mind that setting very high values will cause the editor to work slowly.
- **Repetitions**: The number of times this pattern should repeat across the specified axes.  

To use the repeater tool to create patterns of blocks:

1. Use the selection tool to select the group of blocks that you want to repeat.

1. Set the **Spacing** and **Repetitions** in the repeater tool window.

1. Click **Apply**.

![Animation of the repeater tool.](Media/editor_repeater_tool.gif)
