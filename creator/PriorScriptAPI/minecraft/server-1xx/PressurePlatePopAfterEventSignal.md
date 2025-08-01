---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PressurePlatePopAfterEventSignal Class
description: Contents of the @minecraft/server.PressurePlatePopAfterEventSignal class (Version 1.x.x).
---
# PressurePlatePopAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PressurePlatePopAfterEventSignal.md).

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
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void
`

Removes a callback from being called when a pressure plate is popped.

#### **Parameters**
- **callback**: (arg0: [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
