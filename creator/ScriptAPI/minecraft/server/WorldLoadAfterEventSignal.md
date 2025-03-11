---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.WorldLoadAfterEventSignal Class
description: Contents of the @minecraft/server.WorldLoadAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# WorldLoadAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*WorldLoadAfterEvent*](WorldLoadAfterEvent.md)) => *void*

**Returns** (arg0: [*WorldLoadAfterEvent*](WorldLoadAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*WorldLoadAfterEvent*](WorldLoadAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
