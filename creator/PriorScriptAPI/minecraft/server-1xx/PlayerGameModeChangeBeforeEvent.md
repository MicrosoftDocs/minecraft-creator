---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerGameModeChangeBeforeEvent Class
description: Contents of the @minecraft/server.PlayerGameModeChangeBeforeEvent class (Version 1.x.x).
---
# PlayerGameModeChangeBeforeEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerGameModeChangeBeforeEvent.md).

Contains information regarding an event before a player interacts with an entity.

## Properties

### **cancel**
`cancel: boolean;`

If set to true the game mode change will be cancelled.

Type: *boolean*

### **fromGameMode**
`read-only fromGameMode: GameMode;`

The current game mode.

Type: [*GameMode*](GameMode.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)

### **toGameMode**
`toGameMode: GameMode;`

The game mode being changed to.

Type: [*GameMode*](GameMode.md)
