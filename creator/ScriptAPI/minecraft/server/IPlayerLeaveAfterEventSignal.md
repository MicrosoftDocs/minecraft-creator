---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.IPlayerLeaveAfterEventSignal Class
description: Contents of the @minecraft/server.IPlayerLeaveAfterEventSignal class.
---
# IPlayerLeaveAfterEventSignal Class

## Classes that extend IPlayerLeaveAfterEventSignal
- [*PlayerLeaveAfterEventSignal*](PlayerLeaveAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a player leaves a world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void
`

Subscribes to the event.

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void
`

Unsubscribes from the event.

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
