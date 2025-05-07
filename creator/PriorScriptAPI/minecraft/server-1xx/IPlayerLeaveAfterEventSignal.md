---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.IPlayerLeaveAfterEventSignal Class
description: Contents of the @minecraft/server.IPlayerLeaveAfterEventSignal class (Version 1.x.x).
---
# IPlayerLeaveAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module.

> [!CAUTION]
> This class is deprecated and will be removed in 2.0.0.

## Classes that extend IPlayerLeaveAfterEventSignal
- [*PlayerLeaveAfterEventSignal*](PlayerLeaveAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a player leaves a world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void
`

Subscribes to the event.

#### **Parameters**
- **callback**: (arg0: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void
`

Unsubscribes from the event.

#### **Parameters**
- **callback**: (arg0: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
