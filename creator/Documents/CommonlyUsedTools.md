---
author: neonerz
ms.author: mikeam
title: Commonly Used Tools
ms.prod: gaming
---

# Commonly Used Tools

There are a wide variety of tools that have been created for the purpose of increasing the efficiency of Minecraft content creation. Tools can help with a variety of things from creating skins, to crafting beautiful custom worlds. This article will explore some of the most commonly used tools currently available and some of their uses.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - A variety of tools useful for content creation, including transferring content between editions.

### Requirements

It’s recommended that the following be completed before beginning this tutorial before using tools that convert between Minecraft editions.

- [Differences Between Minecraft: Bedrock Edition and Minecraft: Java Edition](DifferencesBetweenBedrockAndJava.md)

## Creating maps

Map creation is one of the largest and most time-consuming components of content creation. That being said, there are a significant number of map creation tools available to make this process significantly more efficient.

### [Chunker](https://chunker.app/)

Chunker is a web tool for Minecraft: Bedrock Edition worlds. It's specifically useful for converting worlds between Minecraft: Java Edition and Bedrock Edition, as well as easily configuring world settings. Conversion includes level settings, chunk data (such as blocks and biomes), dimensions, and more. To learn more about using Chunker, you can begin with the [Chunker Overview](ChunkerOverview.md) guide, which goes over the steps needed to do simple conversions and leads to more advanced features of the tool.

### [WorldPainter](https://www.worldpainter.net/)

World Painter is an application for Java Edition that allows creators to create custom worlds using tools similar to a traditional painting application. It includes features such as sculpting and molding terrain, as well as the ability to paint in materials such as snow and ice, or entire builds like trees and houses. WorldPainter saves custom worlds in the Java Edition world format and would need to be converted to Bedrock Edition-compatible worlds before they can be used in Bedrock Edition.

### [Amulet](https://www.amuletmc.com/)

Amulet is a utility tool designed to edit Minecraft maps. It can come in handy for world development, having helpful abilities such as replacing blocks in a selected area and the ability to create and remove chunks within a world. There's also a massive variety of community-made custom plugins referred to as "operations" that allow creators to perform a wide variety of tasks. Included below is a list of operations that can be useful for map creation:

