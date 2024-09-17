---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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

`Add` a given positive `integer` amount of `xp` to the target `player`.

### Remove XP
`/xp <amount: int> [player: target]`

`Remove` a given negative `integer` amount of `xp` from the target `player`.

## Arguments
- `amount`: int
An `integer` of the experience to add to the player. May only be negative to remove xp.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player who should receive or lose xp.
