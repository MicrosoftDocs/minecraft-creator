---
author: v-josjones
ms.author: v-josjones
title: Getting Started with Blockbench Entity Wizard
ms.prod: gaming
---

# Getting Started with Blockbench Entity Wizard

If you are new to Minecraft Add-On development, creating your first working behavior pack and custom entity can take a lot of time and research. The Blockbench Bedrock Entity Wizard aims to make it as easy as possible to do these first steps, to create a custom entity and to add it to your world. From there, you can step by step build on your entity, change the model, or add your own behavior.

Blockbench itself is a 3D modeling program with native support for many Minecraft 3D model formats. The Entity Wizard is a plugin for Blockbench that can be installed through the built-in plugin store. Once you have created your basic entity in the Entity Wizard, you can continue to use Blockbench to modify the model, and you can edit the behavior in an external program (more on that later).

To give you a starting point, the Entity Wizard offers most of Minecraft's vanilla mobs as presets. You can choose the one that is closest to the mob you want to create. For example, if you want to create a shark, choose the dolphin preset. There are also stripped down "basic" presets that you can use if you are a more experienced addon creator and you want to build your behavior from scratch.

--------

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to add the Blockbench Entity Wizard plugin to Blockbench.
> - Understand the steps taken to create a custom entity with the Wizard.
> - Export out the entity to use within Minecraft:Bedrock Edition.

