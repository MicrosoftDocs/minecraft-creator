---
author: JimSeaman42
ms.author: mikeam
title: Create a Custom Die Block
description: "A tutorial for creating custom blocks in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Custom Blocks Part 1: The Simplest Block

Minecraft's behavior packs and resource packs allow you to create amazing custom content for the game. Custom blocks are an excellent way for creators to start adding interactive content. Through this tutorial, you will build a custom die block (don't be scared, that just means a singular dice!) that has different textures and can be placed in the world by a player.

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock1.png" alt-text="Image of player tossing a custom die block into the air.":::

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to use JSON to define a new block.
> - How to assign textures to a new block.
> - Some of the behaviors and components that blocks can access.
> - What .lang is and how it's used for in-game text.

### Prerequisites

It is recommended that the following be completed before beginning this tutorial:

> [!VIDEO https://www.youtube.com/embed/95D8cNebCwM]
*This video is an excellent way to quickly get up to speed*

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction to Resource Packs](ResourcePack.md)
- [Introduction to Behavior Packs](BehaviorPack.md)

You will also need the following:

- Download the [Vanilla resource pack](https://aka.ms/resourcepacktemplate)

### Creating Custom Blocks with Resource and Behavior Packs

> [!VIDEO https://www.youtube.com/embed/v367NxR2ZsE]
*We even have a video for you to follow if that's your preference!*

You will be making changes in both a resource pack and a behavior pack to get custom looks and behavior for each custom block you will be creating. Here is the file structure we'll follow for this tutorial:

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock2.png" alt-text="Image of file structure for a completed custom block":::

Imagine that the behavior pack contains all of the information about a block's behavior. The behavior pack will contain the <custom_block>.json file that specifies components that give a block specific behaviors such as friction, flammability, desctructibility, and more. Components can also control some visual elements such as geometry, materials, render methods, and lighting.

>[!Note]
> If components are given in the behavior pack to control the visual properties of a block, they will override the visual properties specified for that block in the blocks.json file. That's why blocks.json becomes optional once you start relying on behavior packs more heavily.

In this tutorial, however, we will be making a fairly simple custom block. We will be using blocks.json to specify the visual properties of the block, and we will not be using any components. While it is recommended to complete this tutorial before moving forward, there is also a tutorial on using components called [Advanced Custom Blocks](AdvancedCustomBlocks.md).

Let's create a custom die block with six different sides that is a different color in hand. Small customizations like this can make a block feel more unique to players.

## Behavior Pack

### Create a behavior pack

We'll begin by creating a behavior pack for the custom block:

1. In **File Explorer**, navigate to the **com.mojang** folder.
1. Open the **development_behavior_packs** folder.
1. Create a folder and name it **custom_block_behavior_pack**.
1. Open the **custom_block_behavior_pack** folder, and create a text file.
1. Rename the text file **manifest.json**.
1. Open **manifest.json** in a text editor.
1. Copy the code below into the **manifest.json** file.
1. Get new UUIDs from UUIDgenerator.net.

```json
{
 "format_version": 2, 
 "header": { 
  "description": "This is a behavior pack used to demo components!", 
  "name": "Demo Behavior Pack", 
  "uuid": "<UUID>", 
  "version": [ 1, 0, 0 ], 
  "min_engine_version": [ 1, 19, 20 ] 
 }, 
 "modules": [ 
  { 
   "description": "Demo Behavior Pack", 
   "type": "data", 
   "uuid": "<UUID>", 
   "version": [ 1, 0, 0 ] 
  } 
 ], 
 "dependencies": [ 
  { 
   "uuid": "<Resource Pack UUID>", 
   "version": [ 1, 0, 0 ] 
  } 
 ] 
}
```

Now, let's create the custom block behavior JSON file in the behavior pack.

1. Inside the **custom_block_behavior_pack** folder, create a folder and name it **blocks**.
1. Open the **blocks** folder.
1. Inside the **blocks** folder, create a text document and name it **die.json**.
1. Open **die.json** in a text editor.

### Create the behavior custom block json file

In the file, you will need to define what the block is, similar to the `manifest.json` file.

1. Copy and paste the following code into your **die.json** file:

```json
{ 
  "format_version": "1.19.30", 
  "minecraft:block": { 
    "description": { 
      "identifier": "demo:die" 
    }, 
    "components": { 
    } 
  } 
} 
```

2. Save the file.

Custom block files have several requirements for them to be functional:

- **format_version** should be the latest, in case any components change in the future.
- **minecraft:block** is the block definition, which contains the "description" and "components" sections of a block.
- The **description** object requires an identifier with a namespace, separated by a colon. In this case, the namespace is "demo" and the identifier is "die".
- A **components** section contains the components that describe the block's behavior.

There are several components you may choose to use in custom blocks. To learn more, view the [full list of custom block components](../Reference/Content/BlockReference/Examples/BlockComponents/BlockComponentsList.md) in the reference documentation. For now, we'll leave the die block with only the identifier.

## Resource Pack

Now that you've set up the custom block json file in the behavior pack, it's time to include the resources Minecraft will need to create the block: Textures, names, and even a fun sound.

### Create a resource pack

We will begin by creating a resource pack for the custom block:

1. In **File Explorer**, navigate to the **com.mojang** folder.
1. Open the **development_resource_packs** folder.
1. Create a new folder named **custom_block_resource_pack**.
1. Inside the **custom_block_resource_pack** folder, create a **manifest.json** file.
1. Open the **manifest.json** file in a text editor.
1. Copy the code below into the **manifest.json** file.
1. See the [Introduction to Behavior Packs Tutorial](BehaviorPack.md) to learn how to use UUIDs to create the dependency of this behavior pack on the resource pack, and get any new UUIDs from UUIDgenerator.net.

```json
{ 
 "format_version": 2, 
 "header": { 
  "description": "This is a resource pack used to demo components!", 
  "name": "Demo Resource Pack", 
  "uuid": "<UUID>", 
  "version": [ 1, 0, 0 ], 
  "min_engine_version": [ 1, 19, 20 ] 
 }, 
 "modules": [ 
  { 
   "description": "Demo Resource Pack", 
   "type": "resources", 
   "uuid": "<UUID>", 
   "version": [ 1, 0, 0 ] 
  } 
 ] 
} 
```

### Set the block name with .lang

Let's add the name of the block using a **.lang** file. '.lang' files are used to organize all custom text within an Add-On in a single location, and to localize creator content.

1. Inside the **custom_block_resource_pack** folder, create a folder and name it **texts**.
1. Open the **texts** folder.
1. Inside the **texts** folder, create a new text document and name it **en_US.lang**.
1. Open **en_US.lang** in a text editor.
1. Copy and paste the following into **en_US.lang**: `tile.demo:die.name=Die`
1. Save and close the file.

This code sets the name of the block to `Die` in the game.

### Save the custom block textures

The die block texture will need to be created and placed in the Resource Pack. When creating your own custom textures, make sure they are 16x16 for custom blocks not using custom geometries.

These were made in paint and are 16x16 pixels. There are 7 images because it's a die block (6 sides) plus red for the in-hand texture.

In terms of naming conventions, the image that shows the '1' side should be named 'die_1' and so on, while the in-hand image should be named 'die_red'

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock3.png" alt-text="Side 1 of 7 die sides.":::

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock4.png" alt-text="Side 2 of 7 die sides.":::

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock5.png" alt-text="Side 3 of 7 die sides.":::

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock6.png" alt-text="Side 4 of 7 die sides.":::

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock7.png" alt-text="Side 5 of 7 die sides.":::

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock8.png" alt-text="Side 6 of 7 die sides.":::

:::image type="content" source="Media/AddCustomDieBlock/AddCustomBlock9.png" alt-text="Side 7 of 7 die sides.":::

>[!Note]
> The images above have been provided for the die block, but feel free to use a different texture. If you do, remember to be very careful about naming throughout the tutorial.

If you are using the resources provided:

1. Download the files to your computer.
1. In **custom_block_resource_pack**, create a folder named **textures**.
1. Inside the **textures** folder, create a folder named **blocks**.
1. Place the die block .png files in the **blocks** folder.

### Add a friendly name in terrain_texture.json

The next step is to associate the texture names with a texture file path. This is done in a **terrain_texture.json** file.

1. In **File Explorer**, navigate to the **custom_block_resource_pack** folder and open the **textures** folder.
1. Inside the **textures** folder, create a text document and name it **terrain_texture.json**.
1. Open **terrain_texture.json** in a text editor.
1. Copy and paste the following code into **terrain_texture.json**:

```json
{ 
  "resource_pack_name": "custom_block_resource_pack", 
  "texture_name": "atlas.terrain", 
  "padding": 8, 
  "num_mip_levels": 4, 
  "texture_data": { 
    "die_1": { 
      "textures": "textures/blocks/die_1" 
    }, 
    "die_2": { 
      "textures": "textures/blocks/die_2" 
    }, 
    "die_3": { 
      "textures": "textures/blocks/die_3" 
    }, 
    "die_4": { 
      "textures": "textures/blocks/die_4" 
    }, 
    "die_5": { 
      "textures": "textures/blocks/die_5" 
    }, 
    "die_6": { 
      "textures": "textures/blocks/die_6" 
    }, 
    "die_red": { 
      "textures": "textures/blocks/die_red" 
    } 
  } 
} 
```

5. Save the file.

In **texture_data**, the object with the label "die_1" has created a friendly name we'll reference in other files. Cool!

### Define textures and sounds with blocks.json

Block definitions are handled differently in the resource pack. Blocks are stored in a single JSON file that will contain definitions for each custom block.

1. Open the **development_resource_packs** folder.
1. Open the **custom_block_resource_pack** folder.
1. Inside the **custom_block_resource_pack**, create a text document and name it **blocks.json**.
1. Open **blocks.json** in a text editor.

The **blocks.json** file has a similar set up to the **manifest.json** file and has requirements that need to be met in order for it to work correctly. Those requirements are:

- A format version
- A namespaced name for our custom block (here it's 'demo:die')
- Textures for the custom block

The die block will use a custom texture for four of the sides, and a different texture for the top and bottom that you are going to bring over from the Vanilla Resource Pack. Real-life dice are designed so that the two opposite sides of the die add up to 7.

1. Copy the following text and paste it into your **blocks.json** file:

```json
{ 
  "format_version": "1.19.30", 
  "demo:die": { 
    "textures": { 
      "up": "die_1", 
      "down": "die_6", 
      "north": "die_3", 
      "south": "die_4", 
      "east": "die_2", 
      "west": "die_5" 
    }, 
    "carried_textures": "die_red", 
    "sound": "stone" 
     } 
}
```

2. Save the file.

We're specifying the **textures** individually by face, and we're using the friendly name textures we assigned in terrain_textures.json. The **textures** field can be specified as a string, or as an object with the textures broken down into sub-texture groups.'up','down', and'side'are all sub-textures that allow a creator to define which face gets a certain texture.'side'can also be broken down into cardinal directions('north','east','south', and 'west'). The **carried_textures** and **isotropic** fields can be specified per face like this as well, though not demonstrated here.

The **carried_textures** property allows you to specify the textures to use when the block is in your hand, hotbar, and inventory. We provided the **die_red** texture (as a string) to demonstrate this field.

Because this is a hard block, we're setting the sound to **stone** so that this block sounds like stone when you place it down or walk over it.

## Test the Block

With the die block defined in both the behavior pack and resource pack, you can now test it in-game.

### Create a test world

The following are suggested settings for a test world, but feel free to tweak these as you see fit.

- Flat world
- Show coordinates
- Cheats
- Always day
- Keep inventory
- No mob spawning
- No weather cycle
- Cheats enabled

>[!IMPORTANT]
> You will need to have a Minecraft world where cheats are enabled in order to add the block to your inventory using the /give command. You will also need to have both **custom_block_resource_pack** and **custom_block_behavior_pack** enabled in the world so you can get access to the die block.

1. Open the chat box.
1. Type the following command: `/give @s demo:die`

## Troubleshooting

1. If there's no custom block resource pack or behavior pack - do you have a manifest file?
1. Does your file structure match the minecraft-samples packs?
1. Have you created a world with cheats enabled?
1. Are you using Minecraft: Bedrock Edition version 1.19.20 or later?
1. If the `demo:die` doesn't appear in the game - is your behavior pack formatted correctly?
1. If your textures don't load correctly - Do your textures and **texture_terrain.json** file match the **custom_block_resource_pack** samples?

Now place your block anywhere you'd like. The die is red in hand and in the hotbar because of the **carried_textures** using the red die block. The sides will look like a colorful die when the block is placed, and walking on the block will use the **stone** sound.

Good luck!
