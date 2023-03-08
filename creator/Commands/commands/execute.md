---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: execute Command
description: Description and usage of the execute command
---
# `/execute` Command
Executes a command on behalf of one or more entities. See more information in the [Popular Commands page](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#execute) and the [New Execute Syntax page](https://learn.microsoft.com/minecraft/creator/documents/commandsnewexecute).

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
### Execute from position and origin
`/execute <origin: target> <position: x y z> <command: command>`

Execute a given command from a `position` and specified `origin` target.

### Execute from position and origin, check for block, block id
`/execute <origin: target> <position: x y z> detect <detectPos: x y z> <block: Block> <data: int> <command: command>`

Execute a given command from a `position` and specified `origin` target, while checking for a specific `block` and block id.

## Arguments
- `block`: [Block](../enums/Block.md)
Compares block to a given block `id`.
- `command`: command
A `string` of the command to run. Must be a valid command.
- `data`: int
An `integer` for the block data or `-1` to match all blocks.
- `detectPos: x y z`: position
A `vector` of the position of the block to check.
- `origin`: target
The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors).
- `position: x y z`: position
A `vector` of where to run the command from.
