---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ShutdownBeforeEventSignal Class
description: Contents of the @minecraft/server.ShutdownBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ShutdownBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ShutdownEvent) => void): (arg: ShutdownEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ShutdownEvent*](ShutdownEvent.md)) => *void*

**Returns** (arg: [*ShutdownEvent*](ShutdownEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ShutdownEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ShutdownEvent*](ShutdownEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
