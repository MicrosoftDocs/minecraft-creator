---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:tags"
description: "Describes the minecraft:tags biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:tags

Attach arbitrary string tags to this biome.
Most biome tags are referenced by JSON settings, but some meanings of tags are directly implemented in the game's code. These tags are listed here:
birch: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".
cold: Villagers will be dressed for snowy weather.
deep: Pre-Caves and Cliffs, prevents an ocean from having islands or connected rivers and makes the biome less likely to have hills.
desert: Allows partially-buried ruined portals to be placed in the biome. Sand blocks will play ambient sounds when the player is nearby.
extreme_hills: Ruined portals can be placed higher than normal. Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers.
flower_forest: Biome uses forest flowers (mutually exclusive with other flower biome tags).
forest: Biome uses forest flowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged tagged "taiga" or "extreme_hills".
forest_generation: Equivalent to "forest".
frozen: Villagers will be dressed for snowy weather. Prevents the biome from containing lava springs if it is also tagged "ocean".
ice: Around ruined portals, lava is always replaced by Netherrack and Netherrack cannot be replaced by magma.
ice_plains: Prevents the biome from containing lava springs if it is also tagged "mutated".
jungle: Ruined portals will be very mossy.
hills: Biomes tagged "meadow" or "birch" will use normal Overworld flowers instead of wildflowers.
meadow: Biome uses wildflowers (mutually exclusive with other flower biome tags). Does nothing if biome is tagged "hills".
mesa: Sand blocks will play ambient sounds when the player is nearby.
mountain: Ruined portals can be placed higher than normal.
mutated: Pre-Caves and Cliffs, prevents switching to the specified "mutate_transformation" as the biome is already considered mutated. Prevents the biome from containing lava springs if it is also tagged "ice_plains".
no_legacy_worldgen: Prevents biome from using legacy world generation behavior unless the biome is being placed in the Overworld.
ocean: Prevents the biome from containing lava springs if it is also tagged "frozen". Allows ruined portals to be found underwater. Pre-Caves and Cliffs, determines if shorelines and rivers should be placed at the edges of the biome and identifies the biome as a shallow ocean for placing islands, unless the "deep" tag is present.
pale_garden: Biome uses closed-eye blossoms (mutually exclusive with other flower biome tags).
plains: Biome uses plains flowers (mutually exclusive with other flower biome tags).
rare: Pre-Caves and Cliffs, this tag flags the biome as a special biome. Oceans cannot be special.
swamp: Allows ruined portals to be found underwater. Biome uses swamp flowers (mutually exclusive with other flower biome tags).
taiga: Biomes tagged "forest" or "forest_generation" will use normal Overworld flowers instead of forest flowers.


## Biome Tags Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | Array of strings | Array of string tags used by other systems such as entity spawning |  | 