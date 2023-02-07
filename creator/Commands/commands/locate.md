---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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
### Locate feature, new chunks
`/locate <feature: Structure> [useNewChunksOnly: Boolean]`

Locate a feature with optional new chunks only.

## Arguments
- `feature`: Structure
A feature of the `Structure` `enum`.
- `useNewChunksOnly`: [Boolean](../enums/Boolean.md)
A `Boolean` to specify whether to use new chunks only.
Default: `false`.

## Enums
### `Structure`
Locate Structures

#### Values
- `ancient_city`
Ancient City
- `ancientcity`
Ancient City
- `bastion_remnant`
Bastion Remnant
- `bastionremnant`
Bastion Remnant
- `buried_treasure`
Buried Treasure
- `buriedtreasure`
Buried Treasure
- `end_city`
End City
- `endcity`
End City
- `fortress`
Fortress
- `mansion`
Mansion
- `mineshaft`
Mineshaft
- `monument`
Underwater Monument
- `pillager_outpost`
Pillager Outpost
- `pillageroutpost`
Pillager Outpost
- `ruined_portal`
Ruined Portal
- `ruinedportal`
Ruined Portal
- `ruins`
Ruins
- `shipwreck`
Shipwreck
- `stronghold`
Stronghold
- `temple`
Temple
- `village`
Village
