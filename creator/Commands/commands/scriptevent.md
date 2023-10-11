---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: scriptevent Command
description: Description and usage of the scriptevent command
---
# `/scriptevent` Command
Causes an event to fire within script with the specified message ID and payload. This can be used to connect scripting with any location where commands are used.

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
### Send script event message
`/scriptevent <messageId: string> <message: message>`

Passes a message with the specified ID and payload.

## Arguments
- `message`: message
Data component of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world.
- `messageId`: string
Identifier of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world.
