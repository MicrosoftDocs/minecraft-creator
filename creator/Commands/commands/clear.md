---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: clear Command
description: Description and usage of the clear command
---
# `/clear` Command
Clears items from player inventory.

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
### Clear
`/clear [player: target] [itemName: Item] [data: int] [maxCount: int]`

Clears, from a player's inventory, an item with a specified name or ID, in a given quantity.

## Arguments
- `data`: int
The `item id` to be cleared. If not specified, all will be cleared.
Default: `-1`.
- `itemName`: [Item](../enums/Item.md)
The item to clear. Clears all items if no specified. Item`ID`or block id.
- `maxCount`: int
An `integer` that specifies how many items to clear.
 Default: `-1`.
- `player`: target
Player selector. May be a player name `string`  or a [selected target](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) of type player.
