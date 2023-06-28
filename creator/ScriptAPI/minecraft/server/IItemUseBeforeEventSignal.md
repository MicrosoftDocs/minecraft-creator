---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IItemUseBeforeEventSignal Class
description: Contents of the @minecraft/server.IItemUseBeforeEventSignal class.
---
# IItemUseBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IItemUseBeforeEventSignal
- [*ItemUseBeforeEventSignal*](ItemUseBeforeEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires before an item is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

#### **Returns** (arg: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
