---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: camerashake Command
description: Description and usage of the camerashake command
---
# `/camerashake` Command
Applies shaking to the players' camera with specified intensity and duration. Parameters: 'stop' or 'add' the effect, specify player (target), intensity (float, min 0.0 to max 4.0), seconds(float, min 0.01), and shakeType (positional or rotational). Must have `Allow Camera Shake` option turned on in user settings.

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
### Add
`/camerashake add <player: target> [intensity: float] [seconds: float] [shakeType: CameraShakeType]`

Adds shaking to a player's camera with optional `intensity`,  `seconds`, and `shakeType`.

### Stop
`/camerashake stop [player: target]`

Stops the player camera's shaking.

## Arguments
- `intensity`: float
Optional. Default `0.5`. A `float` that specifies the camera shake intensity with values from [0, 4].
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `seconds`: float
Optional.  A `float` that specifies how long the camera will shake.
Default: `1.0`.
- `shakeType`: CameraShakeType
Optional. Either `positional` or `rotational` camera shake type.
Default: `positional`.

## Enums
### `CameraShakeType`
Variation of the camera's shaking.

#### Values
- `positional`
Shakes camera as though target's X and Z position is changing rapidly.
- `rotational`
Shakes camera as though target's X, Y, and Z coordinates are changing rapidly.
