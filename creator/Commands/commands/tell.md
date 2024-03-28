---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: tell Command
description: Description and usage of the tell command
---
# `/tell` Command
Sends a private message to one or more players.

<table>
  <tr>
    <th>Aliases</th>
    <td>/w, /msg</td>
  </tr>
  <tr>
    <th>Permission Level</th>
    <td>Any</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>No</td>
  </tr>
</table>

## Usage
### Tell
`/tell <target: target> <message: message>`

`Tell` a target `player` a `message`.

## Arguments
- `message`: message
A `string` of the message.
- `target`: target
A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player to tell.
