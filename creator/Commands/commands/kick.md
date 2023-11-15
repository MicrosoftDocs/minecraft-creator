---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: kick Command
description: Description and usage of the kick command
---
# `/kick` Command
Kicks a player from the server.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>No</td>
  </tr>
</table>

## Usage
### Kick player, with reason
`/kick <name: target> <reason: message>`

Kick a player with `name` and `reason`.

## Arguments
- `name`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `reason`: message
A `message` in plain text that explains why player was kicked.
Default: `Kicked by an operator`.
