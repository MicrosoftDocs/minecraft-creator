---
author: kakinnun
ms.author: kakinnun
title: 1.19.50 Update Notes
description: Update summary of Creator changes in Bedrock 1.19.50
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.19.50 Update Notes for Creators

Minecraft Bedrock has been updated to 1.19.50 and there are a number of changes of note for add-on creators!

**Creator API:**

It's a big day! Some initial APIs have been released out of experimental in a new [stable track](./ScriptVersioning.md) which opens up the Creator API to be used without the experimental Beta APIs flag.

APIs included in the @minecraft/server version 1.0.0 release:

- [System.run](../ScriptAPI/minecraft/server/System.md#run)
- World
  - [getAllPlayers()](../ScriptAPI/minecraft/server/World.md#getallplayers)
  - [getDimension()](../ScriptAPI/minecraft/server/World.md#getdimension)
- [MinecraftDimensionTypes](../ScriptAPI/minecraft/server/MinecraftDimensionTypes.md)
- Dimension
  - [id](../ScriptAPI/minecraft/server/Dimension.md#id)
  - [runCommandAsync()](../ScriptAPI/minecraft/server/Dimension.md#runcommandasync)
- [CommandResult](../ScriptAPI/minecraft/server/CommandResult.md)
- Entity
  - [id](../ScriptAPI/minecraft/server/Entity.md#id)
  - [typeId](../ScriptAPI/minecraft/server/Entity.md#typeid)
  - [dimension](../ScriptAPI/minecraft/server/Entity.md#dimension)
  - [runCommandAsync()](../ScriptAPI/minecraft/server/Entity.md#runcommandasync)
- Player
  - [name](../ScriptAPI/minecraft/server/Player.md#name)

This initial set is small, but more APIs will release in the coming months. Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.1.0-beta. But for the released APIs, these should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support. [Read more about script versioning](./ScriptVersioning.md) in this new article.

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

**/execute:**

The new /execute command syntax has released out of experimental. This syntax brings the Bedrock execute command closer to Java. If you are using execute in command blocks you will need to modify those command blocks to update to the new command syntax. This new syntax requires your min engine version to be set at 1.19.50. Not ready to switch? You can stay on the old syntax by using an older min engine version.

Included in this new syntax:

- Conditions: if/unless score, if/unless entity, if/unless blocks
- Facing, Aligned, Rotated, Anchored, In

Documentation on the new execute syntax is available here: [New /execute command syntax](CommandsNewExecute.md)

**Block Components:**

Two additional block components from the "Holiday Creator Features" experiment have released.

- [Collision_box](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_collision_box.md)
- [Crafting_table](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_crafting_table.md)

Collision box in particular pairs nicely with the custom geometry component from 1.19.40. The [Minecraft Block Wizard](MinecraftBlockWizard.md) is being updated to use the collision box component allowing creators to select from pre-defined collision box sizes.

**Entity Properties:**

Entity Properties has been released from experimental. Documentation on this feature is available here: [Introduction to Entity Properties](IntroductionToEntityProperties.md).

**Structure Block Import:**

A new Import button on the Structure Block UI screen on Windows platforms allows direct importing of structure blocks in-game. Convenient!

Check it out in our documentation here: [Structure Mode Load Mode](IntroductionToStructureBlocks.md#load-mode)
