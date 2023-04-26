---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: xp Command
description: Description and usage of the xp command
---
# `/xp` Command
Adds or removes player experience.

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
### Add XP
`/xp <amount: int> [player: target]`

`Add` an `integer` `xp` to a `player`.

### Remove XP
`/xp <amount: int> [player: target]`

`Remove` a given negative `integer` amount of `xp` levels from `player`.

## Arguments
- `amount`: int
An `integer` of the experience to add to the player. May be negative to remove xp levels only. 
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
