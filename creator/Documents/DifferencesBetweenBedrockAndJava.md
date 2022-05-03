---
author: docsbryce
ms.author: v-bbortree
title: Differences Between Minecraft Bedrock Edition and Minecraft Java Edition
ms.prod: gaming
description: "An article covering the major differences between Minecraft: Bedrock Edition and Minecraft: Java Edition"
---

# Differences Between Minecraft: Bedrock Edition and Minecraft: Java Edition

On the surface, Bedrock Edition and Java Edition may seem very similar, but under the hood is a completely different story. The different code bases create distinct development environments for content creators. This tutorial outlines the major differences you as a content creator should be aware of.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - A brief history of Java Edition and Bedrock Edition.
> - How the two editions differ and what it means for content creation.

There are two major versions of Minecraft.

### Minecraft: Java Edition

This is the original version of Minecraft, first released in May 2009. In September 2017, coinciding with the launch of Bedrock Edition, the "Java Edition" subtitle was added to the title. As the name implies, this version of Minecraft is developed in the [Java programming language](https://en.wikipedia.org/wiki/Java_(programming_language)). It's available only on Windows, Mac, and Linux PCs. This edition is commonly referred to as simply ***Java***.

### Minecraft: Bedrock Edition

Bedrock Edition was fully launched in September 2017, based on Minecraft: Pocket Edition, which was released in 2011. It brought together nine of the major device platforms under a singular codebase called the Bedrock Engine. This was a rewrite of Minecraft from the ground up using the [C++ programming language](https://en.wikipedia.org/wiki/C%2B%2B). It's available on Windows 10 PCs, Xbox, PlayStation, Nintendo Switch, Android, and iOS. This edition is commonly referred to as simply ***Bedrock***.

## World Format Differences

One major technical difference between both versions is the world format. Bedrock Edition uses Google's [LevelDB format](https://en.wikipedia.org/wiki/LevelDB) for world storage, while Java Edition uses a custom [Anvil format](https://wiki.vg/Map_Format). Due to this, most third-party tools created for world editing in a specific edition will not work on the other.

Many blocks and items are also named differently between the two versions. In 1.13, Java Edition underwent an internal [flattening](https://minecraft.fandom.com/wiki/Java_Edition_1.13/Flattening), removing the concept of "damage values" so that each block has its own name. Bedrock has not made this change, and so still has the pre-1.13 block names. For example, granite is `granite` in Java Edition, and `stone:1` in Bedrock Edition.

## Command Differences

The set of commands between the two versions has diverged as well. Java Edition [overhauled many commands](https://minecraft.fandom.com/wiki/Java_Edition_1.13#Command_format_2) in 1.13, while Bedrock made no such changes.

### NBT
Bedrock notably lacks the ability to specify NBT in any command. This is used in Java Edition to create special items and blocks, summon mobs with specific properties, check for complex conditions, and much more. In some cases, workarounds to achieve similar effects are possible.

For example, compare the syntax of `/summon`:

```
Java:
/summon <entity> [<position>] [<data>]

Bedrock:
/summon <entity> [<position>] [<event>] [<name>]
```

Bedrock can provide an [event to run](../Reference/Content/EntityReference/Examples/EventList.md) on the spawned mob, and a name to be applied.

For giving special items, Bedrock can specify exactly four properties:
* `can_place_on`
* `can_destroy`
* `item_lock`
* `keep_on_death`

Other properties such as durability, enchantments, custom names, book text, color, and more cannot be specified. As a workaround, [loot tables](../Documents/IntroductionToLootTables.md) can be used in tandem with the `/loot` command in some cases.

### `/execute`
Bedrock Edition is still using the pre-1.13 `/execute` command, with the following overloads:
```
/execute <entity> <position> <command>
/execute <entity> <position> detect <position> <block> <damage value> <command>
```
Java's new `/execute` command, with individual subcommands like `as`, `at`, `if`, `unless`, `positioned`, `store`, `facing`, `align`, and so on is not supported.

### Scoreboards

Bedrock has support for basic scoreboard functionality.

Unlike Java Edition, which has criteria for mob kills, deaths, and statistics such as item usage, Bedrock only supports the `dummy` criteria, which must be incremented manually with commands.

The `/team` command also does not exist in Bedrock Edition.

Scoreboard syntax is otherwise identical between editions. Bedrock also has one additional `/scoreboard` subcommand: `/scoreboard players random`.

### `/schedule`
The `/schedule` command is completely different between editions.

In Java Edition, its purpose is to run a function after a set amount of time:
```
/schedule function <function> <time> [append|replace]
/schedule clear <function>
```

In Bedrock Edition, its purpose is to run a function when an area of the world finishes loading:

```
/schedule on_area_loaded add <from> <to> <function>
/schedule on_area_loaded add circle <center> <radius> <function>
/schedule on_area_loaded add tickingarea <name> <function>
```

If the area is already active, the function will run immediately. Otherwise, it will wait until it becomes loaded. Unlike in Java Edition, scheduled functions cannot be cleared.

## Redstone
Although redstone is typically superceded by commands and pack files, it's worth highlighting a few major differences.

[Quasi-connectivity](https://minecraft.fandom.com/wiki/Tutorials/Quasi-connectivity), a bug-turned-feature in Java Edition, is not present in Bedrock Edition. Systems that utilize mechanics such as "Block Update Detector" (BUD) switches won't work. Pistons also require one tick to retract, and won't leave blocks behind if given a one-tick pulse.

While Java has a deterministic albeit directional order for redstone updates, Bedrock's update order is random, meaning a circuit that tries to have multiple blocks do something at the same moment may behave differently every time it's activated.

## Resource Packs
The idea behind resource packs is the same in both editions: change how the game looks. However, the capabilities and layout are very different.

Only Java Edition can change the shape of blocks, and only Bedrock Edition can change the shape of entities. Each uses a geometry format for this purpose that's incompatible with the other edition.

Many image files are named differently, since Java updated most of its names in 1.13 to be more consistent and Bedrock did not.

To animate textures, Bedrock uses a single file called `flipbook_textures.json`, while Java uses individual `.mcmeta` files for each texture.

Java Edition can create custom fonts and GLSL shaders, while Bedrock cannot. Bedrock Edition can create custom particles and fogs, while Java cannot.

## Behavior Packs
Bedrock Edition's equivalent to Java's data packs are called behavior packs. Again, both share some similarities and some differences.

One of Bedrock's most powerful and exclusive features is the ability to create entirely new custom entities with behavior packs. Custom items and blocks are also available in a limited, experimental form.

Java Edition's data packs, meanwhile, allow for custom advancements, dimensions, and world generation.

## Player Input
One major difference that tends to be forgotten is the type of platform players of different versions use. For Java Edition, you can be reasonably sure your player is using a keyboard and mouse; on Bedrock Edition, this more than likely is not the case.

Currently, console controls are the most common input method on Bedrock Edition with touch being a close second. Keyboard and mouse controls are a far third and make up a tiny percentage of your player base.

That means when designing experiences in Bedrock Edition, you should be aware of the different types of input players will be using. Also, keep in mind *how* your players are playing. While spam-clicking might be OK with a mouse or even a controller, it would provide a poor experience for touch players. Keyboard players with a bow might have perfect aim, but it's a lot more difficult when using a controller or touch controls. Complex parkour might even be game-breaking for a mobile player.

Always remember who's playing your content. While the demographic for Java Edition may trend a bit older, on Bedrock Edition your target audience is much younger. Chances are they've never played Minecraft on a PC.

## Performance
This is where things get a bit murkier and harder to define. Due to the Bedrock Edition Engine being designed to be played on weak devices like mobile phones, it generally performs better on lower-end hardware than Java Edition does. It's not without its faults, though.

Besides normal bugs causing issues (and what's Minecraft without its bugs?), the advanced features the platform provides also means there are more ways to break the game. Lots of entities with complicated behaviors can slow down some devices. Custom entities that use overly complex models can eat up RAM. Even the amount of chunks that can be loaded at once may be dramatically less on lower-end devices like mobile.

---

Overall, the move from Java Edition to Bedrock Edition is pretty painless if you are adequately prepared and understand the differences. A lot of features Java Edition creators used to rely upon through commands have been moved to behavior packs. Most aspects of the game are being remade to be data-driven with a huge focus on flexibility. As the game continues to evolve, the gameplay experience will feel the same, but what drives that experience will function very differently.

## What's Next?

If you are coming newly from Java Edition, your first steps in Bedrock Edition will be Add-On development. This will open many doors necessary for content creation on Bedrock.

> [!div class="nextstepaction"]
> [Getting Started with Add-On Development](GettingStarted.md)