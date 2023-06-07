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
### `/execute as <origin: target> <chainedCommand: executechainedoption_0>`

### `/execute at <origin: target> <chainedCommand: executechainedoption_0>`
Execute a given command from a `position` and specified `origin` target.

### Execute from position and origin, check for block, block id
Execute a given command from a `position` and specified `origin` target, while checking for a specific `block` and block id.

### Execute command in dimension

Executes a command within a particular dimension.

### Run a command with a custom position
`/execute positioned as <origin: target> <chainedCommand: executechainedoption_0>`
Runs a command with an adjusted position

### Execute command positioned as
`/execute positioned <position: x y z> <chainedCommand: executechainedoption_0>`
Runs a command with a position relative to a selection

### Execute with alternate rotation
`/execute rotated <yaw: rotation> <pitch: rotation> <chainedCommand: executechainedoption_0>`
Runs a command with an alternate rotation

### Execute a command with a rotation based on selection
`/execute rotated as <origin: target> <chainedCommand: executechainedoption_0>`

### Runs a command with an alternate facing
`/execute facing <position: x y z> <chainedCommand: executechainedoption_0>`
Runs a command with an alternate facing

### Run a command with a facing relative to a selection
`/execute facing entity <origin: target> <anchor: ActorLocation> <chainedCommand: executechainedoption_0>`
Runs a command with a facing based on a selection

### Runs a command with coordinates aligned
`/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: executechainedoption_0]`
Runs a command with coordinates aligned (floored) to a grid

### Runs a command with an alternate anchoring
`/execute anchored <anchored: ActorLocation> <chainedCommand: executechainedoption_0>`
Runs a command with an alternate anchoring on an entity (for example, feet or eyes.)

### Runs a command if a block matches a condition
`/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block properties> [chainedCommand: executechainedoption_0]`
Runs a command if a particular block matches a set of states

### Runs a command if a set of blocks matches a destination
`/execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: executechainedoption_0]`

Runs a command if a set of blocks matches a destination based on a scan

### Runs a command if an entity is selected
`/execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: executechainedoption_0]`

Runs a command if the selector successfully matches an entity

### `/execute <subcommand: Option_If_Unless> score <target: target> <objective: ScoreboardObjectives> <operation: compareoperator> <source: target> <objective: ScoreboardObjectives> [chainedCommand: executechainedoption_0]`

### `/execute run <command: command>`

## Arguments
- `anchor`: ActorLocation
- `anchored`: ActorLocation
- `axes`: string
- `begin: x y z`: position
- `block`: [Block](../enums/Block.md)
Compares block to a given block `id`.
- `blockStates`: block properties
- `chainedCommand`: executechainedoption_0
- `command`: command
A `string` of the command to run. Must be a valid command.
- `destination: x y z`: position
- `dimension`: Dimension
- `end: x y z`: position
- `objective`: [ScoreboardObjectives](../enums/ScoreboardObjectives.md)
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
Specifies where on the selected entity to look at.

#### Values
- `eyes`
- `feet`

### `BlocksScanMode`
For a blocks condition, specifies how to look for blocks.

#### Values
- `masked`
- `all`

### `Dimension`
Specifies a dimension to run the command within.

#### Values
- `overworld`
- `nether`
- `the_end`

### `Option_If_Unless`
Specifies an additional condition to run this command within

#### Values
- `if`
- `unless`
