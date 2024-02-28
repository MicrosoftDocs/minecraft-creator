---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: gamemode Command
description: Description and usage of the gamemode command
---
# `/gamemode` Command
Sets a player's game mode. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#gamemode).

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
### Set game mode with enum
`/gamemode <gameMode: GameMode> [player: target]`

Set a player's game mode using the gamemode `enum`.

### Set game mode with integer
`/gamemode <gameMode: int> [player: target]`

Set a player's game mode using an `integer`.

## Arguments
- `gameMode`: GameMode
Game mode enum
- `gameMode`: int
Game mode integer
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.

## Enums
### `GameMode`
The game mode.

#### Values
- `default`
Default
- `creative`
Creative
- `spectator`
Spectator
- `survival`
Survival
- `adventure`
Adventure
- `d`
d for Default
- `c`
c for Creative
- `s`
s for Survival
- `a`
a for Adventure
