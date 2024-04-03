---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PressurePlatePushAfterEventSignal Class
description: Contents of the @minecraft/server.PressurePlatePushAfterEventSignal class.
---
# PressurePlatePushAfterEventSignal Class

Manages callbacks that are connected to when a pressure plate is pushed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void
`

Adds a callback that will be called when a pressure plate is pushed.

#### **Parameters**
- **callback**: (arg: [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)) => *void*

**Returns** (arg: [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void
`

Removes a callback from being called when a pressure plate is pushed.

#### **Parameters**
- **callback**: (arg: [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
