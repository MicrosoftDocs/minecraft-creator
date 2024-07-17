---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: clone Command
description: Description and usage of the clone command
---
# `/clone` Command
Clones a set of blocks from one region to another.

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
### Clone with optional `maskMode`, `cloneMode`
`/clone <begin: x y z> <end: x y z> <destination: x y z> [maskMode: MaskMode] [cloneMode: CloneMode]`

Clone a set of blocks from one location to a destination with an optional `maskMode` and `cloneMode`.

### Clone with optional `maskMode`, `cloneMode`, `tileName`, `blockStates`
`/clone <begin: x y z> <end: x y z> <destination: x y z> filtered <cloneMode: CloneMode> <tileName: Block> [blockStates: block properties]`

Clone a set of blocks from one location to a destination with an optional `maskMode` and `cloneMode`, as well as optional `tileName` or `blockStates` data  to specify the blocks to clone.

## Arguments
- `begin: x y z`: position
A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type.
- `blockStates`: block properties
An `array` of block states. Specifies the block  states to use for the cloned blocks.
- `cloneMode`: CloneMode
An `enum` that is one of type `force`, `move`, or `normal`.
Default: `normal`.
- `destination: x y z`: position
A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. The lower northwest corner of the region being cloned.
- `end: x y z`: position
A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type.
- `maskMode`: MaskMode
An `enum` that filters the blocks being cloned. If type `masked`, copy non-air blocks.
- `tileName`: [Block](../enums/Block.md)
An `enum` that must be the `block name` of the blocks that are to be cloned.

## Enums
### `CloneMode`
An `enum`  of type `force`, `move`, or `normal`. 
`force` ignores any overlap between clone region and destination.
`move` clones the source region to destination and replaces old region with air.
`normal` does not move or force.

#### Values
- `normal`
`normal` does not move or force.
- `force`
`force` ignores any overlap between clone region and destination.
- `move`
`move` clones the source region to destination and replaces old region with air.

### `MaskMode`
An `enum` that filters the blocks being cloned. If type `replace`, copy blocks and rewrite over all blocks in the destination. If type `masked`, copy non-air blocks. Blocks in destination remain.

#### Values
- `replace`
'replace' type will copy blocks and rewrite over all blocks in the destination.
- `masked`
'masked'type will copy non-air blocks. Blocks in destination remain.
