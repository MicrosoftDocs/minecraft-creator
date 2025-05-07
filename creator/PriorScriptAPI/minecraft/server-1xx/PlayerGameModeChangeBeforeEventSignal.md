---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerGameModeChangeBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerGameModeChangeBeforeEventSignal class (Version 1.x.x).
---
# PlayerGameModeChangeBeforeEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerGameModeChangeBeforeEventSignal.md).

Manages callbacks that are connected to before a players game mode is changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): (arg0: PlayerGameModeChangeBeforeEvent) => void
`

Adds a callback that will be called before a players game mode is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

**Returns** (arg0: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void
`

Removes a callback from being called before a players game mode is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
