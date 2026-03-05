---
author: mammerla
ms.author: mikeam
title: "clear Command"
description: "Description and usage of the /clear command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/clear` Command

Clears items from player inventory.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/clear [player: target] [itemName: Item] [data: int] [maxCount: int]`

## Usage

`/clear [player: target] [itemName: Item] [data: int] [maxCount: int]`

Clears, from a player's inventory, an item with a specified name or ID, in a given quantity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | Player selector. May be a player name `string` or a [selected target](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) of type player. |
| itemName | [Item ID](../CommandTypes/type_item.md) | Optional | The item to clear. Clears all items if no specified. Item`ID`or block id. |
| data | [Integer](../CommandTypes/type_int.md) | Optional | The `item id` to be cleared. If not specified, all will be cleared. Default: `-1`. |
| maxCount | [Integer](../CommandTypes/type_int.md) | Optional | An `integer` that specifies how many items to clear. Default: `-1`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| data | [Integer](../CommandTypes/type_int.md) | The `item id` to be cleared. If not specified, all will be cleared. Default: `-1`. |
| itemName | [Item ID](../CommandTypes/type_item.md) | The item to clear. Clears all items if no specified. Item`ID`or block id. |
| maxCount | [Integer](../CommandTypes/type_int.md) | An `integer` that specifies how many items to clear. Default: `-1`. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Player selector. May be a player name `string` or a [selected target](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) of type player. |
