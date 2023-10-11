---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: save Command
description: Description and usage of the save command
---
# `/save` Command
Control or check how the game saves data to disk. This command is for use on a dedicated server only.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Owner</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Save
`/save <mode: SaveMode>`

Save the current game.

## Arguments
- `mode`: SaveMode
Either `save-all` or `save-all flush` to save chunks to server immediately. This freezes the servers.

## Enums
### `SaveMode`
An `enum` of either `disk` to save structure to the world database which persists between game loads, or `memory` that temporarily saves the structure.
Default: `memory`.

#### Values
- `query`
Query
- `hold`
Hold
- `resume`
Resume
