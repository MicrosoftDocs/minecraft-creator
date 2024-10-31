---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: place Command
description: Description and usage of the place command
---
# `/place` Command
Places a jigsaw structure in the world.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Admin</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### `/place structure <structure: JigsawStructure> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean]`

### `/place jigsaw <pool: filepath> <jigsawTarget: string> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean]`

## Arguments
- `ignoreStartHeight`: [Boolean](../enums/Boolean.md)
- `jigsawTarget`: string
- `keepJigsaws`: [Boolean](../enums/Boolean.md)
- `maxDepth`: int
- `pool`: filepath
- `pos: x y z`: position
- `structure`: JigsawStructure

## Enums
### `JigsawStructure`

#### Values
- `minecraft:trail_ruins`
- `minecraft:trial_chambers`
