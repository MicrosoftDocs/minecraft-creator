---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: difficulty Command
description: Description and usage of the difficulty command
---
# `/difficulty` Command
Sets the difficulty level (Peaceful, Easy, Normal, Hard) using difficulty enum or integer.

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
### Difficulty using difficulty enum: p, peaceful, e, easy, n, normal, h, hard
`/difficulty <difficulty: Difficulty>`

Set the difficulty using the `Difficulty` `enum`

### Difficulty using integer: 0 (Peaceful), 1 (Easy), 2 (Normal), 3 (Hard).
`/difficulty <difficulty: int>`

Set the difficulty using an integer.

## Arguments
- `difficulty`: [Difficulty](../enums/Difficulty.md)
Set the difficulty using the Difficult enum: `p` or `peaceful`, `e` or `easy`, `n` or `normal`, `h` or `hard`.
- `difficulty`: int
Set the difficulty using an integer: 0 (Peaceful), 1 (Easy), 2 (Normal), 3 (Hard).
