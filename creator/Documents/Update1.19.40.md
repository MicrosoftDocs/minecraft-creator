---
author: kakinnun
ms.author: kakinnun
title: 1.19.40 Update Notes
description: "A summary of the changes present for creators in Minecraft: Bedrock Edition version 1.19.40"
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.19.40 Update Notes for Creators

Minecraft Bedrock has been updated to 1.19.40 and there are a number of changes of note for Add-On creators!

**Block Components:**

Two important block components have left experimental today: [*geometry*](../reference/content/blockreference/examples/blockcomponents/minecraftBlock_geometry.md) and [*material_instances*](../reference/content/blockreference/examples/blockcomponents/minecraftBlock_material_instances.md). This means that custom blocks is now a non-experimental feature and will have backwards compatibility and support for Marketplace creators. This new capability should allow for a lot more visually diverse maps. Creators who previously used static entities as a work-around will see performance improvements by converting static entities to custom blocks. Check out our new series of tutorials that cover custom blocks:

- [Custom Blocks Part 1: The Simplest Block](AddCustomDieBlock.md)
- [Custom Blocks Part 2: Geometry and Material Instances](AdvancedCustomBlocks.md)
- [Custom Blocks Part 3: Render and Lighting Options](CustomBlockRenderLighting.md)
- [Custom Blocks Part 4: Oversized Geometry](CustomBlockOversized.md)

Other "Holiday Creator Feature" block components are still under development and will release out of experimental when they are ready.

**Minecraft Block Wizard:**

To coincide with the release of custom blocks we partnered with Jannis from [Blockbench](https://www.blockbench.net) to build a Block Wizard plug-in. Check out the tutorial ([Getting started with Minecraft Block Wizard](MinecraftBlockWizard.md)) and see how easy it is to make custom blocks.

**Item Tags on Recipes:**

Recipes can now use item tags directly instead of item names. This should make working with Recipes a bit easier. Recipes can now take tags as input, which means custom items can be used in Vanilla recipes! This brings us closer to Java parity. We still have a bit more work to do on this feature and improved documentation will come in the future so stay tuned!

**Improvements to /loot:**

 We've added another Java-parity overload to the /loot command. */loot replace block* allows you to directly target containers and populate slots with items from a specified loot source. This source could be a loot table that already exists in Minecraft, a custom loot table, or a loot table associated with an entity. Read up on how to use this new capability: [Loot Replace Block](LootReplaceBlock.md).

**Entity Properties (*Experimental*):**

Entity Properties (previously known as Actor Properties) has been a feature in experimental for a while. It's almost ready to release so we've uploaded the documentation for it if you want to get an early start. For now, it's accessible by enabling the *Upcoming Creator Features* experimental flag. Documentation is here: [Introduction to Entity Properties](IntroductionToEntityProperties.md).

**APIs (*Experimental*)** The GameTest Framework experimental flag has been renamed "Beta APIs"  to better reflect the general usage of these APIs. This experimental flag is needed to access all Beta APIs, including core Minecraft APIs and GameTest APIs.
