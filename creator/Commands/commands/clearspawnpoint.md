---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: clearspawnpoint Command
description: Description and usage of the clearspawnpoint command
---
# `/clearspawnpoint` Command
Removes the spawn point for a player.

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
### Clearspawnpoint
`/clearspawnpoint [player: target]`

Clear the spawn point of a given player.

## Arguments
- `player`: target
The player whose checkpoint should be cleared. When using this command in a command block, a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) or player name must be specified. When using this command in chat, if no target is specified, then default target is the player using the command.
