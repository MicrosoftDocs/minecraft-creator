---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: volumearea Command
description: Description and usage of the volumearea command
---
# `/volumearea` Command
[Experimental Command]. Manages a set of named volumes.

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
### Add volume
`/volumearea add <identifier: string> <from: x y z> <to: x y z> [name: string]`

Adds a specified name volume.

### Remove volume
`/volumearea remove <name: string>`

Removes a named volume.

### Remove volume at position
`/volumearea remove <position: x y z>`

Removes a volume at the specified position.

### Remove all volumes
`/volumearea remove_all`

Removes all defined volume areas.

### List volumes
`/volumearea list [all-dimensions: VolumeAreaAllDimensions]`

Lists all available volume areas. 

## Arguments
- `all-dimensions`: VolumeAreaAllDimensions
- `from: x y z`: position
- `identifier`: string
- `name`: string
- `position: x y z`: position
- `to: x y z`: position
