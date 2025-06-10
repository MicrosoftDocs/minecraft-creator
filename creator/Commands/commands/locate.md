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
- `minecraft:ocean`
- `minecraft:plains`
- `minecraft:desert`
- `minecraft:extreme_hills`
- `minecraft:forest`
- `minecraft:taiga`
- `minecraft:swampland`
- `minecraft:river`
- `minecraft:hell`
- `minecraft:the_end`
- `minecraft:legacy_frozen_ocean`
- `minecraft:frozen_river`
- `minecraft:ice_plains`
- `minecraft:ice_mountains`
- `minecraft:mushroom_island`
- `minecraft:mushroom_island_shore`
- `minecraft:beach`
- `minecraft:desert_hills`
- `minecraft:forest_hills`
- `minecraft:taiga_hills`
- `minecraft:extreme_hills_edge`
- `minecraft:jungle`
- `minecraft:jungle_hills`
- `minecraft:jungle_edge`
- `minecraft:deep_ocean`
- `minecraft:stone_beach`
- `minecraft:cold_beach`
- `minecraft:birch_forest`
- `minecraft:birch_forest_hills`
- `minecraft:roofed_forest`
- `minecraft:cold_taiga`
- `minecraft:cold_taiga_hills`
- `minecraft:mega_taiga`
- `minecraft:mega_taiga_hills`
- `minecraft:extreme_hills_plus_trees`
- `minecraft:savanna`
- `minecraft:savanna_plateau`
- `minecraft:mesa`
- `minecraft:mesa_plateau_stone`
- `minecraft:mesa_plateau`
- `minecraft:warm_ocean`
- `minecraft:lukewarm_ocean`
- `minecraft:deep_lukewarm_ocean`
- `minecraft:cold_ocean`
- `minecraft:deep_cold_ocean`
- `minecraft:frozen_ocean`
- `minecraft:deep_frozen_ocean`
- `minecraft:bamboo_jungle`
- `minecraft:bamboo_jungle_hills`
- `minecraft:sunflower_plains`
- `minecraft:desert_mutated`
- `minecraft:extreme_hills_mutated`
- `minecraft:flower_forest`
- `minecraft:taiga_mutated`
- `minecraft:swampland_mutated`
- `minecraft:ice_plains_spikes`
- `minecraft:jungle_mutated`
- `minecraft:jungle_edge_mutated`
- `minecraft:birch_forest_mutated`
- `minecraft:birch_forest_hills_mutated`
- `minecraft:roofed_forest_mutated`
- `minecraft:cold_taiga_mutated`
- `minecraft:redwood_taiga_mutated`
- `minecraft:redwood_taiga_hills_mutated`
- `minecraft:extreme_hills_plus_trees_mutated`
- `minecraft:savanna_mutated`
- `minecraft:savanna_plateau_mutated`
- `minecraft:mesa_bryce`
- `minecraft:mesa_plateau_stone_mutated`
- `minecraft:mesa_plateau_mutated`
- `minecraft:soulsand_valley`
- `minecraft:crimson_forest`
- `minecraft:warped_forest`
- `minecraft:basalt_deltas`
- `minecraft:jagged_peaks`
- `minecraft:frozen_peaks`
- `minecraft:snowy_slopes`
- `minecraft:grove`
- `minecraft:meadow`
- `minecraft:lush_caves`
- `minecraft:dripstone_caves`
- `minecraft:stony_peaks`
- `minecraft:deep_dark`
- `minecraft:mangrove_swamp`
- `minecraft:cherry_grove`
- `minecraft:pale_garden`

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
