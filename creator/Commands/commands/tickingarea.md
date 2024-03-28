---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: tickingarea Command
description: Description and usage of the tickingarea command
---
# `/tickingarea` Command
Add, remove, or list ticking areas. See more information in the [Ticking Area documentation](https://learn.microsoft.com/minecraft/creator/documents/tickingareacommand).

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
### Add ticking area, rectangle
`/tickingarea add <from: x y z> <to: x y z> [name: string] [preload: Boolean]`

`Add` a `ticking area` `from` one vector `to` another with an optional `name` and `preload` value.

### Add ticking area, circle
`/tickingarea add circle <center: x y z> <radius: int> [name: string] [preload: Boolean]`

`Add` a `circle` `ticking area` with a vector `center` and `radius`, as well as an optional `preload`.

### Remove ticking area, vector
`/tickingarea remove <position: x y z>`

`Remove` a `ticking area` from a vector `position`.

### Remove ticking area, named
`/tickingarea remove <name: string>`

`Remove` a `ticking area` with a given `name`.

### Remove all ticking areas
`/tickingarea remove_all`

`Remove` all `ticking areas`.

### List all ticking areas
`/tickingarea list [all-dimensions: AllDimensions]`

`List` all `ticking areas` with optional `all dimensions`.

### Preload ticking area, position
`/tickingarea preload <position: x y z> [preload: Boolean]`

`Preload` a `ticking area` of `position` vector with optional `preload`.

### Preload ticking area, named
`/tickingarea preload <name: string> [preload: Boolean]`

`Preload` a `ticking area` of `name` with optional `preload`.

## Arguments
- `all-dimensions`: AllDimensions
Specify `all-dimensions` to determine whether ticking areas in other dimensions are listed.
- `center: x y z`: position
A `vector` [x y z] that specifies the center of a defined loaded area.
- `from: x y z`: position
A `vector` [x y z] that along with `to` of two opposite corners of a rectangular region to test for.
- `name`: string
An optional `string` to specify the name of a ticking area.
- `position: x y z`: position
A `vector` [x y z] of a point within the ticking area.
- `preload`: [Boolean](../enums/Boolean.md)
A `Boolean` that queries the preload value.
Default: `false`.
- `radius`: int
An `integer` that specifies the area as the number of chunks loaded in. Between 0 and 4.
- `to: x y z`: position
A `vector` [x y z] that along with `from` of two opposite corners of a rectangular region to test for.
