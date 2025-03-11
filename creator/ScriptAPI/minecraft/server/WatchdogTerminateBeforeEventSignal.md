---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.WatchdogTerminateBeforeEventSignal Class
description: Contents of the @minecraft/server.WatchdogTerminateBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# WatchdogTerminateBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void
`

Adds a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.

#### **Parameters**
- **callback**: (arg0: [*WatchdogTerminateBeforeEvent*](WatchdogTerminateBeforeEvent.md)) => *void*

**Returns** (arg0: [*WatchdogTerminateBeforeEvent*](WatchdogTerminateBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void
`

Removes a callback from being called when a script runtime is being terminated due to a violation of the performance watchdog system.

#### **Parameters**
- **callback**: (arg0: [*WatchdogTerminateBeforeEvent*](WatchdogTerminateBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
