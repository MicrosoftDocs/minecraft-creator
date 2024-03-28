---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: setmaxplayers Command
description: Description and usage of the setmaxplayers command
---
# `/setmaxplayers` Command
Sets the maximum number of players for this game session.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Host</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Set max players
`/setmaxplayers <maxPlayers: int>`

Set the maximum number of players for this game session.

## Arguments
- `maxPlayers`: int
An `integer` that defines the new max number of players. Subject to the maximum number of connections the game allows.
