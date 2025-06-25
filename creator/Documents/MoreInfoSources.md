---
author: chipotle
ms.author: mikeam
title: "More Sources of Info on Minecraft: Bedrock Edition"
description: "An overview of additional sources of information on Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
ms.date: 06/24/2025
---

# More Sources of Information about Minecraft: Bedrock Edition

We aim to make the documentation here as comprehensive as we can get it&mdash;but the breadth of Minecraft possibilities can't be contained on just one website!

## Minecraft Creator Channel

First off, we have a YouTube channel just for creators! Check out the [Minecraft Creator Channel](https://aka.ms/mcv) for a growing library of tutorial videos, Q&As, and more.

## Sample repositories

Mojang maintains several repositories on GitHub with sample code and data that complements the tutorials available on the Minecraft Creator Portal.

### Bedrock samples

Repository: <https://github.com/mojang/bedrock-samples>

This is a set of example definitions and assets adapted from the vanilla experience of Minecraft. There are two branches in the repository:

* [`main`](https://github.com/Mojang/bedrock-samples/tree/main) represents the latest major release of content.
* [`preview`](https://github.com/Mojang/bedrock-samples/tree/preview) represents the latest preview build of Minecraft, usually updated weekly.

Information in the preview branch contains the latest cutting edge platform features, but be careful&mdash;some advanced capabilities may be modified or removed before making it into main versions of Minecraft.

> [!NOTE]
> You can find downloadable versions of this repository's source code on the [releases page](https://github.com/Mojang/bedrock-samples/releases). Be sure to understand the [License Agreement](https://github.com/Mojang/bedrock-samples?tab=License-1-ov-file) of this repository.

The `bedrock-samples` GitHub repository (on both branches) is divided into several subfolders:

* **Sample behavior and resource packs** are derived from in-game samples, including models, entities, biomes, animations, sounds, render controllers, loot tables, spawn rules, and more. These samples aren't comprehensive demonstrations of what "vanilla Minecraft" encompasses, nor do they demonstrate all of the platform's capabilities. (For example, they don't demonstrate how to build [script-powered experiences](./ScriptingIntroduction.md)!) Nevertheless, we strongly recommend downloading `bedrock-samples` to use as references you can search through (using a tool like Visual Studio Code) to find, for example, an uncommonly-used property on an item's JSON component.

* **Sample metadata** contains auto-generated lists of "Minecraft things" such as commands (in the **command\_modules** folder), entities, blocks, recipes, items, and far more (in the **doc\_modules** folder). Typically, these files are more useful for tooling authors or creators that build comprehensive add-ons or hosted experiences. Keep in mind that the schema of these various JSON files may change over time, so if you build tools that parse them, they'll likely need to be updated occasionally. Schemas are defined in the **json_schemas** folder using [JSON Schema](https://json-schema.org/).

* **Documentation** is the HTML version of the [Reference section](../Reference/index.yml) of the Creator Portal. Brand-new definitions might show up in the `preview` branch here before they make it to this site, so if you need absolutely cutting-edge information, this is where to check.

Because the repository is hosted on GitHub, you can use GitHub site features to view historical and change items for Minecraft. For example, the [preview commits page](https://github.com/Mojang/bedrock-samples/commits/preview/) will show you, week over week, what's new from a file perspective in Minecraft Preview. You can also see a summary of what's new for Minecraft from the [Minecraft Beta Changelog notes](https://aka.ms/MinecraftBeta).

### minecraft-samples

Repository: <https://github.com/microsoft/minecraft-samples>

This shows a number of samples discussed in Creator Portal documentation, demonstrating a number of different capabilities of Minecraft. You can see example custom entities, items, and mobs, as well as some basic "starters" for creating your own projects.

### minecraft-scripting-samples

Repository: <https://github.com/microsoft/minecraft-scripting-samples>

This is very similar to the `minecraft-samples` repo, but focused on using script in various forms. It also includes a couple of starters if you wish to create a script-focused project.

### minecraft-gametests

Repository: <https://github.com/microsoft/minecraft-gametests>

This repo provides samples for building [GameTests](./GameTestGettingStarted.md), simple ways to build tests for Minecraft content.

## Community sources

One of the best things about Minecraft is our large, passionate community of creators who build all kinds of things&mdash;and create sites, write docs, record podcasts, and create videos of their progress. They also discuss and ask questions on forums such as Discord or Reddit. Often, the best way to find information is to search on your favorite search engine or video website for just about any topic, and chances are, someone has probably tried it and talked about it.

>[!IMPORTANT]
> This section contains links to external community-run sites and forums. Use at your own discretion.

* The [Offical Minecraft Discord](https://discord.gg/minecraft) provides a variety of channels like `#bedrock-mechanics` for conversation and information.
* The [Bedrock.dev Wiki](https://wiki.bedrock.dev/) is a community-run website delving into Bedrock's technical features.
* Bedrock.dev also hosts two Discord communities for Bedrock developers, [Bedrock Add-Ons](https://discord.gg/46JUdQb) and [Bedrock OSS](https://discord.gg/XjV87YN).
* Blockbench's developers run a [Blockbench Discord](https://discord.gg/blockbench) for their users.
* The [Minecraft Wiki](https://minecraft.wiki) is a huge, comprehensive community-run wiki full of information about creating content for both Java and Bedrock Editions.
* There's a community-run [Minecraft Subreddit](https://reddit.com/r/Minecraft).

## Tools

Of course, every creator can level up by using tools for creating their own Minecraft games and experiences. In addition to Mojang-driven tools such as the [Bedrock Editor](./EditorOverview.md) or the [Visual Studio Code Debugger](./ScriptDeveloperTools.md), we recommend you check out the [commonly used tools](./CommonlyUsedTools.md) article for more recommendations on Minecraft tools from the community.

## Network protocol documentation

>[!WARNING]
> The Minecraft protocol is not a supported API for end users. The Minecraft Protocol changes from one release to the next&mdash;sometimes quite significantly&mdash;with no guarantee of backwards compatibility or support.

Like many games, Minecraft is an engine split into two parts: a **server** where all of the game logic and world state definitions are hosted and where management of players in the world happens, and a **client** that connects to the server, displays all of the graphics, plays sounds, and handles player input. This is true whether you're playing a game on a hosted server or a single-player game on your phone.

The Minecraft Client and Server communicate with each other using the Minecraft Network Protocol. Mojang maintains a GitHub repository documenting the Network Protocol at <https://github.com/Mojang/bedrock-protocol-docs/> for server partners. You can read the documentation to get an understanding of how the client/server internals work, but **using the protocol in other software and tools is unsupported**. The protocol is regularly updated to support new capabilities and modify or deprecate existing features, so an unofficial implementation is likely to regularly break.
