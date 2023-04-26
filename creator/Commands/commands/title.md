---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: title Command
description: Description and usage of the title command
---
# `/title` Command
Controls screen titles.

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
### Clear title
`/title <player: target> clear`

`Clear` `title` for a given `player`.

### Reset title
`/title <player: target> reset`

`Reset` `title` for a given `player`.

### Add title, location, message
`/title <player: target> <titleLocation: TitleSet> <titleText: message>`

Add a `title` for a `player` at a given `location` with a `title message`.

### Add title, fade in, fade out
`/title <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>`

Add a `title` for a `player` with set `fade in`, `stay`, and `fade out` times.

## Arguments
- `fadeIn`: int
An `integer` of gameticks for the title to fade in.
Default: `10`.
- `fadeOut`: int
An `integer` of gameticks for the title to fade out.
Default: `20`.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `stay`: int
An `integer` of gameticks for the title to stay.
Default: `70`.
- `titleLocation`: TitleSet
An `enum` of `title`, `subtitle`, or `actionbar`.
- `titleText`: message
A `plain text` `string`  for the title.

## Enums
### `TitleSet`
Enum of Title Sets

#### Values
- `title`
Title
- `subtitle`
Subtitle
- `actionbar`
Action Bar
