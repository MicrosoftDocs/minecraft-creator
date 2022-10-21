---
author: kakinnun
ms.author: kakinnun
title: 1.19.40 Update Notes
ms.prod: gaming
---
# Minecraft Bedrock 1.19.40 Update Notes for Creators

Minecraft Bedrock has been updated to 1.19.40 and there are a number of changes of note for Add-On creators!

**Block Components:**

Two important block components have left experimental today: *geometry* and *material_instances*. This means that custom blocks is now a non-experimental feature and will have backwards compatibility and support for Marketplace creators. Our documentation has been updated ([How to add a Custom Block](CustomBlock.md)) and includes videos of the limitations around custom block geometry. This new capability should allow for a lot more visually diverse maps. Creators who previously used static entities as a work-around will see performance improvements by converting static entities to custom blocks.

Other “Holiday Creator Feature” block components are still under development and will release out of experimental when they are ready.

**Minecraft Block Wizard:**

To coincide with the release of custom blocks we partnered with Jannis from [Blockbench](https://www.blockbench.net) to build a Block Wizard plug-in. Check out our tutorial ([Getting started with Minecraft Block Wizard](MinecraftBlockWizard.md)) and see how easy it is to make custom blocks.

**Structure Block Import:**

Structure blocks can now be imported in-game using the structure block UI. This is supported on the Windows platform (same as Export). Our documentation has been updated [Introduction to Structure Blocks](IntroductionToStructureBlocks.md).

**Item Tags on Recipes:**

Recipes can now use item tags directly instead of item names. This should make working with Recipes a bit easier. Recipes can now take tags as input, which means custom items can be used in Vanilla recipes! This brings us closer to Java parity. We still have a bit more work to do on this feature and improved documentation will come in the future so stay tuned!

**Improvements to /loot:**

 We’ve added another Java-parity overload to the /loot command. */loot replace block* allows you to directly target containers and populate slots with items from a specified loot source. This source could be a loot table that already exists in Minecraft, a custom loot table, or a loot table associated with an entity. Read up on how to use this new capability: [Loot Replace Block](LootReplaceBlock.md).

**Entity Properties (*Experimental*):**

Entity Properties (previously known as Actor Properties) has been a feature in experimental for a while. It’s almost ready to release so we’ve uploaded the documentation for it if you want to get an early start. For now, it's accessible by enabling the *Upcoming Creator Features* experimental flag. Documentation is here:[Introduction to Entity Properties](IntroductionToEntityProperties.md).

**APIs (*Experimental*)** The GameTest Framework experimental flag has been renamed “Beta APIs”  to better reflect the general usage of these APIs. This experimental flag is needed to access all Beta APIs, including core Minecraft APIs and GameTest APIs.
