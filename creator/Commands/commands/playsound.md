---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: playsound Command
description: Description and usage of the playsound command
---
# `/playsound` Command
Plays a sound.

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
### Play sound
`/playsound <sound: string> [player: target] [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]`

Play a `sound` with optional `player`, `position`, `volume`, `pitch`, and `minimum volume`.

## Arguments
- `minimumVolume`: float
A `float` that specifies the volume. Between 0.0 and 1.0.
Default: `0.0`.
- `pitch`: float
Optional. A `float` that specifies the pitch. Must bet between 0.0 and 256.
Default: `1.0`.
- `player`: target
Optional. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `position: x y z`: position
Optional. `Vector` [x y z] of the position sounds originate from.
- `sound`: string
Required. A `string` that defines the sound. Should be defined in `sound.definitions.josn`.
- `volume`: float
Optional. A `float` that specifies the volume. Between 0.0 and 1.0. Below 1.0 diminishes the sound. 0 is inaudible.
Default: `1.0`.
