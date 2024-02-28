---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: testforblocks Command
description: Description and usage of the testforblocks command
---
# `/testforblocks` Command
Tests whether the blocks in two regions match.

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
### Test for blocks
`/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [mode: TestForBlocksMode]`

Test whether the blocks in one area defined by `begin` and `end` match the blocks in a `destination` with an optional `test for blocks mode`.

## Arguments
- `begin: x y z`: position
A `vector` [x y z] that along with `end` of two opposite corners of a rectangular region to test for.
- `destination: x y z`: position
Required. A `vector` [x y z] of the lower northwest corner to test for.
- `end: x y z`: position
Required. A `vector` [x y z] that along with `begin` of two opposite corners of a rectangular region to test for.
- `mode`: TestForBlocksMode
Optional. Either `masked` where air blocks will match any destination, or default `all` which matches all blocks including air.

## Enums
### `TestForBlocksMode`
Enum of Test for Blocks Modes

#### Values
- `masked`
Masked
- `all`
All
