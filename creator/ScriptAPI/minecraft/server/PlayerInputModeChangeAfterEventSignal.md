---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInputModeChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInputModeChangeAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerInputModeChangeAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to player input mode.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInputModeChangeAfterEvent) => void): (arg: PlayerInputModeChangeAfterEvent) => void
`

Adds a callback that will be called after the player input mode changes.

#### **Parameters**
- **callback**: (arg: [*PlayerInputModeChangeAfterEvent*](PlayerInputModeChangeAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerInputModeChangeAfterEvent*](PlayerInputModeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInputModeChangeAfterEvent) => void): void
`

Removes a callback from being called after the player input mode changes.

#### **Parameters**
- **callback**: (arg: [*PlayerInputModeChangeAfterEvent*](PlayerInputModeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
