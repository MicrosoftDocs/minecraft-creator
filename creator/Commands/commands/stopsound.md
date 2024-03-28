---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: stopsound Command
description: Description and usage of the stopsound command
---
# `/stopsound` Command
Stops a sound.

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
### Stop sound
`/stopsound <player: target> [sound: string]`

Stop a sound for a `player` with an optional `sound` `string` .

## Arguments
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `sound`: string
A `string` from the sound `enum` of the sound to stop.
