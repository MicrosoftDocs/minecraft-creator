---
author: mammerla
ms.author: mikeam
title: "Features Documentation - Features"
description: "A reference document describing all current Features"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Features Documentation

| Features | Description |
|:-----|:----------|
| [minecraft:aggregate_feature](Features/minecraft_aggregate_feature.md)| Places a collection of features in an arbitrary order. |
| [minecraft:cave_carver_feature](Features/minecraft_cave_carver_feature.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. |
| [minecraft:fossil_feature](Features/minecraft_fossil_feature.md)| Generates a skeletal structure composed of bone blocks and parametric ore blocks. |
| [minecraft:geode_feature](Features/minecraft_geode_feature.md)| generates a rock formation to simulate a geode. |
| [minecraft:growing_plant_feature](Features/minecraft_growing_plant_feature.md)| Places a growing plant in the world. |
| [minecraft:multiface_feature](Features/minecraft_multiface_feature.md)| Places multiface blocks on floors/walls/ceilings. |
| [minecraft:nether_cave_carver_feature](Features/minecraft_nether_cave_carver_feature.md)| Carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern. |
| [minecraft:ore_feature](Features/minecraft_ore_feature.md)| Places a vein of blocks to simulate ore deposits. |
| [minecraft:partially_exposed_blob_feature](Features/minecraft_partially_exposed_blob_feature.md)| Generates a blob of the specified block with the specified dimensions. |
| [minecraft:scatter_feature](Features/minecraft_scatter_feature.md)| Scatters a feature throughout a chunk. |
| [minecraft:search_feature](Features/minecraft_search_feature.md)| Sweeps a volume searching for a valid placement location for its referenced feature. |
| [minecraft:sequence_feature](Features/minecraft_sequence_feature.md)| Places a collection of features sequentially, in the order they appear in data. |
| [minecraft:single_block_feature](Features/minecraft_single_block_feature.md)| Places a single block in the world. |
| [minecraft:snap_to_surface_feature](Features/minecraft_snap_to_surface_feature.md)| Snaps the y-value of a feature placement pos to the floor or the ceiling within the provided vertical_search_range. |
| [minecraft:structure_template_feature](Features/minecraft_structure_template_feature.md)| Places a structure in the world. |
| [minecraft:surface_relative_threshold_feature](Features/minecraft_surface_relative_threshold_feature.md)| Determines whether the provided position is below the estimated surface level of the world, and places a feature if so. |
| [minecraft:tree_feature](Features/minecraft_tree_feature.md)| Places a tree in the world. |
| [minecraft:underwater_cave_carver_feature](Features/minecraft_underwater_cave_carver_feature.md)| Carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8-block radial pattern. |
| [minecraft:vegetation_patch_feature](Features/minecraft_vegetation_patch_feature.md)| Scatters vegetation in an area. |
| [minecraft:weighted_random_feature](Features/minecraft_weighted_random_feature.md)| Selects and places a feature randomly based on weighted probabilities. |

## Internal/Deprecated Components
These components are either deprecated or internal to Minecraft and not usable in custom content.

| Features | Description |
|:-----|:----------|
| [beards_and_shavers](Features/minecraft_beards_and_shavers.md)| Carves or fills terrain within a defined bounding box during world generation. |
| [conditional_list](Features/minecraft_conditional_list.md)| Evaluates conditions and places features from the first matching entry. |
| [rect_layout](Features/minecraft_rect_layout.md)| Arranges features in a rectangular grid pattern during world generation. |
| [scan_surface](Features/minecraft_scan_surface.md)| Searches for valid terrain surface positions before placing features. |
| [sculk_patch_feature](Features/minecraft_sculk_patch_feature.md)| Generates clusters of sculk blocks with veins spreading across surfaces, as found in Deep Dark biomes and Ancient Cities. |