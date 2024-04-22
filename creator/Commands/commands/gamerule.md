---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
Must be `true` or `false`.

#### Values
- `commandblockoutput`
controls whether the command examples send an output to chat
- `dodaylightcycle`
controls whether the day cycle moves
- `doentitydrops`
controls whether entities do drops
- `dofiretick`
controls whether fire spreads or not
- `recipesunlock`
controls whether built-in (vanilla) recipes automatically unlock as the player progresses through the game (one alternative to this is to use the /recipe command based on custom gameplay logic.) 
- `dolimitedcrafting`
Determines whether players should be able to craft only those recipes that they've unlocked first - when dolimitedcrafting is set to true
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
- `keepinventory`
controls whether players keep their inventory when they die
- `mobgriefing`
controls whether mob griefing can happen in the world
- `pvp`
controls whether players can damage each other
- `showcoordinates`
controls whether coordinates are displayed
- `showdaysplayed`
- `naturalregeneration`
controls whether players can regenerate health
- `tntexplodes`
controls whether TNT can explode
- `sendcommandfeedback`
controls whether command feedback is displayed
- `doinsomnia`
controls whether players deal with the effects of not sleeping (such as phantoms)
- `commandblocksenabled`
controls whether command blocks can work in the world or not
- `doimmediaterespawn`
controls whether players immediately respawn or have to choose to do so
- `showdeathmessages`
controls whether death notices are displayed
- `showtags`
controls whether tags are shown
- `freezedamage`
controls whether there is damage from freezing or not
- `respawnblocksexplode`
controls whether respawn blocks explode
- `showbordereffect`
controls whether border effects are shown
- `showrecipemessages`
Configures if standard player notifications for recipes will show. When set to false, "player unlocked recipes" are no longer sent as player notifications
- `projectilescanbreakblocks`
Defines if projectiles (entities with a projectile component, like Arrows, thrown Tridents or Fireworks) can destroy certain blocks that support this interaction (such as Chorus Fruit, Dripstone or Decorated Pots). Restrictions on which projectiles can destroy certain blocks apply
- `tntexplosiondropdecay`

### `IntGameRule`
An `integer` to replace the following default values.

`1` for the `DEFAULT_RANDOMTICKSPEED`.
`4096` for the `MAX_RANDOMTICKSPEED`.
`10000` for the `MAX_FUNCTIONCOMMANDLIMIT`.
`5` for the `DEFAULT_PLAYER_SPAWN_RADIUS`.
`0` for the `MIN_PLAYER_SPAWN_RADIUS.`
`128` for the `MAX_PLAYER_SPAWN_RADIUS.`

#### Values
- `maxcommandchainlength`
Max Command Chain Length
- `randomtickspeed`
Random Tick Speed
- `functioncommandlimit`
Function Command Limit
- `spawnradius`
Spawn Radius
- `playerssleepingpercentage`
