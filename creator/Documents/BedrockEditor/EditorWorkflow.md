---
author: iconicNurdle
ms.author: mikeam
title: Minecraft Bedrock Editor Workflow
description: "A step-by-step guide for creating, importing and exporting projects and worlds in Minecraft Editor"
ms.service: minecraft-bedrock-edition
---

# Editor File Operations - Create, Import, Export

Here are the steps to create a project, make a quick edit, export the file, and then open that file in Minecraft and then again in Minecraft Editor.

1. Launch Minecraft Bedrock Editor.
1. Select "Create New Project."
1. Name the project something meaningful like "Editor Test Project" and open it up.
1. Select the brush tool (`Ctrl B`) and draw something by clicking on the ground a few times.
1. Go to the **File** menu and select **Export**. 
1. Click the **Playable World** box in the **Export type** field to export a playable Minecraft world. Configure the other settings you would like for your world and click the **Export** button. For more information on the export world settings, see [Export World Settings](#export-world-settings) below.
1. You will see some messages confirming that the export started and finished, and a temporary chat message will display the path to a folder in your **com.mojang** folder called **projectbackups**.
1. Close Editor by going to **File ... Pause screen** and then choose **Save & Quit** like you usually do.
1. Go to the **projectbackups** folder in your **com.mojang** folder. You should find a file with the name you gave it appended to the date, time, and a **.mcworld** extension.

If you need a reminder about how to find the **com.mojang** folder on your computer, there are some steps in the [Getting Started](../GettingStarted.md) article.

The **projectbackups** folder does not exist until the first time you export a project from Editor.

## Export World Settings

When you export your editor project, you can configure the settings that you would like to apply to your world. Go to **File** -> **Export** to open the **Export Panel**. From there, you can adjust the settings and then finish exporting your world.

### Export Notes

The Export Notes section tells you what version of Minecraft your world will be exported as. If you want to create a playable world for a previous version, you'll have to use [Chunker](../ChunkerOverview.md).

![Editor Export Notes](media/editor_export_notes.png)

### General Settings

- **World name**: You can type in the name that you want for your new world.
- **Game Mode**: Use the drop-down to choose **Survival**, **Creative**, or **Adventure** mode.
- **Difficulty**: Use the drop-down to choose **Peaceful**, **Easy**, **Normal**, or **Hard**.
- **Hardcore**: Check this box to export your world as a Hardcore world. When you check this box, the **Game Mode** is automatically set to **Survival** (but you can also choose **Adventure** difficulty) and the **Difficulty** is set to **Hard** and **Cheats** are disabled.

![Editor Export General Settings](media/editor_export_general_settings.png)

### Advanced Settings

- **Starting map**: Check this box to give your players a map in their inventory when they start in your world. *This setting cannot be enabled in Hardcore worlds*.
- **Bonus chest**: Check this box to give your players a bonus chest in their inventory when they start in your world. *This setting cannot be enabled in Hardcore worlds*
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

- **Cheats**: Check this box to enable cheats in your world. *This setting cannot be enabled in Hardcore worlds*.
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

## Minecraft File Extensions

If you're curious about Minecraft file extensions, here is an article about them called [Minecraft File Extensions](../MinecraftFileExtensions.md) where you can learn more.

1. If Editor is closed, then when you double-click the **.mcworld** file Minecraft will launch like usual and import the .mcworld file. The world you created in Editor will be listed among any other Minecraft worlds you already have. However, if Editor is still running, then double-clicking the file will cause it to be imported into Editor instead.
1. To send your project file to someone else so they can work with it in Editor, go back to the **projectbackups** file in your com.mojang folder.
1. Copy and paste the file and change the file extension to **.mcproject**. When you send this file to someone else, they can double-click it to open it directly in Editor (if they have Editor installed.)

### Importing a file into Editor

1. Launch Editor and click the Play button.
1. Click the import icon next to the Create New Project button to open the Windows file explorer.

 ![The Editor import button is next to the create new project button](Media/editor_overview_import_button.png)

3. In the file explorer, choose the .mcworld, .mctemplate, or .mcproject you want to import.
4. When the file is imported, a success message is displayed.
5. The newly imported map will be available in the list.
6. Open the map. It will load into Editor with default settings, which can be modified within Editor.

### File structure information

As you probably already know, when you create a world in Minecraft, that world is stored in the **minecraftWorlds** folder in your **com.Mojang** folder.
When you create a project in Editor, that file is also a world, so it is also stored in the **minecraftWorlds** folder but it is invisible to non-Editor Minecraft unless you import it.
The Editor project file goes into the **projectbackups** folder only when you export it.
