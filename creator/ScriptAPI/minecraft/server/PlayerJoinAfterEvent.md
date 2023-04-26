---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerJoinAfterEvent Class
description: Contents of the @minecraft/server.PlayerJoinAfterEvent class.
---
# PlayerJoinAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information regarding a player that has joined.  See the playerSpawn event for more detailed information that could be returned after the first time a player has spawned within the game.

## Properties

### **playerId**
`read-only playerId: string;`

Opaque string identifier of the player that joined the game.

Type: *string*

### **playerName**
`read-only playerName: string;`

Name of the player that has joined.

Type: *string*
