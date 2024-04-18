---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: enchant Command
description: Description and usage of the enchant command
---
# `/enchant` Command
Adds an enchantment to a player's selected item.

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
### Enchant player using enum
`/enchant <player: target> <enchantmentName: Enchant> [level: int]`

Enchant a target player using and `enchantmentName` from the `enum`.

### Enchant player using integer ID
`/enchant <player: target> <enchantmentId: int> [level: int]`

Enchant a target player using `enchantmentId`.

## Arguments
- `enchantmentId`: int
An integer ID for the enchantment that is applied.
- `enchantmentName`: Enchant
An enum for the enchantment that is applied.
- `level`: int
Optional. An `integer` that specifies the enchantment level.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.

## Enums
### `Enchant`
Enchantment

#### Values
- `protection`
Protection level: 1, 2, 3, or 4
- `fire_protection`
Fire Protection level: 1, 2, 3, or 4
- `feather_falling`
Feather Falling level: 1, 2, 3, or 4
- `blast_protection`
Blast Protection level: 1, 2, 3, or 4
- `projectile_protection`
Projectile Protection level: 1, 2, 3, or 4
- `thorns`
Thorns level: 1, 2, or 3
- `respiration`
Respiration level: 1, 2, or 3
- `depth_strider`
Depth Strider level: 1, 2, or 3
- `aqua_affinity`
Aqua Affinity level: 1 only
- `sharpness`
Sharpness level: 1, 2, 3, 4, or 5
- `smite`
Smite level: 1, 2, 3, 4, or 5
- `bane_of_arthropods`
Bane of Arthropods level: 1, 2, 3, 4, or 5
- `knockback`
Knockback level: 1 or 2
- `fire_aspect`
Fire Aspect level: 1 or 2
- `looting`
Looting level: 1, 2, or 3
- `efficiency`
Efficiency level: 1, 2, 3, 4, or 5
- `silk_touch`
Silk Touch level: 1 only
- `unbreaking`
Unbreaking level: 1, 2, or 3
- `fortune`
Fortune level: 1, 2, or 3
- `power`
Power level: 1, 2, 3, 4, or 5
- `punch`
Punch level: 1 or 2
- `flame`
Flame level: 1 only
- `infinity`
Infinity level: 1 only
- `luck_of_the_sea`
Luck of the Sea level: 1, 2, or 3
- `lure`
Lure level: 1, 2, or 3
- `frost_walker`
Frost Walker level: 1 or 2
- `mending`
Mending level: 1 only
- `binding`
Curse of Binding level: 1 only
- `vanishing`
Curse of Vanishing level: 1 only
- `impaling`
Impaling level: 1, 2, 3, 4, or 5
- `riptide`
Riptide level: 1, 2, or 3
- `loyalty`
Loyalty level: 1, 2, or 3
- `channeling`
Channeling level: 1 only
- `multishot`
Multishot level: 1 only
- `piercing`
Piercing level: 1, 2, 3, or 4
- `quick_charge`
Quick Charge level: 1, 2, or 3
- `soul_speed`
Soul Speed level: 1, 2, or 3
- `swift_sneak`
Swift Sneak level: 1, 2, or 3
- `wind_burst`
- `density`
- `breach`
