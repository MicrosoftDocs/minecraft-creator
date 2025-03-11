---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerButtonInputAfterEvent Class
description: Contents of the @minecraft/server.PlayerButtonInputAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerButtonInputAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Event data for when a player presses a button.

## Properties

### **button**
`read-only button: InputButton;`

The button this event is about.

Type: [*InputButton*](InputButton.md)

### **newButtonState**
`read-only newButtonState: ButtonState;`

The state that this button transferred to.

Type: [*ButtonState*](ButtonState.md)

### **player**
`read-only player: Player;`

The player that performed the input event.

Type: [*Player*](Player.md)
