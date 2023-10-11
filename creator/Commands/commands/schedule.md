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
### Schedule function call, delay time int
`/schedule on_area_loaded add <from: x y z> <to: x y z> <function: filepath>`

Schedule a function call with a delay using a time integer.

### Schedule function call, delay time ticks
`/schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath>`

Schedule a function call with a delay using a time in game ticks.

### Schedule function call, delay time ticks
`/schedule on_area_loaded add tickingarea <name: string> <function: filepath>`

Schedule a function call with a delay using a time in game ticks.

## Arguments
- `center: x y z`: position
A `vector` [x y z] that specifies the center of a defined loaded area.
- `from: x y z`: position
A `vector` [x y z] that specifies the rectangular area to load, along with `to`.
- `function`: filepath
Required. The function to run.
- `name`: string
A `string` that defines the `tickingarea` where the command is added.
- `radius`: int
An `integer` that specifies the area as the number of chunks loaded in.
Default: `0`.
- `to: x y z`: position
A vector [x y z] that specifies the rectangular area to load, along with `from`.
