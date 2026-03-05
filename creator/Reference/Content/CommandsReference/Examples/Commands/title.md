---
author: mammerla
ms.author: mikeam
title: "title Command"
description: "Description and usage of the /title command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/title` Command

Controls the text and behavior for screen titles using plain text.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**clear**](#clear)
- [**reset**](#reset)
- [**titleLocation**](#titlelocation) — An `enum` of `title`, `subtitle`, or `actionbar`.
- [**times**](#times)

## clear

### Clear title

`/title <player: target> <clear: titleclear>`

`Clear` the `title` for a given `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| clear | titleclear | Required |  |

## reset

### Reset title

`/title <player: target> <reset: titlereset>`

`Reset` the subtitle text for a given `player` to blank text and sets the `fadeIn`, `stay`, and `fadeOut` times to their default values.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| reset | titlereset | Required |  |

## titleLocation

An `enum` of `title`, `subtitle`, or `actionbar`.

### Add title, location, message

`/title <player: target> <titleLocation: titleset> <titleText: message_root>`

Add a `title` for a `player` at a given `location` with a `title message`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| titleLocation | titleset | Required | An `enum` of `title`, `subtitle`, or `actionbar`. |
| titleText | [Message](../CommandTypes/type_message_root.md) | Required | A `plain text` `string` for the title text. |

## times

### Add title, fade in, fade out

`/title <player: target> <times: titletimes> <fadeIn: int> <stay: int> <fadeOut: int>`

Add a `title` for a `player` with set `fade in`, `stay`, and `fade out` times.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| times | titletimes | Required |  |
| fadeIn | [Integer](../CommandTypes/type_int.md) | Required | The number of gameticks for the title to fade in. Default: `10`. |
| stay | [Integer](../CommandTypes/type_int.md) | Required | The number of gameticks for the title to stay. Default: `70`. |
| fadeOut | [Integer](../CommandTypes/type_int.md) | Required | The number of gameticks for the title to fade out. Default: `20`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| clear | titleclear |  |
| fadeIn | [Integer](../CommandTypes/type_int.md) | The number of gameticks for the title to fade in. Default: `10`. |
| fadeOut | [Integer](../CommandTypes/type_int.md) | The number of gameticks for the title to fade out. Default: `20`. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| reset | titlereset |  |
| stay | [Integer](../CommandTypes/type_int.md) | The number of gameticks for the title to stay. Default: `70`. |
| times | titletimes |  |
| titleLocation | titleset | An `enum` of `title`, `subtitle`, or `actionbar`. |
| titleText | [Message](../CommandTypes/type_message_root.md) | A `plain text` `string` for the title text. |
