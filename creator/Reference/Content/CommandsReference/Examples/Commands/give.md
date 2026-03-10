---
author: mammerla
ms.author: mikeam
title: "give Command"
description: "Description and usage of the /give command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/give` Command

Gives an item to a player.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/give <player: target> <itemName: Item> [amount: int] [data: int] [components: json]`

## Usage

`/give <player: target> <itemName: Item> [amount: int] [data: int] [components: json]`

Give a set of players selected via a target selector an item.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| itemName | [Item](../CommandTypes/type_item.md) | Required | An `enum` of the type of item to give. |
| amount | [int](../CommandTypes/type_int.md) | Optional | Amount to give to player. Default: `1`. |
| data | [int](../CommandTypes/type_int.md) | Optional | Optional. Fireworks related `data` required to give a firework type item. |
| components | [json](../CommandTypes/type_json_object.md) | Optional | Optional. Specify if the item has components to call required component events. |

**Examples:**

Give yourself 64 diamonds:

```
/give @s diamond 64
```

Give all players an iron sword:

```
/give @a iron_sword
```

Give yourself 16 golden apples:

```
/give @s golden_apple 16
```

## Examples

### Give yourself a netherite sword

```
/give @s netherite_sword
```

### Give 32 cooked beef to all players

```
/give @a cooked_beef 32
```

### Give a diamond pickaxe that can only destroy stone and deepslate

```
/give @p diamond_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["stone","deepslate"]}}
```

### Give 64 firework rockets with data value 1

```
/give @s firework_rocket 64 1
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| amount | [int](../CommandTypes/type_int.md) | Amount to give to player. Default: `1`. |
| components | [json](../CommandTypes/type_json_object.md) | Optional. Specify if the item has components to call required component events. |
| data | [int](../CommandTypes/type_int.md) | Optional. Fireworks related `data` required to give a firework type item. |
| itemName | [Item](../CommandTypes/type_item.md) | An `enum` of the type of item to give. |
| player | [target](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
