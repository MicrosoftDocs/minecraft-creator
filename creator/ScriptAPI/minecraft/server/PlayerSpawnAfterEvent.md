---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerSpawnAfterEvent Class
description: Contents of the @minecraft/server.PlayerSpawnAfterEvent class.
---
# PlayerSpawnAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

An event that contains more information about a player spawning.

## Properties

### **initialSpawn**
`initialSpawn: boolean;`

If true, this is the initial spawn of a player after joining the game.

Type: *boolean*

### **player**
`player: Player;`

Object that represents the player that joined the game.

Type: [*Player*](Player.md)
