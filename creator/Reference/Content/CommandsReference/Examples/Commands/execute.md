---
author: mammerla
ms.author: mikeam
title: "execute Command"
description: "Description and usage of the /execute command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/execute` Command

Executes a command on behalf of one or more entities. See more information in the [Popular Commands page](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#execute) and the [New Execute Syntax page](https://learn.microsoft.com/minecraft/creator/documents/commandsnewexecute).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/execute subcommand <origin: target> <chainedCommand: executechainedoption_0>`

`/execute subcommand <origin: target> <chainedCommand: executechainedoption_0>`

`/execute subcommand <dimension: dimension> <chainedCommand: executechainedoption_0>`

`/execute subcommand <position: x y z> <chainedCommand: executechainedoption_0>`

`/execute subcommand secondary subcommand <origin: target> <chainedCommand: executechainedoption_0>`

`/execute subcommand <yaw: rotation> <pitch: rotation> <chainedCommand: executechainedoption_0>`

`/execute subcommand secondary subcommand <origin: target> <chainedCommand: executechainedoption_0>`

`/execute subcommand <position: x y z> <chainedCommand: executechainedoption_0>`

`/execute subcommand secondary subcommand <origin: target> <anchor: actorlocation> <chainedCommand: executechainedoption_0>`

`/execute subcommand <axes: id> <chainedCommand: executechainedoption_0>`

`/execute subcommand <anchored: actorlocation> <chainedCommand: executechainedoption_0>`

`/execute subcommand secondary subcommand <position: x y z> <block: Block> [chainedCommand: executechainedoption_0]`

`/execute subcommand secondary subcommand <position: x y z> <block: Block> <blockStates: block_state_array> [chainedCommand: executechainedoption_0]`

`/execute subcommand secondary subcommand <begin: x y z> <end: x y z> <destination: x y z> <scan mode: blocksscanmode> [chainedCommand: executechainedoption_0]`

`/execute subcommand secondary subcommand <target: target> [chainedCommand: executechainedoption_0]`

`/execute subcommand secondary subcommand <target: target> <objective: scoreboardobjectives> <operation: compareoperator> <source: target> <objective: scoreboardobjectives> [chainedCommand: executechainedoption_0]`

`/execute subcommand secondary subcommand <target: target> <objective: scoreboardobjectives> <matches: scorerangemode> <range: fullintegerrange> [chainedCommand: executechainedoption_0]`

`/execute subcommand <command: codebuilderargs>`

## Usage

### Other variants

#### As another entity

`/execute subcommand <origin: target> <chainedCommand: executechainedoption_0>`

Executes a command using the context of an entity returned by the chosen selector.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| origin | [target](../CommandTypes/type_selection.md) | Required | The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| chainedCommand | executechainedoption_0 | Required |  |

#### At the position of an entity

`/execute subcommand <origin: target> <chainedCommand: executechainedoption_0>`

Executes a command from the position of an entity returned via the selection.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| origin | [target](../CommandTypes/type_selection.md) | Required | The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| chainedCommand | executechainedoption_0 | Required |  |

#### In dimension

`/execute subcommand <dimension: dimension> <chainedCommand: executechainedoption_0>`

Executes a command within a particular dimension.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| dimension | dimension | Required |  |
| chainedCommand | executechainedoption_0 | Required |  |

#### Positioned

`/execute subcommand <position: x y z> <chainedCommand: executechainedoption_0>`

Execute a given command from a `position` and specified `origin` target, while checking for a specific `block` and block id.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [x y z](../CommandTypes/type_position_float.md) | Required | A `vector` of where to run the command from. |
| chainedCommand | executechainedoption_0 | Required |  |

#### Rotated with a specific yaw/pitch

`/execute subcommand <yaw: rotation> <pitch: rotation> <chainedCommand: executechainedoption_0>`

Runs a command with the specified rotation as yaw and pitch.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| yaw | [rotation](../CommandTypes/type_rval.md) | Required | Left-to-right rotation context of the command |
| pitch | [rotation](../CommandTypes/type_rval.md) | Required | Up-and-down rotation of the command |
| chainedCommand | executechainedoption_0 | Required |  |

#### Facing a position

`/execute subcommand <position: x y z> <chainedCommand: executechainedoption_0>`

Runs a command with an entity facing a particular direction.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [x y z](../CommandTypes/type_position_float.md) | Required | A `vector` of where to run the command from. |
| chainedCommand | executechainedoption_0 | Required |  |

#### Align

`/execute subcommand <axes: id> <chainedCommand: executechainedoption_0>`

Runs a command where positions are aligned (floored) to block axes.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| axes | [id](../CommandTypes/type_id.md) | Required |  |
| chainedCommand | executechainedoption_0 | Required |  |

#### Anchored

`/execute subcommand <anchored: actorlocation> <chainedCommand: executechainedoption_0>`

Runs a command with a position anchored to a specific location - e.g., the toes or eyes - for an entity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| anchored | actorlocation | Required |  |
| chainedCommand | executechainedoption_0 | Required |  |

#### Simple run of a command

`/execute subcommand <command: codebuilderargs>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| command | codebuilderargs | Required | A `string` of the command to run. Must be a valid command. |

### With secondary subcommand

#### Positioned as a selected entity

`/execute subcommand secondary subcommand <origin: target> <chainedCommand: executechainedoption_0>`

Execute a given command from a `position` and specified `origin` target.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| origin | [target](../CommandTypes/type_selection.md) | Required | The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| chainedCommand | executechainedoption_0 | Required |  |

#### Rotated as a another entity

`/execute subcommand secondary subcommand <origin: target> <chainedCommand: executechainedoption_0>`

Runs a command using the rotation from another entity as specified by the selector.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| origin | [target](../CommandTypes/type_selection.md) | Required | The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| chainedCommand | executechainedoption_0 | Required |  |

#### Facing a selected entity

`/execute subcommand secondary subcommand <origin: target> <anchor: actorlocation> <chainedCommand: executechainedoption_0>`

Runs a command with a contextual facing to another entity that is returned by a selection.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| origin | [target](../CommandTypes/type_selection.md) | Required | The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| anchor | actorlocation | Required |  |
| chainedCommand | executechainedoption_0 | Required |  |

#### If/unless block matches type

`/execute subcommand secondary subcommand <position: x y z> <block: Block> [chainedCommand: executechainedoption_0]`

Runs a command if or unless there is a block at a position of a particular type.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [x y z](../CommandTypes/type_position_float.md) | Required | A `vector` of where to run the command from. |
| block | [Block](../CommandTypes/type_block.md) | Required | Compares block to a given block `id`. |
| chainedCommand | executechainedoption_0 | Optional |  |

#### If/unless block has block states

`/execute subcommand secondary subcommand <position: x y z> <block: Block> <blockStates: block_state_array> [chainedCommand: executechainedoption_0]`

Runs a command with if or unless there is a block with a set of block states that matches the specified set.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [x y z](../CommandTypes/type_position_float.md) | Required | A `vector` of where to run the command from. |
| block | [Block](../CommandTypes/type_block.md) | Required | Compares block to a given block `id`. |
| blockStates | block_state_array | Required |  |
| chainedCommand | executechainedoption_0 | Optional |  |

#### If unless a set of blocks matches scan criteria

`/execute subcommand secondary subcommand <begin: x y z> <end: x y z> <destination: x y z> <scan mode: blocksscanmode> [chainedCommand: executechainedoption_0]`

Runs a command if a particular set of blocks in a volume matches the scan mode criteria.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| begin | [x y z](../CommandTypes/type_position.md) | Required |  |
| end | [x y z](../CommandTypes/type_position.md) | Required |  |
| destination | [x y z](../CommandTypes/type_position.md) | Required |  |
| scan mode | blocksscanmode | Required |  |
| chainedCommand | executechainedoption_0 | Optional |  |

#### If/unless an entity matches

`/execute subcommand secondary subcommand <target: target> [chainedCommand: executechainedoption_0]`

Runs a command if (or unless) a selector returns at least one matching entity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required |  |
| chainedCommand | executechainedoption_0 | Optional |  |

#### If/unless score

`/execute subcommand secondary subcommand <target: target> <objective: scoreboardobjectives> <operation: compareoperator> <source: target> <objective: scoreboardobjectives> [chainedCommand: executechainedoption_0]`

Runs a command if (or unless) a scoreboard objective for a selected entity successfully compares to a value.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required |  |
| objective | scoreboardobjectives | Required |  |
| operation | [compareoperator](../CommandTypes/type_compareoperator.md) | Required |  |
| source | [target](../CommandTypes/type_selection.md) | Required |  |
| objective | scoreboardobjectives | Required |  |
| chainedCommand | executechainedoption_0 | Optional |  |

#### Runs a command based on scoreboards

`/execute subcommand secondary subcommand <target: target> <objective: scoreboardobjectives> <matches: scorerangemode> <range: fullintegerrange> [chainedCommand: executechainedoption_0]`

Runs a command if the score matches particular value or range of values.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required |  |
| objective | scoreboardobjectives | Required |  |
| matches | scorerangemode | Required |  |
| range | [fullintegerrange](../CommandTypes/type_fullintegerrange.md) | Required |  |
| chainedCommand | executechainedoption_0 | Optional |  |

## Examples

### Place glowstone under every player

```
/execute as @a at @s run setblock ~ ~-1 ~ glowstone
```

### Clear blocks around every creeper

```
/execute at @e[type=creeper] run fill ~-1 ~ ~-1 ~1 ~2 ~1 air
```

### Make players with 10+ points say a message

```
/execute as @a[scores={points=10..}] run say I have 10+ points!
```

### Give yourself a diamond if standing on diamond ore

```
/execute if block ~ ~-1 ~ diamond_ore run give @s diamond
```

### Summon a pig at position (0, 64, 0)

```
/execute positioned 0 64 0 run summon pig ~ ~ ~
```

### Teleport villagers standing in water one block up

```
/execute as @e[type=villager] at @s if block ~ ~-1 ~ water run tp @s ~ ~1 ~
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| anchor | actorlocation |  |
| anchored | actorlocation |  |
| axes | [id](../CommandTypes/type_id.md) |  |
| begin | [x y z](../CommandTypes/type_position.md) |  |
| block | [Block](../CommandTypes/type_block.md) | Compares block to a given block `id`. |
| blockStates | block_state_array |  |
| chainedCommand | executechainedoption_0 |  |
| command | codebuilderargs | A `string` of the command to run. Must be a valid command. |
| destination | [x y z](../CommandTypes/type_position.md) |  |
| dimension | dimension |  |
| end | [x y z](../CommandTypes/type_position.md) |  |
| matches | scorerangemode |  |
| objective | scoreboardobjectives |  |
| operation | [compareoperator](../CommandTypes/type_compareoperator.md) |  |
| origin | [target](../CommandTypes/type_selection.md) | The target of the command to execute. Must be a player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| pitch | [rotation](../CommandTypes/type_rval.md) | Up-and-down rotation of the command |
| position | [x y z](../CommandTypes/type_position_float.md) | A `vector` of where to run the command from. |
| range | [fullintegerrange](../CommandTypes/type_fullintegerrange.md) |  |
| scan mode | blocksscanmode |  |
| source | [target](../CommandTypes/type_selection.md) |  |
| target | [target](../CommandTypes/type_selection.md) |  |
| yaw | [rotation](../CommandTypes/type_rval.md) | Left-to-right rotation context of the command |
