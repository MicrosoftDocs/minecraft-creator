---
author: v-josjones
ms.author: v-josjones
title: Getting Started With Minecraft Add-ons
ms.prod: Gaming
---

# Getting Started with Add-on Development

Add-Ons are the first step on our journey towards bringing even greater levels of customization to all editions of Minecraft. They allow players to transform the look of their worlds and even change the behavior of mobs. For example, you can change the blast radius of a creeper, or the texture it’s wearing.

Before building your first pack. You will need software, tools, and an understanding of how Add-ons work within Minecraft. In this tutorial, You will learning the following.

>[!div class="checklist"]
> - How Minecraft's file structure is laid out.
> - What software is used for editing JSON files.
> - What are some of the plugins available to help with Add-on development.

## com.mojang

When minecraft is installed to your computer, there is a folder directory called **com.mojang** that is generated in the AppData folder. To access this folder, you can use the following solutions for each OS:

### Windows

In order to locate the **com.mojang** folder in Windows, You will need to have **Hidden Folders** set to **true**.

:::image type="content" source="Media/GettingStarted/viewHiddenFolders.png" alt-text="Image of Windows 10 File Explorer window's view options. Here the Hidden Folder item is checked to indicate that its set to true":::

1. Press **Win+R** to open **Run**. Alternatively you can launch Run in the start menu.
1. Copy and paste the following: `C:\Users\[username]\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`
1. Press Ok.

> [!IMPORTANT]
> Where it says [Username] is to be replaced with your Windows' user name.


### OS X

1. Open Finder.
1. Select Go from the menu and select **Go to Folder**.
1. When prompted, type `~/Library/Application/Support/minecraft`
1. Press Go.

### Linux

The directory is located at `/home/YOURNAME/.minecraft/.`


As shown in the image below in a Windows Explorer window, there are multiple directories within the com.mojang folder.

![Image of com.mojang on a Windows Explorer environment.](Media/GettingStarted/comMojang.png)

> [!TIP]
> If you see more content in this folder than what is shown above, do not panic! This image shows a fresh install of Minecraft. 

### Behavior, Skin, And Resource Packs

There are 3 folders called **behavior_packs**, **resource_packs**, and **skin_packs**. These folders contain folders for each of their respective type of packs. Any custom content that will be added to minecraft will come in the form of one of these 3 packs.

### Development Packs

Along with the 3 pack folders, there are also Development version of those folders. Development packs are packs that are updated every time Minecraft is launched, allowing Creators to quickly load and test changes they have made to their packs.

### minecraftWorlds

**minecraftWorlds** contains each world that has been generated within the current build of Minecraft. Each folder will also contain resource and behavior pack folders to contain any packs that may be connected with the level.

It's recommended that when installing a new build of Minecraft, Users back up this folder in order to prevent any potential loss of Minecraft Worlds that users may have.

## Visual Studio Code

Integrated Development Environment, or IDE is a piece of software that provides the fundamental tools of computer programming within one program. This type of software usually includes a code editor, a compiler, a debugger, and a graphical user interface builder.

In this tutorial, you will learn about Visual Studio Code, a free and open sourced IDE provided by Microsoft. VSCode allows users to quickly craft and edit many different type of files, including JSON files used in Minecraft Add-on development.

### Installing Visual Studio Code

1. Follow the link here to [Install VSCode](https://code.visualstudio.com/Download)

## Visual Studio Code Extensions

Visual Studio Code supports 3rd party extensions created by the VSCode developer community. Extensions are a great way to help write and understand Minecraft syntax when working on resource and behavior packs.

### Installing Extensions

1. Click on the link provided to download [Bedrock Definitions](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions) for Visual Studio Code.
1. Click on the link provided to download [Blockception's Minecraft Bedrock Development](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension) for Visual Studio Code.

### What's Next?

Now that your developer environment is now set up, you can now get started learning how to make your first Minecraft Add-on with Resource Packs with setting up a custom texture.


> [!div class="nextstepaction"]
> [Resource Pack](ResourcePack.md)

Alternatively, if you would like to get started with Commands in Minecraft, head on over to Introduction to Command Blocks to learn how to use Command Blocks to chain together different commands.

> [!div class="nextstepaction"]
> [Introduction to Command Blocks](CommandBlocks.md)