---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
### As another entity
`/execute as <origin: target> <chainedCommand: executechainedoption_0>`

Executes a command using the context of an entity returned by the chosen selector.

### At the position of an entity
`/execute at <origin: target> <chainedCommand: executechainedoption_0>`

Executes a command from the position of an entity returned via the selection.

### In dimension
`/execute in <dimension: Dimension> <chainedCommand: executechainedoption_0>`

Executes a command within a particular dimension.

### Positioned
`/execute positioned <position: x y z> <chainedCommand: executechainedoption_0>`

Execute a given command from a `position` and specified `origin` target, while checking for a specific `block` and block id.

### Positioned as a selected entity
`/execute positioned as <origin: target> <chainedCommand: executechainedoption_0>`

Execute a given command from a `position` and specified `origin` target.

### Rotated with a specific yaw/pitch
`/execute rotated <yaw: rotation> <pitch: rotation> <chainedCommand: executechainedoption_0>`

Runs a command with the specified rotation as yaw and pitch.

### Rotated as a another entity
`/execute rotated as <origin: target> <chainedCommand: executechainedoption_0>`

Runs a command using the rotation from another entity as specified by the selector

### Facing a position
`/execute facing <position: x y z> <chainedCommand: executechainedoption_0>`

Runs a command with an entity facing a particular direction.

### Facing a selected entity
`/execute facing entity <origin: target> <anchor: ActorLocation> <chainedCommand: executechainedoption_0>`

Runs a command with a contextual facing to another entity that is returned by a selection.

### Align
`/execute align <axes: string> <chainedCommand: executechainedoption_0>`

Runs a command where positions are aligned (floored) to block axes

### Anchored
`/execute anchored <anchored: ActorLocation> <chainedCommand: executechainedoption_0>`

Runs a command with a position anchored to a specific location - e.g., the toes or eyes - for an entity

### If/unless block matches type
`/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> [chainedCommand: executechainedoption_0]`

Runs a command if or unless there is a block at a position of a particular type

### If/unless block has block states
`/execute <subcommand: Option_If_Unless> block <position: x y z> <block: Block> <blockStates: block properties> [chainedCommand: executechainedoption_0]`

Runs a command with if or unless there is a block with a set of block states that matches the specified set.

### If unless a set of blocks matches scan criteria
`/execute <subcommand: Option_If_Unless> blocks <begin: x y z> <end: x y z> <destination: x y z> <scan mode: BlocksScanMode> [chainedCommand: executechainedoption_0]`

Runs a command if a particular set of blocks in a volume matches the scan mode criteria

### If/unless an entity matches
`/execute <subcommand: Option_If_Unless> entity <target: target> [chainedCommand: executechainedoption_0]`

Runs a command if (or unless) a selector returns at least one matching entity.

### If/unless score
`/execute <subcommand: Option_If_Unless> score <target: target> <objective: ScoreboardObjectives> <operation: compareoperator> <source: target> <objective: ScoreboardObjectives> [chainedCommand: executechainedoption_0]`

Runs a command if (or unless) a scoreboard objective for a selected entity successfully compares to a value

### If/unless score in range
`/execute <subcommand: Option_If_Unless> score <target: target> <objective: ScoreboardObjectives> matches <range: fullintegerrange> [chainedCommand: executechainedoption_0]`

Runs a command if (or unless) the entity returned by the selector has a score that matches a particular range

### Run
`/execute run <command: codebuilderargs>`

Run the specified command using the context and based on the conditions specified in the previous clauses of the execute command.

## Arguments
- `anchor`: ActorLocation
- `anchored`: ActorLocation
- `axes`: string
- `begin: x y z`: position
- `block`: [Block](../enums/Block.md)
Compares block to a given block `id`.
- `blockStates`: block properties
- `chainedCommand`: executechainedoption_0
- `command`: codebuilderargs
A `string` of the command to run. Must be a valid command.
- `destination: x y z`: position
- `dimension`: Dimension
- `end: x y z`: position
- `objective`: [ScoreboardObjectives](../enums/ScoreboardObjectives.md)
- `operation`: compareoperator
- `origin`: target
The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors).
- `pitch`: rotation
Up-and-down rotation of the command
- `position: x y z`: position
A `vector` of where to run the command from.
- `range`: fullintegerrange
- `scan mode`: BlocksScanMode
- `source`: target
- `subcommand`: Option_If_Unless
- `target`: target
- `yaw`: rotation
Left-to-right rotation context of the command

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
