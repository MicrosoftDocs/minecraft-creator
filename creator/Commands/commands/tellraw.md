---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: tellraw Command
description: Description and usage of the tellraw command
---
# `/tellraw` Command
Sends a JSON message to players.

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
### Tell raw
`/tellraw <target: target> <raw json message: json>`

`Tell` a target `player` a JSON `message`.

## Arguments
- `raw json message`: json
`JSON` that specifies the message to send.
- `target`: target
A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player to tell.
