---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockBreakAfterEventSignal Class
description: Contents of the @minecraft/server.BlockBreakAfterEventSignal class.
---
# BlockBreakAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to when a block is broken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BlockBreakAfterEvent) => void): (arg: BlockBreakAfterEvent) => void
`

Adds a callback that will be called when a block is broken by a player.

#### **Parameters**
- **callback**: (arg: [*BlockBreakAfterEvent*](BlockBreakAfterEvent.md)) => *void*

#### **Returns** (arg: [*BlockBreakAfterEvent*](BlockBreakAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: BlockBreakAfterEvent) => void): void
`

Removes a callback from being called when an block is broken.

#### **Parameters**
- **callback**: (arg: [*BlockBreakAfterEvent*](BlockBreakAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
