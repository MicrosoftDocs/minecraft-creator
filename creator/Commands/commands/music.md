---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: music Command
description: Description and usage of the music command
---
# `/music` Command
Allows you to control playing music tracks.

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
### Queue track
`/music queue <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]`

Queue a `track name` with an optional `volume`, `fade seconds`, and `repeat mode`.

### Play track
`/music play <trackName: string> [volume: float] [fadeSeconds: float] [repeatMode: MusicRepeatMode]`

Play a `track name` with an optional `volume`, `fade seconds`, and `repeat mode`.

### Stop music
`/music stop [fadeSeconds: float]`

Stop the music with optional `fade seconds` value.

### Adjust volume
`/music volume <volume: float>`

Adjust the volume with required `volume` value.

## Arguments
- `fadeSeconds`: float
A `float` number that specifies the duration the track fades in or out.
- `repeatMode`: MusicRepeatMode
Optional. An `enum`  that specifies how the music is played. Must be `play_once` (default) or `loop`.
- `trackName`: string
Required. A `string` to specify the track to play. Must be a single word such as `record.cat`.
- `volume`: float
A `float` number to specify the volume of the music track.

## Enums
### `MusicRepeatMode`
Enum of Music Repeat Modes

#### Values
- `play_once`
Play Once
- `loop`
Loop
