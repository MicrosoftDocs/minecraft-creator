---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: fill Command
description: Description and usage of the fill command
---
# `/fill` Command
Fills all or parts of a region with a specific block.

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
### Fill with block state, optional fill mode
`/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block properties> [oldBlockHandling: FillMode]`

Fill a region `from` one position `to` another of a particular `block state` with an optional fill mode.

### Fill, filter on block states, optional replace with tile name or block state
`/fill <from: x y z> <to: x y z> <tileName: Block> [oldBlockHandling: FillMode]`

Fill a region `from` one position `to` another of a particular `block name`, filtering on particular `block states`, and replacing with blocks using an optional `replacement tile name` and optional `replacement block states`.

### Fill, filtering on block states, with replacement blocks and states
`/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block properties> replace [replaceTileName: Block] [replaceBlockStates: block properties]`


### Fill with replacement blocks and states
`/fill <from: x y z> <to: x y z> <tileName: Block> replace [replaceTileName: Block] [replaceBlockStates: block properties]`


## Arguments
- `blockStates`: block properties
An array of block states.
- `from: x y z`: position
A vector that specifies the location in `x`, `y`, and `z` coordinates of `float` type.
- `oldBlockHandling`: FillMode
Old block handling fill mode
- `replaceBlockStates`: block properties
An `array` of block states to replace.
- `replaceTileName`: [Block](../enums/Block.md)
An `enum` of the type of the block `id` to replace in the fill region.
- `tileName`: [Block](../enums/Block.md)
An `enum` of the block `id` of the block to fill the region with.
- `to: x y z`: position
A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type.

## Enums
### `FillMode`
An `enum` of type `destroy`, `hollow`, `keep`, `outline`, or `replace`.
`destroy` replaces all blocks in the fill region and removes existing blocks.
`hollow` replaces only the block on the outer edge with the specified block.
`keep` replaces only the air blocks in the fill version.
`outline` replaces only inner blocks on the outer edge with the specified block.
`replace` replaces all blocks in teh fill region with the specified block without dropping blocks.

#### Values
- `outline`
`outline` replaces only inner blocks on the outer edge with the specified block
- `hollow`
`hollow` replaces only the block on the outer edge with the specified block
- `destroy`
`destroy` replaces all blocks in the fill region and removes existing blocks
- `keep`
`keep` replaces only the air blocks in the fill version
