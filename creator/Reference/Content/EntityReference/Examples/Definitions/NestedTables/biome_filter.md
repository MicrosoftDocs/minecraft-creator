---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:biome_filter
description: "A reference document detailing the 'biome_filter' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:biome_filter

The minecraft:biome_filter component allows creators to specify which biomes an entity spawns in. Each biome in the game has one or more tags which are used to determine what biomes entities spawn in.

> [!NOTE]
> To learn more about how biomes are defined in JSON, please visit [Biome Documentation - Overview](/creator/Reference/Content/BiomeReferene/Examples/BiomeOverview.md)

Below is the list of Biome tags that can be used:

## Biome Tags

- animal
- basalt_deltas
- beach
- bee_habitat
- birch
- caves
- cherry_grove
- cold
- crimson_forest
- dark_oak
- deep
- deep_dark
- desert
- dripstone_caves
- edge
- extreme_hills
- flower_forest
- forest
- frozen
- frozen_peaks
- grove
- hills
- ice
- ice_plains
- jagged_peaks
- jungle
- lakes
- lukewarm
- lush_caves
- mangrove_swamp
- mega
- mesa
- monster
- mooshroom_island
- mountain
- mutated
- nether
- nether_wastes
- netherwart_forest
- no_legacy_worldgen
- ocean
- overworld
- overworld_generation
- plains
- plateau
- rare
- river
- roofed
- savanna
- shore
- snowy_slopes
- soulsand_valley
- spawn_endermen
- spawn_few_piglins
- spawn_few_zombified_piglins
- spawn_ghast
- spawn_magma_cubes
- spawn_many_magma_cubes
- spawn_piglin
- spawn_zombified_piglin
- stone
- swamp
- taiga
- the_end
- warm
- warped_forest

## Tagged Biomes

Listed below are all of the available biomes within Minecraft: Bedrock Edition and each of the tags that are assigned to it.

