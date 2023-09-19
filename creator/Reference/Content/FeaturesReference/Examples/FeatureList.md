---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - Feature List
description: "A reference document listing all available features for use in JSON files"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - Feature List

Below is a list of all the available Features within Minecraft: Bedrock Edition for use within JSON files.

> [!NOTE]
> To learn more about Features within Minecraft: Bedrock Edition, please visit [Introduction to Features](FeaturesIntroduction.md)

## List of Features

| Name| Description |
|:-----------|:-----------|
| [minecraft:aggregate_feature](Features/minecraftAggregate_feature.md)| A collection of features in an arbitrary order.|
| [minecraft:cave_carver_feature](Features/minecraftCave_carver_feature.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:fossil_feature](Features/minecraftFossil_feature.md)| Generates a skeletal structure composed of bone blocks and parametric ore blocks. |
| [minecraft:geode_feature](Features/minecraftGeode_feature.md)| Generates a rock formation to simulate a geode.|
| [minecraft:growing_plant_feature](Features/minecraftGrowing_plant_feature.md)| Places a growing plant in the world.|
| [minecraft:multiface_feature](Features/minecraftMultiface_feature.md)| Places one or a few multiface blocks on floors/walls/ceilings.|
| [minecraft:nether_cave_carver_feature](Features/minecraftnether_cave_carver_feature.md)| Carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.|
| [minecraft:ore_feature](Features/minecraftOre_feature.md)| Places a vein of blocks to simulate ore deposits.|
| [minecraft:partially_exposed_blob_feature](Features/minecraftPartially_exposed_blob_feature.md)| generates a blob of the specified block with the specified dimensions. For the most part, the blob is embedded in the specified surface, however a single side is allowed to be exposed.|
| [minecraft:scatter_feature](Features/minecraftScatter_feature.md)| Scatters a feature throughout a chunk.|
| [minecraft:search_feature](Features/minecraftSearch_feature.md)| Sweeps a volume searching for a valid placement location for its referenced feature.|
| [minecraft:sequence_feature](Features/minecraftSequence_feature.md)| A collection of features sequentially, in the order they appear in data.|
| [minecraft:single_block_feature](Features/minecraftSingle_block_feature.md)| Places a single block in the world.|
| [minecraft:snap_to_surface_feature](Features/minecraftSnap_to_surface_feature.md)| snaps the y-value of a feature placement pos to the floor or the ceiling within the provided `vertical_search_range`.|
| [minecraft:structure_template_feature](Features/minecraftStructure_template_feature.md)| Places a structure in the world. The structure must be stored as a .mcstructure file in the "structures" subdirectory of a behavior pack.|
| [minecraft:tree_feature](Features/minecraftTree_feature.md)| Places a tree in the world. |
| [minecraft:underwater_cave_carver_feature](Features/minecraftUnderwater_cave_carver_feature.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8-block radial pattern.|
| [minecraft:vegetation_patch_feature](Features/minecraftVegetation_patch_feature.md)| Scatters vegetation in an area. |
| [minecraft:weighted_random_feature](Features/minecraftWeighted_random_feature.md)| Randomly selects and places a feature based on a weight value.|
