---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ShutdownBeforeEventSignal Class
description: Contents of the @minecraft/server.ShutdownBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ShutdownBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Provides an adaptable interface for callers to subscribe to an event that fires before the game world shuts down. This event occurs after players have left, but before the world has closed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void
`

Adds a new subscriber callback to this event.

#### **Parameters**
- **callback**: (arg0: [*ShutdownEvent*](ShutdownEvent.md)) => *void*
  
  Function callback that is called when this event fires.

**Returns** (arg0: [*ShutdownEvent*](ShutdownEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ShutdownEvent) => void): void
`

Removes a subscriber callback previously subscribed to via the subscribe method.

#### **Parameters**
- **callback**: (arg0: [*ShutdownEvent*](ShutdownEvent.md)) => *void*
  
  Function closure that was previously passed to the subscribe method.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
