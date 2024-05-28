---
author: iconicNurdle
ms.author: mikeam
title: "Experimental Features in Minecraft: Bedrock Edition"
description: "An overview of experimental content available to creators in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Experimental Features in Minecraft: Bedrock Edition

> [!NOTE]
> This documentation is segmented into `Stable` and `Experimental` document sets. To see full documentation about experimental features and APIs, be sure to select the [Minecraft Bedrock Experimental APIs option](/minecraft/creator/documents/experimentalfeaturestoggle?view=minecraft-bedrock-experimental).
![image showing the Document Versions Dropdown.](Media/ExperimentalFeatures/ExperimentalApiDocs.png)

With each retail version of Minecraft: Bedrock Edition, there are a few features that are currently in an experimental state. Experimental Features can be toggled on for creators who are interested in testing the latest features offered in the beta, preview, and retail versions of Minecraft.

> [!NOTE]
> The Experiments toggle list is subject to frequent changes and could have entirely different options from the ones in your own version of Minecraft. Also, the screen shots shown here might look different.

## Experimental Features available in Minecraft: Bedrock Edition

There are three sets of experimental features available, depending on whether you are using a retail version of Minecraft, the latest version of Minecraft Preview, or a beta version of Minecraft.

### Retail

These are the currently available Experimental toggles in the **1.20.81** retail build at the time of this writing.

GAMEPLAY - Change the way your world works

| Experimental Toggle | Description |
|:------|:------|
|Villager Trade Rebalancing |Contains updated trades for villages for the purpose of rebalancing|
|Update 1.21 | New features and content for Minecraft 1.21 |

ADD-ON CREATORS - For creators of game packs and other add-ons

| Experimental Toggle | Description |
|:------|:------|
|Holiday Creator Features | Add data-driven block and item technology to customize block shape, rotation, damage and more |
|Custom Biomes| Create custom biomes and change world generation |
|Upcoming Creator Features | Includes actor properties and adjustable fog parameters |
|Beta APIs| Use "-beta" versions of API modules in add-on packs |
|Experimental Cameras | Contains example camera presets (the camera command is no longer experimental) |

### Preview

These are the currently available Experimental toggles in the **1.21.10.41** preview build at the time of this writing.

GAMEPLAY - Change the way your world works

| Experimental Toggle | Description |
|:------|:------|
|Villager Trade Rebalancing |Contains updated trades for villages for the purpose of rebalancing|

ADD-ON CREATORS - For creators of game packs and other add-ons

| Experimental Toggle |Features |
|:------|:------|
|Holiday Creator Features | Add data-driven block and item technology to customize block shape, rotation, damage and more |
|Custom Biomes| Create custom biomes and change world generation |
|Upcoming Creator Features | Includes actor properties and adjustable fog parameters |
|Beta APIs| Use "-beta" versions of API modules in add-on packs |
|Creator Cameras | Contains new third person over the shoulder follow_orbit camera preset |
|Render Dragon Features for Creators | Enable the deferred rendering pipeline. Requires a PBR-enables resource pack and compatible hardware.|

### Beta

Listed below are the currently available Experimental Features in the latest beta build at the time of this writing.

> [!NOTE]
> Differences between available features are marked in **Bold**.

GAMEPLAY - Change the way your world works

| Experimental Toggle | Description |
|:------|:------|
|Villager Trade Rebalancing |Contains updated trades for villages for the purpose of rebalancing|

ADD-ON CREATORS - For creators of game packs and other add-ons

| Experimental Toggle |Features |
|:------|:------|
|Holiday Creator Features |Data-driven block and item features. We are receiving feedback on these features from Marketplace creators and map-makers.|
|Custom Biomes|Exposing parameters for biome generation to creators, enabling them to create their own unique biome configurations. |
|Upcoming Creator Features |Experimental features including entity permutations and fogs/volumes. We are receiving feedback on these features from Marketplace creators and map-makers.|
|Beta APIs|Provides "-beta" level script APIs (e.g., @minecraft/server 1.1.0-beta), as well as GameTest Framework APIs. |
|Molang Features |Container for Molang experimental queries and language features that aren't tied to other experimental toggles. |

## How do I activate an Experimental Features toggle for my world?

You can activate an experimental toggle for any of your new or existing worlds.

> [!WARNING]
> Activating experimental features that are still under development means that your world might crash, break, or not work with future updates.

If you're planning to build content that you want to share with the community, it would be best to do it in a non-experimental world.

### Toggle Experimental Features in a New World

If you are building a new world from scratch to test experimental features, you can toggle which features you want enabled in the **Game** Settings.

1. Under **Game** settings, navigate down to **Experiments** and select a toggle to enable the feature.

   ![Image showcasing 4 toggles for experimental features available in Minecraft](Media/ExperimentalFeatures/ExperimentalToggle_21.png)

2. When you get the popup asking **Activate Experimental Gameplay?**, select **Activate Experiments**.

   ![image showing a pop up to confirm if you want ot activate experimental features in Minecraft.](Media/ExperimentalFeatures/ActivateExperiments.png)

### Toggle Experimental Features in an Existing World

If you want to add experimental features to an existing world, open that world's game settings and activate the toggles just like you would for a new world.

> [!NOTE]
> A copy of your world will be generated automatically after you activate an experimental feature toggle. You can also manually create copies of your world as an extra precaution, in case something goes wrong.

1. Select the world you want to add experimental features to and select the **Edit** button.

   ![image of a beta world with the edit button selected](Media/ExperimentalFeatures/Edit.png)

2. Under **Game** settings, navigate down to **Experiments** and select a toggle to enable the feature.

   ![Image showcasing toggles for experimental features available in Minecraft](Media/ExperimentalFeatures/ExperimentalToggle_120.png)

3. When you get the popup asking **Activate Experimental Gameplay?**, select **Activate Experiments**.

   ![image showing a pop up to confirm if you want to activate experimental features in Minecraft](Media/ExperimentalFeatures/ActivateExperiments_120.png)

After you select **Activate Experiments**, a copy of your existing world will be created. The copy will have the same name as the original world with "Copy of..." added in front of it.

![image showing a duplicated world](Media/ExperimentalFeatures/CopyOfWorld.png)

### Verify that the World has Experimental Features Enabled

After you've created a world that has an experimental feature toggle enabled, your world will get a **tag** next to the game mode in your Worlds list that says **Experimental**.

![image showcasing a survival world that has the Experimental tag applied](Media/ExperimentalFeatures/SurvivalExperimental.png)

Another way to identify if your world is using experimental toggles is to visit the settings for your world. In the **Game** world settings, scroll down to the **Experiments** section to see which experiments are enabled.

> [!IMPORTANT]
> Worlds that use experimental features cannot be restored to a non-experimental state.

## What's Next?

If you like experimenting and testing things in Minecraft, you could learn more about the GameTest Framework.

> [!div class="nextstepaction"]
> [Introduction to the GameTest Framework](GameTestGettingStarted.md)
