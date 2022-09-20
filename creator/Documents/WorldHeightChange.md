---
author: mammerla
ms.author: mikeam
title: World Height Changes in Caves and Cliffs Part 2
ms.prod: gaming
description: "Effects of world height changes in Caves and Cliffs: Part 2 on creators."

---

# World Height Changes in Caves and Cliffs Part 2

With the Caves and Cliffs: Part 2 update, world height will change to add more area above and below existing Minecraft worlds. Prior to the update, world height had a range of `y` values from `0` to `256`. With the update, world height now has a range of `y` values from `-64` to `320`.

All existing worlds will be automatically updated to reflect the new world height values when launching version 1.18. The new area above your world (rows `257` to `320`) will be filled with air blocks and you can edit your world to choose how to generate blocks for the new area below your world (rows `-64` to `-1`).

> [!IMPORTANT]
> You can force your Minecraft worlds to keep the old world height values (`0` to `256`) by [setting a base game version](BaseGameVersioning.md) of **less than 1.18**. All worlds with no base game version or base game versions of 1.18 or later will be automatically updated to use the new world height values.
>
> You may want to set a base game version if players will encounter issues with your world or gameplay experience with the new world height values.

> [!TIP]
> To learn more about old world types, please visit [Old Worlds Types in Minecraft: Bedrock Edition](https://feedback.minecraft.net/hc/en-us/articles/4411688594317-Old-Worlds-Types-in-Minecraft-Bedrock-Edition-FAQ-)

## Updating Your Minecraft World

Existing Minecraft worlds that use the **Infinite** World Type will be updated differently than **Flat** worlds.

### Updating Infinite Worlds

Before you load your existing world, you will be prompted to update your world when launching it in 1.18.

This will only apply to previously explored and saved chunks - new chunks will be generated with caves and blocks in the new area (rows `-64` to `-1`)

> [!WARNING]
> In order for world generation to work properly, you will need to have a layer of bedrock located on the `0` y coordinate plane. Without the bedrock layer, the maps will not generate new chunks when updating to `1.18`.

To update your existing Minecraft world to reflect the new world height values, follow these instructions:

1. On the main menu, select **Play**.
1. Select the world that you want to update.
1. Select **Play**.
1. A pop-up called **World Update** will appear, prompting you to update your world.
    :::image type="content" source="Media/WorldHeightChange/UpdateWorldPopUp.png" alt-text="Image alerting Creators about updating to the new world generation and a prompt to make a backup copy of the world":::

Included in the the pop up is a checkbox that will also create a back up of your world that will still be tied to a version of Minecraft before 1.18.

5. Select **Update and Play**

### Updating Flat Worlds

Similar to an Infinite World, a Flat World has two update scenarios based on whether it's an existing flat world created before 1.18 or if it's a newly generated flat world.

#### Upgrading Existing Flat Worlds

Launching an existing Flat World in 1.18 will adjust the world height to the new values of `-64`,`320`.  However, block placements and chunks will remain in their original locations with the newly added spaces being filled with air blocks.

#### Creating a New Flat World

When creating a new Flat World, the map will automatically be updated to reflect the new world height values by shifting the entire world down so that the bottom of the world remains the lowest point in the overworld bounds. This means that the previous bottom of the Flat World (row `0`) will now be set at a height of row `-64` and the new area above the previous world height will be filled with air blocks.
