---
author: iconicNurdle
ms.author: mikeam
title: Minecraft Bedrock Editor Overview
description: "An overview of the parts of Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
---

# Editor Overview

This overview is intended to introduce you to the parts of the Editor interface and the tools. The keyboard shortcuts, also known as keybindings, have been provided with each tool and in the table at the end of this document.

For a more in-depth experience using the tools to accomplish basic tasks, take a look at the [Editor Tutorial](EditorTutorial.md).

There's more information about Editor on the [Minecraft: Bedrock Editor GitHub site](https://github.com/Mojang/minecraft-editor)!

> [!IMPORTANT]
> The Editor is in early preview and we're working to add more capabilities.
> It will change significantly as we get feedback from creators like you.
> Also, the images of Editor in this document might vary a little from what you have on your screen.

--------

In this manual, you will learn the following:

> [!div class="checklist"]
>
> - What the difference is between a project and a world
> - How to create a project
> - How to customize the user interface and project world settings
> - What all the parts of the UI are and where to find them
> - How to save a project
> - How to open an existing project
> - How to export a project as a world
> - How to open a world created from a project
> - Where Editor stores exported and saved files

--------

## Requirements

To get started, you need the following:

- A Windows 10 (or higher) computer with Minecraft Bedrock Editor
- Keyboard and mouse

> [!IMPORTANT]
> Editor is not available on mobile.

It's recommended that the following be completed before beginning this tutorial.

- [How to get Minecraft Bedrock Editor](EditorInstallation.md)

## Creating an Editor Project

After you launch the Editor from the shortcut, you get a screen that says "Create New Project."

![Image of the Minecraft Editor starting page](Media/Editor/editor_install_new_project.png)

While you're creating a project, you can configure the name, export settings, and the usual settings for a Minecraft world.

Export settings will apply when you export as a playable world from the Editor (.mcworld).

![Image of the Minecraft Editor configuration page](Media/Editor/editor_overview_project_settings.png)

New projects load with a Welcome/Quick Start screen. If you close it and you want it open again, go to the Help menu and select Quick Start.

## First Things First: UI Settings

Editor looks like your usual Minecraft game with a user interface (UI) on top of it. Before we get started, let's make sure that UI looks okay for your monitor resolution and preferences.

Go to the **File** menu and select **UI Settings**.

![Editor User Interface appearance settings showing UI scale, font, and theme drop-down menus](Media/Editor/editor_overview_ui_settings.png)

>- UI Scale - Makes the menu bar and windows larger or smaller in relation to the project world.
>- Font - Changes the size of the text in the windows.
>- Theme - Changes the colors used in the UI.

After you make a selection from the UI Settings menu, your changes are reflected immediately.

Hint: If you accidentally adjust things to where you can't read the settings to fix it, press the `Alt F4` keys on your keyboard to close Editor. Then, launch Editor again and create a new project. (This is part of why we're doing this first.)

