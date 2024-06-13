---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerGameModeChangeBeforeEvent Class
description: Contents of the @minecraft/server.PlayerGameModeChangeBeforeEvent class.
---
# PlayerGameModeChangeBeforeEvent Class

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
