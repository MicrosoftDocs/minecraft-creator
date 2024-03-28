---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: changesetting Command
description: Description and usage of the changesetting command
---
# `/changesetting` Command
Changes a setting on the dedicated server while it's running.

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
### Allow-cheats
`/changesetting allow-cheats <value: Boolean>`

Allows cheats using `Boolean` .

### Difficulty (difficulty value)
`/changesetting difficulty <value: Difficulty>`

Changes difficulty using difficulty value from the [Difficulty enum](../enums/Difficulty.md).

### Difficulty (integer value)
`/changesetting difficulty <value: int>`

Changes difficulty using difficulty `integer` from the [Difficulty enum](../enums/Difficulty.md).

## Arguments
- `value`: [Boolean](../enums/Boolean.md)
Boolean value
- `value`: [Difficulty](../enums/Difficulty.md)
Difficulty value
- `value`: int
Integer value
