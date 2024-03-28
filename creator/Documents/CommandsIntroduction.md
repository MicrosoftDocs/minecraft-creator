---
author: mammerla
ms.author: v-bbortree
title: Introduction to Commands
description: "A guide covering how Commands work in-game, the syntax that is used, and what parameters are available"
ms.service: minecraft-bedrock-edition
---

# Introduction to Commands

Commands are specific instructions that Minecraft: Bedrock Edition will carry out. These instructions can be as simple as changing the time of day or as complex as setting up and working with a scoreboard. There are a wide variety of commands, and each has its own potential to improve your content.

Content creators use commands to change or react to the environment around the player. Rather than having a static world, the player would be able to perform a task that a command system could detect and respond to in some way. An example of this is detecting if a player has placed a colored wool block at a specific location for a "Complete the Monument" style of map.

:::image type="content" source="Media/Commands/Introduction-to-Commands.jpg" alt-text="Image showcasing four different time of day settings":::

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What commands are and how to begin using them.
> - Command syntax.
> - How to use target selectors and selector parameters.

## Enabling Commands

Before getting started with commands, cheats must be enabled. This can be done when you create a world or when you edit an existing one. Be aware that enabling cheats will disable achievements for that world.

Activating cheats will allow the use of commands in the chat interface. Running commands in the chat is essential for getting the first command block in a newly created world, which must also be enabled (in the same menu) in order to use them. Command blocks will be enabled by default, so you do not have to change that option.

![Activate cheats and command blocks options](Media/Commands/enablecheats.png)

While not required, it can be helpful to set the default game mode to creative when starting out as command blocks can only be edited in creative mode. Setting the default game mode to creative will also activate cheats.

![Default game mode option](Media/Commands/defaultgamemode.png)

Finally, you may need to enable the "operator commands" permission for yourself in order to run commands in the chat and access command blocks. While this setting is on by default for new worlds you create, you may need to change this on previously created worlds or for other players you would like to grant this permission for. This can be done by opening the pause menu while in the world and clicking the icon to the right of your player.

![Player permissions icon](Media/Commands/openpermissions.png)

A list of various permissions will be shown. The "operator commands" permission in particular must be enabled in order to use commands in the chat and access command blocks.

![Operator commands option](Media/Commands/enablecommandspermission.png)

## Using the chat for commands

The first step to learning commands is learning how to use the chat functionality. This is where you run simple commands, learn syntax, test, and ultimately open the gateway to command blocks. If your settings and permissions are set correctly, typing a forward slash `/` in the chat will display a large number of commands.

![Chat slash command list](Media/Commands/chatcommands.png)

A quick-action button also becomes available to generate a command for specific situations (such as changing the time of day or the current weather).

![Quick command menu](Media/Commands/quickaction.png)

As you type, the list of commands displayed on the chat screen will filter to match the characters you input. You can press `tab` to cycle through the list at any time in order to choose the command to run. When the name of the command has been fully typed out, the list of commands changes to a list of syntaxes for the selected command.

>[!Note]
If you open the chat and press the up arrow on your keyboard, you can see the previous commands you've entered. This comes in handy when you're entering variations of the same command over and over. And over.

## Command syntax

All commands follow the same grammar:

1. To run a command in the chat, start it with a forward slash.
2. Following the potential forward slash is the name of the command.
3. Following the name is a space, should there be any arguments after.
4. Following the space are any arguments for the command, each separated by a space.

For example, the following `/say` command will send a supplied message to the chat for all players to see:

```
/say Hello World
```

1. It starts with a forward slash.
2. It is then followed by the name of the command, "say".
3. Because there are arguments after the name, a space is placed after the name.
4. Then, the only argument for `/say` is provided, which is the message to display.

As a result, "Hello World" will be printed out in the chat.

### Arguments

Different commands need different arguments. The `/help` command will describe a command and the arguments it has. The auto-complete feature, which is available in the chat when typing out a command, will display the same information.

For example, running `/help testfor` in the chat will provide the available syntax for the `/testfor` command.

```
/testfor <victim: target>
```

The command has only one argument: a target to test the existence of. Filling in the argument with a player name and running the command will print out a success message if the player of the specified name is logged into the world.

```
/testfor PlayerName
```

There are three primary types of arguments: required, optional, and literal.

**Required arguments**

A required argument is surrounded by angle brackets like `<this>`. In the case of the `/testfor` command, you can tell that the only argument it has is required because it is surrounded by angle brackets. If the argument is not provided, the command will fail to run. These types of arguments have a short descriptor of the argument as well as the expected input type. Consider the `/difficulty` command:

```
/difficulty <difficulty: Difficulty>
/difficulty <difficulty: int>
```

