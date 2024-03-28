---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: give Command
description: Description and usage of the give command
---
# `/give` Command
Gives an item to a player.

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
### Give item to target
`/give <player: target> <itemName: Item> [amount: int] [data: int] [components: json]`

Give a set of players selected via a target selector an item.

## Arguments
- `amount`: int
Amount to give to player.
Default: `1`.
- `components`: json
Optional. Specify if the item has components to call required component events.
- `data`: int
Optional. Fireworks related `data` required to give a firework type item.
- `itemName`: [Item](../enums/Item.md)
An `enum` of the type of item to give.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
