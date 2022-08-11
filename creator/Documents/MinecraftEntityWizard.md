---
author: mammerla
ms.author: v-jillheaden
title: Getting Started with Minecraft Entity Wizard
ms.prod: gaming
description: A tutorial covering how to create a custom entity model utilizing the Minecraft Entity Wizard tool in Blockbench
---

# Getting Started with the Minecraft Entity Wizard

If you are new to Minecraft Add-On development, creating your first working behavior pack and custom entity can take a lot of time and research. The Minecraft Entity Wizard for Blockbench aims to make it as easy as possible to do these first steps, to create a custom entity and to add it to your world. From there, you can step by step build on your entity, change the model, or add your own behavior.

### Building a Grizzly Bear with the Minecraft Entity Wizard

>[!VIDEO https://www.microsoft.com/en-us/videoplayer/embed/RWMmJb]

Blockbench itself is a 3D modeling program with native support for many Minecraft 3D model formats. The Entity Wizard is a plugin for Blockbench that can be installed through the built-in plugin store. Once you have created your basic entity in the Entity Wizard, you can continue to use Blockbench to modify the model, and you can edit the behavior in an external program (more on that later).

To give you a starting point, the Entity Wizard offers most of Minecraft's vanilla mobs as presets. You can choose the one that is closest to the mob you want to create. For example, if you want to create a shark, choose the dolphin preset. There are also stripped down "basic" presets that you can use if you are a more experienced addon creator and you want to build your behavior from scratch.

--------

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to add the Minecraft Entity Wizard plugin to Blockbench.
> - Understand the steps taken to create a custom entity with the Wizard.
> - Export out the entity to use within Minecraft: Bedrock Edition.

--------

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- Either have [Blockbench](https://blockbench.net) installed or access to [Blockbench web app](https://web.blockbench.net)
- [Getting Started with Add-On Development](GettingStarted.md)

## Installation

Once you have downloaded and installed [Blockbench](https://blockbench.net), you can directly install the Entity Wizard from within the program.

> [!TIP]
> If you do not want to install the app, or you are using a mobile device like a tablet, you can also use the plugin in the [Blockbench web app](https://web.blockbench.net). Most parts of the program work the same in the web app, but saving files requires a few extra steps.

### Adding the Minecraft Entity Wizard

1. In Blockbench, navigate to **File** and select **Plugins**.
1. Switch the tab to the **Available** tab.
1. Locate the plugin **Minecraft Entity Wizard**, either by scrolling through the list of available plugins, or via the search box.
1. Click on **Install** to add the plugin to Blockbench.

## The Wizard

Once the plugin is installed, you can now use the Minecraft Entity Wizard to start creating your first Entity with the plugin.

1. Click the yellow banner on the start screen to open the wizard.
    1. Alternatively, navigate to **Filter** and select **Create Bedrock Entity** to open the wizard.
1. Click the **Let's Go-button** to get started.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_select_from_filter.png" alt-text="Image showcasing the alternate route of selecting Filter and then selecting Create Bedrock Entity":::

The wizard will guide you through all the steps required to create your custom entity. To navigate the wizard, use the **Back** and **Next** buttons at the bottom of the wizard to navigate between pages.

> [!CAUTION]
> You can also close the dialog and select **Keep** to keep your current state and inputs. However, closing Blockbench entirely **will** discard your input.

### Name

The Display Name is the name that the entity will later be called in Minecraft. It will appear in the spawn egg name, in chat, and in other places in the interface. This name also supports translations into different languages.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_naming.png" alt-text="Minecraft Entity Wizard showcasing where Creators can set the Name and Identifier for their new entity.":::

> [!NOTE]
> The **Identifier** is the internal name used within Minecraft that is commonly used in commands and in other places to identify this type of entity.

### Appearance

On this page, you can select the appearance of your entity from a list of presets. The appearance includes model, texture, animations, and sounds. At a later step, you will be able to edit and modify this model in Blockbench.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_Appearance.png" alt-text="Minecraft Entity Wizard showcasing the Appearance Tab":::

> [!NOTE]
> If you currently have a model opened inside Blockbench, you may also pick this model as your starting point.

### Behavior

The behavior tab determines how your custom entity behaves and interacts with the world.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_behavior.png" alt-text="Minecraft Entity Wizard showcasing the behavior tab":::

> [!WARNING]
> It is recommended for beginners to use the behavior from the same mob as the appearance, to avoid conflicts.

Appearance and behavior often work hand in hand. As an example, if you mix the appearance of a wolf with the behavior of a sheep (a sheep in wolf's clothing), you will quickly notice that the wolf in Minecraft does not come with a grazing animation, so it will look like the grass below them just pops off.

### Spawn Egg

The spawn egg tab allows you to set the spawn egg that is the item used to spawn the custom entity.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_spawn_egg.png" alt-text="Minecraft Entity Wizard showcasing the spawn egg tab":::

There are three ways to define the spawn egg:

- **Colors:** Use the two-color pickers to select the background and foreground colors on the default spawn egg icon.
- **Custom Texture:** Select a custom texture for your spawn egg icon. You can create the texture in a regular image editor, such as Paint.NET or Photoshop. The image should be a PNG file, ideally with a resolution of 16 by 16 pixels and a transparent background.
- **None:** Do not generate a spawn egg at all. If you select this option, you will not find a spawn egg in the creative inventory, instead you can summon the entity using commands.

### Exporting

You have now entered all the information that is necessary to create the entity. The Next Steps tab allows you to select an export method to create a resource and behavior pack to load the entity into your world.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_export.png" alt-text="Minecraft Entity Wizard showcasing the Next Steps tab":::

In the Blockbench desktop app, there are up to three methods available to save your pack;

- **Export Packs:** Select this option if you just want to create a new pack with your custom entity on your computer.
- **Integrate into Pack:** If you have an existing addon that you are working on your computer, you can select this option and then select your addon from the list below to integrate your new custom entity into this existing pack.
- **Export as MCAddon:** This option will generate a .mcaddon file and save it to your computer. You can simply open this file to load your addon into Minecraft, or you can share this file with friends. If you select this option, you will not be able to directly edit your model in Blockbench after exporting the addon.

> [!TIP]
> In the web app, only the option to export your pack as an MCAddon is available.

> [!IMPORTANT]
> The **Integrate into Pack** option is only available if you have a behavior pack and a resource pack already imported in Minecraft. Upon launching Blockbench for the first time, you may not see all available export options. To quickly enable this, you can use the following steps.
>
> 1. Create an entity.
> 1. Export to .mcaddon.
> 1. double-click the .mcaddon to import it.
>    1. If Minecraft is open when import has started you will need to relaunch it.
>    1. If it was closed it will launch as part of the export process.
> 1. Minecraft recognizes the pack exists.
> 1. create another entity.
> After this, the third option will be accessible.

Depending on the export option you have selected, you may need to enter some information about the Add-On that the wizard is about to create.

### Exporting to Minecraft Education Edition

In Blockbench, there is a checkbox for the option to target **Minecraft Education Edition**. Go to File > Preferences > Settings > Export and scroll down to find the **Entity Wizard: Target Education Edition** checkbox.

Not all entities may be supported in Education Edition due to version differences. For example, if Education Edition is version 1.17, then entities from Vanilla Bedrock version 1.19 (such as allay, frog, tadpole and warden) are not supported.

### Pack Name

Enter the name of your pack. This name will be used both for the generated file, as well as for the name in the pack menu in Minecraft.

### Pack Icon

The pack icon is optional. You can upload an image as an icon to represent your pack in the pack menu. The image should be a PNG file, the recommended resolution is 64 by 64 pixels.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEnityWizard_next_steps.png" alt-text="Image showcasing the next steps section of the last step in the Minecraft Entity Wizard":::

## Installing the pack

To enable your packs for the first time, you need to add the behavior pack to your Minecraft world. Open the world settings and locate the Behavior Packs section. Find your new pack and activate it. Activating the behavior pack will also automatically activate the connected resource pack. This means that you now have the full addon installed into your world.

> [!TIP]
> You can view a detailed step-by-step walkthrough on how to enable tutorial in the [Behavior Pack](BehaviorPack.md#testing-the-pack) tutorial.

Enter the world and follow the instructions in the wizard to spawn your custom entity. Usually, you can do this by getting a spawn egg from the creative inventory and using it.

> [!NOTE]
> Alternatively, if you have exported your addon as a `.mcaddon` file, you can open this file in order to automatically add the packs into Minecraft.

## Modifying your entity

### Model and animations

Since you are already in Blockbench, you can continue to use the program to edit the model, textures and animations. To do that, press the blue button in the bottom right called **Edit Model**.
> [!CAUTION]
> This option is not available if you have exported your addon as an `.mcaddon` file.

:::image type="content" source="Media/MinecraftEntityWizard/MinecraftEntityWizard_edit1.png" alt-text="Image showcasing how to edit an existing entity in the Minecraft Entity Wizard":::

You can learn how to model and animate in this tutorial playlist: [ArtsByKev Blockbench Tutorials](https://www.youtube.com/watch?v=U9FLteWmFzg&list=PLvULVkjBtg2SezfUA8kHcPUGpxIS26uJR)

More information on Blockbench can be found on the [Blockbench Wiki](https://www.blockbench.net/wiki/).

### Behavior

If you want to edit the behavior and other aspects of your entity, you need to use a code editor. The wizard will present you with an option to open the packs in Visual Studio Code, a code editor that is popular for addon development for Minecraft: Bedrock Edition. You can learn how to [set up Visual Studio Code for addon development](gettingstarted.md#visual-studio-code) under this link.

Custom entity behavior is a huge topic, and this article won't attempt to touch on it. Instead, here are some helpful resources to help you get started:

> [!div class="nextstepaction"]
> [Introduction To Behavior Packs](BehaviorPack.md)

To view all of the available behaviors, properties, and AI Goals that an entity can use, you can go to the Entity JSON Reference Documentation.

> [!div class="nextstepaction"]
> [Entity JSON Documentation](../Reference/Content/EntityReference/index.yml)

## What's Next?

Want to learn more about building with Blockbench? The Blockbench Wiki has step by step guides and reference documentation for modeling, texturing, and animating any custom creation you can imagine.

> [!div class="nextstepaction"]
> [Blockbench Wiki](https://www.blockbench.net/wiki/)

The Blockbench Quick Start guide can help lead you to the specific document that you’re looking for and is a great way to discover relevant external guides and videos.

> [!div class="nextstepaction"]
> [Blockbench Quick Start](https://www.blockbench.net/quickstart)
