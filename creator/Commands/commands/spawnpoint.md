---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: spawnpoint Command
description: Description and usage of the spawnpoint command
---
# `/spawnpoint` Command
Sets the spawn point for a player.

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
### Spawn point
`/spawnpoint [player: target] [spawnPos: x y z]`

Sets the `spawn position` for a `player`.

## Arguments
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `spawnPos: x y z`: position
A `vector` [x y z] of `floats` that defines the player's new spawn point.
