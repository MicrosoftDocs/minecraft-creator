---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .GameRule Enumeration
description: Contents of the .GameRule enumeration.
---
# GameRule Enumeration

Game rules. These values can also be controlled via the /gamerule command.

## Constants
### **CommandBlockOutput**
`CommandBlockOutput = "commandBlockOutput"`

Whether command blocks should notify admins when they perform commands.
### **CommandBlocksEnabled**
`CommandBlocksEnabled = "commandBlocksEnabled"`

Controls whether command blocks can execute commands.
### **DoDayLightCycle**
`DoDayLightCycle = "doDayLightCycle"`

Controls whether the day and night cycles progress.
### **DoEntityDrops**
`DoEntityDrops = "doEntityDrops"`

Controls whether non-mob entities do drops. ie. Item Frame
### **DoFireTick**
`DoFireTick = "doFireTick"`

Controls whether fire spreads.
### **DoImmediateRespawn**
`DoImmediateRespawn = "doImmediateRespawn"`

Controls whether players immediately respawn or are shown the death screen.
### **DoInsomnia**
`DoInsomnia = "doInsomnia"`

Controls whether players deal with the effects of not sleeping (such as Phantom spawning).
### **DoLimitedCrafting**
`DoLimitedCrafting = "doLimitedCrafting"`

Determines whether players should be able to craft only those recipes that they've unlocked first - when dolimitedcrafting is set to true.
### **DoMobLoot**
`DoMobLoot = "doMobLoot"`

Controls whether mobs drop loot.
### **DoMobSpawning**
`DoMobSpawning = "doMobSpawning"`

Controls whether mobs spawn naturally in the world.
### **DoTileDrops**
`DoTileDrops = "doTileDrops"`

Controls whether blocks drop items when destroyed.
### **DoWeatherCycle**
`DoWeatherCycle = "doWeatherCycle"`

Controls whether the weather can change naturally.
### **DrowningDamage**
`DrowningDamage = "drowningDamage"`

Controls whether entities take damage from drowning.
### **FallDamage**
`FallDamage = "fallDamage"`

Controls whether entities take damage from falling.
### **FireDamage**
`FireDamage = "fireDamage"`

Controls whether entities take damage from fire.
### **FreezeDamage**
`FreezeDamage = "freezeDamage"`

Controls whether there is damage from freezing.
### **FunctionCommandLimit**
`FunctionCommandLimit = "functionCommandLimit"`

The maximum number of commands that can be executed simultaneously by the /function command.
### **KeepInventory**
`KeepInventory = "keepInventory"`

Controls whether players keep their inventories when they die.
### **MaxCommandChainLength**
`MaxCommandChainLength = "maxCommandChainLength"`

The maximum number of chained commands that can execute per tick.
### **MobGriefing**
`MobGriefing = "mobGriefing"`

Controls whether mob griefing can happen in the world. Example: A Creeper explosion destroying blocks.
### **NaturalRegeneration**
`NaturalRegeneration = "naturalRegeneration"`

Controls whether players can regenerate health.
### **PlayersSleepingPercentage**
`PlayersSleepingPercentage = "playersSleepingPercentage"`

The percentage of players required to be sleeping in order to advance to the next day.
### **ProjectilesCanBreakBlocks**
`ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks"`

Controls whether projectiles (entities with a projectile component, like Arrows, thrown Tridents or Fireworks) can destroy certain blocks that support this interaction (such as Chorus Fruit, Dripstone or Decorated Pots). Restrictions on which projectiles can destroy certain blocks apply.
### **Pvp**
`Pvp = "pvp"`

Controls whether players can damage each other.
### **RandomTickSpeed**
`RandomTickSpeed = "randomTickSpeed"`

Controls how frequently random ticks occur. A value of 0 or less will disable random ticks. The default value is 1.
### **RecipesUnlock**
`RecipesUnlock = "recipesUnlock"`

Controls whether built-in (vanilla) recipes automatically unlock as the player progresses through the game (one alternative to this is to use the /recipe command based on custom gameplay logic.)
### **RespawnBlocksExplode**
`RespawnBlocksExplode = "respawnBlocksExplode"`

Controls whether respawn blocks (e.g. Bed, Respawn Anchor) explode in other dimensions.
### **SendCommandFeedback**
`SendCommandFeedback = "sendCommandFeedback"`

Controls whether command output is displayed to players. Also controls whether Command Block output is stored by default.
### **ShowBorderEffect**
`ShowBorderEffect = "showBorderEffect"`

Controls whether Border Block effects are shown.
### **ShowCoordinates**
`ShowCoordinates = "showCoordinates"`

Controls whether player coordinates are displayed.
### **ShowDaysPlayed**
`ShowDaysPlayed = "showDaysPlayed"`

Controls whether the days a player has played is displayed.
### **ShowDeathMessages**
`ShowDeathMessages = "showDeathMessages"`

Controls whether death messages are displayed in chat.
### **ShowRecipeMessages**
`ShowRecipeMessages = "showRecipeMessages"`

Controls whether standard player notifications for recipes will show. When set to false, 'player unlocked recipes' are no longer sent as player notifications.
### **ShowTags**
`ShowTags = "showTags"`

Controls whether item tags are shown. E.g. 'Can Place On', 'Can Destroy', item lock icons, etc.
### **SpawnRadius**
`SpawnRadius = "spawnRadius"`

The block radius from world spawn that a player is allowed to spawn in. Does not affect Adventure mode. The default value is 10 blocks.
### **TntExplodes**
`TntExplodes = "tntExplodes"`

Affects whether TNT blocks can be lit.
### **TntExplosionDropDecay**
`TntExplosionDropDecay = "tntExplosionDropDecay"`

Controls whether blocks randomly drop loot or all blocks drop loot when destroyed by an explosion. Defaults to false.
