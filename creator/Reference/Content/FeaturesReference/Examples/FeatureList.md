---
author: v-josjones
ms.author: v-josjones
title: Features Documentation - Feature List
ms.prod: gaming
---

# Features Documentation - Feature List

Below is a list of all the available Features within Minecraft: Bedrock Edition for use within JSON files.

> [!NOTE]
> To learn more about Features within Minecraft: Bedrock Edition, please visit [Introduction to Features](FeaturesIntroduction.md)

## List of Features

| Name| Description |
|:-----------|:-----------|
| [minecraft:aggregate_feature](Features/minecraftAggregate_feature.md)| A collection of features in an arbitrary order.|
| [minecraft:sequence_feature](Features/minecraftSequence_feature.md)| A collection of features sequentially, in the order they appear in data.|
| [minecraft:beards_and_shavers](Features/minecraftBeards_and_shavers.md)| Will build a 'beard' or 'shave' out space so as to provide a clear space for a feature to place.|
| [minecraft:cave_carver_feature](Features/minecraftCave_carver_feature.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:conditional_list](Features/minecraftConditional_list.md)| Places the first suitable feature within a collection.|
| [minecraft:growing_plant_feature](Features/minecraftGrowing_plant_feature.md)| Places a growing plant in the world.|
| [minecraft:hell_cave_carver_feature](Features/minecraftHell_cave_carver_feature.md)| Carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:multiface_feature](Features/minecraftMultiface_feature.md)| Places one or a few multiface blocks on floors/walls/ceilings.|
| [minecraft:geode_feature](Features/minecraftGeode_feature.md)| Generates a rock formation to simulate a geode.|
| [minecraft:ore_feature](Features/minecraftOre_feature.md)| Places a vein of blocks to simulate ore deposits.|
| [minecraft:rect_layout](Features/minecraftRect_layout.md)| Scans the surface of a Chunk, calling place() on the surface of each block column.|
| [minecraft:scan_surface](Features/minecraftScan_surface.md)| Scans the surface of a Chunk, calling place() on the surface of each block column.|
| [minecraft:scatter_feature](Features/minecraftScatter_feature.md)| Scatters a feature throughout a chunk.|
| [minecraft:search_feature](Features/minecraftSearch_feature.md)| Sweeps a volume searching for a valid placement location for its referenced feature.|
| [minecraft:single_block_feature](Features/minecraftSingle_block_feature.md)| Places a single block in the world.|
| [minecraft:snap_to_surface_feature](Features/minecraftSnap_to_surface_feature.md)| snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`.|
| [minecraft:structure_template_feature](Features/minecraftStructure_template_feature.md)| Places a structure in the world. The structure must be stored as a .mcstructure file in the "structures" subdirectory of a behavior pack.|
| [minecraft:underwater_cave_carver_feature](Features/minecraftUnderwater_cave_carver.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:weighted_random_feature](Features/minecraftWeighted_random_feature.md)| Randomly selects and places a feature based on a weight value.|
