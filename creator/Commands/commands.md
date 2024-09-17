---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: Minecraft Commands
description: List and descriptions of Minecraft commands and enums
---
# List and summary of commands:
|Command   |Description   |Required Permission Level  | Requires Cheats Enabled |
|----------|-----------|-----------|-----------|
| [`/allowlist`](./commands/allowlist.md) | Manages the server allowlist. | Owner | Yes |
| [`/camera`](./commands/camera.md) | Transforms the camera for the selected player(s) to a different perspective. | Game Directors | Yes |
| [`/camerashake`](./commands/camerashake.md) | Applies shaking to the players&#39; camera with specified intensity and duration. Parameters: &#39;stop&#39; or &#39;add&#39; the effect, specify player (target), intensity (float, min 0.0 to max 4.0), seconds(float, min 0.01), and shakeType (positional or rotational). Must have &#x60;Allow Camera Shake&#x60; option turned on in user settings. | Game Directors | Yes |
| [`/changesetting`](./commands/changesetting.md) | Changes a setting on the dedicated server while it&#39;s running. | Owner | Yes |
| [`/clear`](./commands/clear.md) | Clears items from player inventory. | Game Directors | Yes |
| [`/clearspawnpoint`](./commands/clearspawnpoint.md) | Removes the spawn point for a player. | Game Directors | Yes |
| [`/clone`](./commands/clone.md) | Clones a set of blocks from one region to another. | Game Directors | Yes |
| [`/damage`](./commands/damage.md) | Apply damage to the specified entities. See more in the [Damage Command documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandsdamageintroduction). | Game Directors | Yes |
| [`/daylock`](./commands/daylock.md) | Locks and unlocks the day-night cycle. | Game Directors | Yes |
| [`/deop`](./commands/deop.md) | Revokes operator status from a player. | Admin | No |
| [`/dialogue`](./commands/dialogue.md) | Opens NPC dialogue for a player. See the page on the [Dialogue documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;en-us&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;npcdialogue#dialogue-command) for more information. | Game Directors | Yes |
| [`/difficulty`](./commands/difficulty.md) | Sets the difficulty level (Peaceful, Easy, Normal, Hard) using difficulty enum or integer. | Game Directors | Yes |
| [`/effect`](./commands/effect.md) | Add or clear status effects. | Game Directors | Yes |
| [`/enchant`](./commands/enchant.md) | Adds an enchantment to a player&#39;s selected item. | Game Directors | Yes |
| [`/event`](./commands/event.md) | Triggers an event for the specified entity or entities. | Game Directors | Yes |
| [`/execute`](./commands/execute.md) | Executes a command on behalf of one or more entities. See more information in the [Popular Commands page](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#execute) and the [New Execute Syntax page](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandsnewexecute). | Game Directors | Yes |
| [`/fill`](./commands/fill.md) | Fills all or parts of a region with a specific block. | Game Directors | Yes |
| [`/fog`](./commands/fog.md) | Add or remove fog settings file. | Game Directors | Yes |
| [`/function`](./commands/function.md) | Runs commands found in the corresponding function file. | Game Directors | Yes |
| [`/gamemode`](./commands/gamemode.md) | Sets a player&#39;s game mode. See more in the [Popular Commands documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#gamemode). | Game Directors | Yes |
| [`/gamerule`](./commands/gamerule.md) | Sets or queries a game rule value. See more in the [Popular Commands documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#gamerule). | Game Directors | No |
| [`/gametest`](./commands/gametest.md) | [Requires the Beta APIs experiment].  Configures various parameters for managing built-in or custom gametest framework tests. | Game Directors | Yes |
| [`/give`](./commands/give.md) | Gives an item to a player. | Game Directors | Yes |
| [`/help`](./commands/help.md) | Running &#x60;&#x2F;help&#x60; in the chat by itself will list every command you can run. However, since there are so many, they have been divided up into several pages, where you are shown only one page at a time. Supplying a page number will change which page of commands to show.Whenever you want to know the usage and all of the syntaxes of a command, you can use &#x2F;help followed by the name of the command. This can be helpful if you want an overview of the command.See more in the [Popular Commands documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#help). | Any | No |
| [`/hud`](./commands/hud.md) | Configures whether elements of the on-screen display (alternately known as the &#39;heads up display&#39;, or &#39;HUD&#39;) are visible on the screen. | Game Directors | Yes |
| [`/inputpermission`](./commands/inputpermission.md) | Optionally enables or disables input permissions for a player. | Game Directors | Yes |
| [`/kick`](./commands/kick.md) | Kicks a player from the server. | Game Directors | No |
| [`/kill`](./commands/kill.md) | Kills entities like players and mobs. | Game Directors | Yes |
| [`/list`](./commands/list.md) | Lists players on the server. | Any | No |
| [`/locate`](./commands/locate.md) | Finds the nearest specified biome or structure if it exists in the current dimension. Prints an error if it does not. See more in the [Popular Commands documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#locate). | Game Directors | Yes |
| [`/loot`](./commands/loot.md) | Drops the given loot table into the specified inventory or into the world. | Game Directors | Yes |
| [`/me`](./commands/me.md) | Displays a message about yourself. | Any | No |
| [`/mobevent`](./commands/mobevent.md) | Controls what mob events are allowed to run. | Game Directors | Yes |
| [`/music`](./commands/music.md) | Allows you to control playing music tracks. | Game Directors | Yes |
| [`/op`](./commands/op.md) | Grants operator status to a player. | Admin | No |
| [`/particle`](./commands/particle.md) | Creates a particle emitter | Game Directors | Yes |
| [`/permission`](./commands/permission.md) | Reloads and applies permissions. This command is for use on a dedicated server only. | Owner | Yes |
| [`/playanimation`](./commands/playanimation.md) | Makes one or more entities play a one-off animation. | Game Directors | Yes |
| [`/playsound`](./commands/playsound.md) | Plays a sound. | Game Directors | Yes |
| [`/project`](./commands/project.md) | This command contains additional tools for managing an Editor project. This command is available in Editor mode only. | Game Directors | No |
| [`/recipe`](./commands/recipe.md) | Supports unlocking of built-in (vanilla) recipes that a particular player can craft with. | Game Directors | Yes |
| [`/reload`](./commands/reload.md) | Reloads all function and script files from all behavior packs. | Admin | Yes |
| [`/reloadconfig`](./commands/reloadconfig.md) | Reloads configuration files relating to variables, secrets, permissions, etc. | Owner | Yes |
| [`/replaceitem`](./commands/replaceitem.md) | Replaces items in inventories. | Game Directors | Yes |
| [`/ride`](./commands/ride.md) | Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders. | Game Directors | Yes |
| [`/save`](./commands/save.md) | Control or check how the game saves data to disk. This command is for use on a dedicated server only. | Owner | Yes |
| [`/say`](./commands/say.md) | Sends a message in the chat to other players. | Game Directors | No |
| [`/schedule`](./commands/schedule.md) | Schedules an action to be executed once an area is loaded, or after a certain amount of time. | Game Directors | Yes |
| [`/scoreboard`](./commands/scoreboard.md) | Tracks and displays scores for various objectives. See more information about its use in the [Scoreboards Objectives Commands documentation](&#x2F;creator&#x2F;documents&#x2F;scoreboardintroduction#scoreboard-objectives-commands) page. | Game Directors | Yes |
| [`/script`](./commands/script.md) | Debugging options for script within Minecraft. | Admin | Yes |
| [`/scriptevent`](./commands/scriptevent.md) | Causes an event to fire within script with the specified message ID and payload. This can be used to connect scripting with any location where commands are used. | Game Directors | Yes |
| [`/sendshowstoreoffer`](./commands/sendshowstoreoffer.md) | Available on dedicated server only with administrator permissions. Specifies that a marketplace page should be opened up. | Owner | Yes |
| [`/setblock`](./commands/setblock.md) | Changes a block to another block. | Game Directors | Yes |
| [`/setmaxplayers`](./commands/setmaxplayers.md) | Sets the maximum number of players for this game session. | Host | Yes |
| [`/setworldspawn`](./commands/setworldspawn.md) | Sets the location where new players or players who die will spawn in the world. | Game Directors | Yes |
| [`/spawnpoint`](./commands/spawnpoint.md) | Sets the spawn point for a player. | Game Directors | Yes |
| [`/spreadplayers`](./commands/spreadplayers.md) | Teleports entities to random locations. | Game Directors | Yes |
| [`/stop`](./commands/stop.md) | Stops the server. This command is for use on a dedicated server only. | Owner | Yes |
| [`/stopsound`](./commands/stopsound.md) | Stops a sound. | Game Directors | Yes |
| [`/structure`](./commands/structure.md) | Saves or loads a structure in the world. See examples of this command in use in the [Structure Blocks documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;structureblockstutorial#creating-structures-using-the-structure-command). | Game Directors | Yes |
| [`/summon`](./commands/summon.md) | Summons an entity. | Game Directors | Yes |
| [`/tag`](./commands/tag.md) | Manages tags stored in entities. | Game Directors | Yes |
| [`/teleport`](./commands/teleport.md) | Teleports entities  to specific locations. Can also be written as &#x60;&#x2F;tp&#x60;. | Game Directors | Yes |
| [`/tell`](./commands/tell.md) | Sends a private message to one or more players. | Any | No |
| [`/tellraw`](./commands/tellraw.md) | Sends a JSON message to players. | Game Directors | No |
| [`/testfor`](./commands/testfor.md) | Counts entities (players, mobs, items, etc.) matching specified conditions. | Game Directors | Yes |
| [`/testforblock`](./commands/testforblock.md) | Tests whether a certain block is in a specific location. | Game Directors | Yes |
| [`/testforblocks`](./commands/testforblocks.md) | Tests whether the blocks in two regions match. | Game Directors | Yes |
| [`/tickingarea`](./commands/tickingarea.md) | Add, remove, or list ticking areas. See more information in the [Ticking Area documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;tickingareacommand). | Game Directors | Yes |
| [`/time`](./commands/time.md) | Changes or queries the world&#39;s game time. See more in the [Popular Commands documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#time). | Game Directors | Yes |
| [`/title`](./commands/title.md) | Controls the text and behavior for screen titles using plain text. | Game Directors | Yes |
| [`/titleraw`](./commands/titleraw.md) | Controls the text and behavior for screen titles using JSON messages. | Game Directors | Yes |
| [`/toggledownfall`](./commands/toggledownfall.md) | Toggles the weather. | Game Directors | Yes |
| [`/transfer`](./commands/transfer.md) | Transfers a player to another server. | Owner | Yes |
| [`/weather`](./commands/weather.md) | Sets the weather in the environment. See more in the [Popular Commands documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandspopularcommands#weather). | Game Directors | Yes |
| [`/wsserver`](./commands/wsserver.md) | Attempts to connect to the websocket server on the provided URL. | Admin | Yes |
| [`/xp`](./commands/xp.md) | Adds or removes player experience. | Game Directors | Yes |

# List and summary of command argument types and enums:
|Type   |Description   |Is Enum?   |
|----------|-----------|-----------|
| block properties |  |   |
| codebuilderargs |  |   |
| compareoperator |  |   |
| executechainedoption_0 |  |   |
| filepath | A &#x60;filepath&#x60; of this format: &#x60;&#x2F;path&#x2F;to&#x2F;file&#x60;. |   |
| float | Must be a floating point number. |   |
| fullintegerrange |  |   |
| int | A 32-bit &#x60;integer&#x60;. |   |
| json | A JSON object. |   |
| message | A plain text &#x60;string&#x60;  that can include spaces and target selects, which are formatted into the entities names. |   |
| operator | An &#x60;operator&#x60; for scoreboard. See more in the [Scoreboard documentation](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;scoreboardoperationstutorial). |   |
| position | A &#x60;vector&#x60; made up of &#x60;x&#x60;, &#x60;y&#x60; and &#x60;z&#x60; coordinates. |   |
| rotation | An &#x60;enum&#x60; of the rotation when loading in a structure. Must be one of &#x60;0_degrees&#x60;, &#x60;90_degrees&#x60;, &#x60;180_degrees&#x60;, or &#x60;270_degrees&#x60;.,Default: &#x60;0_degrees&#x60;. |   |
| string | A &#x60;string&#x60; that is either one word or a quoted &#x60;string&#x60;  with a space. |   |
| target | A &#x60;string&#x60; or [&#x60;target selector&#x60;](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandsintroduction#target-selectors) to identify which player is targeted. |   |
| targets | An &#x60;array&#x60; of &#x60;string&#x60; or [&#x60;target selector&#x60;](https:&#x2F;&#x2F;learn.microsoft.com&#x2F;minecraft&#x2F;creator&#x2F;documents&#x2F;commandsintroduction#target-selectors) to identify which player is targeted. |   |
| text | A &#x60;string&#x60; . |   |
| wildcard int | A 32-bit &#x60;integer&#x60; or an asterisk &#x60;*&#x60; for a wildcard.  |   |
| [`Block`](./enums/Block.md) | Minecraft block | Yes |
| [`Boolean`](./enums/Boolean.md) | Boolean value | Yes |
| [`Difficulty`](./enums/Difficulty.md) | The game difficulty.,|Difficulty|Enum|Abbreviation|Integer|,|-----|------|-----|----|,|Peaceful| &#x60;peaceful&#x60; | p|0|,|Easy| &#x60;easy&#x60; | e|1|,|Normal| &#x60;normal&#x60; | n|2|,|Hard| &#x60;hard&#x60; | h|3| | Yes |
| [`EntityEquipmentSlot`](./enums/EntityEquipmentSlot.md) | Entity equipment slot | Yes |
| [`EntityEvents`](./enums/EntityEvents.md) | Must be one of the default entity events found in an entity&#39;s behavior JSON file. | Yes |
| [`EntityType`](./enums/EntityType.md) | Specifies entity type within a world. | Yes |
| [`Item`](./enums/Item.md) | One of the [Minecraft Items available on this page](&#x2F;creator&#x2F;reference&#x2F;content&#x2F;itemreference&#x2F;examples&#x2F;itemcomponentlist). | Yes |
