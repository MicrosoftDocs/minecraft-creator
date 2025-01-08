---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PressurePlatePopAfterEventSignal Class
description: Contents of the @minecraft/server.PressurePlatePopAfterEventSignal class.
---
# PressurePlatePopAfterEventSignal Class

Manages callbacks that are connected to when a pressure plate is popped.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void
`

Adds a callback that will be called when a pressure plate is popped.

#### **Parameters**
- **callback**: (arg0: [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)) => *void*

**Returns** (arg0: [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void
`

Removes a callback from being called when a pressure plate is popped.

#### **Parameters**
- **callback**: (arg0: [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
