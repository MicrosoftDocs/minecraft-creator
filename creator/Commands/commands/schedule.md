---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: schedule Command
description: Description and usage of the schedule command
---
# `/schedule` Command
Schedules an action to be executed once an area is loaded, or after a certain amount of time.

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
### Schedule function call, delay time ticks
`/schedule delay add <function: filepath> <time: int> [DelayMode: DelayMode]`

Schedule a function call with a delay using a time in game ticks.

### Schedule function call, delay time ticks
`/schedule delay add <function: filepath> <time: time> [DelayMode: DelayMode]`

Schedule a function call with a delay using a time in game ticks.

### Schedule function call, delay time seconds
`/schedule delay add <function: filepath> <time: time> [DelayMode: DelayMode]`

Schedule a function call with a delay using a time in seconds.

### Schedule function call, delay time days
`/schedule delay add <function: filepath> <time: time> [DelayMode: DelayMode]`

Schedule a function call with a delay using a time in game days.

### Clear Scheduled delay functions
`/schedule delay clear <function: filepath>`

Clear previously scheduled delay functions by name.

### Clear Scheduled functions
`/schedule clear <function: filepath>`

Clear previously scheduled functions by name

### Schedule function call when area loaded, location
`/schedule on_area_loaded add <from: x y z> <to: x y z> <function: filepath>`

Schedule a function when an area is loaded from a location to another location.

### Schedule function call when area loaded, radius
`/schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath>`

Schedule a function when an area is loaded in a radius.

### Schedule function call when area loaded, ticking area
`/schedule on_area_loaded add tickingarea <name: string> <function: filepath>`

Schedule a function when an area is loaded in a ticking area.

### Clear scheduled area loaded functions, ticking area name
`/schedule on_area_loaded clear tickingarea <name: string> [function: filepath]`

Clear previously scheduled area loaded functions by ticking area name and optionally also by function name.

### Clear scheduled area loaded functions, function name
`/schedule on_area_loaded clear function <function: filepath>`

Clear previously scheduled area loaded functions by function name.

## Arguments
- `center: x y z`: position
A `vector` [x y z] that specifies the center of a defined loaded area.
- `DelayMode`: DelayMode
An `enum` of either `append` to allow multiple schedules or `replace` to replace the default schedule.
- `from: x y z`: position
A `vector` [x y z] that specifies the rectangular area to load, along with `to`.
- `function`: filepath
Required. The function to run.
- `name`: string
A `string` that defines the `tickingarea` where the command is added.
- `radius`: int
An `integer` that specifies the area as the number of chunks loaded in.
Default: `0`.
- `time`: int
Time integer
- `time`: time
Time
- `to: x y z`: position
A vector [x y z] that specifies the rectangular area to load, along with `from`.

## Enums
### `DelayMode`
Must be one of `append` to allow multiple schedules or `replace` to replace the default schedule.

#### Values
- `replace`
Replace - replace the default schedule
- `append`
Append - allow multiple schedules
