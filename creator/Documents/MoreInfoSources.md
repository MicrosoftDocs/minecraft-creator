---
author: mammerla
ms.author: mikeam
title: "More Sources of Info on Minecraft: Bedrock Edition"
description: "An overview of additional sources of information on Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# More Sources of Information about Minecraft: Bedrock Edition

Where possible, we aim to make the documentation here as comprehensive as we can get it - but the breadth of Minecraft possibilities can't be contained on just one website!

Here are many other handy references and sources of information that you can use when building Minecraft solutions.

## bedrock-samples GitHub repository

The [github.com/mojang/bedrock-samples](https://github.com/mojang/bedrock-samples) repository is a set of example definitions and assets adapted from the vanilla experience of Minecraft.

Importantly, there are two "branches" in the repository: a ["main" branch](https://github.com/Mojang/bedrock-samples/tree/main) which represents the latest major release of content (e.g., 1.20.80) and a ["preview" branch](https://github.com/Mojang/bedrock-samples/tree/preview) that represents the latest usually-weekly preview build of Minecraft (e.g., 1.21.20.21-preview). Information in the preview branch contains the latest cutting edge platform features, but be cautious as some advanced capabilities may be modified or removed before making it into "main" versions of Minecraft. Under the [Releases page](https://github.com/Mojang/bedrock-samples/releases), you can see downloadable versions of the source of this repo. Be sure to understand the [License Agreement](https://github.com/Mojang/bedrock-samples?tab=License-1-ov-file) of this repository.

The `bedrock-samples` GitHub repository is divided into several subfolders:

### bedrock-samples Packs

The samples you see in the [behavior_pack](https://github.com/Mojang/bedrock-samples/tree/main/behavior_pack) and [resource_pack](https://github.com/Mojang/bedrock-samples/tree/main/resource_pack) are derived from some in-game samples. Keep in mind that sometimes these samples are not comprehensive across all of what "vanilla gameplay" encompasses, or across all of the platform capabilities (for example, they don't demonstrate how you can build script-powered gameplay experiences.. but [you can](./ScriptingIntroduction.md))! Nevertheless, we'd strongly recommend downloading the bedrock-samples packs to use as "sample references" you can search through in a tool like Visual Studio Code to find an uncommonly used property on an item JSON component, for example.

### bedrock-samples Metadata

Where possible, we try to publish more and more lists of "Minecraft things" within the [`metadata` folder](https://github.com/Mojang/bedrock-samples/tree/main/metadata). The various folders whose name ends in `_modules` contain metadata such as canonical lists of ["default Minecraft mobs"](https://github.com/Mojang/bedrock-samples/blob/main/metadata/vanilladata_modules/mojang-entities.json) or a listing of [available Minecraft commands](https://github.com/Mojang/bedrock-samples/blob/main/metadata/command_modules/mojang-commands.json). Typically these files are more useful for tooling authors or creators that build very comprehensive add-ons or hosted experiences. Keep in mind that the schema of these various JSON files may change over time, so if you build tools that parse them, they would likely need to be updated, from time to time.

### bedrock-samples Documentation

The HTML files contained in the [documentation folder](https://github.com/Mojang/bedrock-samples/tree/main/documentation) are replicated and organized into the [Reference](./../Reference/index.yml) section of this site. However, if you need information on a brand new JSON definition in Minecraft Preview (but hasn't been integrated into this site) it may first show up in the [preview HTML documentation](https://github.com/Mojang/bedrock-samples/tree/preview/documentation).

### Changes over time

Because the repository is hosted on GitHub, you can use GitHub site features to view historical and change items for Minecraft. For example, the [preview commits page](https://github.com/Mojang/bedrock-samples/commits/preview/) will show you, week over week, what's new from a file perspective in Minecraft Preview. You can also see a summary of what's new for Minecraft from the [Minecraft Beta Changelog notes](https://aka.ms/MinecraftBeta).

## Network Protocol Documentation

Like many games, Minecraft is an engine split into two parts: there is a "Minecraft Server" where all of the game logic and world state definitions are hosted, and where management of players in the world happens, and a "Minecraft Client" that connects to the server, displays all of the graphics, plays sounds, and handles player inputs. This is true whether you're playing a game on a hosted server, or if you're playing a single player game on your phone. The Minecraft Client speaks to the Minecraft Server via a "protocol" - a pipeline of messages that conform to one of hundreds of types of "packet formats". For example, when a player types in a "slash command" in their client, it results in a Command Request packet being sent from client to server so that the server can process and run the command.

Implementing the Minecraft Protocol is a highly advanced task and not supported. Why? Well, it is basically guaranteed to break every time a new version of Minecraft is released. Or there may be new capabilities that are introduced over time that are hard to replicate in a "protocol implementation." That said, documentation on the Minecraft Protocol formats is available from a GitHub repository at [https://github.com/Mojang/bedrock-protocol-docs/](https://github.com/Mojang/bedrock-protocol-docs/). If nothing else, it can be an interesting way to peek at the internals of how Minecraft: Bedrock Edition works at a more fundamental level.

>[!IMPORTANT]
> The Minecraft protocol is not a formally supported API. The Minecraft Protocol changes from one release to the next - sometimes quite significantly - with no guarantee of backwards compatibility or support.
> Use at your own risk.

## Sample Repos

There are other sample repositories officially hosted by Mojang:

### minecraft-samples

The [minecraft-samples](https://github.com/microsoft/minecraft-samples) repository shows a number of samples otherwise discussed in this documentation across a number of different capabilities of Minecraft. You can see example custom entities, items, and mobs as well as some basic "starters" for creating your own projects.

### minecraft-scripting-samples

The [minecraft-scripting-samples](https://github.com/microsoft/minecraft-scripting-samples) repository is just like the `minecraft-samples` repo, but more focused on using script in various forms. It also includes a couple of starters if you wish to create a script-focused project.

### minecraft-gametests

The [minecraft-gametests](https://github.com/microsoft/minecraft-gametests) repository represents a handful of samples for building [GameTests](./GameTestGettingStarted.md), which are intended to be simple ways to build tests for Minecraft content.

## Community

One of the best things about Minecraft is that there is a large, passionate community of creators who build all kinds of things - and create sites, write docs, record podcasts, and create videos of their progress. They also discuss and ask questions on forums such as Discord or Reddit. Often, the best way to find information is to search on your favorite search engine or video website for just about any topic, and chances are, someone has probably tried it and talked about it.

Within Discord, you can visit channels such as `#bedrock-mechanics` on the Official Minecraft Discord at [https://discord.gg/minecraft](https://discord.gg/minecraft).

You can see some great community-run sites via [bedrock.dev](https://wiki.bedrock.dev) and the [Minecraft wiki (minecraft.wiki)](https://minecraft.wiki) amongst many others.

There is also an [amazing Discord community focused on building Add-Ons for Bedrock - (bedrock.dev)](https://wiki.bedrock.dev/discord.html).

>[!IMPORTANT]
> This section contains links to external, community run sites and forums. Use at your own discretion.

## Tools

Of course, every creator can level up by using tools for creating their own Minecraft games and experiences. In addition to Mojang-driven tools such as the [Bedrock Editor](./EditorOverview.md) or the [Visual Studio Code Debugger](./ScriptDeveloperTools.md), we recommend you check out the [commonly used tools](./CommonlyUsedTools.md) article for more recommendations on Minecraft tools from the community.
