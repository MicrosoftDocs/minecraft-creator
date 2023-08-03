---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockPlaceAfterEventSignal Class
description: Contents of the @minecraft/server.BlockPlaceAfterEventSignal class.
---
# BlockPlaceAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to when a block is placed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BlockPlaceAfterEvent) => void): (arg: BlockPlaceAfterEvent) => void
`

Adds a callback that will be called when a block is placed by a player.

#### **Parameters**
- **callback**: (arg: [*BlockPlaceAfterEvent*](BlockPlaceAfterEvent.md)) => *void*

#### **Returns** (arg: [*BlockPlaceAfterEvent*](BlockPlaceAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: BlockPlaceAfterEvent) => void): void
`

Removes a callback from being called when an block is placed.

#### **Parameters**
- **callback**: (arg: [*BlockPlaceAfterEvent*](BlockPlaceAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
