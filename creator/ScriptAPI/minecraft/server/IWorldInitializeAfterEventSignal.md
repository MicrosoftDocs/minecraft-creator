---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IWorldInitializeAfterEventSignal Class
description: Contents of the @minecraft/server.IWorldInitializeAfterEventSignal class.
---
# IWorldInitializeAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IWorldInitializeAfterEventSignal
- [*WorldInitializeAfterEventSignal*](WorldInitializeAfterEventSignal.md)

An event that fires when a world is first initialized or loaded.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void
`

Subscribes a specified callback to a world initialize event.

#### **Parameters**
- **callback**: (arg: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*
  
  Function to subscribe to the event.

#### **Returns** (arg: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void* - Returns a function token that can be used to later unsubscribe callers to the event.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void
`

Unsubscribes a previously-subscribed caller to this event.

#### **Parameters**
- **callback**: (arg: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