- [Abrightmore's Amulet operations](https://github.com/abrightmoore/Amulet-Editor-Operations)
- [PREMIEREHELL's Amulet operations](https://github.com/PREMIEREHELL/Amulet-Plugins)
- [StealthyExpert's Amulet operations](https://github.com/StealthyExpertX/Amulet-Plugins)
- [5uso's Amulet operations](https://github.com/5uso/AmuletScripts)

### [Image Map](https://github.com/tryashtar/image-map)

Image Map is a small application for both Bedrock Edition and Java Edition that can convert images to Minecraft maps. This can be used to add custom banners and art inside of Minecraft worlds.

### [bridge.](https://bridge-core.app)

bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior packs, resource packs, skin packs and world templates and provides a powerful work environment for JavaScript, JSON, functions and more. bridge. also allows you to choose between the tree editor or raw text editor for JSON files. A summary of bridge.'s most notable features can be found [here](https://github.com/bridge-core/editor/blob/main/README.md). Unleash the full power of add-ons with [bridge. extensions](https://bridge-core.app/extension-docs/) and make use of rich auto-completions provided as you navigate through a file.

You can also visit the [github repo](https://github.com/solvedDev/bridge.) by clicking the link provided.

## Server Based Tools

Many commonly used tools are designed to be used on Java Edition servers utilizing a server software known as [Spigot](https://www.spigotmc.org/), which is based on the Craftbukkit API. The following tools are plugins that work on servers running this software.

### [Fast Async WorldEdit (FAWE)](https://www.spigotmc.org/resources/fast-async-worldedit-voxelsniper.13932/)

WorldEdit is an in-game Minecraft map editor for Java Edition. It allows creators to perform a wide range of build-related commands, as well as utilize brushes that help sculpt Minecraft worlds. Some notable features include the ability to copy and paste selected areas, as well as rotate selected areas to face a different direction. This is especially useful when creating large builds with lots of repeating patterns. Linked here is the Fast Async WorldEdit project, a spinoff that includes some big performance boosts from the [original WorldEdit](https://www.curseforge.com/minecraft/mc-mods/worldedit), as well as some useful features for creative builders.

### [Voxel Sniper Flattened](https://github.com/mcparkournet/voxel-sniper-flattened)

Voxel Sniper Flattened is another in-game Minecraft map editor for Java Edition. It allows creators to edit any block in sight using an arrow (for replacing blocks) and gunpowder (for adding blocks). It contains a wide array of brushes that can be used for anything from precise block placements to large terraforming jobs. This plugin is a continuation of the [original VoxelSniper](https://dev.bukkit.org/projects/voxelsniper).

### [goBrush](https://www.spigotmc.org/resources/gobrush.23118/)

goBrush is a server plugin for Java Edition that adds in-game tools designed for custom terrain editing by using heightmap brushes instead of geometric shapes like tools such as WorldEdit and Voxel Sniper Flattened.

### [goPaint](https://www.spigotmc.org/resources/gopaint.27717/)

goPaint is a server plugin for Java Edition that allows creators to efficiently "paint" blocks with a variety of brush shapes.

## Creating Models

### [Blockbench](https://blockbench.net/)

Blockbench is a free entity-modeling application for creating working Bedrock Edition entity models, as well as creating textures and the ability to animate them for Bedrock Edition maps. Blockbench has external plugin support, enabling developers to create additional tools to use within the program. It also has the ability to export models into a standard OBJ format, Java Edition block model, and more.

### [Blockception VSCode Extension](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)

An extension that provides support for files such as .mcfunction, .json and .lang. This extension adds features like completion, validations, formatters, diagnostics, cheat-sheets, code-actions, generation of files, and development tools to help develop Minecraft Bedrock Addons or Minecraft Education Edition. It's recommended that you use the Dark+ theme for the best color highlighting.

### [Snowstorm](https://jannisx11.github.io/snowstorm/)

Snowstorm is a small application for Bedrock Edition created by the developer of Blockbench that can be used to create custom particle effects that are usable in-game.

## Creating Skins and Resource Packs

Skin and resource pack creation can be done primarily within any image-editing software, but there are also a few helpful applications that can make this process easier.

### [Blockbench](https://blockbench.net/)

Blockbench is also used in many character skin workflows alongside applications like Photoshop or Aseprite. 

### [Aseprite](https://www.aseprite.org/)

Aseprite is a purchasable art application designed with pixel-art in mind. It contains many tools that can help make skin and resource pack creation easier. Aseprite also has significant documentation and tutorials to help artists of all skill levels use the application effectively.

### [McSkin3d](https://github.com/paril/mcskin3d)

McSkin3D is software designed entirely with skin creation in mind. It has many features such as a built-in skin viewer that can be directly painted on and a split view showing both the skin in 3D alongside its 2D texture.

### [LookatMySkin](https://www.planetminecraft.com/mod/lookatmyskin-v10---skin-previewer/)

LookatMySkin is a skin previewer that allows you to edit a skin in your program of choice and instantly see it previewed on a 3D player model. It has a variety of features, such as limb posing, zoom, and adjustable background color. This can also be useful for taking screenshots of skins or quickly checking skins for oddities when posed in different ways.

## What's Next?

While there are many more tools that exist and are constantly being created to make Minecraft content creation easier, this is a great place to start. Creators should check back here often for newly added content and take advantage of all the available tools at their disposal.

Some of these tools allow you to modify NBT data. Learning about NBT and especially learning what *not* to do when editing it will save you from a world of trouble.

> [!div class="nextstepaction"]
> [Editing NBT safely](EditingNBTSafely.md)
