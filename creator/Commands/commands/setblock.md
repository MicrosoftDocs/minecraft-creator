---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: setblock Command
description: Description and usage of the setblock command
---
# `/setblock` Command
Changes a block to another block.

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
### Set block, block states
`/setblock <position: x y z> <tileName: Block> <blockStates: block properties> [oldBlockHandling: SetBlockMode]`

Set a `block` in a `position` using `tile name` with optional `block states` and `old block handling` fill methods.

### `/setblock <position: x y z> <tileName: Block> [oldBlockHandling: SetBlockMode]`

## Arguments
- `blockStates`: block properties
The block states from the `enum` to use for the block to be set.
- `oldBlockHandling`: SetBlockMode
An `enum` of type `destroy`, `hollow`, `keep`, `outline`, or `replace`.
Default: `replace`.
- `position: x y z`: position
A `vector` [x y z] that defines the position of the block to change.
- `tileName`: [Block](../enums/Block.md)
An block name from the `enum` that specifies the new block.

## Enums
### `SetBlockMode`
Enum of Set Block Modes

#### Values
- `replace`
Replace
- `destroy`
Destroy
- `keep`
Keep
