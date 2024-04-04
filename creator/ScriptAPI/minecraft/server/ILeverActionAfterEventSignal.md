---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ILeverActionAfterEventSignal Class
description: Contents of the @minecraft/server.ILeverActionAfterEventSignal class.
---
# ILeverActionAfterEventSignal Class

## Classes that extend ILeverActionAfterEventSignal
- [*LeverActionAfterEventSignal*](LeverActionAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a lever is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void
`

Subscribes to the event.

#### **Parameters**
- **callback**: (arg: [*LeverActionAfterEvent*](LeverActionAfterEvent.md)) => *void*

**Returns** (arg: [*LeverActionAfterEvent*](LeverActionAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void
`

Unsubscribes from the event.

#### **Parameters**
- **callback**: (arg: [*LeverActionAfterEvent*](LeverActionAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