Editor works with [Minecraft Accessibility](https://www.minecraft.net/accessibility) features.

When you're happy with the UI Settings, you can click the X to close the UI Settings window.

## Editor UI Windows: Move, Minimize, Close

You can move Editor windows by clicking and dragging them by the title bar.

Click the double "up arrows" in the corner to collapse the windows upwards so you can tuck them out of the way if you don't want to close them.

If you do want to close the window, click the X in the corner. Some windows can be re-opened with a keyboard shortcut.

## Welcome/Quick Start

![Animation of the parts of the Quick Start Welcome screen](Media/Editor/EditorQuickStartMenu.gif)

|Tab  |Content  |
|:-------|:---------|
| Introduction | Welcome to Minecraft Editor!<br>Minecraft Editor is a multiblock editing experience that helps you easily craft high-quality worlds in Minecraft Bedrock. We are early in our development and excited for the opportunity to build alongside our creator community!<br>Click through the tabs above to learn the basics! |
| Movement | Hold down your right mouse button on the viewport to enable movement.<br>Move horizontally using `W A S D`.<br>Move vertically using `Shift` or `Space`. |
|Selection|Left-click anywhere in the world to select a single block.<br>Use the gizmo or hold Shift between left-clicks to place opposite corners of an area. Press Ctrl to make additional selections.<br>Move using the gizmo, or hold down Alt and move with arrow keys (horizontal) and page up/page down (vertical).<br>Resize using corner gizmos, or hold Ctrl (increase) or Shift (decrease) with arrow keys and page up/page down.|
|Tools|Select the brush from the left toolrail.<br>Left-click and drag to paint.|
|Actions|Undo (`Ctrl Z`) or redo (`Ctrl Y`) your edits.<br>Cut (`Ctrl X`) or copy (`Ctrl C`) a selection.<br>Select a single block and quick paste (`Ctrl V`) what you cut or copied.<br>Or, paste preview (`Ctrl Shift V`) and use arrow keys and page-up / page-down for precise placement.|
|Help|Editor will be exclusively available in Bedrock Preview until the feature set and quality meets our standards to be made visible in the Launcher.<br>- Documentation<br>- Log issues and give feedback.<br>You may close this panel. To reopen at any point, select "QuickStart" from the top "Help" menu.|

## Tool Mode and Crosshair Mode

The two modes within Editor are Tool Mode and Crosshair Mode.

**Tool Mode** has multi-block editing tools and the user interface. When you move the mouse without holding any mouse buttons, your cursor is freely available to use the user interface.

![Tool Mode has the user interface with tools](Media/Editor/editor_overview_tool_mode.png)

**Crosshair Mode** has more precise, single-block editing capabilities. It also uses the usual Minecraft keybindings you can see on the Settings > Controls > Keyboard & Mouse screen. When you move the mouse, you look around.

![Crosshair mode has no user interface and looks like the Minecraft game](Media/Editor/editor_overview_crosshair_mode.png)

In a new project, before you touch anything, you are in Tool Mode.

If you're ever not sure which mode you are in, press ESC. If you're in Crosshair mode, you'll go back into Tool Mode - if you're in Tool Mode already, nothing will happen.

Practice: In the top right corner of the screen, select the "Crosshair Mode" button or press `Ctrl Tab` to go into Crosshair Mode. Note the differences. To go back to Tool Mode, you can press `Ctrl Tab` again or press `Esc`. You can also go from Tool Mode to Crosshair Mode by clicking the Crosshair Mode button in the upper right corner.

## Navigation

Before we dive into the Tool Mode UI, you might want to take a moment to familiarize yourself with how to look around and move around in the different modes.

- Unlock the camera: In Tool mode, hold down the right mouse button to look around. In Crosshair Mode, you do not need to hold down the right mouse button.  

- Moving around: In Tool Mode, hold the right mouse button down while you press `W`, `A`, `S`, `D`, `Space`, and `Shift` keys. You do not need to hold down the right mouse button to use the same keys to move around in Crosshair Mode.

- Look-to-teleport: In Tool Mode, point your cursor at a block in the distance, and hit `G` on your keyboard. You will be "Grapple teleported" there. This function does not work in Crosshair Mode.











### Toolrail

These are some of the tools you can use to edit your world and some quick steps to practice using each tool.


## Brush, Selection, and Paste Preview

Only one window can be open at a time and you can use the keyboard shortcuts to switch among them.

Press `Ctrl B`, `Ctrl S`, and `Ctrl Shift V` in any order to get used to switching among the tools.





## Crosshair Mode

Crosshair Mode is intended for making small single-block edits and placing entities and mobs.

Practice:

1. Click the Crosshair Mode button (or `Ctrl Tab`) to go into Crosshair Mode.
1. Use commands to summon a horse (`/summon horse`) and give yourself a campfire (`/give @s campfire`).
1. Place a campfire where it won't hurt the horse.
1. Go back to Tool Mode and notice that pausing and unpausing actors affects the horse and not the campfire.
1. Use Undo (`Ctrl Z`) and Redo (`Ctrl Y`) in each mode to make the campfire disappear and reappear. Notice that the horse is unaffected.
![Animation showing that pausing actors causes mobs to hold still, but moving items like a campfire continue burning](Media/Editor/ActorPausing.gif)





## Editor File Operations - Create, Import, Export

Here are the steps to create a project, make a quick edit, export the file, and then open that file in Minecraft and then again in Minecraft Editor.

1. Launch Minecraft Bedrock Editor.
1. Select "Create New Project."
1. Name the project something meaningful like "Editor Test Project" and open it up.
1. Select the brush tool (`Ctrl B`) and draw something by clicking on the ground a few times.
1. Go to the **File** menu and select **Export as ... Playable world**.
1. You will see some messages confirming that the export started and finished, and a temporary chat message will display the path to a folder in your **com.mojang** folder called **projectbackups**.
1. Close Editor by going to **File ... Pause screen** and then choose **Save & Quit** like you usually do.
1. Go to the **projectbackups** folder in your **com.mojang** folder. You should find a file with the name you gave it appended to the date, time, and a **.mcworld** extension.

If you need a reminder about how to find the **com.mojang** folder on your computer, there are some steps in the [Getting Started](GettingStarted.md) article.

The **projectbackups** folder does not exist until the first time you export a project from Editor.

If you're curious about Minecraft file extensions, here is an article about them called [Minecraft File Extensions](MinecraftFileExtensions.md) where you can learn more.

1. If Editor is closed, then when you double-click the **.mcworld** file Minecraft will launch like usual and import the .mcworld file. The world you created in Editor will be listed among any other Minecraft worlds you already have. However, if Editor is still running, then double-clicking the file will cause it to be imported into Editor instead.
1. To send your project file to someone else so they can work with it in Editor, go back to the **projectbackups** file in your com.mojang folder.
1. Copy and paste the file and change the file extension to **.mcproject**. When you send this file to someone else, they can double-click it to open it directly in Editor (if they have Editor installed.)

### Importing a file into Editor

1. Launch Editor and click the Play button.
1. Click the import icon next to the Create New Project button to open the Windows file explorer.

 ![The Editor import button is next to the create new project button](Media/Editor/editor_overview_import_button.png)

3. In the file explorer, choose the .mcworld, .mctemplate, or .mcproject you want to import.
4. When the file is imported, a success message is displayed.
5. The newly imported map will be available in the list.
6. Open the map. It will load into Editor with default settings, which can be modified within Editor.

### File structure information

As you probably already know, when you create a world in Minecraft, that world is stored in the **minecraftWorlds** folder in your **com.Mojang** folder.
When you create a project in Editor, that file is also a world, so it is also stored in the **minecraftWorlds** folder but it is invisible to non-Editor Minecraft unless you import it.
The Editor project file goes into the **projectbackups** folder only when you export it.

## Editor and Bedrock Dedicated Server

Editor is only enabled in the preview version of Win32 Bedrock Dedicated Server (BDS).
There are two ways to launch it:

### Launch the .exe with the command line, like this: 

`bedrock_server.exe Editor=true`

This will only work if you're launching BDS from scratch with no existing world.

You should see the output say:

```
#####################################################
#                                                   #
#              CREATING EDITOR PROJECT              #
#                                                   #
#####################################################
```

### Create an Editor project from Minecraft

1. Launch Editor from the usual desktop shortcut.
1. Create a new Editor Project.
1. Locate the Editor Project in the **com.mojang/minecraftWorlds** folder and copy it into the BDS worlds folder
1. Ensure that `server.properties` has the correct world name.
1. Execute **bedrock_server.exe**.

If correctly set up, you should see the output say

`[2023-10-24 07:21:43:977 INFO] Enabling Editor Services`

Editor Mode is controlled by a flag in the level data (not by the command line), so you need to launch the server either by having the server create a new Editor project, or by launching the server using an existing Editor project.

When the server is up and running, any client connections from Minecraft Bedrock Preview Edition will connect as editor sessions and present the editor interface.  Connections from Non-Preview editions of Minecraft will be refused.

## What's Next?

Now that you know more about the parts of Editor, let's use the tools to do some editing!

> [!div class="nextstepaction"]
> [Editor Tutorial](EditorTutorial.md)
