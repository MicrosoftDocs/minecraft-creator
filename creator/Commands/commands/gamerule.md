---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: gamerule Command
description: Description and usage of the gamerule command
---
# `/gamerule` Command
Sets or queries a game rule value. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#gamerule).

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>No</td>
  </tr>
</table>

## Usage
### Check game rule
`/gamerule`

Check the current game rule.

### Set game rule, Boolean
`/gamerule <rule: BoolGameRule> [value: Boolean]`

Set a gamerule using a `Boolean`.

### Set game rule, integer
`/gamerule <rule: IntGameRule> [value: int]`

Set a gamerule using an `integer`.

## Arguments
- `rule`: BoolGameRule
Boolean game rule setting
- `rule`: IntGameRule
Integer game rule setting
- `value`: [Boolean](../enums/Boolean.md)
Boolean value
- `value`: int
Integer value

## Enums
### `BoolGameRule`
Must be one of `true` or `false`. Game rules include `commandblockoutput`, `sendcommandfeedback`, `commandblocksenabled`, `dodaylightcycle` and `doweathercycle`.
`commandblockoutput` controls whether the command examples send an output to chat.
`sendcommandfeedback`allows for a completely silent command system, including commands like `/xp` that would otherwise continue providing feedback event with `commandblockfeedback` set to false. 
`commandblocksenabled` quickly enables or disables command blocks in the world.
`dodaylightcyle` controls whether the day cycle moves.
`doweathercycle` controls whether the weather is enabled. This affects even the `/weather` command.

#### Values
- `commandblockoutput`
controls whether the command examples send an output to chat
- `commandblocksenabled`
controls whether command blocks can work in the world or not
- `dodaylightcycle`
controls whether the day cycle moves
- `doentitydrops`
controls whether entities do drops
- `dofiretick`
controls whether fire does damage
- `doimmediaterespawn`
controls whether players immediately respawn or have to choose to do so
- `doinsomnia`
controls whether players deal with the effects of not sleeping (such as phantoms)
- `domobloot`
controls whether mobs drop loot
- `domobspawning`
controls whether mobs spawn into the game
- `dotiledrops`
controls whether tiles drop
- `doweathercycle`
controls whether the weather is enabled
- `drowningdamage`
controls whether entities take damage from drowning
- `falldamage`
controls whether entities take damage from falling
- `firedamage`
controls whether entities take damage from fire
- `freezedamage`
controls whether there is damage from freezing or not
- `keepinventory`
controls whether players keep their inventory when they die
- `mobgriefing`
controls whether mob griefing can happen in the world
- `naturalregeneration`
controls whether players can regenerate health
- `pvp`
controls whether players can damage each other
- `respawnblocksexplode`
controls whether respawn blocks explode
- `sendcommandfeedback`
controls whether command feedback is displayed
- `showbordereffect`
controls whether border effects are shown
- `showcoordinates`
controls whether coordinates are displayed in a world
- `showdeathmessages`
controls whether death notices are displayed
- `showtags`
controls whether tags are shown
- `tntexplodes`
controls whether TNT can explode

### `IntGameRule`
An `integer` to replace the following default values.
`1` for the `DEFAULT_RANDOMTICKSPEED`.
`4096` for the `MAX_RANDOMTICKSPEED`.
`10000` for the `MAX_FUNCTIONCOMMANDLIMIT`.
`5` for the `DEFAULT_PLAYER_SPAWN_RADIUS`.
`0` for the `MIN_PLAYER_SPAWN_RADIUS.`
`128` for the `MAX_PLAYER_SPAWN_RADIUS.`

#### Values
- `functioncommandlimit`
Function Command Limit
- `maxcommandchainlength`
Max Command Chain Length
- `randomtickspeed`
Random Tick Speed
- `spawnradius`
Spawn Radius
