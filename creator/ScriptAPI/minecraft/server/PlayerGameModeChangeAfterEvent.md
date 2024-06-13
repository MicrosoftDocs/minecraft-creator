---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerGameModeChangeAfterEvent Class
description: Contents of the @minecraft/server.PlayerGameModeChangeAfterEvent class.
---
# PlayerGameModeChangeAfterEvent Class

Contains information regarding an event after a players game mode is changed.

## Properties

### **fromGameMode**
`read-only fromGameMode: GameMode;`

The previous game mode before the change.

Type: [*GameMode*](GameMode.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)

### **toGameMode**
`read-only toGameMode: GameMode;`

The current game mode after the change.

Type: [*GameMode*](GameMode.md)
