---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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
- `aqua_affinity`
Aqua Affinity
- `bane_of_arthropods`
Bane of Arthropods
- `binding`
Binding
- `blast_protection`
Blast Protection
- `channeling`
Channeling
- `depth_strider`
Depth Strider
- `efficiency`
Efficiency
- `feather_falling`
Feather Falling
- `fire_aspect`
Fire Aspect
- `fire_protection`
Fire Protection
- `flame`
Flame
- `fortune`
Fortune
- `frost_walker`
Frost Walker
- `impaling`
Impaling
- `infinity`
Infinity
- `knockback`
Knockback
- `looting`
Looting
- `loyalty`
Loyalty
- `luck_of_the_sea`
Luck of the Sea
- `lure`
Lure
- `mending`
Mending
- `multishot`
Multishot
- `piercing`
Piercing
- `power`
Power
- `projectile_protection`
Projectile Protection
- `protection`
Protection
- `punch`
Punch
- `quick_charge`
Quick Charge
- `respiration`
Respiration
- `riptide`
Riptide
- `sharpness`
Sharpness
- `silk_touch`
Silk Touch
- `smite`
Smite
- `soul_speed`
Soul Speed
- `swift_sneak`
Swift Sneak
- `thorns`
Thorns
- `unbreaking`
Unbreaking
- `vanishing`
Vanishing
