---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInputModeChangeAfterEvent Class
description: Contents of the @minecraft/server.PlayerInputModeChangeAfterEvent class.
---
# PlayerInputModeChangeAfterEvent Class

Event data for when a player input mode changes.

## Properties

### **newInputModeUsed**
`read-only newInputModeUsed: InputMode;`

The new input mode used by the player.

Type: [*InputMode*](InputMode.md)

### **player**
`read-only player: Player;`

The player that had an input mode change.

Type: [*Player*](Player.md)

### **previousInputModeUsed**
`read-only previousInputModeUsed: InputMode;`

The previous input mode used by the player.

Type: [*InputMode*](InputMode.md)
