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


## Overworld Generation Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| generate_for_climates | *not set* | Array of objects | Controls the world generation climate categories that this biome can spawn for. A single biome can be associated with multiple categories with different weightings. |  | 
| hills_transformation | *not set* | Object | What biome to switch to when converting to a hilly biome |  | 
| mutate_transformation | *not set* | Object | What biome to switch to when converting to a mutated biome |  | 
| river_transformation | *not set* | Object | What biome to switch to when converting to a river biome (if not the Vanilla 'river' biome) |  | 
| shore_transformation | *not set* | Object | What biome to switch to when adjacent to an ocean biome |  | 