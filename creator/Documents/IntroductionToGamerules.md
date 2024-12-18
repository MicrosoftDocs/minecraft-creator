---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: v-jeffkim
ms.author: mikeam
ms.service: minecraft-bedrock-edition
title: Introduction to Gamerules
description: An introduction to the /gamerule command and its function in a Minecraft world
---

# Introduction to Gamerules

The `/gamerule` command lets you adjust certain features of your game world and even turn them on and off. Gamerules can be extremely helpful when setting up the basics for how your Minecraft world will behave. For example, if you want to create an amusement park world, you can use gamerules to make sure that it's always a sunny, perfect day to enjoy all of the rides or attractions. Let's take a closer look at gamerules to see how we can use them to create experiences in Minecraft.

## Prerequisites

We recommend completing the following before beginning this tutorial:

- [Introduction to Commands](CommandsIntroduction.md)

## Using /gamerule Commands

For a full list of `/gamerule` commands and their descriptions, see [gamerule Command](../Commands/commands/gamerule.md).

Don't worry if you don't know all of the `/gamerule` commands by heart - we'll go over the specific commands we want to use in the following sections. For now, just know that you can use the command in Minecraft in the following format: `/gamerule [INSERT GAMERULE COMMAND HERE] [INSERT GAMERULE VALUE HERE]`.

## Sample /gamerule Configurations

Now let's take a look at how we can use gamerules to create a customized experience in Minecraft. We'll use examples of different types of Minecraft worlds to explore how we might use gamerules to set up your world so that you can see how different sets of gamerules can create unique experiences for you and your players to enjoy.

### Amusement Park Gamerules

As we mentioned earlier, when visiting an amusement park, it's always the most fun on a bright, sunny day. Let's use gamerules to set up an ideal Minecraft amusement park world:

| `/gamerule` command  | Value | Effect on the World |
|----------------------|-------|---------------------|
| `commandblockoutput` | false | We don't want our guests getting all of the behind-the-scenes information on the mechanics of our park, so let's turn off command block output.|
| `dodaylightcycle`    | true  | If your amusement park has night hours (and maybe attractions that feature light shows!), we definitely want the world to shift from day to night. |
| `dofiretick`         | false |This setting will help us keep those minor disasters under control, especially if you have attractions that feature pyrotechnics! |
| `domobspawning`      | false | Paying customers only, please! Let's turn off mob spawning so we don't get zombies or creepers crashing the party. |
| `doweathercycle`     | false | This will prevent the weather from changing and ensure that it's sunny every day. |
| `drowningdamage`     | false | A rule to help keep our guests safe. |
| `falldamage`         | false | A rule to help keep our guests safe. |
| `firedamage`         | false | A rule to help keep our guests safe. |
| `pvp`                | false | This prevents players from damaging each other. Please be respectful of other guests in our park! |
| `doinsomnia`         | false | This turns off phantoms and other effects of not sleeping and allows players to have fun for as long as they would like in our park. |
| `freezedamage`       | false | A rule to help keep our guests safe. |

This basic set of rules will ensure that players don't take damage from sources like fire, ice, and water, which can all be used as great effects for the attractions in our amusement park. It also makes sure that we keep our guests safe from natural hazards like falling or mobs that would be drawn to our park and that guests will be respectful of one another and let everyone enjoy themselves. Finally, it will ensure that we experience both day and night, but that the weather will always be perfect for enjoying our park.

### Battle Royale Gamerules

In a battle royale world, we want to create a fast-paced, fun player-versus-player (PvP) setting where players are encouraged to jump into the action and test their skills.

| `/gamerule` command   | Value | Effect on the World |
|-----------------------|-------|---------------------|
| `commandblockoutput`  | true  | Maybe you have command blocks that players can press that will give them an advantage or maybe you want to watch your players from a central control room. Either way, you probably want other players to know that things have happened in the world. |
| `doentitydrops`       | true  | This will make sure that entities in the world drop items for your players so that they can grab loot to do battle with. |
| `domobspawning`       | false | Battle royale is all about player-vs-player combat, let's keep mobs out of it. |
| `keepinventory`       | false | This will cause players to drop their inventory when they respawn. This way, they'll have to gather more loot and other players can take what they drop! |
| `pvp`                 | true  | There's not much point to a battle royale if PvP isn't enabled! |
| `showcoordinates`     | false | Leaving the coordinate display off helps to increase immersion and also makes it more difficult for players to know their exact position (and the position of their enemies!). |
| `naturalregeneration` | false | Turning off natural health regeneration prevents players from hiding to heal and dragging the match out. |
| `doinsomnia`          | false | The match may last several game days and nights, depending on your settings - there's no need to add phantoms to the mix! |
| `doimmediaterespawn`  | true  | Setting immediate respawns means that players have to jump back into the action right away. |
| `showdeathmessages`   | true  | This will let other players know each time a player is eliminated. |
| `showbordereffects`   | true  | This makes sure that your game map is well-defined for your players. |

With these gamerules, you've got the building blocks for an exciting battle royale match. Players will be thrown into the mix with each other and encouraged to fight for survival and be the last one standing. We used gamerules to ensure that mobs and other environmental dangers don't affect the PvP combat and that players won't be able to hide or rely on external factors to delay a match. Once you add your finishing touches, it will be time to join the fight!

## Customizing and Next Steps

Of course, you can change these gamerules to fit your specific implementations. Maybe you want an amusement park full of real zombies for a Halloween event, or maybe you want a battle royale match that features player-versus-player-versus-environment (PvPvE) action where players can get special loot from mobs that spawn in the world. When you're creating immersive and customized experiences in Minecraft, the possibilities are endless, but setting gamerules is a great place to start.

Check out the following resources to see how you can tailor your Minecraft world even further.

- [Create Custom Grass Blocks: An Introduction to Resource Packs](ResourcePack.md)
- [Create an Angry Cow: An Introduction To Behavior Packs](BehaviorPack.md)
- [Getting Started with Command Blocks](CommandBlocks.md)
- [Loot and Trade Table Functions](LootAndTradeTableFunctions.md)

### Scripting and Gamerules

As you progress through your Minecraft customization journey, you may become interested in writing scripts that set all of these gamerules at once. Though your gamerules will stay in place in your created worlds, scripts can help to make your Minecraft experiences more efficient and enjoyable, since you won't have to enter the individual `/gamerule` commands every time you start up a new world. You can also change the gamerules based on certain conditions and use other advanced techniques to customize your experience for you and your friends.

To learn more about Minecraft scripting, see [Introduction to Scripting in Minecraft](ScriptingIntroduction.md).

Once you have begun writing scripts, you can use this reference to include gamerules in your scripts with the appropriate names and syntax: [GameRule Enumeration](../ScriptAPI/minecraft/server/GameRule.md).