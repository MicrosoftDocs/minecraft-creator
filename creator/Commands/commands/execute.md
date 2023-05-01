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
`/execute as <origin: target> <chainedCommand: ExecuteChainedOption_0>`

Execute a given command from a `position` and specified `origin` target.

### Execute from position and origin, check for block, block id
`/execute at <origin: target> <chainedCommand: ExecuteChainedOption_0>`

Execute a given command from a `position` and specified `origin` target, while checking for a specific `block` and block id.

### `/execute in <dimension: Dimension> <chainedCommand: ExecuteChainedOption_0>`

### `/execute positioned <position: x y z> <chainedCommand: ExecuteChainedOption_0>`

### `/execute positioned as <origin: target> <chainedCommand: ExecuteChainedOption_0>`

### `/execute rotated <yaw: rotation> <pitch: rotation> <chainedCommand: ExecuteChainedOption_0>`

### `/execute rotated as <origin: target> <chainedCommand: ExecuteChainedOption_0>`

### `/execute facing <position: x y z> <chainedCommand: ExecuteChainedOption_0>`

### `/execute facing entity <origin: target> <anchor: ActorLocation> <chainedCommand: ExecuteChainedOption_0>`

### `/execute align <axes: string> <chainedCommand: ExecuteChainedOption_0>`

### `/execute anchored <anchored: ActorLocation> <chainedCommand: ExecuteChainedOption_0>`

### `/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: ExecuteChainedOption_0]`

### `/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block properties> [chainedCommand: ExecuteChainedOption_0]`

### `/execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: ExecuteChainedOption_0]`

### `/execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: ExecuteChainedOption_0]`

### `/execute <subcommand: Option_If_Unless> score <target: target> <objective: ScoreboardObjectives> <operation: compareoperator> <source: target> <objective: ScoreboardObjectives> [chainedCommand: ExecuteChainedOption_0]`

### `/execute <subcommand: Option_If_Unless> score <target: target> <objective: ScoreboardObjectives> matches <range: fullintegerrange> [chainedCommand: ExecuteChainedOption_0]`

### `/execute run <command: command>`

## Arguments
- `anchor`: ActorLocation
- `anchored`: ActorLocation
- `axes`: string
- `begin: x y z`: position
- `block`: [Block](../enums/Block.md)
Compares block to a given block `id`.
- `blockStates`: block properties
- `chainedCommand`: ExecuteChainedOption_0
- `command`: command
A `string` of the command to run. Must be a valid command.
- `destination: x y z`: position
- `dimension`: Dimension
- `end: x y z`: position
- `objective`: ScoreboardObjectives
- `operation`: compareoperator
- `origin`: target
The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors).
- `pitch`: rotation
- `position: x y z`: position
A `vector` of where to run the command from.
- `range`: fullintegerrange
- `scan mode`: BlocksScanMode
- `source`: target
- `subcommand`: Option_If_Unless
- `target`: target
- `yaw`: rotation

## Enums
### `ActorLocation`

#### Values
- `eyes`
- `feet`

### `BlocksScanMode`

#### Values
- `masked`
- `all`

### `Dimension`

#### Values
- `overworld`
- `nether`
- `the_end`

### `ExecuteChainedOption_0`

#### Values
- `as`
- `at`
- `in`
- `positioned`
- `rotated`
- `facing`
- `align`
- `anchored`
- `if`
- `unless`
- `run`

### `Option_If_Unless`

#### Values
- `if`
- `unless`
