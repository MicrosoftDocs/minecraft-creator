---
author: mammerla
ms.author: v-jillheaden
title: Target Selectors
description: "A guide covering target selectors"
ms.service: minecraft-bedrock-edition
---

# Target Selectors

Using player names as values for arguments isn't ideal for a command system that's intended to work for anyone. It's not possible to know the names of the players who will be making use of your content ahead of time. Target selectors, which can target players and other entities arbitrarily, fixes this issue.

There are 6 base selectors to pick from: `@p`, `@a`, `@r`, `@e`, `@s`, and `@initiator`. The selector to choose depends on who or what the intended target is.

- `@p`: selects the single closest living player unless the execution origin is changed with the `x`, `y`, and `z` selector parameters. If the executor was a command block, the player closest to the command block would be selected since the command block's coordinates are the execution origin.
- `@a`: selects all online players, alive or not.
- `@r`: selects one random living player unless the `type` parameter is specified.
- `@e`: selects all entities (players, cows, dropped items, etc.)
- `@s`: selects the executing entity, which can be changed with the `/execute` command.
- `@initiator`: selects the player that initiates an NPC dialogue interaction.

Selectors replace a player name where possible. For example, instead of specifying a player name in the `/gamemode` command, a selector can be used in its place. The following would change the game mode of all players to creative mode:

```
/gamemode creative @a
```

If no targets are found by the selector, the command will fail to run.

### Selector parameters

Alongside the base selectors are parameters. These optional parameters help to narrow down the desired targets, such as if you wanted to only target players in adventure mode. All parameters are contained within a set of square brackets and each parameter is separated from one another with a comma. The name of the parameter is followed by an equals sign, which is then followed by the value of the parameter.

```
@<selector>[param1=value1,param2=value2]
```

