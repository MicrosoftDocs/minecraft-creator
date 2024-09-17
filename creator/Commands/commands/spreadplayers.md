---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: spreadplayers Command
description: Description and usage of the spreadplayers command
---
# `/spreadplayers` Command
Teleports entities to random locations.

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
### Spread players
`/spreadplayers <x: rotation> <z: rotation> <spreadDistance: float> <maxRange: float> <victim: target> [maxHeight: rotation]`

Spawn players at a particular `x` and `z` rotation with a defined `distance`, `max range`, and `players`.

## Arguments
- `maxHeight`: rotation
The maximum height that players can spawn.
Default: `0.0`.
- `maxRange`: float
The furthest distance that players can spawn from each other.
Default: `0.0`.
- `spreadDistance`: float
The distance between players when they spawn.
Default: `0.0`.
- `victim`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `x`: rotation
The initial `x` position of the player.
- `z`: rotation
The initial `z` position of the player.
