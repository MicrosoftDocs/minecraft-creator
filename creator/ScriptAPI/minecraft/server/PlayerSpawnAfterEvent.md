---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerSpawnAfterEvent Class
description: Contents of the @minecraft/server.PlayerSpawnAfterEvent class.
---
# PlayerSpawnAfterEvent Class

An event that contains more information about a player spawning.

## Properties

### **initialSpawn**
`initialSpawn: boolean;`

If true, this is the initial spawn of a player after joining the game.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **player**
`player: Player;`

Object that represents the player that joined the game.

Type: [*Player*](Player.md)

Notes:
  - This property can't be edited in read-only mode.