If the desired targets of the previous `/gamemode` command should instead be all players in adventure mode, the `m` parameter will reduce the potential targets of the selector to only those in adventure mode. A list of all parameters can be found [below](#list-of-parameters).

```
/gamemode creative @a[m=adventure]
```

A potential target must match all specified parameters before being selected. This means that using `@p[tag=sometag,m=survival]` would select the closest player that has the tag "sometag" and is in survival mode.

#### List of parameters

|Parameter|Description|Example|
|:---|:---|:---|
|`x, y, z`|Specifies the coordinates to find players from. Not all axes have to be specified.|Using `@p[x=0,y=64,z=0]` will select the player closest to those coordinates, rather than the player closest to the execution origin.|
|`r, rm`|Selects targets within a radius around the execution origin, unless changed by the "x, y, z" parameters.<br><br>`r` is the maximum number of blocks away from the origin to select, while `rm` is the minimum blocks away from the origin.<br><br>One may be specified without specifying the other.|`@p[x=0,y=64,z=0,r=1]` will select a player that is 1 block away from the specified coordinates.<br><br>`@a[rm=3]` will select all players 3 blocks away from the execution origin.<br><br>`@e[rm=3,r=10]` will select all entities that are between 3 and 10 blocks of the execution origin.|
|`dx, dy, dz`|Selects targets in a rectangular cuboid. The execution origin will be one corner while each of these parameters specifies the distance away from the origin to the other corner.<br><br>If any one of these parameters are specified, the others that are not specified will default to 0.|`@a[x=60,y=64,z=60,dx=5,dy=3,dz=5]` will select players that are 5 blocks within the X and Z directions and 3 blocks within the Y direction of the specified coordinates.<br><br>`@a[dy=50]` will select players that are within 50 blocks of the execution origin in the Y direction, while also being within 0 blocks in the X and Z directions. This means the player must be at the same horizontal position of the origin, but up to 50 blocks above it.|
|`c`|Changes the maximum number of targets that can potentially be selected. The targets chosen depends on the target selector's sorting.<br><br>Note that if there are fewer available targets than the value given to the parameter, the selector will still succeed in selecting those targets.|`@a[c=5]` will select, at most, the closest 5 players rather than all players. If there are only 3 players in the world, they will still be selected.<br><br>`@p[c=100]` will select up to the closest 100 players to the execution origin.<br><br>`@r[c=3]` will select up to 3 random players.|
|`type`|Selects targets based on their entity ID. This parameter cannot be used with `@a` or `@p` selectors.<br><br>Can be used with `@r` to target entities other than players.<br><br>The value can be negated to select targets that are not the specified entity.<br><br>Multiple of this parameter can be used to further restrict targets but only if the parameters are negated.|`@e[type=minecraft:bat]` will select all bats.<br><br>`@r[type=minecraft:cow]` will select one random cow.<br><br>`@s[type=!minecraft:player]` will select the executing entity if they're not a player.<br><br>`@r[type=!minecraft:sheep, type=!minecraft:chicken]` will select one random entity that is not a sheep or chicken.|
|`m`|Selects players based on their game mode.<br><br>The value can be negated to select players that are not in the specified game mode.|`@a[m=survival]` will select all players in survival mode.<br><br>`@a[m=!creative]` will select all players that are not in creative mode.|
|`tag`|Selects targets who have the specified tag (given via the `/tag` command).<br><br>Can be negated to select targets that do not have the specified tag.<br><br>Multiple of this parameter can be used to further restrict targets.|`@e[tag=myfriend]` will select all entities with the "myfriend" tag.<br><br>`@e[tag=!myfriend]` will select all entities that do not have the "myfriend" tag.<br><br>`@a[tag=a,tag=b,tag=!c]` will select all players who have both the "a" and "b" tag, but only if they do not have the "c" tag.|
|`name`|Selects targets with the specified name, whether it's a player name or the custom name of an entity.<br><br>Can be negated to select targets that do not have the specified name.<br><br>Multiple of this parameter can be used but only if the extra parameters are negated.|`@a[name=PlayerName]` will select all players named "PlayerName".<br><br>`@a[name=!PlayerName]` will select all players that are not named "PlayerName".<br><br>`@e[name=!a,name=!b]` will select entities that are not named "a" or "b".|
|`l, lm`|Selects players between a minimum experience level (`lm`) and a maximum experience level (`l`).<br><br>One can be specified without specifying the other.|`@a[lm=10]` will select all players that have 10 or more experience levels.<br><br>`@a[l=15]` will select all players that have 15 or fewer experience levels.<br><br>`@a[lm=10,l=15]` will select all players that have an experience level between 10 and 15.|
|`rx, rxm`|Selects targets whose X rotation (pitch) is between a minimum rotation (`rxm`) and maximum rotation (`rx`). The pitch of an entity is between -90 degrees (facing straight up) and 90 degrees (facing straight down).<br><br>One can be specified without specifying the other.|`@p[rxm=45,rx=90]` will select the closest player who is looking down between a 45-degree angle and a 90-degree angle.<br><br>`@e[rx=-45]` will select all entities that are looking up between a 45-degree angle and a 90-degree angle.|
|`ry, rym`|Selects targets whose Y rotation (yaw) is between a minimum rotation (`rym`) and a maximum rotation (`ry`). The yaw of an entity is between -180 degrees and 180 degrees.<br><br>One can be specified without specifying the other.|`@a[rym=45,ry=135]` will select all players that are generally facing west.<br><br>`@a[rym=-180,ry=-180]` will select all players facing exactly north.|
|`scores`|Selects targets that have a particular score in an objective.<br><br>The parameter can specify multiple objectives within a set of curly brackets, with each objective separated by a comma.<br><br>A range between two inclusive values can be specified using ".." notation, such that "3..7" would check for a value between 3 and 7.<br><br>The value of a given objective can be negated to select targets who do not have a matching score value. Note that a null value is not equal to a negated value.|`@e[scores={objectiveA=3}]` will select all entities that have a score of 3 in the "objectiveA" objective.<br><br>`@a[scores={points=4,deaths=!5}]` will select all players that have a "points" score of 4, and do not have a "deaths" score of 5.<br><br>`@a[scores={points=10..50}]` will select all players who have a "points" score between 10 and 50.<br><br>`@a[scores={deaths=10..,points=..2}]` will select all players who have a "deaths" score of 10 or higher and a "points" score of 2 or lower.|
|`family`|Selects targets who belong to the family type, as defined in an entity's `minecraft:type_family` component.<br><br>The value can be negated to select targets that do not belong to the family type.<br><br> Multiple of this parameter can be used to further restrict targets.|`@e[family=skeleton]` will select all entities who belong to the "skeleton" family.<br><br>`@e[family=!monster]` will select all entities that do not belong to the "monster" family.|

## What's Next?

Now that you've learned about target selectors, you can learn more about popular commands or about how to use command blocks to move beyond the chat window.

> [!div class="nextstepaction"]
> [Commands Introduction](CommandsIntroduction.md)
> [Popular Commands](CommandsPopularCommands.md)
> [Command Blocks](CommandBlocks.md)
