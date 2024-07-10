---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: help Command
description: Description and usage of the help command
---
# `/help` Command
Running `/help` in the chat by itself will list every command you can run. However, since there are so many, they have been divided up into several pages, where you are shown only one page at a time. Supplying a page number will change which page of commands to show.



Whenever you want to know the usage and all of the syntaxes of a command, you can use /help followed by the name of the command. This can be helpful if you want an overview of the command.



See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#help).

<table>
  <tr>
    <th>Aliases</th>
    <td>/?</td>
  </tr>
  <tr>
    <th>Permission Level</th>
    <td>Any</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>No</td>
  </tr>
</table>

## Usage
### Show command help
`/help [command: CommandName]`

Show `help` information for a `command`.

### Show help page
`/help <page: int>`

Show a `page` of help options.

## Arguments
- `command`: CommandName
An optional `enum` that defines the command to be called.
- `page`: int
Changes which page of commands to show. Numbers smaller than the pages will be page 1, and larger will be the last page.
Default: `1`.

## Enums
### `CommandName`
Command name enumeration

#### Values
- `tag`
Manages tags stored in entities.
- `camera`
Experimental camera command.
- `transfer`
- `clear`
Clears items from player inventory.
- `time`
Changes or queries the world's game time.
- `stop`
- `camerashake`
Applies shaking to the players' camera with a specified intensity and duration.
- `clearspawnpoint`
Removes the spawn point for a player.
- `clone`
Clones blocks from one region to another.
- `damage`
Apply damage to the specified entities.
- `daylock`
Locks and unlocks the day-night cycle.
- `alwaysday`
Locks and unlocks the day-night cycle.
- `deop`
Revokes operator status from a player.
- `dialogue`
Opens NPC dialogue for a player
- `difficulty`
Sets the difficulty level.
- `effect`
Add or remove status effects.
- `event`
Triggers an event for the specified object(s).
- `execute`
Executes a command on behalf of one or more entities.
- `fill`
Fills all or parts of a region with a specific block.
- `fog`
Add or remove fog settings file.
- `function`
Runs commands found in the corresponding functions file.
- `gamemode`
Sets a player's game mode.
- `gamerule`
Sets or queries a game rule value.
- `gametest`
Interacts with game test.
- `gettopsolidblock`
- `give`
Gives an item to a player.
- `help`
Provides help/list of commands.
- `?`
Provides help/list of commands.
- `hud`
- `inputpermission`
- `kick`
Kicks a player from a server.
- `kill`
Kills entities (players, mobs, etc.)
- `list`
Lists players on the server.
- `listd`
- `structure`
Saves or loads a structure in the world.
- `locate`
Displays the coordinates for the closest structure or biome of a given type.
- `loot`
Drops the given loot table into the specified inventory or into the world.
- `me`
Displays a message about yourself.
- `mobevent`
Controls what mob events are allowed to run.
- `music`
Allows you to control playing music tracks.
- `op`
Grants operator status to a player.
- `particle`
Creates a particle emitter.
- `reload`
Reloads all function and script files from all behavior packs.
- `permission`
- `ops`
- `playanimation`
Makes one or more entities play a one-off animation. Assumes all variables are setup correctly.
- `playsound`
Plays a sound.
- `querytarget`
- `replaceitem`
Replaces items in inventories.
- `ride`
Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.
- `say`
Sends a message in the chat to other players.
- `tickingarea`
Add, remove, or list ticking areas.
- `schedule`
Schedules an action to be executed once an area is loaded, or after a certain amount of time.
- `scoreboard`
Tracks and displays scores for various objectives.
- `scriptevent`
Sends a message and additional content that can trigger an event in a backing script implementation.
- `setblock`
Changes a block to another block.
- `setmaxplayers`
Sets the maximum number of players for this game session.
- `setworldspawn`
Sets the world spawn.
- `spawnpoint`
Sets the spawn point for a player.
- `spreadplayers`
Teleports entities to random locations.
- `stopsound`
Stops a sound.
- `save`
Configures the world to go into a save-supporting mode, on dedicated server.
- `summon`
Summons an entity.
- `teleport`
Teleports entities (players, mobs, etc.).
- `tp`
Teleports entities (players, mobs, etc.).
- `tell`
Sends a private message to one or more players.
- `w`
Sends a private message to one or more players.
- `msg`
Sends a private message to one or more players.
- `tellraw`
Sends a JSON message to players.
- `testforblock`
Tests whether a certain block is in a specific location.
- `testforblocks`
Tests whether the blocks in two regions match.
- `testfor`
Counts entities (players, mobs, items, etc.) matching specified conditions.
- `title`
Controls screen titles.
- `titleraw`
Controls screen titles with JSON messages.
- `toggledownfall`
Toggles the weather.
- `weather`
Sets the weather.
- `wsserver`
Attempts to connect to the websocket server on the provided URL.
- `connect`
Attempts to connect to the websocket server on the provided URL.
- `xp`
Adds or removes player experience.
- `recipe`
- `project`
A particular command used for managing project settings when in Editor mode.
- `agent`
A particular command used for configuring an Agent in an educational context.
- `codebuilder_actorinfo`
- `enchant`
Adds an enchantment to a player's selected item.
- `clearrealmevents`
- `allowlist`
- `whitelist`
- `changesetting`
- `sendshowstoreoffer`
- `reloadconfig`
- `script`
Contains additional tools for managing the runtime of script, including debugger and profiler options.
