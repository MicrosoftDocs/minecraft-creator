---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerLeaveBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerLeaveBeforeEventSignal class (Version 1.x.x).
---
# PlayerLeaveBeforeEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerLeaveBeforeEventSignal.md).

Manages callbacks that are connected to a player leaving the world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void
`

Adds a callback that will be called when a player leaves the world.

#### **Parameters**
- **callback**: (arg0: [*PlayerLeaveBeforeEvent*](PlayerLeaveBeforeEvent.md)) => *void*

**Returns** (arg0: [*PlayerLeaveBeforeEvent*](PlayerLeaveBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void
`

Removes a callback that will be called when a player leaves the world.

#### **Parameters**
- **callback**: (arg0: [*PlayerLeaveBeforeEvent*](PlayerLeaveBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