The `/difficulty` command sets the difficulty level for the world, and there are two different ways to specify which level you want. The text is giving you some clues about what to enter. On each line, after the colon is the expected type of input. So we can tell that the input can either be one value from a list of expected values such as "peaceful", "easy," "normal," or "hard", or an integer that corresponds to each difficulty level: 0, 1, 2, or 3.

Either of the following commands will set the difficulty to hard:

```
/difficulty hard
/difficulty 3
```

**Optional arguments**

An optional argument is surrounded by square brackets. These arguments do not need to be provided. Like a required argument, it will contain a descriptor and an expected type.

```
/gamemode <gameMode: GameMode> [player: target]
/gamemode <gameMode: int> [player: target]
```

As with the `/difficulty` command, the `/gamemode` command has two different ways to do the same thing. The "gameMode" descriptor implies that the expected value is a game mode, while the actual type can either be one value from an enumeration (labeled as "GameMode") or an integer corresponding to a game mode (0 through 2).

In this case, there is an optional argument after the game mode: the player who will have their game mode changed. The input type is "target," which accepts either a player name or a target selector. Without supplying the optional argument, the command will still run. Doing so changes the game mode of the player who executed the command. By filling in the optional argument, the game mode of the target will be changed instead.

Either of the following commands will set the game mode for the specified player ("PlayerName") to survival mode.

```
/gamemode survival PlayerName
/gamemode 0 PlayerName
```

**Literal arguments**

A literal argument is one without a descriptor. The expected input is the name of the argument itself.  For example, the `/time` command has an argument called "set":

```
/time set <amount: int>
/time set <time: TimeSpec>
```

The "set" argument has no descriptor, which means it must be written out literally. It also contains no brackets, though it is still a required argument.

```
/time set 6000
/time set noon
```

A literal argument can have multiple accepted values. In those cases, a vertical bar separates the literal values. The `/weather` command makes use of this for the type of weather to apply, where the value of the argument must be one of the acceptable values.

```
/weather <clear|rain|thunder> [duration: int]
/weather rain 10000
```

An optional literal argument will be surrounded by square brackets. The final argument of `/testforblocks` is an optional literal argument that can be either "all" or "masked". If none is specified, it defaults to "all." The "masked" option will cause the comparison to ignore air blocks, allowing any block to exist at the destination where there would be an air block at the source.

```
/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [masked|all]
/testforblocks 0 64 0 20 64 20 100 50 100
/testforblocks 0 64 0 20 64 20 100 50 100 masked
```

### Input types

Any argument that isn't a literal argument will specify the expected input type after the descriptor.

```
/command <descriptor: type>
/command [descriptor: type]
```

There are a large number of input types. The most common ones are primitive numeric values, but there are many that are exclusive to one command. The table below details the most common input types and some popular commands they belong to. Most unique input types, such as "GameMode" from the `/gamemode` command, can easily have their input checked by using the auto-complete feature in the chat.

|Type|Description|Common commands
|:---|:---|:---|
|Boolean|true or false.|`/effect`, `/gamerule`|
|int|An integer (1, 2, 3).|`/give`, `/scoreboard`, `/time`, `/weather`, `/xp`|
|float|A decimal number (1, 2.3, 4, 5.6).|`/spreadplayers`|
|string|Either a single word or text within "quotation marks".|`/scoreboard`, `/summon`, `/tag`|
|message|Text that does not need to be in quotation marks.|`/me`, `/msg`, `/say`, `/tell`, `/title`, `/w`|
|x y z|3 floats separated by spaces to specify coordinates.<br><br>Each value can also be a tilde (~), which indicates no change from the execution origin on that axis, or a tilde followed by a number (~5) to indicate the number of blocks away from the execution origin on that axis.|`/clone`, `/execute`, `/fill`, `/setblock`, `/summon`, `/teleport`, `/testforblock`|
|Block|A block ID.|`/clone`, `/execute`, `/fill`, `/setblock`, `/testforblock`|
|Item|An item ID.|`/clear`, `/give`, `/replaceitem`|
|EntityType|An entity ID.|`/summon`|
|json|JSON-formatted text.|`/give`, `/replaceitem`, `/summon`, `/tellraw`, `/titleraw`|
|target|Either a player name or a target selector.|`/clear`, `/execute`, `/gamemode`, `/give`, `/kill`, `/replaceitem`, `/scoreboard`, `/tag`, `/teleport`, `/testfor`|

## What's Next?

Now that you've learned about commands, you can learn more about target selectors, commands, or about how to use command blocks to move beyond the chat window.

> [!div class="nextstepaction"]
> [Target Selectors](TargetSelectors.md)
> [Popular Commands](CommandsPopularCommands.md)
> [Command Blocks](CommandBlocks.md)
