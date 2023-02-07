---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: difficulty Command
description: Description and usage of the difficulty command
---
# `/difficulty` Command
Sets the difficulty level using difficulty enum or integer.

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
### Difficulty using difficulty enum: e, easy, h, hard, n, normal, p, peaceful
`/difficulty <difficulty: Difficulty>`

Set the difficulty using the `Difficulty` `enum`

### Difficulty using integer: 1 (easy), 2 (hard), 3 (normal), 4 (peaceful)
`/difficulty <difficulty: int>`

Set the difficulty using an integer.

## Arguments
- `difficulty`: [Difficulty](../enums/Difficulty.md)
Set the difficulty using the Difficult enum: `e` or `easy`, `h` or `hard`, `n` or `normal`, `p` or `peaceful`.
- `difficulty`: int
Set the difficulty using an integer.
