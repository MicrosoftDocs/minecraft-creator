---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: fog Command
description: Description and usage of the fog command
---
# `/fog` Command
Add or remove fog settings file.

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
### Add fog
`/fog <victim: target> push <fogId: string> <userProvidedId: string>`

Add fog setting file to a particular player victim with a `fogId` or `userProvidedId` to specify the fog.

### Remove fog
`/fog <victim: target> <mode: delete> <userProvidedId: string>`

Remove fog setting file to a particular player victim with a `userProvidedId` to specify the fog.

## Arguments
- `fogId`: string
A `string` that specifies the fog.
- `mode`: delete
Delete mode
- `userProvidedId`: string
Required. A `string` that identifies the fog to use.
- `victim`: target
A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player perceives the fog.

## Enums
### `delete`
How an item is deleted.

#### Values
- `pop`
Pop
- `remove`
Remove
