---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: time Command
description: Description and usage of the time command
---
# `/time` Command
Changes or queries the world's game time. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#time).

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
### Add time, integer
`/time add <amount: int>`

`Add` an `integer` `amount` of `time` in-game.

### Set time, integer
`/time set <amount: int>`

`Set` an `integer` `amount` of `time` in-game.

### Set time spec
`/time set <time: TimeSpec>`

`Set` a `time spec` `time` in-game.

### Query time
`/time query <time: TimeQuery>`

`Query` a `time` in `time query`.

## Arguments
- `amount`: int
An `integer` of the time to add or set.
Default: `0`.
- `time`: TimeSpec

- `time`: TimeQuery


## Enums
### `TimeQuery`
Enum of Time Queries

#### Values
- `daytime`
Daytime
- `gametime`
Gametime
- `day`
Day

### `TimeSpec`
Enum of Time Specs

#### Values
- `day`
Day
- `sunrise`
Sunrise
- `noon`
Noon
- `sunset`
Sunset
- `night`
Night
- `midnight`
Midnight
