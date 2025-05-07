---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PressurePlatePushAfterEventSignal Class
description: Contents of the @minecraft/server.PressurePlatePushAfterEventSignal class (Version 1.x.x).
---
# PressurePlatePushAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PressurePlatePushAfterEventSignal.md).

Manages callbacks that are connected to when a pressure plate is pushed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void
`

Adds a callback that will be called when a pressure plate is pushed.

#### **Parameters**
- **callback**: (arg0: [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)) => *void*

**Returns** (arg0: [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void
`

Removes a callback from being called when a pressure plate is pushed.

#### **Parameters**
- **callback**: (arg0: [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
