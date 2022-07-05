---
author: mammerla
ms.author: v-jillheaden
title: Popular Commands
ms.prod: gaming
description: "A guide covering many of the most common commands that are used within Minecraft: Bedrock Edition"
---

# Popular Commands

There are a number of commands that are vital to many command systems. This list will go over the more popular and useful commands that are likely to be used in some fashion.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - Some of the more popular commands to use when starting out.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Commands](CommandsIntroduction.md)
- [Getting Started with Command Blocks](CommandBlocks.md)

## /help

First and foremost is the `/help` command.

```
/help <page: int>
```

Running `/help` in the chat by itself will list every command you can run. However, since there are so many, they have been divided up into several pages, where you are shown only one page at a time. Supplying a page number will change which page of commands to show.

Whenever you want to know the usage and all of the syntaxes of a command, you can use `/help` followed by the name of the command. This can be helpful if you want an overview of the command.

```
/help [command: CommandName]
```

## /gamerule

This `/gamerule` command changes specific gameplay aspects and has options helpful for development. There are a large number of gamerules, which can be listed using the chat’s auto-complete feature.

```
/gamerule <rule: BoolGameRule> [value: Boolean]
/gamerule <rule: IntGameRule> [value: int]
```

Some gamerules accept only true or false as the value of the rule ("BoolGameRule") while others only accept integers ("IntGameRule"). The primary gamerules crucial for development, which are all booleans, are "commandblockoutput", "sendcommandfeedback", and "commandblocksenabled", "dodaylightcycle", and "doweathercycle" listed below.

### "commandblockoutput"

You may have noticed that all of the previous command examples send an output to the chat. This can be a nuisance, especially for commands running every tick. The "commandblockoutput" gamerule, when set to false, will disable that chat output.

```
/gamerule commandblockoutput false
```

### "sendcommandfeedback"

Disabling command block output does not disable all feedback. There are some commands, such as `/xp`, that will continue providing feedback even when command block output is disabled. The "sendcommandfeedback" gamerule will disable these messages as well, allowing for a completely silent command system.

```
/gamerule sendcommandfeedback false
```

### "commandblocksenabled"

To quickly enable or disable command blocks in the world, the "commandblocksenabled" can be toggled on and off. This can be especially helpful if a repeating command block is repeatedly teleporting you.

```
/gamerule commandblocksenabled false
```

### "dodaylightcycle"

