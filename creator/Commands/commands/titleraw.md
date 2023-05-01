---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: titleraw Command
description: Description and usage of the titleraw command
---
# `/titleraw` Command
Controls screen titles with JSON messages.

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
### Clear raw title
`/titleraw <player: target> clear`

`Clear` `raw title` for a given `player`.

### Reset raw title
`/titleraw <player: target> reset`

`Reset` `raw title` for a given `player`.

### Add raw title
`/titleraw <player: target> <titleLocation: TitleRawSet> <raw json titleText: json>`

Add a `raw title` for a `player` at a given `location` with a `title message`.

### Add raw title, fade in, fade out
`/titleraw <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>`

Add a `raw title` for a `player` with set `fade in`, `stay`, `fade out` times.

## Arguments
- `fadeIn`: int
An `integer` of gameticks for the title to fade in.
Default: `0`.
- `fadeOut`: int
An `integer` of gameticks for the title to fade out.
Default: `0`.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `raw json titleText`: json

- `stay`: int
An `integer` of gameticks for the title to stay.
Default: `0`.
- `titleLocation`: TitleRawSet


## Enums
### `TitleRawSet`
Enum of Title Raw Set

#### Values
- `title`
Title
- `subtitle`
Subtitle
- `actionbar`
Action Bar
