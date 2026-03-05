---
author: mammerla
ms.author: mikeam
title: "Commands Documentation - Commands"
description: "A reference document describing all current Commands"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Commands Documentation

## World Editing

| Command | Description |
|:--------|:------------|
| [clearspawnpoint](Commands/clearspawnpoint.md)| Removes the spawn point for a player. |
| [clone](Commands/clone.md)| Clones a set of blocks from one region to another. |
| [fill](Commands/fill.md)| Fills all or parts of a region with a specific block. |
| [place](Commands/place.md)| Places a jigsaw structure, feature, or feature rule in the world. |
| [setblock](Commands/setblock.md)| Changes a block to another block. |
| [setworldspawn](Commands/setworldspawn.md)| Sets the location where new players or players who die will spawn in the world. |
| [spawnpoint](Commands/spawnpoint.md)| Sets the spawn point for a player. |
| [spreadplayers](Commands/spreadplayers.md)| Teleports entities to random locations. |
| [structure](Commands/structure.md)| Saves or loads a structure in the world. |

## Entity Management

| Command | Description |
|:--------|:------------|
| [damage](Commands/damage.md)| Apply damage to the specified entities. |
| [effect](Commands/effect.md)| Add or clear status effects. |
| [enchant](Commands/enchant.md)| Adds an enchantment to a player's selected item. |
| [event](Commands/event.md)| Triggers an event for the specified entity or entities. |
| [kill](Commands/kill.md)| Kills entities like players and mobs. |
| [playanimation](Commands/playanimation.md)| Makes one or more entities play a one-off animation. |
| [replaceitem](Commands/replaceitem.md)| Replaces items in inventories. |
| [ride](Commands/ride.md)| Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders. |
| [summon](Commands/summon.md)| Summons an entity. |
| [tag](Commands/tag.md)| Manages tags stored in entities. |

## Player

| Command | Description |
|:--------|:------------|
| [aimassist](Commands/aimassist.md)| Enable Aim Assist |
| [clear](Commands/clear.md)| Clears items from player inventory. |
| [controlscheme](Commands/controlscheme.md)| Sets or clears control schemes for the camera(s) of selected player(s). |
| [gamemode](Commands/gamemode.md)| Sets a player's game mode. |
| [give](Commands/give.md)| Gives an item to a player. |
| [hud](Commands/hud.md)| Configures whether elements of the on-screen display (alternately known as the 'heads up display', or 'HUD') are visible on the screen. |
| [inputpermission](Commands/inputpermission.md)| Optionally enables or disables input permissions for a player. |
| [teleport](Commands/teleport.md)| Teleports entities to specific locations. |
| [xp](Commands/xp.md)| Adds or removes player experience. |

## Camera

| Command | Description |
|:--------|:------------|
| [camera](Commands/camera.md)| Transforms the camera for the selected player(s) to a different perspective. |
| [camerashake](Commands/camerashake.md)| Applies shaking to the players' camera with specified intensity and duration. |

## World Settings

| Command | Description |
|:--------|:------------|
| [changesetting](Commands/changesetting.md)| Changes a setting on the dedicated server while it's running. |
| [daylock](Commands/daylock.md)| Locks and unlocks the day-night cycle. |
| [difficulty](Commands/difficulty.md)| Sets the difficulty level (Peaceful, Easy, Normal, Hard) using difficulty enum or integer. |
| [gamerule](Commands/gamerule.md)| Sets or queries a game rule value. |
| [mobevent](Commands/mobevent.md)| Controls what mob events are allowed to run. |
| [tickingarea](Commands/tickingarea.md)| Add, remove, or list ticking areas. |
| [time](Commands/time.md)| Changes or queries the world's game time. |
| [toggledownfall](Commands/toggledownfall.md)| Toggles the weather. |
| [weather](Commands/weather.md)| Sets the weather in the environment. |

## Chat & Communication

