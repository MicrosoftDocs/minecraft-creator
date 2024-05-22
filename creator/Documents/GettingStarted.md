---
author: iconicNurdle
ms.author: mikeam
title: Getting Started With Minecraft Add-Ons
description: "A tutorial covering how to start developing Add-Ons for Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Getting Started with Add-on Development for Bedrock Edition

Whether you create them yourself or get them from another creator, add-ons are the first step on the journey of bringing greater levels of customization to Minecraft: Bedrock Edition. Add-ons allow players to transform the look of their worlds and even change the behavior of entities. For example, you can change the blast radius of a creeper and the texture it's wearing.

:::image type="content" source="Media/GettingStarted/Getting-Started.jpg" alt-text="A creeper mob that has been re-textured to look like TNT":::

In this article, you will learn:

>[!div class="checklist"]
>
> - How to download add-ons for various devices.
> - The file structure used by Minecraft add-ons.
> - How Visual Studio Code can be used for editing JSON files.
> - Where to find applicable extensions for Visual Studio Code.

## Installing Add-on Instructions

Add-ons can be installed on a variety of platforms running Minecraft. Here's how:

# [Windows 10 or Windows 11](#tab/Windows10)

1. First, you will need a Windows 10 or Windows 11 computer with Minecraft: Bedrock Edition installed.
1. Download the world or add-on file from the provided source. If the file downloads as a .zip file, change the file extension name to ".mcworld" or ".mcpack".
1. Navigate to the directory where you downloaded the file.
1. Open the file and the add-on should open in Minecraft.

- If you're opening a .mcworld that contains add-ons, the game will notify you that you've successfully imported the world. It will then be available from the "Play" menu.
- If you're opening a .mcpack, a pop-up notification will alert you that you've successfully imported the pack. Depending on the pack type, this will then be available when editing worlds in either the Behavior Pack tab or Resource Pack tab.

# [Realms/Console](#tab/realms)

1. You will need a Windows 10 or Windows 11 computer with Minecraft: Bedrock Edition installed, a subscription to Realms, and a Minecraft world with add-ons activated.
1. On the computer, launch Minecraft and upload the world with add-ons active to your realm.
1. Go to your console, launch Minecraft, and open the add-on enhanced world on the realm.

# [Android](#tab/android)

1. Launch Minecraft.
1. Download the world or add-on file to your Android device.
1. Go to the Settings app and select Storage > Explore (at the bottom). If you do not have a settings app, you can install a file explorer app like ES File Explorer.
1. Select the directory where you saved the file, usually "Download".
1. Select the file & the add-on should open in Minecraft.

- If you're opening a .mcworld that contains add-ons, the game will notify you that you've successfully imported the world. It will then be available from the "Play" menu.
- If you're opening a .mcpack, a pop-up notification will alert you that you've successfully imported the pack. Depending on the pack type, this will then be available when editing worlds in either the Behavior Pack tab or Resource Pack tab.

# [iOS](#tab/iOS)

1. Launch Minecraft.
1. Click on the world or add-on file you want to open (URL, e-mail attachment, etc.).
1. Your device will prompt you to open the file with Minecraft.
1. Click `Open` in Minecraft; This will launch Minecraft with your selected file.

- If you're opening a .mcworld that contains add-ons, the game will notify you that you've successfully imported the world. It will then be available from the "Play" menu.
- If you're opening a .mcpack, a pop-up notification will alert you that you've successfully imported the pack. Depending on the pack type, this will then be available when editing worlds in either the Behavior Pack tab or Resource Pack tab.

# [Oculus Rift](#tab/oculusrift)

1. Open Minecraft for Windows 10 in Rift Mode (if not in Rift mode, add-ons will open the regular version of Minecraft for Windows 10).
1. Download the world or add-on file from the provided source (URL, email attachment, etc.). If the file downloads as a .zip file, change the file extension name to ".mcworld" or ".mcpack".
1. Navigate to the directory where you downloaded the file.
1. Open the file & the add-on should open in Minecraft.

