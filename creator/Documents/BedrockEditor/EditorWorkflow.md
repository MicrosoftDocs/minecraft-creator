---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Workflow
description: "A step-by-step guide for creating, importing and exporting projects and worlds in Minecraft Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/04/2025
---

# Editor Workflow

In this guide you'll learn the following:

> [!div class="checklist"]
>
> - How to create a new project
> - How to export a playable world
> - How to import projects/worlds into Editor.
> - How to use and navigate the export panel

## Create a project

1. Launch Minecraft Bedrock Editor.

2. Select **Create New Project**.

3. Name and open the project.

4. (Optional) Select the brush tool (`Ctrl+B`) and draw something by clicking on the ground a few times.


## Export a playable world

Keep in mind that the **projectbackups** folder does not exist until the first time you export a project from the Editor. If you need a reminder about how to find the **com.mojang** folder on your computer, take a look at the [Getting Started](../GettingStarted.md) article before you continue.

1. Go to the **File** menu and select **Export**. 

2. Select **Playable World** as the Export type to export a playable Minecraft world.

3. Configure the world's settings, then click **Export**. You'll receive confirmation messages when the export has begun and whenever it has finished. A temporary chat message will display the path to **projectbackups** in the **com.mojang** directory. For more information on the export world settings, see [Export World Settings](#export-world-settings) below.

4. From **File**, select Game menu (`Ctrl+Q`) and choose **Save & Quit** to close the Editor.

5. Go to **com.mojang/projectbackups** and locate your .mcworld file.

    > [!NOTE]
    > The .mcworld file should be a file with the name you gave it, appended to the date, time, and a **.mcworld** extension.

### Export World Settings

When you export your editor project, you can configure the settings that you would like to apply to your world. Go to **File** -> **Export** to open the **Export Panel**. From there, you can adjust the settings and then finish exporting your world.

### Export Notes

The Export Notes section tells you what version of Minecraft your world will be exported as. If you want to create a playable world for a previous version, you'll have to use [Chunker](../ChunkerOverview.md).

![Editor Export Notes](media/editor_export_notes.png)


## Import a world or project
1. Launch Editor and click Play.
2. Click the import icon next to Create New Project to open the Windows file explorer.

     ![The Editor import button is next to the create new project button](Media/editor_overview_import_button.png)
3. From the file explorer, choose a .mcworld, .mctemplate, or .mcproject file to import.
4. After import, a success message is shown and the item appears in the list.
5. Open the map; it loads into Editor with default settings that can be modified there.


## General Settings

- **World name**: You can type in the name that you want for your new world.

- **Game Mode**: Use the drop-down to choose **Survival**, **Creative**, or **Adventure** mode.

- **Difficulty**: Use the drop-down to choose **Peaceful**, **Easy**, **Normal**, or **Hard**.

- **Hardcore**: Check this box to export your world as a Hardcore world. When you check this box, the **Game Mode** is automatically set to **Survival** (but you can also choose **Adventure** difficulty), the **Difficulty** is set to **Hard**, and **Cheats** are disabled.

    ![Editor Export General Settings](media/editor_export_general_settings.png)

### Advanced Settings

- **Starting map**: Check this box to give your players a map in their inventory when they start in your world.
    > [!NOTE]
    > *This setting cannot be enabled in Hardcore worlds*.

- **Bonus chest**: Check this box to give your players a bonus chest in their inventory when they start in your world.
    > [!NOTE]
    > *This setting cannot be enabled in Hardcore worlds*.

- **Show coordinates**: Check this box to show players their position coordinates in your world.

- **Show days played**: Check this box to show players their playtime in your world.

- **Recipe unlocking**: Check this box to unlock all crafting recipes for players when they start in your world.

- **Fire spreads**: Check this box to enable fire spreading in your world. If this is not checked, fire will not spread to flammable blocks and remain on the block where it was set.

- **TNT explodes**: Check this box to enable TNT explosions after it is set. If this is not checked, TNT will not explode after it is set.

- **Respawn blocks explode**: Check this box to enable bed and respawn anchor explosions in other dimensions. If this is not checked, beds and respawn anchors will not explode in other dimensions, but they will still not work in other dimensions.

- **Mob loot**: Check this box to enable mobs dropping items in your world. If this is not checked, mobs will not drop items when killed.

- **Natural regeneration**: Check this box to enable natural regeneration (healing) for players in your world. If this is not checked, players will not heal passively.

- **Tile drops**: Check this box to enable block drops when blocks or tiles are destroyed. If this is not checked, blocks and tiles will not drop when they are destroyed.

- **Immediate respawn**: Check this box to enable skipping the death screen for players in your world. If this is not checked, players will see the death screen when they are killed and can click a button to respawn when they choose.

- **Respawn radius**: Enter a distance (in blocks) to determine how far away a player can randomly respawn from the nearest respawn block.

- **Simulation radius**: Enter a distance (in blocks) to determine how far away mobs can spawn or despawn from players. This distance must be an even number from 4 to 12.

    ![Editor Export Advanced Settings](media/editor_export_advanced_settings.png)

### Multiplayer Settings

- **Multiplayer game**: Check this box to enable multiplayer in your world.

- **Player Access**: Use the drop-down to choose who can join your world. You can choose **Invite only**, **Friends only**, or **Friends of friends**.

- **Player permissions**: Use the drop-down to choose what permissions new players are given when they join your world. You can choose **Visitor**, **Member**, **Operator**, or **Custom**.

- **Visible to LAN players**: Check this box to make your world visible to players on your local network.

- **Friendly fire**: Check this box to enable players damaging one another.

    ![Editor Export Multiplayer Settings](media/editor_export_multiplayer_settings.png)

### Cheats Settings

- **Cheats**: Check this box to enable cheats in your world. 
    > [!NOTE]
    > *This setting cannot be enabled in Hardcore worlds*.

- **Daylight Cycle**: Use the drop-down to choose how the daylight cycle behaves in your world. You can choose **Normal**, **Always day**, or **Lock time**.

- **Keep inventory**: Check this box to enable players to keep their inventory after they die. If this is not checked, players will lose all items in their inventory upon death.

- **Mob spawning**: Check this box to enable mobs spawning in your world. If this is not checked, mobs will not spawn anywhere in your world.

- **Mob griefing**: Check this box to enable mobs to destroy or damage blocks in your world. If this is not checked, mobs will not be able to damage blocks.

- **Entities drop loot**: Check this box to enable non-mob entities to drop loot when killed. If this is not checked, non-mob entities will not drop loot upon death.

- **Weather cycle**: Check this box to enable the weather cycle in your world. If this is not checked, your world will always have sunny weather and will not change.

- **Command blocks**: Check this box to enable command blocks in your world. If this is not checked, players will not be able to use command blocks in your world.

- **Education features**: Check this box to enable the features found in Minecraft Education Edition in your world.

- **Random tick speed**: Enter a time (in ticks) for the world to choose random blocks for event updates. This controls world events like how fast crops and tress grow. Each tick in Minecraft is 50 milliseconds (or 0.05 seconds).

    ![Editor Export Cheats Settings](media/editor_export_cheats.png)


## File types and locations

If you want to know more, check out this article to help you learn all about [Minecraft File Extensions](../MinecraftFileExtensions.md).

- If the editor is closed when you double-click the **.mcworld** file, Minecraft will launch normally and automatically import the file to your world. The world you created in Editor will be listed among any other Minecraft worlds you already have. However, if Editor is still running, double-clicking the file will cause it to be imported into Editor instead.

- To send your project file to someone else so they can work with it in Editor, copy the exported file in **com.mojang/projectbackups** and change the extension to **.mcproject**. Other creators who have the Editor installed can select it.

### File structure information

As you probably already know, when you create a world in Minecraft, that world is stored in **com.Mojang/minecraftWorlds**. When you create a project in Editor, that file is also considered a world, so it's stored in the **minecraftWorlds** folder too. The difference is that project files are invisible to non-Editor versions of Minecraft unless you import them. However, once you edit them, project files go into the **projectbackups** folder.


## Try it: Create, export, and open

1. Create a new project and make a small edit.
2. Export the project as a Playable World and note the **projectbackups** path.
3. Open the Game menu (`Ctrl+Q`) and **Save & Quit**.
4. Double-click the exported .mcworld to open it in Minecraft (or in Editor, if Editor is running).