| Command | Description |
|:--------|:------------|
| [dialogue](Commands/dialogue.md)| Opens NPC dialogue for a player. |
| [me](Commands/me.md)| Displays a message about yourself. |
| [say](Commands/say.md)| Sends a message in the chat to other players. |
| [tell](Commands/tell.md)| Sends a private message to one or more players. |
| [tellraw](Commands/tellraw.md)| Sends a JSON message to players. |
| [title](Commands/title.md)| Controls the text and behavior for screen titles using plain text. |
| [titleraw](Commands/titleraw.md)| Controls the text and behavior for screen titles using JSON messages. |

## Data & Logic

| Command | Description |
|:--------|:------------|
| [execute](Commands/execute.md)| Executes a command on behalf of one or more entities. |
| [function](Commands/function.md)| Runs commands found in the corresponding function file. |
| [schedule](Commands/schedule.md)| Schedules an action to be executed once an area is loaded, or after a certain amount of time. |
| [scoreboard](Commands/scoreboard.md)| Tracks and displays scores for various objectives. |
| [testfor](Commands/testfor.md)| Counts entities (players, mobs, items, etc.) matching specified conditions. |
| [testforblock](Commands/testforblock.md)| Tests whether a certain block is in a specific location. |
| [testforblocks](Commands/testforblocks.md)| Tests whether the blocks in two regions match. |

## Server & Admin

| Command | Description |
|:--------|:------------|
| [allowlist](Commands/allowlist.md)| Manages the server allowlist. |
| [deop](Commands/deop.md)| Revokes operator status from a player. |
| [kick](Commands/kick.md)| Kicks a player from the server. |
| [list](Commands/list.md)| Lists players on the server. |
| [op](Commands/op.md)| Grants operator status to a player. |
| [packstack](Commands/packstack.md)| Prints client or server pack stack to chat |
| [permission](Commands/permission.md)| Reloads and applies permissions. |
| [reload](Commands/reload.md)| Reloads all function and script files from all behavior packs. |
| [reloadconfig](Commands/reloadconfig.md)| Reloads configuration files relating to variables, secrets, permissions, etc. |
| [reloadpacketlimitconfig](Commands/reloadpacketlimitconfig.md)| Reload packet limit config from file |
| [save](Commands/save.md)| Control or check how the game saves data to disk. |
| [sendshowstoreoffer](Commands/sendshowstoreoffer.md)| Available on dedicated server only with administrator permissions. |
| [setmaxplayers](Commands/setmaxplayers.md)| Sets the maximum number of players for this game session. |
| [stop](Commands/stop.md)| Stops the server. |
| [transfer](Commands/transfer.md)| Transfers a player to another server. |
| [wsserver](Commands/wsserver.md)| Attempts to connect to the websocket server on the provided URL. |

## Scripting

| Command | Description |
|:--------|:------------|
| [gametest](Commands/gametest.md)| [Requires the Beta APIs experiment]. |
| [script](Commands/script.md)| Debugging options for script within Minecraft. |
| [scriptevent](Commands/scriptevent.md)| Causes an event to fire within script with the specified message ID and payload. |

## Sound & Visuals

| Command | Description |
|:--------|:------------|
| [fog](Commands/fog.md)| Add or remove fog settings file. |
| [music](Commands/music.md)| Allows you to control playing music tracks. |
| [particle](Commands/particle.md)| Creates a particle emitter |
| [playsound](Commands/playsound.md)| Plays a sound. |
| [stopsound](Commands/stopsound.md)| Stops a sound. |

## Loot & Recipes

| Command | Description |
|:--------|:------------|
| [loot](Commands/loot.md)| Drops the given loot table into the specified inventory or into the world. |
| [recipe](Commands/recipe.md)| Supports unlocking of built-in (vanilla) recipes that a particular player can craft with. |

## Help

| Command | Description |
|:--------|:------------|
| [help](Commands/help.md)| Running `/help` in the chat by itself will list every command you can run. |

## Other

| Command | Description |
|:--------|:------------|
| [locate](Commands/locate.md)| Finds the nearest specified biome or structure if it exists in the current dimension. |
| [project](Commands/project.md)| This command contains additional tools for managing an Editor project. |