Either for development or for gameplay concerns, you can choose to prevent the daylight cycle from moving. This means that whatever time you set the game to (such as with the [`/time` command](#time-set)), it will stay at that time.

```
/gamerule dodaylightcycle false
```

### "doweathercycle"

As with "dodaylightcycle", you may also want to control the weather cycle. If you intend to have a happy setting, a thunderstorm setting in may not achieve the best effect. When "doweathercycle" is disabled, the weather will stay as it is, including when set with the [`/weather` command](#weather).

```
/gamerule doweathercycle false
```

## /gamemode

When developing content, most often you'll be playing in creative mode. However, testing your content may require you to enter survival or adventure mode. The `/gamemode` command allows you to change your current game mode.

```
/gamemode <gameMode: GameMode> [player: target]
/gamemode <gameMode: int> [player: target]
```

You have several options for the game mode: the full name, a single character, or a numeric representation. The accepted values are "survival" ("s" or 0), "creative" ("c" or 1), and "adventure" ("a" or 2). There is also "default" ("d"), which sets your game mode to whatever the world's default game mode is. The following will set your own game mode to creative when you run it in the chat.

```
/gamemode creative
```

You can also change the game mode of a specific player using target selectors, which can be helpful when controlling gameplay aspects (such as the inability to mine anything in adventure mode). The following changes the game mode of all players with the "sometag" tag to adventure mode.

```
/gamemode adventure @a[tag=sometag]
```

## /locate

Finds the nearest specified biome or structure if it exists in the current dimension. Prints an error if it does not.

```
/locate biome <biome name>
/locate structure <structure name>
```

The locate command takes two arguments: the first argument specifies whether to locate a biome or a structure, the second argument specifies the name of the biome or structure to be located.

```
/locate biome beach
/locate structure village
```

## /time set

Changing the gameplay environment can be essential for providing the right atmosphere. Changing the time of day is one method of doing so.

```
/time set <amount: int>
/time set <time: TimeSpec>
```

You can either provide an integer which represents a precise time of the day, or "TimeSpec" can be set to one of the following values to more easily select common times of day: "day", "midnight", "night", "noon", "sunrise", and "sunset". For example, quickly setting the sun directly above the player would use the following:

```
/time set noon
```

## /weather

Like [`/time set`](#time-set), the `/weather` command can be used to change the environment. If you want a specific type of weather to occur, this would be the command you would use.

```
/weather <clear|rain|thunder> [duration: int]
```

The optional duration is the number of game ticks that the selected weather will last for. 20 game ticks is one second, so for each second you want the weather to last, multiply it by twenty. The following sets the weather to thunder for 30 seconds, which is 600 ticks.

```
/weather thunder 600
```

Be sure that the ["doweathercycle" gamerule](#doweathercycle) is false if you intend on making use of the duration. If it is true, the weather cycle will not occur, rendering the duration useless.

## /setworldspawn

If you have a specific location that you want players new to the world or players who die to spawn at, the `/setworldspawn` command provides that ability.

```
/setworldspawn [spawnPoint: x y z]
```

Note that players who die after they have set their spawn with a bed will still respawn at their bed.

## /tp or /teleport

Sometimes you may want to provide an easy means of transportation or need a form of controlling where the player (or even non-player entity) is. The `/tp` command will teleport targeted players to specific locations, or even to other entities. The syntaxes for `/tp` may look daunting at first, but note many branch to and from the same options.

```
/tp <victim: target> <destination: target> [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> [yRot: value] [xRot: value] [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]
/tp <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]
```

At its simplest, you can teleport the player to a specific coordinate location.

```
/tp @p 100 50 100
```

You can also teleport them to another player or entity. The destination target must resolve to a single entity, so you have to use a target selector that can only target one entity or ensure there are no duplicates of the intended target (such as using the [`/tag` command](#tag) to identify targets).

```
/tp Steve Alex
/tp @p @e[type=minecraft:armor_stand,c=1]
/tp @a @e[type=minecraft:creeper,tag=destination_1]
```

The common option "checkForBlocks" defaults to false, but when it is set to true, it will prevent teleporting the player if the location they would end up in is occupied by blocks.

This command teleports Steve to coordinates [50, 63, 50] and makes sure there are no blocks in the way.

```
/tp Steve 50 63 50 true
```

## /give, /clear, /replaceitem

This trio of commands manipulate the player’s inventory, though `/replaceitem` can also modify non-player entity inventories and blocks with inventories. The `/give` command can provide items, the `/clear` command can remove items, and the `/replaceitem` command can place items in specific slots in the inventory.

## /setblock, /fill, /clone

These commands change the physical blocks in the world. The `/setblock` command can set a single block while the `/fill` command can set multiple of the same block. The `/clone` command, on the other hand, will take a copy of blocks from one area and paste it into another.

## /effect

Adding and removing status effects is done with the `/effect` command. All status effects on the target can also be cleared.

## /summon

The `/summon` command is used to spawn a new entity into the world, from cows to sheep to your own custom entities.

## /tellraw, /titleraw

The `/say`, `/tell`, and `/title` commands are not ideal when presenting information as they are not open to translation. The `/tellraw` and `/titleraw` commands can be translated using a JSON input for the message. The `/tellraw` command is also clearer in intent as the message is not accompanied with a "whisper" statement.

```
/tellraw @a {"rawtext":[{"translate":"commands.testfor.success","with":["PlayerName"]}]}

/tellraw @a {"rawtext":[{"text":"Hello World"}]}
```

## /scoreboard

The `/scoreboard` command is a powerful method of keeping track of numeric values on a per-entity basis, as well as performing mathematical operations with commands. The first step is creating an objective and (optionally) displaying it on the sidebar.

```
/scoreboard objectives add objectiveA dummy

/scoreboard objectives setdisplay sidebar objectiveA
```

The simplest course of action would be rewarding the player with a point if they accomplish some task.

```
/scoreboard players add @p objectiveA 1
```

Afterwards, target selectors can be used to select players who achieve a certain number of points.

```
@a[scores={objectiveA=10..}]
```

## /tag

Similar to `/scoreboard`, the `/tag` command allows you to keep track of string values on a per-entity basis. Tags would be used when a numeric value is not needed, such as for "true or false" situations. For example, you could tag entities as being a boss and later target those same entities based on that tag.

```
/tag @e[type=sheep] add boss
/tag @e[type=minecart] add boss
```

```
/say Bosses: @e[tag=boss]
```

## /testfor, /testforblock, /testforblocks

These commands test for the existence of an entity, block, and a copy of a block structure. While these commands can be useful alongside conditional command blocks, they are less useful in functions as there is no equivalent conditional setting in functions.

Both the `/testfor` and `/testforblock` commands can generally be skipped over in favor of `/execute`, which supports running a command based on the existence of an entity and running a command based on the existence of a block.

## /execute

The primary function of the `/execute` command is to modify the executor and execution origin of a nested command. However, its syntax allows for some conditional command execution that would otherwise be missing in functions.

```
/execute <origin: target> <position: x y z> <command: command>

/execute <origin: target> <position: x y z> detect <detectPos: x y z> <block: Block> <data: int> <command: command>
```

For example, to detect if there’s a specific block beneath the player and run a command as a result, the "detect" argument can be used instead of having a nested `/testforblock` command.

```
/execute @a ~ ~ ~ detect ~ ~-1 ~ grass 0 say Player is standing on top of grass.
```

## What's Next?

After learning about commands and target selectors, command blocks, and a variety of useful commands, it's time to put them together and create a small project in the form of a Complete the Monument system.

> [!div class="nextstepaction"]
> [How to Make a Complete the Monument World](CommandsHowToMakeACTMWorld.md)
