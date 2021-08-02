---
title: Differences Between Minecraft Bedrock Edition and Minecraft Java Edition
author: ReWrite-Media
---
# Differences Between Minecraft: Bedrock Edition and Minecraft: Java Edition

On the surface, Bedrock Edition and Java Edition seem very similar, but under the hood is a completely different story. The different code bases create distinct development environments. This tutorial outlines the major differences you as a content creator should be aware of.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - A brief history of Java Edition and Bedrock edition.
> - How the two editions differ and what it means for content creation.

There are two major versions of Minecraft.

### Minecraft: Java Edition

This version was originally released in 2009. This version used to be called Minecraft until it was renamed to Minecraft: Java Edition in September 2017. As the name implies, it’s developed in Java and isn’t compatible with the current version of Minecraft for the most part. This edition is commonly referred to as simply ***Java***.

### Minecraft: Bedrock Edition

Bedrock Edition was launched on Sept. 20, 2017 and was based on Minecraft: Pocket Edition, which was released in 2011. It brought together nine of the major device platforms under a singular codebase called the Bedrock Engine. This was a rewrite of Minecraft from the ground up and brought along with it some fundamental changes to the platform paving the way for an exciting new development community. This edition is commonly referred to as simply ***Bedrock***.

## World Differences

The most obvious difference between both versions is the world format. Bedrock Edition uses the [LevelDB](https://minecraft.fandom.com/wiki/Bedrock_Edition_level_format#LevelDB_based_format) format for world storage while Java Edition uses the [Anvil](https://minecraft.fandom.com/wiki/Anvil_file_format) format. Due to this, most third-party tools created for Java Edition world editing will not work on Bedrock Edition.

The two versions also use a fairly different block format. Java Edition has flattened its block format using a unique string for each individual block and storing the state of that block separately. Similarly, Bedrock Edition has moved to a string-based system with [block states](https://minecraft.fandom.com/wiki/Block_states), but have kept some blocks grouped together defined by data value. Basically, this means that blocks are named differently between the versions. In Bedrock Edition, granite would be `stone 1` whereas on Java Edition it’s simply `granite`.

Another key difference is how the world is generated. Even though both versions use a similar process for generating terrain, they use a different random number generator. This means [seeds](https://minecraft.fandom.com/wiki/Seed_(level_generation))) are not cross-compatible between versions. A seed used in Bedrock Edition will generate differently than it would in Java Edition. This makes creating content in Java Edition aimed for Bedrock Edition a bit more difficult. See the [article on creating survival spawns](SurvivalSpawnCreation.md) for more information about the process of working in Java Edition for Bedrock Edition targeted content. You can also view the article about converting between the two versions [here](ChunkerOverview.md).

## Redstone and Command Differences

The structure and implementation of commands between the two versions have diverged as well. Bedrock Edition’s command structure is similar to the system used in versions of Java Edition prior to 1.13. It also forgoes raw JSON strings inside commands for a component-based system. Instead of using long complex JSON strings to customize entities, you can summon an entity with an event to fire, and also name it in a single command.

```
summon <entityType: EntityType> [spawnPos: x y z] [spawnEvent: String] [named: String]
```
Currently, there’s no way to `/give` players custom items in Bedrock Edition as you can in Java Edition. The item will need to be created beforehand and teleported to the player. The most common ways of doing this is either by placing the item in a chest and breaking the chest, or making an entity drop it on death via loot table.

Aside from that, commands should feel very familiar between Bedrock Edition and Java Edition versions prior to 1.13. The [execute format](https://minecraft.fandom.com/wiki/Commands/execute#Java_Edition) introduced in Java Edition 1.13 is not supported in Bedrock Edition.

**Scoreboards** function the same way between the two versions, but Bedrock Edition currently doesn't have support for the wide range of criteria that Java Edition does. Currently, the only criteria supported by Bedrock Edition is the `dummy` criteria. None of the other criteria available in Java Edition have been implemented by Bedrock Edition. More information can be found [here](https://minecraft.fandom.com/wiki/Scoreboard). There’s also no support for commands such as `/stats` or `/team`.

**Schedule** commands differ between editions. In Java Edition, the `/schedule` command has the following syntax:

```
/schedule function <function> <time> [append|replace]
/schedule clear <function>
```

A function will be scheduled to run after a period of time passes, with the choice to schedule the same function again using "append" or to cancel previous schedules of the function using "replace" before scheduling the new one. On top of that, scheduled functions can be de-scheduled with the "clear" option.

In Bedrock Edition, the `/schedule` command has the following syntax:

```
/schedule on_area_loaded add <from: x y z> <to: x y z> <function: filepath>
/schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath>
/schedule on_area_loaded add tickingarea <name: string> <function: filepath>
```

Rather than running a function after a certain period of time, functions can be scheduled to run when a certain region in the world is loaded. The "tickingarea" option will run the specified function when a ticking area of the specified name is loaded. If the ticking area is already active, then the function will run immediately. However, if the ticking area does not yet exist, the function will remain in limbo until the ticking area is created, such as with the `/tickingarea` command, after which the function will run.

Multiple functions can be scheduled for the same location or ticking area. Unlike Java Edition however, scheduled functions cannot be cleared.

**Redstone** functions slightly different as well. Unlike Java Edition, Bedrock Edition doesn’t support [quasi-connectivity](https://minecraft.fandom.com/wiki/Tutorials/Quasi-connectivity). Systems that utilize mechanics such as Block Update Detector (BUD) switches won’t work. Pistons also require one tick to retract, and won’t leave blocks behind if given a one-tick pulse. Even the way updates happen is slightly different. While the vast majority of redstone circuits work well between the two versions, more complex circuits might not.

**Resource Packs**

There are a lot of similarities between Bedrock Edition and Java Edition when it comes to resource packs but they do contain some differences. The obvious one is the swap of `.mcmeta` files with `.json` files in Bedrock Edition. These files are used to define the properties of different parts of the interface and are largely used in the same way with distinct syntax differences between the two formats. You’ll also see large differences in texture file formats, the main being the use of TGA files for work with alpha channels instead of PNG. Some textures (mainly entities) are laid out slightly different as well.

**Behavior Packs**

One of the biggest differences between Bedrock Edition and Java Edition is the use of behavior packs. While functionally similar to the [data packs](https://minecraft.fandom.com/wiki/Data_Pack) in Java Edition, the actual implementation and use of behavior packs vary quite a bit.

Behavior packs bring in new functionality whether it be building your own entities from scratch, adding new blocks and items, or access to events using the JavaScript API. It allows for an enormous amount of flexibility and control and is one of the most powerful parts of Bedrock Edition when compared against Java Edition.

**Gameplay and Player Input**

One major difference that tends to be forgotten is the type of platform players of different versions use. For Java Edition, you can be reasonably sure your player is using a keyboard and mouse; on Bedrock Edition, more than likely your player isn’t.

Currently, console controls are the most common input method on Bedrock Edition with touch being a close second. Keyboard and mouse controls are a far third and make up a tiny percentage of your player base.

That means when designing experiences in Bedrock Edition, you should be aware of the different types of input players will be using. Also, keep in mind *how* your players are playing. While spam clicking might be OK with a mouse or even a controller, it would provide a poor experience for touch players. Keyboard players with a bow might have perfect aim, but it's a lot more difficult when using a controller or touch controls. Complex parkour might even be game-breaking for a mobile player.

Always remember who's playing your content. While the demographic for Java Edition may trend a bit older, on Bedrock Edition your target audience is much younger. Chances are they’ve never played Bedrock Edition on a PC. View more information about how to optimize your content for different platforms [here](DesigningForCrossPlatformPlay.md).

**Performance**

This is where things get a bit murkier and harder to define. Due to the Bedrock Edition Engine being designed to be played on PC, mobile, and console, it’s generally a more forgiving platform and performs much better on lower-end hardware than Java Edition does. It’s not without its faults, though.

Besides normal bugs causing issues (and what’s Minecraft without its bugs?), the advanced features the platform provides also means there are more ways to break the game. Lots of entities with complicated behaviors can slow down some devices. Custom entities that use overly complex models can eat up RAM. Even the amount of chunks that can be loaded at once may be dramatically less on lower-end devices like mobile.

To combat a lot of these performance issues, Bedrock Edition has split up the rendering and ticking of chunks. Instead of a direct relation between them like in Java Edition (i.e., whatever you see is loaded), Bedrock Edition will allow you to set your render distance (how far you can see) to a different value than the simulation distance (how far chunks tick). This gives you the ability to visually render far-out areas without ticking those chunks. Ticking chunks have a direct impact on performance and the more chunks that are ticking at any given moment, the more potential for issues on lower-end devices.

---

Overall, the move from Java Edition to Bedrock Edition is pretty painless if you are adequately prepared and understand the differences. A lot of features Java Edition creators used to rely upon through commands have been moved to behavior packs. Most aspects of the game are being remade to be data-driven with a huge focus on flexibility. As the game continues to evolve, the gameplay experience will feel the same, but what drives that experience will function very differently.

### What's Next?

If you are coming newly from Java Edition, your first steps in Bedrock Edition will be Add-On development. This will open many doors necessary for content creation on Bedrock.

> [!div class="nextstepaction"]
> [Getting Started with Add-On Development](GettingStarted.md)

Otherwise, conversion between Bedrock Edition and Java Edition worlds may be of interest.

> [!div class="nextstepaction"]
> [Chunker Overview](ChunkerOverview.md)

On top of that, converting texture packs between editions can be of use.

> [!div class="nextstepaction"]
> [Converting Texture Packs](ConvertingTexturePacksFromJavaEditionToBedrockEdition.md)