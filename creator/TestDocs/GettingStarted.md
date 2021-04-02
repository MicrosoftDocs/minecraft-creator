---
author: v-josjones
ms.author: v-josjones
title: Getting Started With Minecraft Add-ons
ms.prod: Gaming
---

# Getting Started with Add-on Development for Bedrock Edition

Add-Ons are the first step on our journey towards bringing even greater levels of customization to  Minecraft Bedrock Edition. Add-ons allow players to transform the look of their worlds and even change the behavior of mobs. For example, you can change the blast radius of a creeper, or the texture it’s wearing.

In this tutorial, you will learn the following.

>[!div class="checklist"]
> - How Minecraft's file structure is laid out.
> - What software is used for editing JSON files.
> - What are some of the plugins available to help with Add-on development.

## com.mojang

When Minecraft is installed to your computer, there is a folder directory called **com.mojang** that is generated in the AppData folder. To access this folder, you can use the following solution to locate within Windows 10 OS.

In order to locate the **com.mojang** folder in Windows, You will need to have **Hidden Folders** set to **true**.

:::image type="content" source="Media/GettingStarted/viewHiddenFolders.png" alt-text="Image of Windows 10 File Explorer window's view options. Here the Hidden Folder item is checked to indicate that its set to true":::

1. Press **Win+R** to open **Run**. Alternatively you can launch Run in the start menu.
1. Copy and paste the following: `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`
1. Press Ok.


As shown in the image below in a Windows Explorer window, there are multiple directories within the com.mojang folder.

![Image of com.mojang on a Windows Explorer environment.](Media/GettingStarted/comMojang.png)

> [!TIP]
> If you see more content in this folder than what is shown above, do not panic! This image shows a fresh install of Minecraft.

### Behavior, Skin, And Resource Packs

There are 3 folders called **behavior_packs**, **resource_packs**, and **skin_packs**. These folders contain folders for each of their respective type of packs. Any custom content that will be added to Minecraft will come in the form of one of these 3 packs.

### Development Packs

Along with the 3 pack folders, there are also Development version of those folders. Development packs are packs that are updated every time Minecraft is launched, allowing you to quickly load and test changes they have made to their packs.

### minecraftWorlds

**minecraftWorlds** contains each world that has been generated within the current build of Minecraft. Each folder will also contain resource and behavior pack folders to contain any packs that may be in use within the world.
> [!TIP]
> It's recommended that when installing a new build of Minecraft, this folder should be backed up in order to prevent any potential loss of Minecraft Worlds that you may have.

## Visual Studio Code

JSON is a popular text file format that is used by Minecraft Bedrock Edition in order to interact with content within. JSON can be edited in any text editor, such as Notepad or Word. However, Visual Studio Code is a free to use text based editor that supports 3rd party extensions, including some built for Bedrock development.

### Installing Visual Studio Code

1. Follow the link here to [Install VSCode](https://code.visualstudio.com/Download)

## Visual Studio Code Extensions

Visual Studio Code supports 3rd party extensions created by the VSCode developer community. Extensions are a great way to help write and understand Minecraft syntax when working on resource and behavior packs.

### Installing Extensions

1. Click on the link provided to download [Bedrock Definitions](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions) for Visual Studio Code.
1. Click on the link provided to download [Blockception's Minecraft Bedrock Development](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension) for Visual Studio Code.

### What's Next?

Now that your developer environment is now set up, you can now get started with creating your first Add-On by learning more about Resource Packs.

> [!div class="nextstepaction"]
> [Resource Pack](ResourcePack.md)

Alternatively, if you would like to get started with Commands in Minecraft, head on over to Introduction to Command Blocks to learn how to use Command Blocks to chain together different commands.

> [!div class="nextstepaction"]
> [Introduction to Command Blocks](CommandBlocks.md)