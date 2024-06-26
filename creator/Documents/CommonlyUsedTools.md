---
author: neonerz
ms.author: mikeam
title: Commonly Used Tools
description: "A guide detailing popular tools used to modify Minecraft content"
ms.service: minecraft-bedrock-edition
---

# Commonly Used Tools

There are a wide variety of tools that have been created for the purpose of increasing the efficiency of Minecraft content creation. Tools can help with a variety of things from creating skins, to crafting beautiful custom worlds. This article will explore some of the most commonly used tools currently available and some of their uses.

>[!IMPORTANT]
>These tools are provided by external, third-party contributors and are not Mojang/Microsoft offerings. Users should use at their own discretion.

## Creating maps

Map creation is one of the largest and most time-consuming components of content creation. That being said, there are a significant number of map creation tools available to make this process significantly more efficient.

### [Chunker](https://chunker.app/)

Chunker is a web tool for Minecraft: Bedrock Edition worlds. It's specifically useful for converting worlds between Minecraft: Java Edition and Bedrock Edition, as well as easily configuring world settings. Conversion includes level settings, chunk data (such as blocks and biomes), dimensions, and more. To learn more about using Chunker, you can begin with the [Chunker Overview](ChunkerOverview.md) guide, which goes over the steps needed to do simple conversions and leads to more advanced features of the tool.

### [Amulet](https://www.amuletmc.com/)

Amulet is a utility tool designed to edit Minecraft maps. It can come in handy for world development, having helpful abilities such as replacing blocks in a selected area and the ability to create and remove chunks within a world. There's also a massive variety of community-made custom plugins referred to as "operations" that allow creators to perform a wide variety of tasks. Included below is a list of operations that can be useful for map creation:

- [Abrightmore's Amulet operations](https://github.com/abrightmoore/Amulet-Editor-Operations)
- [PREMIEREHELL's Amulet operations](https://github.com/PREMIEREHELL/Amulet-Plugins)
- [StealthyExpert's Amulet operations](https://github.com/StealthyExpertX/Amulet-Plugins)
- [5uso's Amulet operations](https://github.com/5uso/AmuletScripts)

### [Image Map](https://github.com/tryashtar/image-map)

Image Map is a small application for both Bedrock Edition and Java Edition that can convert images to Minecraft maps. This can be used to add custom banners and art inside of Minecraft worlds.

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

## Creating Models and Visuals

### [Blockbench](https://blockbench.net/)

Blockbench is a free entity-modeling application for creating working Bedrock Edition entity models, as well as creating textures and the ability to animate them for Bedrock Edition maps. Blockbench has external plugin support, enabling developers to create additional tools to use within the program. It also has the ability to export models into a standard OBJ format, Java Edition block model, and more.

### [Snowstorm](https://snowstorm.app/)

Snowstorm is a small application for Bedrock Edition created by the developer of Blockbench that can be used to create custom particle effects that are usable in-game. To get started with [Snowstorm](./SnowstormOverview.md), visit a [tutorial](./ParticleEffects.md) on building particle effects with Snowstorm.

## JSON Definition Editing

### [Blockception VSCode Extension](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)

An extension that provides support for files such as .mcfunction, .json and .lang. This extension adds features like completion, validations, formatters, diagnostics, cheat-sheets, code-actions, generation of files, and development tools to help develop Minecraft: Bedrock Edition Addons or Minecraft Education. It's recommended that you use the Dark+ theme for the best color highlighting.

### [bridge.](https://bridge-core.app)

bridge. is a light-weight, dedicated editor for Minecraft Add-Ons that makes it easy to get started with Add-Ons and later scales with your growing needs. It requires zero setup and provides you with an [instantly bootable development environment](https://editor.bridge-core.app/) with syntax highlighting, [code completions and file diagnostics](https://bridge-core.app/guide/features/index.html#auto-completions-and-validation) all designed to make developing Minecraft Add-Ons more convenient. To read more, please refer to bridge.'s [getting started guide](https://bridge-core.app/guide/index.html) or [learn more about why you should use bridge.](https://bridge-core.app/guide/why-bridge.html)

bridge. is [open source](https://github.com/bridge-core/editor) and freely available to all Add-On creators on desktop and mobile platforms.

### [NPC DialogueDesigner](https://jannisx11.github.io/dialogue-designer/)

DialogueDesigner is a Web application for Bedrock Edition created by the developer of Blockbench and Snowstorm that can be used to create NPC dialogues, as shown in this handy tutorial: [NPC DialogueDesigner](NPCDialogueDesigner.md).

## Creating Skins and Resource Packs

Skin and resource pack creation can be done primarily within any image-editing software, but there are also a few helpful applications that can make this process easier.

### [Blockbench](https://blockbench.net/)

Blockbench has a skin editor that allows skins to be edited in 3D (or 2D) with Blockbench's advanced paint tools such as mirror painting and color palettes. It has presets to create entity textures for resource packs as well.

Skins can be packaged for the Marketplace using the [Skin Pack Packager plugin](https://www.blockbench.net/plugins/skin_packager) in Blockbench.

### [PMCSkin3D](https://www.planetminecraft.com/pmcskin3d/)

PMCSkin3D is a web-based dedicated skin editor from PlanetMinecraft. It has a 3D and 2D as well as split-screen mode and advanced brush options. There is also a lite edition with simplified tools.

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
