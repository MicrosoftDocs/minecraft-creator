---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: testforblock Command
description: Description and usage of the testforblock command
---
# `/testforblock` Command
Tests whether a certain block is in a specific location.

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
### Test for block, optional block state
`/testforblock <position: x y z> <tileName: Block> [blockStates: block properties]`

Test for a `block name` in a `vector` position with optional `block states`.

## Arguments
- `blockStates`: block properties
Optional. The `block states` to match when testing.
- `position: x y z`: position
Required. A `vector` of the location the block to test.
- `tileName`: [Block](../enums/Block.md)
Required. An `enum` of the block to test for.
