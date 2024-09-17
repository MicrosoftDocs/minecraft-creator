---
author: JimSeaman42
ms.author: mikeam
title: Differences between Minecraft Bedrock Edition and Minecraft Java Edition
description: "An article covering the major differences between Minecraft: Bedrock Edition and Minecraft: Java Edition"
ms.service: minecraft-bedrock-edition
---

# Differences Between Minecraft: Bedrock Edition and Minecraft: Java Edition

We love all forms of Minecraft equally, but loving them equally doesn't mean they're identical. As a creator, it's important to know as much as you can about the differences between the flavors of Minecraft. So, we're going to review some of the major differences between Minecraft: Java Edition and Minecraft: Bedrock Edition, and what they may mean for you as a creator.

## A Brief History of Minecraft

Minecraft: Java Edition (known simply at the time of release as 'Minecraft') released in 2009, and for the next two years was the only iteration of the game. Minecraft: Bedrock Edition began its life in 2011 as 'Minecraft: Pocket Edition,' and was in an Alpha state until its full release in 2016. Currently, both versions are active and have broad, passionate audiences. For the purposes of clarity, we will be referring to the versions as 'Java' and 'Bedrock' respectively for the remainder of the article.

## World Format

A major difference between Java and Bedrock is the world format. Bedrock uses the LevelDB format for world storage, while Java uses the Anvil format. Due to this, most third-party tools created for editing a world will only work in the version for which it was created.

The two versions also use a fairly different block format. Java has flattened its block format using a unique string for individual blocks, and storing the state of that block separately. Similarly, Bedrock uses a string-based system with block states, while some blocks are grouped together by data value. Because of this, blocks are named differently between the versions. For example, granite is defined as `stone 1` in Bedrock, while in Java it's referred to as `granite`.

## Commands and Redstone

Both Bedrock and Java have different structures and implementation of commands. Bedrock's command structure is similar to the system used in versions of Java up to 1.13. It also uses a component-based system for commands instead of raw JSON strings. Instead of using JSON strings to customize entities, you can summon an entity with an event to fire and name it in a single command.

There are also differences per version in the way that redstone works, and while the majority of redstone circuits work well between versions, more complex circuits may not work as well in Bedrock. This is because Bedrock doesn't support quasi-connectivity, while Java does. Systems that use mechanics such as Block Update Detector (BUD) switches won't work the same way in Bedrock. Pistons require one tick to retract and won't leave blocks behind if given a one-tick pulse. Additionally, the way updates happen is slightly different.

## Resource Packs

The idea behind resource packs is the same in both editions: change how various aspects of the game look. The capabilities and layout of resource packs as very different depending on the version, however. To get into the details of how things work in Bedrock, take a look at our [Introduction to Resource Packs](ResourcePack.md) (as an added bonus, you'll learn how to change the look of grass blocks in your world!).

### Behavior Packs

The equivalent to Java's data packs, Bedrock's behavior packs share some similarities while being significantly different. For example:

- To animate textures, Bedrock uses a single file called `flipbook_textures.json`, while Java uses individual .mcmeta files for each texture.
- Java can create custom fonts and GLSL shaders, while Bedrock cannot.
- Bedrock can create custom particles and fogs, while Java cannot.

## Controls

Currently, both versions of Minecraft support mouse and keyboard controls, but on Bedrock has controller support. Additionally, depending on the hardware used to access Bedrock there is a significant change that users may be using touch controls. This becomes an important consideration when determining which type of content to create for each version.

## Crossplay

Java is currently available on Windows, Mac, and Linux PCs, meaning that any content you create will be played by users on a computer. Bedrock is available for Windows PC, consoles, and mobile devices. This means that players in the same world may be having vastly different experiences depending upon the devices they are using. For additional guidance on designing your content for users on varied devices, [check out our article on the topic.](DesigningGameplayForVariousDevices.md)

## Next Steps

If you're entering the world of Bedrock creation, your next stop should be our add-on concept articles. Here are some excellent follow-up articles for your review:

> [!div class="nextstepaction"]
> [Getting Started with Add-Ons](GettingStarted.md)
> [Comprehensive List of Add-On Pack Contents](ComprehensivePackContents.md)