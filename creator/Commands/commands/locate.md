---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: locate Command
description: Description and usage of the locate command
---
# `/locate` Command
Finds the nearest specified biome or structure if it exists in the current dimension. Prints an error if it does not. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#locate).

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### `/locate structure <structure: StructureFeature> [useNewChunksOnly: Boolean]`

### `/locate biome <biome: Biome>`

## Arguments
- `biome`: Biome
- `structure`: StructureFeature
- `useNewChunksOnly`: [Boolean](../enums/Boolean.md)
A `Boolean` to specify whether to use new chunks only.
Default: `false`.

## Enums
### `Biome`

#### Values
- `the_end`
- `ocean`
- `plains`
- `desert`
- `extreme_hills`
- `forest`
- `taiga`
- `swampland`
- `river`
- `hell`
- `legacy_frozen_ocean`
- `frozen_river`
- `ice_plains`
- `ice_mountains`
- `mushroom_island`
- `mushroom_island_shore`
- `beach`
- `desert_hills`
- `forest_hills`
- `taiga_hills`
- `extreme_hills_edge`
- `jungle`
- `jungle_hills`
- `jungle_edge`
- `deep_ocean`
- `stone_beach`
- `cold_beach`
- `birch_forest`
- `birch_forest_hills`
- `roofed_forest`
- `cold_taiga`
- `cold_taiga_hills`
- `mega_taiga`
- `mega_taiga_hills`
- `extreme_hills_plus_trees`
- `savanna`
- `savanna_plateau`
- `mesa`
- `mesa_plateau_stone`
- `mesa_plateau`
- `warm_ocean`
- `lukewarm_ocean`
- `deep_lukewarm_ocean`
- `cold_ocean`
- `deep_cold_ocean`
- `frozen_ocean`
- `deep_frozen_ocean`
- `bamboo_jungle`
- `bamboo_jungle_hills`
- `sunflower_plains`
- `desert_mutated`
- `extreme_hills_mutated`
- `flower_forest`
- `taiga_mutated`
- `swampland_mutated`
- `ice_plains_spikes`
- `jungle_mutated`
- `jungle_edge_mutated`
- `birch_forest_mutated`
- `birch_forest_hills_mutated`
- `roofed_forest_mutated`
- `cold_taiga_mutated`
- `redwood_taiga_mutated`
- `redwood_taiga_hills_mutated`
- `extreme_hills_plus_trees_mutated`
- `savanna_mutated`
- `savanna_plateau_mutated`
- `mesa_bryce`
- `mesa_plateau_stone_mutated`
- `mesa_plateau_mutated`
- `soulsand_valley`
- `crimson_forest`
- `warped_forest`
- `basalt_deltas`
- `jagged_peaks`
- `frozen_peaks`
- `snowy_slopes`
- `grove`
- `meadow`
- `lush_caves`
- `dripstone_caves`
- `stony_peaks`
- `deep_dark`
- `mangrove_swamp`
- `cherry_grove`

### `StructureFeature`

#### Values
- `minecraft:end_city`
- `minecraft:fortress`
- `minecraft:mineshaft`
- `minecraft:monument`
- `minecraft:stronghold`
- `minecraft:temple`
- `minecraft:village`
- `minecraft:mansion`
- `minecraft:shipwreck`
- `minecraft:buried_treasure`
- `minecraft:ruins`
- `minecraft:pillager_outpost`
- `minecraft:ruined_portal`
- `minecraft:bastion_remnant`
- `minecraft:ancient_city`
- `minecraft:trail_ruins`
- `minecraft:trial_chambers`
