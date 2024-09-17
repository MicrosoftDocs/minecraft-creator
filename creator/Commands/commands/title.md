---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: title Command
description: Description and usage of the title command
---
# `/title` Command
Controls the text and behavior for screen titles using plain text.

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

`Clear` the `title` for a given `player`.

### Reset title
`/title <player: target> reset`

`Reset` the subtitle text for a given `player` to blank text and sets the `fadeIn`, `stay`, and `fadeOut` times to their default values.

### Add title, location, message
`/title <player: target> <titleLocation: TitleSet> <titleText: message>`

Add a `title` for a `player` at a given `location` with a `title message`.

### Add title, fade in, fade out
`/title <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>`

Add a `title` for a `player` with set `fade in`, `stay`, and `fade out` times.

## Arguments
- `fadeIn`: int
The number of gameticks for the title to fade in.
Default: `10`.
- `fadeOut`: int
The number of gameticks for the title to fade out.
Default: `20`.
- `player`: target
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `stay`: int
The number of gameticks for the title to stay.
Default: `70`.
- `titleLocation`: TitleSet
An `enum` of `title`, `subtitle`, or `actionbar`.
- `titleText`: message
A `plain text` `string`  for the title text.

## Enums
### `TitleSet`
Enum of Title Sets

#### Values
- `title`
Displays the title text as large text in the center of the screen.
- `subtitle`
Displays the title text as smaller text below the `title`.
- `actionbar`
Displays the title text just above the player's action bar.
