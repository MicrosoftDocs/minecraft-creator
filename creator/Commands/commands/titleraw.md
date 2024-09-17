---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: titleraw Command
description: Description and usage of the titleraw command
---
# `/titleraw` Command
Controls the text and behavior for screen titles using JSON messages.

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

`Clear` the raw title for a given `player`.

### Reset raw title
`/titleraw <player: target> reset`

`Reset` the raw subtitle text for a given `player` to blank text and sets the `fadeIn`, `stay`, and `fadeOut` times to their default values.

### Add raw title
`/titleraw <player: target> <titleLocation: TitleRawSet> <raw json titleText: json>`

Add a raw title for a `player` at a given `location` with a `title message`.

### Add raw title, fade in, fade out
`/titleraw <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>`

Add a raw title for a `player` with set `fadeIn`, `stay`, `fadeOut` times.

## Arguments
- `fadeIn`: int
The number of gameticks for the raw title to fade in.
Default: `0`.
- `fadeOut`: int
The number of gameticks for the raw title to fade out.
Default: `0`.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `raw json titleText`: json
A JSON `string` for the raw title text.
- `stay`: int
The number of gameticks for the raw title to stay.
Default: `0`.
- `titleLocation`: TitleRawSet
The location where the raw title will display. Uses the `TitleRawSet` Enums `title`, `subtitle`, or `actionbar`.

## Enums
### `TitleRawSet`
Enum of Title Raw Set

#### Values
- `title`
Displays the raw title text as large text in the center of the screen.
- `subtitle`
Displays the raw title text as smaller text below the `title`.
- `actionbar`
Displays the raw title text just above the player's action bar.
