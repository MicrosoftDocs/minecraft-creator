---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:overworld_generation_rules"
description: "Describes the minecraft:overworld_generation_rules biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:overworld_generation_rules

Controls how this biome is instantiated (and then potentially modified) during world generation of the overworld.

> [!Note]
> This is a pre-Caves and Cliffs component and is unused for custom biomes.


## Biome Overworld Generation Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| generate_for_climates | *not set* | String | Controls the world generation climate categories that this biome can spawn for. Each entry is an array of [climate_name, weight] where climate_name is 'medium', 'warm', 'lukewarm', 'cold', or 'frozen'. |  | 
| hills_transformation | *not set* | Array of strings | An array of any size containing arrays of exactly two elements. For each contained array, the first element is a climate category string ('medium', 'warm', 'lukewarm', 'cold', or 'frozen'). The second element is a positive integer for how much that entry is weighted relative to other entries. |  | 
| hills_transformation (Alternate 1) | *not set* | String |  |  | 
| mutate_transformation | *not set* | Array of strings | What biome to switch to when converting to a mutated biome |  | 
| mutate_transformation (Alternate 1) | *not set* | String |  |  | 
| river_transformation | *not set* | Array of strings | What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome) |  | 
| river_transformation (Alternate 1) | *not set* | String |  |  | 
| shore_transformation | *not set* | Array of strings | What biome to switch to when adjacent to an ocean biome |  | 
| shore_transformation (Alternate 1) | *not set* | String |  |  | 