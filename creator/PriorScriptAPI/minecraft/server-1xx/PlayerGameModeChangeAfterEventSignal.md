---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerGameModeChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerGameModeChangeAfterEventSignal class (Version 1.x.x).
---
# PlayerGameModeChangeAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerGameModeChangeAfterEventSignal.md).

Manages callbacks that are connected to after a players game mode is changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void
`

Adds a callback that will be called after a players game mode is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void
`

Removes a callback from being called after a players game mode is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