- If you're opening a .mcworld that contains add-ons, the game will notify you that you've successfully imported the world. It will then be available from the "Play" menu.
- If you're opening a .mcpack, a pop-up notification will alert you that you've successfully imported the pack. Depending on the pack type, this will then be available when editing worlds in either the Behavior Pack tab or Resource Pack tab.

---

## com.mojang

When Minecraft is installed on your computer, there is a folder called **com.mojang** that is generated in the AppData folder. You will need to find this folder so you can add your content to it.

To locate the **com.mojang** folder on your computer, you will need to have the **Hidden items** checkbox set to **true**, as shown below. Also, check the box for **File name extensions**.

### Showing hidden items

1. Open **File Explorer** from the taskbar.
1. Select the **View** tab.
1. In the **Show/hide** section, select the checkboxes for **File name extensions** and **Hidden items**.

:::image type="content" source="Media/GettingStarted/viewHiddenFolders.png" alt-text="Image of Windows 10 File Explorer window's view options. The File name extensions and Hidden items boxes are checked to indicate that they are set to true":::

### Locating com.mojang

1. Press **Win+R** to open **Run**.
1. Copy and paste the following into the **Open** field: `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`
1. Click **OK**.

>[!TIP]
> This is a great time to save a shortcut to this folder on your desktop.

As shown in the image below, there are multiple subdirectories located within the **com.mojang** folder.

![Image of com.mojang on a Windows Explorer environment.](Media/GettingStarted/comMojang.png)

> [!TIP]
> If you see more content in this folder than what is shown above, do not panic! This image shows a fresh install of Minecraft.

### Behavior, Skin, and Resource Packs

There are three folders called **behavior_packs**, **resource_packs**, and **skin_packs** that will store finalized custom content that will be added to Minecraft: Bedrock Edition. Don't worry about these folders right now - you are going to be developing content, so you will be working in the development versions of these folders, as discussed in the next section.

### Development Packs

You will use the **development_resource_packs** and **development_behavior_packs** folders for the [Resource Pack](ResourcePack.md) and [Behavior Pack](BehaviorPack.md) tutorials. Development pack folders are updated each time Minecraft is launched so you can quickly load and test the changes you made to their contents.

### minecraftWorlds

**minecraftWorlds** contains each world that has been generated within the current build of Minecraft. Each folder also contains resource and behavior pack folders for any packs that may be in use within the world.

> [!TIP]
> When installing a new build of Minecraft, you should save a copy of this folder as a backup to prevent any potential loss of Minecraft worlds that you may have.

## Visual Studio Code

JSON is a popular text file format that is used by Minecraft: Bedrock Edition to interact with content. JSON can be edited in any text editor such as Notepad or Word. However, Visual Studio Code is a free-to-use, text-based editor that supports third-party extensions, including some built specifically for Bedrock development.

### Installing Visual Studio Code

Follow this link to [install Visual Studio Code](https://code.visualstudio.com/Download).

## Visual Studio Code Extensions

Visual Studio Code supports extensions created by the Visual Studio Code developer community. Extensions are a great way to help write and understand Minecraft syntax when working on resource and behavior packs.

### Installing Extensions

1. Click on this link to download [Bedrock Definitions](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions) for Visual Studio Code.
1. Click on this link to download [Blockception's Minecraft Bedrock Development](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension) for Visual Studio Code.

## What's Next?

Now that your development environment is set up, you can start creating your first add-on and learn more about resource packs.

> [!div class="nextstepaction"]
> [Introduction to Resource Packs](ResourcePack.md)

Alternatively, if you would like to learn how to use commands, head on over to **Getting Started with Command Blocks** and learn how to use command blocks to chain together different commands.

> [!div class="nextstepaction"]
> [Getting Started with Command Blocks](CommandBlocks.md)
