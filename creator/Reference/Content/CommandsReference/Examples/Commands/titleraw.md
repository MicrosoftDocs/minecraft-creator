---
author: mammerla
ms.author: mikeam
title: "titleraw Command"
description: "Description and usage of the /titleraw command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/titleraw` Command

Controls the text and behavior for screen titles using JSON messages.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**clear**](#clear)
- [**reset**](#reset)
- [**titleLocation**](#titlelocation) — The location where the raw title will display.
- [**times**](#times)

## clear

`/titleraw <player: target> <clear: titlerawclear>`

`Clear` the raw title for a given `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| clear | titlerawclear | Required |  |

## reset

`/titleraw <player: target> <reset: titlerawreset>`

`Reset` the raw subtitle text for a given `player` to blank text and sets the `fadeIn`, `stay`, and `fadeOut` times to their default values.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| reset | titlerawreset | Required |  |

## titleLocation

The location where the raw title will display. Uses the `TitleRawSet` Enums `title`, `subtitle`, or `actionbar`.

`/titleraw <player: target> <titleLocation: titlerawset> <raw json titleText: json>`

Add a raw title for a `player` at a given `location` with a `title message`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| titleLocation | titlerawset | Required | The location where the raw title will display. Uses the `TitleRawSet` Enums `title`, `subtitle`, or `actionbar`. |
| raw json titleText | [json](../CommandTypes/type_json_object.md) | Required | A JSON `string` for the raw title text. |

## times

`/titleraw <player: target> <times: titlerawtimes> <fadeIn: int> <stay: int> <fadeOut: int>`

Add a raw title for a `player` with set `fadeIn`, `stay`, `fadeOut` times.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| times | titlerawtimes | Required |  |
| fadeIn | [int](../CommandTypes/type_int.md) | Required | The number of gameticks for the raw title to fade in. Default: `0`. |
| stay | [int](../CommandTypes/type_int.md) | Required | The number of gameticks for the raw title to stay. Default: `0`. |
| fadeOut | [int](../CommandTypes/type_int.md) | Required | The number of gameticks for the raw title to fade out. Default: `0`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| clear | titlerawclear |  |
| fadeIn | [int](../CommandTypes/type_int.md) | The number of gameticks for the raw title to fade in. Default: `0`. |
| fadeOut | [int](../CommandTypes/type_int.md) | The number of gameticks for the raw title to fade out. Default: `0`. |
| player | [target](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| raw json titleText | [json](../CommandTypes/type_json_object.md) | A JSON `string` for the raw title text. |
| reset | titlerawreset |  |
| stay | [int](../CommandTypes/type_int.md) | The number of gameticks for the raw title to stay. Default: `0`. |
| times | titlerawtimes |  |
| titleLocation | titlerawset | The location where the raw title will display. Uses the `TitleRawSet` Enums `title`, `subtitle`, or `actionbar`. |