| Biome| Tags |
|:-----------|:-----------|
| Bamboo Jungle| animal, bamboo, jungle, monster, overworld |
| Bamboo Jungle Hills| animal, bamboo, hills, jungle, monster, overworld |
| Basalt Deltas| nether, basalt_deltas, spawn_many_magma_cubes, spawn_ghast |
| Beach| monster, beach, warm, overworld |
| Birch Forest| animal, monster, birch, forest, overworld, bee_habitat |
| Birch Forest Hills| animal, monster, birch, forest, hills, bee_habitat |
| Birch Forest Hills M| animal, monster, forest, birch, mutated, hills, overworld_generation |
| Birch Forest M| animal, monster, forest, birch, mutated, bee_habitat, overworld_generation |
| Cherry Grove| mountains, monster, overworld, cherry_grove, bee_habitat |
| Cold Beach| beach, cold, monster, overworld |
| Cold Ocean| ocean, cold, monster, overworld |
| Cold Taiga| animal, cold, forest, monster, overworld, taiga |
| Cold Taiga Hills| animal, cold, forest, hills, monster, overworld, taiga |
| Cold Taiga M| animal, monster, forest, taiga, cold, mutated, overworld_generation |
| Crimson Forest| nether, netherwart_forest, crimson_forest, spawn_few_zombified_piglins, spawn_piglin |
| Deep Cold Ocean| ocean, cold, monster, deep, overworld |
| Deep Dark| caves, deep_dark, overworld |
| Deep Frozen Ocean| ocean, frozen, monster, deep, overworld |
| Deep Lukewarm Ocean| ocean, lukewarm, monster, deep, overworld |
| Deep Ocean| ocean, monster, deep, overworld |
| Deep Warm Ocean| ocean, warm, monster, deep, overworld |
| Desert| monster, desert, overworld |
| Desert Hills| monster, desert, hills, overworld |
| Desert M| monster, desert, mutated, overworld_generation |
| Dripstone Caves| caves, overworld, dripstone_caves, monster |
| Extreme Hills| animal, extreme_hills, monster, overworld |
| Extreme Hills Edge| animal, edge, extreme_hills, monster, mountain, overworld |
| Extreme Hills M| animal, extreme_hills, monster, mutated, overworld |
| Extreme Hills Plus Trees| animal, extreme_hills, forest, monster, mountain, overworld |
| Extreme Hills Plus Trees M| animal, extreme_hills, forest, monster, mutated, overworld |
| Flower Forest| flower_forest, monster, mutated, overworld, bee_habitat |
| Forest| animal, monster, forest, overworld |
| Forest Hills| animal, monster, hills, forest, overworld, bee_habitat |
| Frozen Ocean| ocean, frozen, monster, overworld |
| Frozen Peaks| mountain, monster, overworld, frozen, frozen_peaks |
| Frozen River| river, frozen, overworld |
| Grove| mountains, cold, monster, overworld, grove |
| Hell| nether, nether_wastes, spawn_magma_cubes, spawn_zombified_piglin, spawn_few_piglins, spawn_ghast, spawn_endermen |
| Ice Mountains| frozen, ice, mountain, overworld |
| Ice Plains| frozen, ice, ice_plains, overworld |
| Ice Plains Spikes| frozen, ice_plains, monster, mutated, overworld |
| Jagged Peaks| mountains, monster, overworld, frozen, jagged_peaks |
| Jungle| animal, jungle, monster, overworld, rare |
| Jungle Edge| animal, monster, jungle, edge, overworld |
| Jungle Edge M| animal, monster, jungle, edge, mutated, overworld_generation |
| Jungle Hills| animal, monster, jungle, hills, overworld |
| Jungle M| animal, monster, jungle, mutated, overworld_generation |
| Legacy Frozen Ocean| frozen, ocean, overworld |
| Lukewarm Ocean| ocean, lukewarm, monster, overworld |
| Lush Caves| caves, lush_caves, overworld, monster |
| Mangrove Swamp| overworld, mangrove_swamp |
| Meadow | mountains, monster, overworld, meadow, bee_habitat |
| Mega Taiga | animal, forest, mega, monster, overworld, rare, taiga |
| Mega Taiga Hills | animal, forest, hills, mega, monster, overworld, taiga |
| Mesa| mesa, monster, overworld |
| Mesa Bryce| animal, monster, mesa, mutated, overworld |
| Mesa Plateau| monster, mesa, overworld, plateau |
| Mesa Plateau M| monster, mesa, plateau, mutated, overworld, stone |
| Mesa Plateau Stone| mesa, monster, plateau, overworld, rare, stone |
| Mesa Plateau Stone M| monster, mesa, plateau, mutated |
| Mushroom Island| mooshroom_island, overworld |
| Mushroom Island Shore| mooshroom_island, overworld, shore |
| Ocean| ocean, monster, overworld |
| Plains| animal, monster, plains, overworld, bee_habitat |
| Redwood Taiga Hills M| animal, forest, hills, mega, monster, mutated, taiga, overworld_generation |
| Redwood Taiga M| animal, forest, mega, monster, mutated, overworld, taiga |
| River| river, overworld |
| Roofed Forest| animal, forest, monster, no_legacy_worldgen, overworld, roofed |
| Roofed Forest M| animal, forest, monster, mutated, roofed, overworld_generation |
| Savanna| animal, monster, savanna, overworld |
| Savanna M| animal, monster, savanna, mutated, overworld |
| Savanna Plateau| animal, monster, savanna, plateau, overworld |
| Savanna Plateau M| animal, monster, savanna, plateau, mutated, overworld |
| Snowy Slopes| mountain, monster, overworld, snowy_slopes, frozen |
| Soulsand Valley| nether, soulsand_valley, spawn_ghast, spawn_endermen |
| Stone Beach| beach, monster, overworld, stone |
| Stony Peaks| mountains, monster, overworld |
| Sunflower Plains| animal, monster, mutated, overworld, plains, bee_habitat |
| Swampland| animal, monster, overworld, swamp |
| Swampland M| animal, monster, mutated, swamp, overworld_generation |
| Taiga| animal, monster, taiga, forest, overworld |
| Taiga Hills| animal, monster, taiga, hills, forest, overworld |
| Taiga M| animal, monster, taiga, mutated, forest, overworld_generation |
| The End| the_end |
| Warm Ocean| ocean, warm, monster, overworld |
| Warped Forest| nether, netherwart_forest, warped_forest, spawn_endermen |
