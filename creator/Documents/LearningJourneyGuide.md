---
author: chipotle
ms.author: mikeam
title: Creator Learning Journey
description: "A guided path through the creator tutorials and related documentation"
ms.service: minecraft-bedrock-edition
ms.date: 07/18/2025
---

# Creator Learning Journey

You love Minecraft: Bedrock Edition, and you've been inspired to explore what you can do beyond vanilla Minecraft: you want to build your own Add-Ons that modify worlds, introduce new blocks and entities, even make new games within the larger game. You want to become a **Minecraft Creator.**

There's a lot to learn here: Resource and Behavior Packs, textures, even programming in JavaScript and TypeScript. But if you take it one step at a time, you'll get there faster than you think. That's what the Creator Learning Journey is all about.

The articles in the Learning Journey appear in other sections of the Bedrock Edition Learning Portal, so you might have already encountered some of them. The Journey provides a different way to go through them: rather than presenting you with topics and references, it divides them into themed courses. In general, the courses get more complex as they go on, starting with creating your first Behavior Pack up to creating loot tables and working with structure blocks.

## Journey 1: Learn about Add-Ons

In Minecraft: Bedrock Edition, an **Add-On** is anything that's added to a world to modify it from its original "vanilla" state. An add-on could be a Resource Pack that contains new blocks, a Behavior Pack that changes the way an entity behaves, a Skin Pack that changes the player's look, or a more sophisticated creation that combines all of them.

> [!NOTE]
> "Add-On" can refer to Marketplace Add-Ons as well as simpler add-ons that just involve Behavior and/or Resource Packs. Generally, we'll use capitalized Add-On for the former and lowercased add-on for the latter.

- [Getting Started with Add-On Development for Bedrock Edition](GettingStarted.md): Start here to learn about the file and folder structure Minecraft: Bedrock Edition uses for packs and other assets.
- [Create Your First Add-On: The Angry Cow](BehaviorPack.md): This is it, your first add-on! This Behavior Pack modifies the existing Minecraft cow to aggressively attack the player.

> [!TIP]
> Curious about the full structure of Add-On packs? Here's a [comprehensive list of contents](./ComprehensivePackContents.md) for future reference!

## Journey 2: Learn about Blocks

There's nothing more integral to the Minecraft experience than blocks! Learn how to create a simple custom block, then progressively more complex ones.

- [Create Custom Grass Blocks](ResourcePack.md): An introduction to Resource Packs.
- [Create a Custom Die Block](AddCustomDieBlock.md): A more complicated custom block, with an introduction to geometries and materials. ("Die" is the singular of "dice"; the block will be just fine.)
- [Create a Sushi Block](AdvancedCustomBlocks.md): Now we get into more advanced custom blocks. This will also introduce [Blockbench](./Blockbench.md), a third-party modeling tool for Minecraft.
- [Animate a Block Texture](CreateAnimatedBlockTexture.md): Here's how to get animated effects on your block textures.

## Journey 3: Learn about Entities and Items

Now we're getting into more complex Minecraft elements&mdash;the entities and items that populate your world!

- [Create an Entity](IntroductionToAddEntity.md): Entities require _both_ Resource Packs and Behavior Packs. We'll delve into making a new entity&mdash;a robot!
- [Create a Goblin Chef Entity](MakerSeriesMakingTheGoblinChef.md): This one's a little different: a video tutorial from Mojang's own Peter Sheff, walking through creating a new entity from early design decisions to modeling and animation.
- [Create a Custom Item](AddCustomItems.md): Apply what you've learned so far to making new items.

## Interlude: More Customization

These articles aren't as much part of the main journey as they are side trips toward points we haven't covered yet.

- [Creating and Adding Custom Sounds](./AddCustomSounds.md): How to add sounds and music to your world.
- [Changing Your Look With a Skin Pack](./SkinPack.md): Give your player character a makeover!
- [Overwriting Vanilla Assets](./OverwritingAssets.md): Customize existing assets in the game by overwriting their JSON files.

## Journey 4: Changing the Game

These articles dig into advanced creation techniques&mdash;ways to change gameplay elements in Minecraft, and even create games within the larger game!

- [Survival Spawn Creation](./SurvivalSpawnCreation.md): An overview on creating new spans in survival Minecraft.
- [Introduction to Game Rules](./IntroductionToGamerules.md): Adjust features of the game world.
- [Create an In-World Game with Commands](CreateAnInWorldGame.md): Learn how to use commands to create new game mechanics.
- [Create a Village with Structure Blocks](./Structures/StructureBlocksCommandTutorial.md): Learn how to use [structure blocks](./Structures/IntroductionToStructureBlocks.md) to create a whole village.
- [Create a Loot Table](CreateLootTable.md): Learn how to create a [loot table](./IntroductionToLootTables.md).
- [Non-Player Character (NPC) Dialogue](NPCDialogue.md): A tutorial on creating dynamic NPC dialogue through branching scripts.

## Next steps: get to know the tools

By now, you've been exposed to some of these tools already. These articles dig into the tools in more depth.

- [Minecraft Creator Tools](./MCToolsOverview.md): An open source toolset from Mojang that helps you start new Minecraft projects.
- [Bedrock Editor](./BedrockEditor/EditorOverview.md): The editor built into Minecraft: Bedrock Edition.
- [Blockbench](./Blockbench.md): A third-party editor used for creating new models and textures.
- [Other Commonly Used Tools](./CommonlyUsedTools.md)
