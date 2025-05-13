---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:overworld_generation_rules"
description: "Describes the minecraft:overworld_generation_rules biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:overworld_generation_rules

Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld.


## Minecraft Overworld Generation Rules Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| generate_for_climates | *not set* | Array of objects | Can be just the name of a biome, or an array of any size. If an array, each entry can be a biome name string, or an array of size 2, where the first entry is a biome name and the second entry is a positive integer representing how that biome is weighted against other entries. If no weight is provided, a weight of 1 is used. |  | 
| hills_transformation | *not set* | Array of strings | An array of any size containing arrays of exactly two elements. For each contained array, the first element is a climate category string ('medium', 'warm', 'lukewarm', 'cold', or 'frozen'). The second element is a positive integer for how much that entry is weighted relative to other entries. |  | 
| hills_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| hills_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 
| mutate_transformation | *not set* | Array of strings | What biome to switch to when converting to a mutated biome |  | 
| mutate_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| mutate_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 
| river_transformation | *not set* | Array of strings | What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome) |  | 
| river_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| river_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 
| shore_transformation | *not set* | Array of strings | What biome to switch to when adjacent to an ocean biome |  | 
| shore_transformation (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| shore_transformation (Alternate 2) | *not set* | Keyed set of strings |  |  | 