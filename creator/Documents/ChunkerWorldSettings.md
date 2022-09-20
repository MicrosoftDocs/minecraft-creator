---
author: neonerz
ms.author: mikeam
title: Chunker - World Settings
ms.prod: gaming
---
# Chunker - World Settings

Chunker allows you to change various world settings when converting worlds. This article gives a brief description of these options and how they affect gameplay.

> [!IMPORTANT]
> Editing these values can cause unintended behavior, world corruption, or unstable gameplay if set incorrectly. Use caution when changing values.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - Various settings available when using Chunker to convert worlds.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Chunker - Advanced Mode](ChunkerAdvancedMode.md)

## World Settings

|Settings|Description|
|:---|:---|
|Difficulty|Difficulty of the world.|
|Gamemode|Default game mode of the world. Players will default to this game mode on first join.|
|Generator|Generator used for generating new chunks in this world. Setting to void will automatically create the custom layer rules to generate empty chunks.|
|World Name|Friendly name of this world (i.e “Steve and Alex Super Survival”).|
|World Seed|Seed provided to the generator to generate the world.|
|Spawn X|X coordinate of the default spawn for players.|
|Spawn Y|Y coordinate of the default spawn for players.|
|Spawn Z|Z coordinate of the default spawn for players.|
|Time|Current time of the world (in ticks).|
|Experimental Gameplay|**(Bedrock Edition only)** Whether experimental game features are enabled in this world.|
|Bonus Chest Enabled|**(Bedrock Edition only)** Whether a bonus chest is enabled for this world.|
|Bonus Chest Spawned|**(Bedrock Edition only)** Has the bonus chest been spawned in the world? If set to false, the game will attempt to place a bonus chest on next load.|
|Spawn Mobs|**(Bedrock Edition only)** Whether this world should spawn mobs.|
|Nether Scale|**(Bedrock Edition only)** The scale of the Nether compared to the Overworld, which defaults to 8 in vanilla. If this value is set to 8, then every block moved in the Nether will equate to 8 blocks moved in the Overworld.|

## Game Rules

Game rules are settings that can be modified in-game by operators using the `/gamerule` command or in-game menu.

|Setting|Description|
|:---|:---|
|Command Block Output|Whether command blocks should output to chat for online operators.|
|Command Blocks Enabled|Whether command blocks are enabled in this world. Setting to false will cause command blocks to not execute.|
|Commands Enabled|Whether commands (commonly referred to as cheats) should be allowed in this world.|
|Do Daylight Cycle|Whether the time of day should cycle. If disabled, the time of day will not change.|
|Do Entity Drops|Whether items can be removed from an entity. For example, if disabled, players will not be able to remove items from an item frame.|
|Do Fire Tick|Whether fire should spread within this world. If disabled, fire will not spread to nearby flammable materials.|
|Do Immediate Respawn|If enabled, players will instantly respawn without seeing the traditional respawn screen.|
|Do Insomnia|If disabled, phantoms will not spawn during the night.|
|Do Mob Loot|Whether mobs should drop their loot when killed.|
|Do Mob Spawning|Whether mobs should spawn naturally in the world.|
|Do Tile Drops|Whether tiles (blocks) should drop their items when destroyed.|
|Do Weather Cycle|Whether the world should cycle weather. If disabled, the weather in the world will not change.|
|Drowning Damage|Whether entities can take damage from running out of air (drowning).|
|Fall Damage|Whether entities will take damage from falling from heights.|
|Fire Damage|**(Bedrock Edition only)** Whether entities will be damaged when ignited.|
|Force Gamemode|If enabled, all players will be forced to remain in the worlds default game mode.|
|Function Command Limit|The maximum number of simultaneous commands that can be executed by a function file.|
|Keep Inventory|Whether players should keep their inventory on death.|
|Mob Griefing|Whether mobs can grief the world (destroy/place blocks).|
|Natural Regeneration|Whether a player will naturally regenerate health when hunger is full.|
|Random Tick Speed|How often Minecraft will tick world functionality. Set to 0 to disable functionality such as grass spread and leaf decay.|
|Send Command Feedback|Whether a command will send output in chat to the executor and online operators.|
|Show Coordinates|**(Bedrock Edition only)** Whether the client should show a UI element informing the player of their current coordinates.|
|Show Death Messages|Whether a message should be displayed in chat when an entity dies.|
|TNT Explodes|**(Bedrock Edition only)** Whether TNT will explode, causing world damage.|
|Spawn Radius|The radius from the spawn used to pick a safe spawn location.|
|Max Command Chain Length|The maximum amount of chain command blocks that can run in a single tick.|

## Restrictions

|Setting|Description|
|:---|:---|
|Confirmed Platform Locked Content|**(Bedrock Edition only)** Whether this content is platform locked.|
|Has Been Loaded In Creative|**(Bedrock Edition only)** Whether this world has been loaded in creative mode.|
|Has Locked Behavior Pack|**(Bedrock Edition only)** Whether the behavior pack is locked.|
|Has Locked Resource Pack|**(Bedrock Edition only)** Whether the resource pack is locked.|
|Immutable World|**(Bedrock Edition only)** Indicates that the world cannot be modified, effectively making it read-only.|
|Is From Locked Template|**(Bedrock Edition only)** Whether this world was created from a locked template.|
|Is From World Template|**(Bedrock Edition only)** Whether this world was created from a world template.|
|Is World Template Option Locked|**(Bedrock Edition only)** Whether the options for this world are currently locked using the settings from the source world template.|
|LAN Broadcast|**(Bedrock Edition only)** Whether this world should broadcast its availability to devices on the local network.|
|Limited World Origin X,Y,Z|**(Bedrock Edition only)** Legacy. Used to indicate where limited world generation started.|
|Texture Packs Required|**(Bedrock Edition only)** Whether behavior and resource packs are required to join the world.|
|Use MSA Gamertags Only|**(Bedrock Edition only)** Whether the world is restricted to Microsoft Accounts only (players must be signed in).|

## Weather

|Setting|Description|
|:---|:---|
|Lightning Level|Determines how heavy the lightning is.|
|Lightning Time|Number of ticks until lightning will be triggered.|
|Rain Level|Determines how heavy the rain is.|
|Rain Time|Number of ticks until rain will be triggered.|

## Misc

|Setting|Description|
|:---|:---|
|Center Maps To Origin|**(Bedrock Edition only)** Whether maps (items) should be centered to the origin of the map.|
|Education Features|**(Bedrock Edition only)** Whether this world has Minecraft: Education Edition features enabled.|
|EDU Level|**(Bedrock Edition only)** The level of the EDU features to use.|
|Server Chunk Tick Range|**(Bedrock Edition only)** The distance of chunks around a player to tick server-side. Setting this to a high number can negatively impact performance.|
|Start With Map Enabled|**(Bedrock Edition only)** Whether new players start with a map.|
|World Start Count|**(Bedrock Edition only)** The number of times the world has been started. This is used to generate entity (actor) ids.|

## What's Next?

If you have a Nether dimension that you want to reset in order to have up-to-date generation features, Chunker can be used to do that with Advanced Mode.

> [!div class="nextstepaction"]
> [Chunker - How to Clear The Nether](ChunkerTheNether.md)