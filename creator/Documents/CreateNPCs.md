---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Create a Custom NPC
ms.prod: gaming
---
# Create a Custom NPC

Non-Player Characters (NPCs) are characters in Minecraft that are not controlled by the player. NPCs can perform commands and deliver dialog when players interact with them, making them excellent tools for creating amazing narrative and gameplay experiences in Minecraft.

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to create an NPC.
> - How to change NPC skins.
> - How to add commands to an NPC.
> - How to add buttons to an NPC.

## Create an NPC

To create NPCs, make sure that you are playing in Creative mode with cheats enabled and that you have Operator permissions for your world. To interact with your custom NPCs, you will need to switch from Creative mode to Survival mode or Adventure mode.

To create a custom NPC, follow these instructions:

1. Obtain an NPC spawn egg from the creative menu or by using the command `/give @p spawn_egg 1 51`.
2. Right-click to place an NPC on your desired block. If you misplace an NPC, you can left-click to despawn them.
3. Right-click your new NPC to open the NPC interface.
4. Enter a **name** for your NPC. Names are limited to 32 characters. You can use color codes to change the color of the name text.

![NPC Editor Interface](Media\NPCs\LearningPortal_NPCEditor.PNG)

The NPC has a built in dialogue option to give players more information about the commands they will execute or to deliver story details. 

This dialog box has a limit of 307 characters before the text goes off the screen, You can also use color codes to change the color of the text.

If your require a more advance dialog system; you can create this via the use of behaviour packs and commands, see [NPC Dialogue Command](/minecraft/creator/Documents/NPCDialogue) for more information.

## Change NPC skins

You can choose from a list of skins to customize the appearance of your NPC. 

To change an NPC's skin, follow these instructions:

1. Right-click the NPC you want to edit.
1. In the **Appearance** section, click the skin that you want to use for your NPC. You can use the left and right arrow buttons to see more skins.

## Add commands to an NPC

You can add commands to an NPC that the NPC will execute after a player closes their dialog window. Unlike a [Command Block](/minecraft/creator/Documents/CommandBlocks), a single NPC can execute multiple commands.

To add commands to an NPC, follow these instructions:

1. Right-click the NPC you want to edit.
1. Click **Advanced Settings**.
1. Enter the **Command** you want to execute. Make sure you only enter one command in this field.
1. If you want to add more commands, click the **Add Command** button and enter the commands you want to enter.

![NPC Command Interface](Media\NPCs\LearningPortal_NPCEditorCommands.PNG)

Your NPC will execute these commands in order whenever a player interacts with them and closes their dialog box. For a list of commands that your NPCs can execute, see [Commands](https://minecraft.fandom.com/wiki/Commands).

## Add buttons to an NPC

You can also add buttons to an NPC. If you use the **Button Mode** setting, an NPC command will be displayed as a button in the NPC's dialog box. Players who interact with that NPC can click the appropriate button to execute that command.

To add buttons to an NPC, follow these instructions:

1. Right-click the NPC you want to edit.
1. Click **Advanced Settings**.
1. Enter the **Command** you want to execute. Make sure you only enter one command in this field.
1. Activate **Button Mode** and enter the button text in the new field.
    ![NPC Button Mode](Media\NPCs\LearningPortal_NPCEditorButtons.PNG)
1. If you want to add more buttons, click the **Add Command** button and repeat this process.

Once you have added your button commands, your NPC will display the command buttons in order after their dialog when players interact with them.

![NPC Interaction](Media\NPCs\LearningPortal_NPCInteraction.PNG)
