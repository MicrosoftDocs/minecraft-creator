---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerDimensionChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerDimensionChangeAfterEventSignal class.
---
# PlayerDimensionChangeAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to successful player dimension changes.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void
`

Subscribes the specified callback to a player dimension change after event.

#### **Parameters**
- **callback**: (arg: [*PlayerDimensionChangeAfterEvent*](PlayerDimensionChangeAfterEvent.md)) => *void*

#### **Returns** (arg: [*PlayerDimensionChangeAfterEvent*](PlayerDimensionChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void
`

Removes the specified callback from a player dimension change after event.

#### **Parameters**
- **callback**: (arg: [*PlayerDimensionChangeAfterEvent*](PlayerDimensionChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
