---
author: docsbryce
ms.author: v-bbortree
title: Introduction to Structure Blocks
ms.prod: gaming
description: "An overview covering what Structure Blocks are and how they are used in Minecraft: Bedrock Edition"
---

# Introduction to Structure Blocks

Structure blocks are used in Minecraft: Bedrock Edition to save and load blocks that may or may not be arranged in the form of a structure. They can be useful both as building tools and for gameplay animations. You can only edit a structure block in creative mode and they are unbreakable in survival mode and adventure mode. 

:::image type="content" source="Media/StructureBlock/structureBlocks.png" alt-text="The four structure block modes in a row":::

Like command blocks, you obtain them by using the `/give` command in the chat.

In this guide, you will learn some of the basic workflows when working with structure blocks. You will learn:

> [!div class="checklist"]
>
> - What a structure block is and what modes are available for them.
> - How to save, load, and export structures using structure blocks.

There are four structure block modes in Minecraft: Bedrock Edition:

- [**Save**](#save-mode) – Used to save a building into a structure block's memory
- [**Load**](#load-mode) – Used to load a building from a structure block's memory
- [**Corner**](#corner-mode) - Can be used to save a specific section of a structure into memory, using two blocks to define either side of the inner cube that will be saved.
- [**3D Export**](#3d-export-mode) – Exports a .glb model that can be used to 3d print a model.

## Save Mode

:::image type="content" source="Media/StructureBlock/save.png" alt-text="A structure block using save mode":::

Let's start with saving a structure into a structure block's memory. This example shows how to use the statue in the structure blocks sample and save it under a new name.


>[!Note]
> Any block with a state will have its state saved. Command blocks will have command information, chests will have their inventory, and even structure blocks will have their structure information.


:::image type="content" source="Media/StructureBlock/saveui.png" alt-text="The UI for saving with a structure block":::

1. Start in creative mode with a structure (or some chunk of the ground you particularly like).
1. Open the chat using the " / " key and give yourself a structure block by typing `/give @s structure_block`.
1. Right click the structure block.
1. Input the following information about the structure you are saving:
    - Structure Name: Input a name for the structure that will be used to load it later.
      - Make this memorable and (we advise) short.
      - Use only lowercase letters, numbers, underscores, and hyphens in the name.
      - Structures can use a namespace, which could be the name of your team or product. The default namespace is mystructure. The "minecraft" namespace is reserved for vanilla resources, so you should only use "minecraft" if you are overwriting vanilla content.
   - Structure Size: Enter X Y Z coordinates to capture the dimensions of the structure. The maximum values are 64 blocks x 384 blocks x 64 blocks.
   - Relative Position: Select portions of the structure starting the input away from the structure block. A wireframe will appear when you input numbers into the XYZ box.
   - Detect structure size and position: Use [corner mode](#corner-mode) to detect the structure's size and position. This is used in place of Structure Size and Relative Position.
   - Remove Blocks: Removes all blocks and only captures the entities within the structure block.
   - Waterlog Blocks - Allows all blocks in a structure to be properly waterlogged when being placed under water.
   - Include entities – Saves any entities like animals or mobs that may be present in the bounding box.
   - Redstone save mode – Save in memory or Save to disk.
     - Save in Memory is faster, but doesn't permanently save a structure. This is the more common way to save.
     - Save to Disk is slower, but saves the structure to be used in different play sessions.
2. Select Save.

Great! Our structure is saved. Let's use a new structure block to load it into a different location, perhaps by a lovely waterfall.

## Load Mode

:::image type="content" source="Media/StructureBlock/load.png" alt-text="A structure block using load mode":::

Now let's load that statue back in.

1. Place a structure block.
1. Right click the structure block and change mode to Load.
1. Input the following information about the structure you are saving:
   - Structure Name: Enter the saved structure and click the load button to see a preview.
   - Offset: Move the structure block to where you'd like to load in the structure. Be sure to account for any ground that may have been copied over.
   - Remove blocks: Loads a structure without its blocks. This can be used to load entities from a saved structure. 
   - Structure Integrity and Seed: Create a dilapidated effect by removing a percentage of blocks. Copy the seed to always generate a structure dilapidated in the same way. 
   - Rotation: Rotate the structure 0,  90, 180, or 270 degrees when placing it. 0 degrees is the default. 
   - Mirror: Mirrors objects across horizontal and vertical axis. Awesome for buildings with symmetry.
   -  Animation mode: Load the blocks in layer by layer or one block at a time using the structure block. This can be used in gameplay.
   -  Animation time: Define how quickly the animated structure loads in.
   -  Show Bounding Box: Shows the volume of the structure that will be loaded. 
1.  Click Load.
  
  
Enjoy your new structure in a new place.

## Corner Mode

:::image type="content" source="Media/StructureBlock/corner.png" alt-text="A structure block using corner mode":::

Corner mode makes it simpler to select a structure by surrounding the structure and then selecting the volume within the corner mode structure blocks. You can use two or more structure blocks to define a shape that encapsulates the blocks you wish to save.

1. Place a structure block in corner mode outside of one of the structure's sides. Remember the name you use to save it.
1. Place another structure block in corner mode on the opposite side of the structure with the same name.
1. Place a third structure block and select Save Mode.
1. Enter the name used in the two corner mode structure blocks.
1. Then Detect the sizing in save mode. All blocks must have the same name and have at least 1 block between them to detect the structure. 

:::image type="content" source="Media/StructureBlock/statueWaterfall.png" alt-text="A statue surrounded in corner mode structure blocks.":::


## 3D Export Mode

:::image type="content" source="Media/StructureBlock/3d.png" alt-text="A structure block using 3D Export mode":::

Export mode can be used to create a .glb file that will be usable in behavior packs or a file that can be used to 3D print a Minecraft structure.

To export a 3D file, follow these steps:

1. Structure Name: Enter a name for the structure using only lowercase characters.
2. Relative Position: Select the origin of the structure outline. You can select portions into the ground.
3. Structure size: set distance from relative position to build that cube in space in Minecraft.
4. Remove blocks: Don't use inner blocks.
  - This is what you'd choose for a 3D printed item or when creating 3D visuals in the classroom.

## What's Next?

Now we have seen a behavior pack in action, you can learn more about how they work and what else you can do with them. Use structure blocks to save and load structures, learn the `/structure` command, and even learn a simple animation using a command block in the tutorial.

> [!div class="nextstepaction"]
> [Structure Blocks Tutorial](structureblockstutorial.md)

To see examples of structures, check out the Minecraft [Structure Blocks Behavior Pack Samples](https://github.com/microsoft/minecraft-samples/blob/main/structure_blocks_sample_behavior_pack/README.md).