--------

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- Either have [Blockbench](https://blockbench.net) installed or access to [Blockbench web app](https://web.blockbench.net)
- [Getting Started with Add-on Development](GettingStarted.md)

## Installation

Once you have downloaded and installed [Blockbench](https://blockbench.net), you can directly install the Entity Wizard from within the program.

> [!TIP]
> If you do not want to install the app, or you are using a mobile device like a tablet, you can also use the plugin in the [Blockbench web app](https://web.blockbench.net). Most parts of the program work the same in the web app, but saving files requires a few extra steps.

### Adding the Bedrock Entity Wizard

1. In Blockbench, navigate to **File** and select **Plugins**.
1. Switch the tab to the **Available** tab.
1. Locate the plugin **Bedrock Entity Wizard**, either by scrolling through the list of available plugins, or via the search box.
1. Click on **Install** to add the plugin to Blockbench.

[Image Incoming (Not available through drop-down today)]

Once the plugin is installed, click the yellow banner on the start screen or navigate to Filter and Create Bedrock Entity to open the wizard.

## The Wizard

Once the plugin is installed, you can now use the Blockbench Entity Wizard to start creating your first Entity with the plugin.

:::image type="content" source="Media/BlockbenchEntityWizardGettingStarted/BlockbenchEntityWizard.png" alt-text="Image showcasing the Blockbench Entity Wizard start up page. Contains a single button marked Let's Go":::

1. Click the yellow banner on the start screen to open the wizard.
    1. Alternatively, navigate to **Filter** and select **Create Bedrock Entity** to open the wizard.
1. Click the **Let's Go-button** to get started.

The wizard will guide you through all the steps required to create your custom entity. To navigate the wizard, use the **Back** and **Next** buttons at the bottom of the wizard to navigate between pages.

> [!CAUTION]
> You can also close the dialog and select **Keep** to keep your current state and inputs. However, closing Blockbench entirely **will** discard your input.

### Name

The Display Name is the name that the entity will later be called in Minecraft. It will appear in the spawn egg name, in chat, and in other places in the interface. This name also supports translations into different languages.

:::image type="content" source="Media/BlockbenchEntityWizardGettingStarted/BlockbenchEntityWizard_name.png" alt-text="Blockbench Entity Wizard showcasing where Creators can set the nane and Identifier for their new entity.":::

> [!NOTE]
> The **Identifier** is the internal name used within Minecraft that is commonly used in commands and in other places to identify this type of entity.

### Appearance

On this page, you can select the appearance of your entity from a list of presets. The appearance includes model, texture, animations, and sounds. At a later step, you will be able to edit and modify this model in Blockbench.

:::image type="content" source="Media/BlockbenchEntityWizardGettingStarted/BlockbenchEntityWizard_Appearance.png" alt-text="Blockbench Entity Wizard showcasing the Apperance Tab":::

> [!NOTE]
> If you currently have a model opened inside Blockbench, you may also pick this model as your starting point.

### Behavior

The behavior tab determines how your custom entity behaves and interacts with the world.

:::image type="content" source="Media/BlockbenchEntityWizardGettingStarted/BlockbenchEntityWizard_behavior.png" alt-text="Blockbench Entity Wizard showcasing the behaivor tab":::

> [!WARNING]
> It is recommended for beginners to use the behavior from the same mob as the appearance, to avoid conflicts.

Appearance and behavior often work hand in hand. As an example, if you mix the appearance of a wolf with the behavior of a sheep (a sheep in wolf's clothing), you will quickly notice that the wolf in Minecraft does not come with a grazing animation, so it will look like the grass below them just pops off.

### Spawn Egg

The spawn egg tab allows you to set the spawn egg that is the item used to spawn the custom entity.

:::image type="content" source="Media/BlockbenchEntityWizardGettingStarted/BlockbenchEntityWizard_spawn_egg.png" alt-text="Blockbench Entity Wizard showcasing the spawn egg tab":::

There are three ways to define the spawn egg:

- **Colors:** Use the two-color pickers to select the background and foreground colors on the default spawn egg icon.
- **Custom Texture:** Select a custom texture for your spawn egg icon. You can create the texture in a regular image editor, such as Paint.NET or Photoshop. The image should be a PNG file, ideally with a resolution of 16 by 16 pixels and a transparent background.
- **None:** Do not generate a spawn egg at all. If you select this option, you will not find a spawn egg in the creative inventory, instead you can summon the entity using commands.

## Exporting

You have now entered all the information that is necessary to create the entity. The Next Steps tab allows you to select an export method to create a resource and behavior pack to load the entity into your world.

:::image type="content" source="Media/BlockbenchEntityWizardGettingStarted/BlockbenchEntityWizard_next_steps.png" alt-text="Blockbench Entity Wizard showcasing the Next Steps tab":::

In the Blockbench desktop app, there are up to three methods available to save your pack;

- **Export Packs:** Select this option if you just want to create a new pack with your custom entity on your computer.
- **Integrate into Pack:** If you have an existing addon that you are working on your computer, you can select this option and then select your addon from the list below to integrate your new custom entity into this existing pack.
- **Export as MCAddon:** This option will generate a .mcaddon file and save it to your computer. You can simply open this file to load your addon into Minecraft, or you can share this file with friends. If you select this option, you will not be able to directly edit your model in Blockbench after exporting the addon.

> [!TIP]
> In the web app, only the option to export your pack as an MCAddon is available.

Depending on the export option you have selected, you may need to enter some information about the Add-On that the wizard is about to create.

### Pack Name

Enter the name of your pack. This name will be used both for the generated file, as well as for the name in the pack menu in Minecraft.

### Pack Icon

The pack icon is optional. You can upload an image as an icon to represent your pack in the pack menu. The image should be a PNG file, the recommended resolution is 64 by 64 pixels.

## Installing the pack

 To do

## Modifying your entity

 To do

### What's Next?

Want to learn more about building with Blockbench? The Blockbench Wiki has step by step guides and reference documentation for modeling, texturing, and animating any custom creation you can imagine.

> [!div class="nextstepaction"]
> [Blockbench Wiki](https://www.blockbench.net/wiki/)

The Blockbench Quick Start guide can help lead you to the specific document that you’re looking for and is a great way to discover relevant external guides and videos.

> [!div class="nextstepaction"]
> [Blockbench Quick Start](https://www.blockbench.net/quickstart)
